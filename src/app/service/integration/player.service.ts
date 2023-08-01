import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerUpdateBasicRequest } from './model/request/player-update-basic-request';
import { Player } from './model/commons/player';
import { PlayersPaginateResponse } from './model/response/players-paginate-response';


const baseUrl: string = 'http://localhost:8080/players'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  // Http Default Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Headers with Authorization
  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    })
  }

  // Headers with Blob for Upload
  httpOptionsWithAuthorizationAndResponseTypeBlob = {
    headers: new HttpHeaders({
      'responseType': 'blob',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    })
  }

  createPlayer(player: Player): Observable<any> {
    return this.http
      .post(baseUrl, JSON.stringify(player), this.httpOptions)
  }

  updateBasicDataPlayer(updateRequest: PlayerUpdateBasicRequest): Observable<any> {
    return this.http
      .patch(baseUrl + "/" + sessionStorage.getItem("playerId"),
        JSON.stringify(updateRequest), this.httpOptionsWithAuthorization)
  }

  findByPlayerId(): Observable<Player> {
    return this.http
      .get<Player>(baseUrl + "/" + sessionStorage.getItem('playerId'), this.httpOptionsWithAuthorization).pipe()
  }

  findAllPlayers(): Observable<PlayersPaginateResponse> {
    return this.http
      .get<PlayersPaginateResponse>(baseUrl, this.httpOptionsWithAuthorization).pipe()
  }

  downloadGameSave(playerId: string): Observable<any> {
    return this.http.get(baseUrl + "/" + playerId + "/game-save", this.httpOptionsWithAuthorizationAndResponseTypeBlob)
  }

  uploadGameSave(file: File | null): Observable<any> {
    const formData = new FormData()

    formData.append("gameSave", file!!, file!!.name)

    return this.http.patch(baseUrl + "/" + sessionStorage.getItem('playerId'), formData, this.httpOptionsWithAuthorization)
  }

}
