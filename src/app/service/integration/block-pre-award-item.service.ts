import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { BlockPreAwardItem } from './model/commons/block-pre-award-item';


const baseUrlBlockPreAwardItem: string = environment.apiUrl + '/block-pre-award'

@Injectable({
  providedIn: 'root'
})
export class BlockPreAwardItemService {

  constructor(private http: HttpClient) { }

  // Headers with Authorization
  httpOptionsWithAuthorization = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    })
  }

  findAllBlocks(nameFilter: string | undefined = undefined): Observable<BlockPreAwardItem[]> {
    let url = baseUrlBlockPreAwardItem

    if (nameFilter != undefined && nameFilter != '') {
      url = url + "?name=" + nameFilter
    }

    return this.http.get<BlockPreAwardItem[]>(url, this.httpOptionsWithAuthorization).pipe()
  }

}
