import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: Http) {
  }

  sendBook(book: Book) {
    const url = 'http://localhost:8181/books';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers});
  }
}
