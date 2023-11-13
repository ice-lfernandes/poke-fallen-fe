import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const baseUrlAwardWeekLottery: string = environment.apiUrl + '/lottery-award-week'

@Injectable({
  providedIn: 'root'
})
export class AwardWeekLotteryService {

  constructor(private http: HttpClient) { }

  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    })
  }

  lottery(): Observable<any> {
    return this.http.post<any>(baseUrlAwardWeekLottery, null, this.httpOptionsWithAuthorization).pipe()
  }

}
