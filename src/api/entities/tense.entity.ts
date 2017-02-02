import { Table, PrimaryGeneratedColumn, Column, Embedded, ManyToOne, JoinColumn } from "typeorm";
import { Primitive } from './primitive.entity';
import { Verb } from './verb.entity';
import * as regex from '../utils/regexp';

@Table()
export class Tense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    readonly name: string;

    @Embedded(type => Primitive)
    readonly yo: Primitive;

    @Embedded(type => Primitive)
    readonly tu: Primitive;

    @Embedded(type => Primitive)
    readonly el: Primitive;

    @Embedded(type => Primitive)
    readonly nosotros: Primitive;

    @Embedded(type => Primitive)
    readonly vosotros: Primitive;

    @Embedded(type => Primitive)
    readonly ellos: Primitive;

    @ManyToOne(type => Verb, verb => verb.tenses)
    @JoinColumn()
    verb: Verb;

    private constructor(
        name: string,
        yo: Primitive,
        tu: Primitive,
        el: Primitive,
        nosotros: Primitive,
        vosotros: Primitive,
        ellos: Primitive) {
            this.name = name;
            this.yo = yo;
            this.tu = tu;
            this.el = el;
            this.nosotros = nosotros;
            this.vosotros = vosotros;
            this.ellos = ellos;
        }

    public static fromHTML(html: string): Tense {
        const pattern = '<h3>(.*?)</h3>'                                    +
                            '[^]*?'                                         +
                            '<span class="normal">yo</span>([^]*?)'         +
                            '<span class="normal">t&uacute;</span>([^]*?)'  +
                            '<span class="normal">&eacute;l</span>([^]*?)'  +
                            '<span class="normal">nosotros</span>([^]*?)'   +
                            '<span class="normal">vosotros</span>([^]*?)'   +
                            '<span class="normal">ellos</span>([^]*?)<br>';

        const match = regex.find(html, pattern);

        return new Tense(
            match[1],
            Primitive.fromHTML(match[2]),
            Primitive.fromHTML(match[3]),
            Primitive.fromHTML(match[4]),
            Primitive.fromHTML(match[5]),
            Primitive.fromHTML(match[6]),
            Primitive.fromHTML(match[7])
            );
    }
}