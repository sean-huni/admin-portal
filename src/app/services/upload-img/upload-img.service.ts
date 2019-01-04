import {Injectable} from '@angular/core';
import {reject} from 'q';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(bookId: number, file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('multipart', file);

    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', localStorage.getItem('xAuthToken'));

    const req = new HttpRequest('POST', 'http://localhost:8181/v1/books/' + bookId + '/images', formdata, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
}
