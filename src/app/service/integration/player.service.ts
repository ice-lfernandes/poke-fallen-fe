import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerUpdateBasicRequest } from './model/request/player-update-basic-request';
import { Player } from './model/commons/player';
import { PlayersPaginateResponse } from './model/response/players-paginate-response';


const baseUrlPlayers: string = 'http://poke-fallen-qa.us-east-1.elasticbeanstalk.com/players'
const baseUrlGamesSave: string = 'http://poke-fallen-qa.us-east-1.elasticbeanstalk.com/games-save'

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
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
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
      .post(baseUrlPlayers, JSON.stringify(player), this.httpOptions)
  }

  updateBasicDataPlayer(updateRequest: PlayerUpdateBasicRequest, playerId: string): Observable<any> {
    return this.http
      .patch(baseUrlPlayers + "/" + playerId + "/basic-data",
        JSON.stringify(updateRequest), this.httpOptionsWithAuthorization)
  }

  findByPlayerId(playerId: string): Observable<Player> {
    return this.http
      .get<Player>(baseUrlPlayers + "/" + playerId, this.httpOptionsWithAuthorization).pipe()
  }

  findAllPlayers(): Observable<PlayersPaginateResponse> {
    return this.http
      .get<PlayersPaginateResponse>(baseUrlPlayers, this.httpOptionsWithAuthorization).pipe()
  }

  downloadGameSave(playerId: string): Observable<any> {
    return this.http.get(baseUrlGamesSave + "/" + playerId + "/download", this.httpOptionsWithAuthorizationAndResponseTypeBlob)
  }

  uploadGameSave(file: File | null, playerId: string): Observable<any> {
    const formData = new FormData()

    formData.append("gameSave", file!!, file!!.name)

    return this.http.patch(baseUrlGamesSave + "/" + playerId + "/upload", formData, this.httpOptionsWithAuthorization)
  }

}
