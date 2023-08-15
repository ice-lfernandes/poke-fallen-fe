import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './model/login-request';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationClientService {

  url = 'http://localhost:8080/login'
  errorMsg: string = ""

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(this.url, new LoginRequest(email, password), this.httpOptions)
  }

}
