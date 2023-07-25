import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Player } from 'src/app/model/player';

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

  createPlayer(player: Player) : Observable<any> {
    return this.http
      .post(baseUrl, JSON.stringify(player), this.httpOptions)
  }

  downloadGameSave(playerId: string) : Observable<any> {
    return this.http.get(baseUrl + "/" + playerId + "/game-save", {responseType: 'blob'})
  }

}
