import { EmbeddableTable, Column } from "typeorm";
import * as regex from '../utils/regexp';
import * as entities from '../utils/html-entities';

@EmbeddableTable()
export class Primitive {
    @Column()
    readonly word: string;
    
    @Column()
    readonly irregular: boolean;

    private constructor(word: string, irregular: boolean) {
        this.word = word;
        this.irregular = irregular;
    }

    public static fromHTML(html: string): Primitive {
        const pattern = '<span class="(.*?)">(.*?)</span>';
        const match = regex.find(html, pattern);

        return new Primitive(
            entities.decode(match[2]), 
            match[1] !== 'normal'
            );
    }
}