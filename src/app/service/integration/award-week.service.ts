import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StatusAwardWeek } from './model/commons/status-award-week';
import { environment } from 'src/environments/environment';
import { AwardWeek } from './model/commons/award-week';

const baseUrlAwardWeek: string = environment.apiUrl + '/award-week'

@Injectable({
  providedIn: 'root'
})
export class AwardWeekService {

  constructor(private http: HttpClient) { }

  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    })
  }

  findByRangeDatas(dateInit: String, dateFinish: String, status: StatusAwardWeek | undefined): Observable<AwardWeek[]> {
    let url = baseUrlAwardWeek + '?dateInit=' + dateInit + "&dateFinish=" + dateFinish

    if (status) {
      url = url + "&status=" + status
    }

    return this.http.get<AwardWeek[]>(url, this.httpOptionsWithAuthorization).pipe();
  }

}
