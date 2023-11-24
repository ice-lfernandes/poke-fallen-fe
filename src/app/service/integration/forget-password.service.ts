import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForgetPasswordRequest } from './model/request/forget-password-request';
import { TokenResetPassword } from './model/response/token-reset-password';
import { ResetPasswordRequest } from './model/request/reset-password-request';

const baseUrl: string = environment.apiUrl + '/forget-password'

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private http: HttpClient) { }

  requestForgetPassword(email: string): Observable<any> {
    return this.http.post<any>(baseUrl + "/request", new ForgetPasswordRequest(email)).pipe();
  }

  checkTokenForAuthorizeResetPassword(token: string): Observable<TokenResetPassword> {
    return this.http.get<TokenResetPassword>(baseUrl + "/check?token=" + token).pipe();
  }

  resetPassword(email: string, newPassword: string): Observable<any> {
    return this.http.patch<any>(baseUrl + "/reset/"+ email, new ResetPasswordRequest(newPassword)).pipe();
  }

}
