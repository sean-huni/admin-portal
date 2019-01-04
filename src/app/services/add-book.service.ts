import {Injectable} from '@angular/core';
import {Book} from '../model/book';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: HttpClient) {
  }

  sendBook(book: Book) {
    const url = 'http://localhost:8181/v1/books';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers});
  }
}
