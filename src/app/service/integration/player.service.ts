import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Player } from 'src/app/model/player';
import { PlayerUpdateBasicRequest } from './model/player-update-basic-request';


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

  // Headers
  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
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

  downloadGameSave(playerId: string): Observable<any> {
    return this.http.get(baseUrl + "/" + playerId + "/game-save", { responseType: 'blob' })
  }

}
