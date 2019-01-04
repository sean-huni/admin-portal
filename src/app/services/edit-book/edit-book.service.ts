import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Book} from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class EditBookService {

  constructor(private http: HttpClient) {
  }

  sendBook(book: Book) {
    const url = 'http://localhost:8181/v1/books/';

    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    const jsonData = JSON.stringify(book);

    const req = new HttpRequest('PUT', url + book.id, jsonData, {
      headers: head
    });

    return this.http.request(req);
  }
}
