import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class UtilsService {
    constructor(private snackBar: MdSnackBar) {
    }

    public toast(msg: string): void {
        this.snackBar.open(msg, '', { duration: 4500 });
    }
}