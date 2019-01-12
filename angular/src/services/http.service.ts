import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Socket } from 'ngx-socket-io';
import { Document } from '../models/document';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'http://localhost:8080';
  players;
  constructor(private http: Http, private socket: Socket) {
    console.log("servicio generado")
    this.socket.on("update_players", (data) => {
      console.log("players ====>", data)
      this.players = data
    })
    this.socket.on("load_mercados", (data) => {
      console.log(data)
    })
  }
  // createGame
  public emit(url: string, data, callback) {
    this.socket.emit(url, data, callback);
  }
  public get(url: string) {
    return this.http.get(encodeURI(this.baseUrl + url)).pipe(map(
      (response) => {
        return response.json();
      }), catchError(this.handleError));
  }
  public getPlayers() {
    console.log("playersssss",this.players)
    return this.players
  }
  public post(url: string, params: any) {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(encodeURI(this.baseUrl + url), params, options).pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    // return an observable with a user-facing error message
    return throwError(
      'Error al hacer la peticion');
  };

}




