import { Table, PrimaryGeneratedColumn, Column, Embedded, OneToMany } from "typeorm";
import { Primitive } from './primitive.entity';
import { Tense } from './tense.entity';
import * as request from 'web-request';
import * as regex from '../utils/regexp';

@Table()
export class Verb {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    readonly infinitive: string;

    @Column()
    readonly english: string;

    @Embedded(type => Primitive)
    readonly participle: Primitive;

    @Embedded(type => Primitive)
    readonly gerund: Primitive;

    @OneToMany(type => Tense, tense => tense.verb, { cascadeInsert: true })
    readonly tenses: Tense[];

    private constructor(
        infinitive: string,
        english: string,
        participle: Primitive,
        gerund: Primitive,
        tenses: Tense[]
        ) {
            this.infinitive = infinitive;
            this.english = english;
            this.participle = participle;
            this.gerund = gerund;
            this.tenses = tenses;
        }

    private static parseParticiple(html: string): Primitive {
        const pattern = '<b>Participio:</b>[^]*?<br>';
        const match = regex.match(html, pattern);

        return Primitive.fromHTML(match);
    }

    private static parseGerund(html: string): Primitive {
        const pattern = '<b>Gerundio:</b>[^]*?<br>';
        const match = regex.match(html, pattern);

        return Primitive.fromHTML(match);
    }

    private static async getVerbPage(infinitive: string): Promise<string> {
        const response = await request.get('http://www.verbix.com/webverbix/Spanish/' + infinitive + '.html');
        return response.content;
    }

    private static parseTenses(html: string): Array<Tense> {
        let tenses = new Array<Tense>();

        const tensesPattern =   '<div class="pure-u-1-1 pure-u-lg-1-2">[^]*?'   +
                                    '<h2>Indicative</h2>'                       +
                                    '([^]*)'                                    +
                                '</div>[^]*?'                                   +
                                '<div class="pure-u-1-1 pure-u-lg-1-2">[^]*?'   +
                                    '<h2>Subjunctive</h2>';
        
        const tensesHTML = regex.find(html, tensesPattern)[1];

        const tensePattern =    '<div class="pure-u-1-2">'  +
                                    '[^]*?'                 +
                                '</div>';

        for (let tenseHTML of regex.matchAll(tensesHTML, tensePattern)) {
            const tense = Tense.fromHTML(tenseHTML);
            
            switch (tense.name) {
                case "Present": 
                case "Past": 
                case "Preterite":
                case "Future":
                tenses.push(tense);
            }
        }

        return tenses;
    }

    public static async generate(infinitive: string, english: string): Promise<Verb> {
        const page = await Verb.getVerbPage(infinitive);

        const participle = Verb.parseParticiple(page);
        const gerund = Verb.parseGerund(page);
        const tenses = Verb.parseTenses(page);
        
        return new Verb(
            infinitive,
            english,
            participle,
            gerund,
            tenses
        )
    }
}