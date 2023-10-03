import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ItemImage } from './model/commons/item-image';

const baseUrlItems: string = environment.apiUrl + '/items'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  // Headers with Authorization
  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    })
  }

  findAllItems(): Observable<ItemImage[]> {
    return this.http
      .get<ItemImage[]>(baseUrlItems, this.httpOptionsWithAuthorization).pipe();
  }
}
