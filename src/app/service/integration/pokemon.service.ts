import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PokemonsPaginatedResponse } from './model/response/pokemons-paginated-response';

const baseUrlPokemons: string = environment.apiUrl + '/pokemons'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // Headers with Authorization
  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    })
  }

  findAllPokemons(): Observable<PokemonsPaginatedResponse> {
    console.log(baseUrlPokemons)
    return this.http
      .get<PokemonsPaginatedResponse>(baseUrlPokemons, this.httpOptionsWithAuthorization).pipe();
  }
}
