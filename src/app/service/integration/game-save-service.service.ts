import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, scan } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as fileSaver from 'file-saver';

import { Download } from 'src/app/utils/download';

const baseUrlGamesSave: string = environment.apiUrl + '/games-save'

@Injectable({
  providedIn: 'root'
})
export class GameSaveService {

  // Headers with Multiparfile for Upload
  httpOptionsWithAuthorizationAndContentTypeMultipartFile = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'accept': '*/*'
    })
  }

  constructor(private http: HttpClient) { }

  downloadGameSave(playerId: string, filename: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/octet-stream'
    })
    return this.http.get(baseUrlGamesSave + "/" + playerId + "/download", {
      headers,
      responseType: 'blob',
      observe: 'events',
      reportProgress: true
    }).pipe(this.download(blob => fileSaver.saveAs(blob, filename)))
  }

  private download(
    saver?: (b: Blob) => void
  ): (source: Observable<HttpEvent<Blob>>) => Observable<Download> {
    return (source: Observable<HttpEvent<Blob>>) =>
      source.pipe(
        scan((previous: Download, event: HttpEvent<Blob>): Download => {
          if (this.isHttpProgressEvent(event)) {
            return {
              progress: event.total
                ? Math.round((100 * event.loaded) / event.total)
                : previous.progress,
              state: 'IN_PROGRESS',
              content: null
            }
          }
          if (this.isHttpResponse(event)) {
            if (saver && event.body) {
              saver(event.body)
            }
            return {
              progress: 100,
              state: 'DONE',
              content: event.body
            }
          }
          return previous
        },
          { state: 'PENDING', progress: 0, content: null }
        )
      )
  }

  private isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
    return event.type === HttpEventType.Response
  }

  private isHttpProgressEvent(event: HttpEvent<unknown>): event is HttpProgressEvent {
    return event.type === HttpEventType.DownloadProgress
      || event.type === HttpEventType.UploadProgress
  }

  uploadGameSave(file: File | null, playerId: string): Observable<any> {
    const formData = new FormData()

    formData.append("gameSave", file!!, file!!.name)

    constheaders: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'accept': '*/*'
    })

    return this.http.patch(baseUrlGamesSave + "/" + playerId + "/upload", formData,
      this.httpOptionsWithAuthorizationAndContentTypeMultipartFile)
  }
}
