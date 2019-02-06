import {Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
    selector: 'app-display-books',
    templateUrl: './display-books.component.html',
    styleUrls: ['./display-books.component.css']
})

export class DisplayBooksComponent {
    public _book = {};

    @Input() set book(book: any) {
        this._book = book;
    }

    get book(): any {
        return this._book;
    }
}