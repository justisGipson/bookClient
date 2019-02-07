import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../models/book.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private dbURL = 'http://localhost:3000/books'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.dbURL);
  }

  makeBook(book: Book): Observable<Book[]>{
    return this.http.post<Book[]>(this.dbURL, book, httpOptions);
  }

}
