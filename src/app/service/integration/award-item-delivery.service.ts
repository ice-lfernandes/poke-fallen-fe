import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AwardItemDeliveryPlayer as AwardItemDeliveryPlayer } from './model/commons/award-week-delivery-player';
import { environment } from 'src/environments/environment';
import { TransferIntentRequest } from './model/request/transfer-intent-request';

const baseUrlAwardItemDelivery: string = environment.apiUrl + '/award-item-delivery'

@Injectable({
  providedIn: 'root'
})
export class AwardItemDeliveryService {

  constructor(private http: HttpClient) { }

  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    })
  }

  checkWaitingConfirmation(): Observable<AwardItemDeliveryPlayer[]> {
    let url = baseUrlAwardItemDelivery + "/check-waiting-confirmation/" + sessionStorage.getItem('playerId')
    return this.http.get<AwardItemDeliveryPlayer[]>(url, this.httpOptionsWithAuthorization).pipe()
  }  

  confirmIntent(awardtemId: string): Observable<any[]> {
    let url = baseUrlAwardItemDelivery + "/confirm-intent/" + awardtemId
    return this.http.patch<any[]>(url, this.httpOptionsWithAuthorization).pipe()
  }

  transferIntent(playerIdToSend: string, awardtemId: number): Observable<any> {
    let url = baseUrlAwardItemDelivery + "/transfer-intent"
    return this.http.patch(url, new TransferIntentRequest(playerIdToSend, awardtemId), this.httpOptionsWithAuthorization).pipe()
  }
  
}
