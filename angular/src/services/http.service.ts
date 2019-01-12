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
      console.log("servicio generado socket")
      this.game = new Game(socket)
    })
  }
  // createGame
  // public emit(url: string, data, callback) {
  //   console.log("emit numero " + this.contador)
  //   this.contador++
  //   this.socket.emit(url, data, callback);
  // }
  // public joinGame(data, callback) {
  //   console.log("join game" + this.contador)
  //   this.socket.emit("joinGame", data, callback);
  // }
  public get(url: string) {
    return this.http.get(encodeURI(this.baseUrl + url)).pipe(map(
      (response) => {
        return response.json();
      }), catchError(this.handleError));
  }
  // public getPlayers() {
  //   if (this.game)
  //     return this.game.players
  //   else
  //     return []
  // }
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
  player: Player
  players: Player[]
  faltantes: number
  constructor(socket: Socket) {
    this.socket = socket
    socket.on("update_state", (data) => {
      console.log("update 2", data)
    })
    socket.removeListener("getPlayers")
    socket.on("getPlayers", (data) => {
      console.log("getPlayers", data)
      this.players = []
      for (let i of data.players) {
        let tmp_player = new Player(i)
        if (tmp_player.name == this.name) {
          this.player = tmp_player
        }
        this.players.push(tmp_player)
      }
      this.faltantes = data.size - this.players.length
      console.log(this.players.length, data.size, "faltantes", this.faltantes)
    })
  }
  public joinGame(data, callback) {
    console.log("join game", data)
    this.socket.emit("joinGame", data, (response) => {
      this.name = data.player_name
      callback(response)
    });

  }
  public createGame(data, callback) {
    console.log("createGame", data)
    this.socket.emit("createGame", data, callback);
  }
}
class Player {
  name: string
  bimestre_inicial: Bimestre
  bimestre_uno: Bimestre
  bimestre_dos: Bimestre
  bimestre_tres: Bimestre
  constructor(data) {
    this.name = data.name
    if (data.bimestre_inicial)
      this.bimestre_inicial = new Bimestre(data.bimestre_inicial)
    if (data.bimestre_uno)
      this.bimestre_uno = new Bimestre(data.bimestre_uno)
    if (data.bimestre_dos)
      this.bimestre_dos = new Bimestre(data.bimestre_dos)
    if (data.bimestre_tres)
      this.bimestre_tres = new Bimestre(data.bimestre_tres)
  }
}
class Bimestre {
  public precioUnitario: number
  public produccion: number
  public inversionEnMarketing: number
  public inversionEnInvestigacion: number
  public inversionEnActivos: number

  constructor(data) {
    this.precioUnitario = data.precioUnitario
    this.produccion = data.produccion
    this.inversionEnMarketing = data.inversionEnMarketing
    this.inversionEnInvestigacion = data.inversionEnInvestigacion
    this.inversionEnActivos = data.inversionEnActivos
  }
}




