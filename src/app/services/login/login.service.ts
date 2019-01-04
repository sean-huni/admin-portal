import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable({providedIn: 'root'})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  sendCredential(username: string, password: string) {
    const url = 'http://localhost:8181/token';
    const encodedCredentials = btoa(username + ':' + password);
    const basicHeader = 'Basic ' + encodedCredentials;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': basicHeader
    });

    return this.httpClient.post(url, null, {headers: headers});
  }

  checkSession() {
    const url = 'http://localhost:8181/checkSession';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.httpClient.get(url, {headers: headers});
  }

  logout() {
    const url = 'http://localhost:8181/login?logout=true';

    const headers = new HttpHeaders({
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.httpClient.delete(url, {headers: headers});
  }
}
