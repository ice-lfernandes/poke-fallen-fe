import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './model/login-request';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationClientService {

  url = 'http://poke-fallen-qa.us-east-1.elasticbeanstalk.com/login'
  errorMsg: string = ""

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
    return this.http
      .post<User>(this.url, new LoginRequest(email, password), this.httpOptions).toPromise()
  }

}
