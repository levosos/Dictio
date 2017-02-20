import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class UtilsService {
    constructor(private snackBar: MdSnackBar) {
    }

    public toast(msg: string): void {
        this.snackBar.open(msg, '', { duration: 4500 });
    }

    public capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
    }

    public contains(obj: any, filter: string): boolean {
        filter = filter.toLocaleLowerCase().trim();

        for (let propertyName in obj) {
            if (!obj.hasOwnProperty(propertyName)) {
                continue;
            }

            let propertyValue = obj[propertyName];
            if (typeof propertyValue === 'string') {
                if (propertyValue.toLocaleLowerCase().indexOf(filter) !== -1) {
                    return true;
                }
            } else if (typeof propertyValue === 'object') {
                if (this.contains(propertyValue, filter)) {
                    return true;
                }
            }
        }

        return false;
    }
}