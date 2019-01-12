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
  contador: number = 0
  game: Game
  constructor(private http: Http, private socket: Socket) {
    console.log("servicio generado")
  }
  // createGame
  public emit(url: string, data, callback) {
    console.log("emit numero " + this.contador)
    this.contador++
    this.socket.emit(url, data, callback);
  }
  public joinGame(data, callback) {
    console.log("join game" + this.contador)
    this.socket.emit("joinGame", data, callback);
  }
  public get(url: string) {
    return this.http.get(encodeURI(this.baseUrl + url)).pipe(map(
      (response) => {
        return response.json();
      }), catchError(this.handleError));
  }
  public getPlayers() {
    if (this.game)
      return this.game.players
    else
      return []
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

  createGame(nombre_empresa: string, codigo: string): any {
    this.game = new Game(codigo, nombre_empresa, this.socket)
  }
}
class Game {
  codigo: string
  name: string
  status: string
  socket: Socket
  players
  constructor(codigo: string, name: string, socket: Socket) {
    this.codigo = codigo
    this.name = name
    this.socket = socket
    socket.emit("get_players", { codigo: codigo })
    socket.on("update_state", (data) => {
      console.log("update 2", data)
    })
    socket.removeListener("get_players")
    socket.on("get_players", (data) => {
      console.log("get_players 2", data)
      this.players = data
    })
  }

}




