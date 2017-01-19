import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class UtilsService {
    constructor(private snackBar: MdSnackBar) {
    }

    public toast(msg: string): void {
        this.snackBar.open(msg, '', { duration: 4500 });
    }

    public capitalizeString(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    public stringContainsIgnoreCase(str: string, substr: string): boolean {
        str = str.toLowerCase();
        substr = substr.toLowerCase();
        
        return str.indexOf(substr) != -1;
    }
}