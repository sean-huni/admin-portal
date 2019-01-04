import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewBookService {

  constructor(private httpClient: HttpClient) {
  }

  getBooks() {
    const url = 'http://localhost:8181/v1/books';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8')
    // httpHeaders.set('x-auth-token', localStorage.getItem('xAuthToken'));
    const req = new HttpRequest('GET', url, '', {headers: httpHeaders});
    return this.httpClient.request(req);
  }


  getBook(id: number) {
    const url = 'http://localhost:8181/v1/books/' + id;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    const req = new HttpRequest('GET', url, null, {headers: httpHeaders});
    return this.httpClient.request(req);
  }

}
