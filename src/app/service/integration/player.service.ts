import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PlayerUpdateBasicRequest } from './model/request/player-update-basic-request';
import { Player } from './model/commons/player';
import { PlayersPaginateResponse } from './model/response/players-paginate-response';


const baseUrlPlayers: string = environment.apiUrl + '/players'
const baseUrlGamesSave: string = environment.apiUrl + '/games-save'

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

  // Headers with Multiparfile for Upload
  httpOptionsWithAuthorizationAndContentTypeMultipartFile = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'accept': '*/*'
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

  findAllPlayers(page: number, playerIdSearch: string | undefined = undefined, usernameSearch: string | undefined = undefined): Observable<PlayersPaginateResponse> {
    let url = baseUrlPlayers + "?size=10&page=" + (page - 1)

    if (playerIdSearch != undefined) {
      url = url + "&playerId=" + playerIdSearch
    }

    if (usernameSearch != undefined) {
      url = url + "&name=" + usernameSearch
    }

    console.log(url)

    return this.http
      .get<PlayersPaginateResponse>(url, this.httpOptionsWithAuthorization).pipe()
  }

  downloadGameSave(playerId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/octet-stream'
    })
    return this.http.get(baseUrlGamesSave + "/" + playerId + "/download", { headers, responseType: 'blob' })
  }

  uploadGameSave(file: File | null, playerId: string): Observable<any> {
    const formData = new FormData()

    formData.append("gameSave", file!!, file!!.name)

    return this.http.patch(baseUrlGamesSave + "/" + playerId + "/upload", formData,
      this.httpOptionsWithAuthorizationAndContentTypeMultipartFile)
  }

}
