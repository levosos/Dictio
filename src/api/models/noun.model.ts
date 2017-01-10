import { Gender } from './globals.model';

export class Noun {
    constructor(
        public favorite: boolean,
        public gender: Gender,
        private _english: string,
        private _spanish: string) {
    }

    get english(): string {
        return this._english.trim().toLowerCase();
    }

    get spanish(): string {
        return this._spanish.trim().toLowerCase();
    }
}