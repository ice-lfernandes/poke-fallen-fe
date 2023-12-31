import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PokemonsPaginatedResponse } from './model/response/pokemons-paginated-response';
import { PokemonImage } from './model/commons/pokemon-image';

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

  findAllPokemonsWithPageable(): Observable<PokemonsPaginatedResponse> {
    let url = baseUrlPokemons + "?page=0&size=15"
    return this.http
      .get<PokemonsPaginatedResponse>(url, this.httpOptionsWithAuthorization).pipe();
  }

  findAllPokemons(): Observable<PokemonImage[]> {
    return this.http
      .get<PokemonImage[]>(baseUrlPokemons, this.httpOptionsWithAuthorization).pipe();
  }
}
