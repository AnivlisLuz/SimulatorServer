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
    socket.on("connect", data => {
      this.game = new Game(socket)
    })
  }
  // createGame
  // public emit(url: string, data, callback) {
  //   console.log("emit numero " + this.contador)
  //   this.contador++
  //   this.socket.emit(url, data, callback);
  // }
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

}
class Game {
  socket: Socket
  codigo: string
  name: string
  status: string
  players: string[]
  constructor(socket: Socket) {
    this.socket = socket
    // socket.emit("get_players", { codigo: codigo })
    socket.on("update_state", (data) => {
      console.log("update 2", data)
    })
    socket.removeListener("get_players")
    socket.on("get_players", (data) => {
      console.log("get_players 2", data)
      this.players = data
    })
  }
  public joinGame(data, callback) {
    console.log("join game", data)
    this.socket.emit("joinGame", data, callback);

  }
  public createGame(data, callback) {
    console.log("createGame", data)
    this.socket.emit("createGame", data, callback);
  }
}
class Player {
  bimestre_inicial: Bimestre
  bimestre_uno: Bimestre
  bimestre_dos: Bimestre
  bimestre_tres: Bimestre
  constructor() {
    this.bimestre_inicial = new Bimestre(150, 500, 3000, 1500, 300)
  }
}
class Bimestre {
  public precioUnitario: number
  public produccion: number
  public inversionEnMarketing: number
  public inversionEnInvestigacion: number
  public inversionEnActivos: number

  constructor(precioUnitario, produccion, inversionEnMarketing, inversionEnInvestigacion, inversionEnActivos) {
    this.precioUnitario = precioUnitario
    this.produccion = produccion
    this.inversionEnMarketing = inversionEnMarketing
    this.inversionEnInvestigacion = inversionEnInvestigacion
    this.inversionEnActivos = inversionEnActivos
  }
}




