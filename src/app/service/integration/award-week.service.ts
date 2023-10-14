import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StatusAwardWeek } from './model/commons/status-award-week';
import { environment } from 'src/environments/environment';
import { AwardWeek } from './model/commons/award-week';
import { el } from '@fullcalendar/core/internal-common';
import { AwardItem } from './model/commons/award-item';
import { AwardWeekUpdateRequest } from './model/request/award-week-update-request';
import { AwardItemsRequest } from './model/request/award-items-request';

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

    if (status === StatusAwardWeek.FINISHED) {
      url = url + "&status=" + "FINISHED"
    } else if (status === StatusAwardWeek.SCHEDULED) {
      url = url + "&status=" + "SCHEDULED"
    }

    console.log(url)

    return this.http.get<AwardWeek[]>(url, this.httpOptionsWithAuthorization).pipe();
  }

  updateItems(awardWeekId: Number, awardItemsList: AwardItem[]): Observable<any> {
    let itemsRequest = awardItemsList.map(item => {
      if (item.pokemon != undefined && item.pokemon.name != '') {
        return new AwardItemsRequest(item.name, item.quantity, item.occupation, item.pokemon)
      } else {
        return new AwardItemsRequest(item.name, item.quantity, item.occupation, null, item.item)
      }
    })

    return this.http.put<any>(
      baseUrlAwardWeek + "/" + awardWeekId,
      new AwardWeekUpdateRequest(itemsRequest),
      this.httpOptionsWithAuthorization)
      .pipe()
  }

}
