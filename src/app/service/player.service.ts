import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Player } from '../model/player';

const baseUrl: string = 'http://localhost:8080/players'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createPlayer(player: Player) : Observable<any> {
    return this.http
      .post(baseUrl, JSON.stringify(player), this.httpOptions)
  }

}
