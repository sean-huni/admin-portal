import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteBookService {

  constructor(private httpClient: HttpClient) {
  }

  deleteSelectedBook(bookId: number) {
    const url = 'http://localhost:8181/v1/books/' + bookId;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.httpClient.delete(url, {headers: httpHeaders});
  }

  deleteSelectedBooks() {
  }

}
