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
  bimestre_inicial_c: number
  bimestre_uno_c: number
  bimestre_dos_c: number
  bimestre_tres_c: number
  constructor(socket: Socket) {
    this.socket = socket
    socket.on("update_state", (data) => {
      console.log("update 2", data)
    })
    socket.removeListener("getPlayers")
    socket.on("getPlayers", (data) => {
      console.log("getPlayers", data, this.codigo)
      if (data.codigo == this.codigo) {
        this.players = []
        let bimestre_uno_count = 0
        let bimestre_dos_count = 0
        let bimestre_tres_count = 0
        for (let i of data.players) {
          let tmp_player = new Player(i)
          if (tmp_player.name == this.name)
            this.player = tmp_player

          this.players.push(tmp_player)
          if (tmp_player.bimestre_uno)
            bimestre_uno_count++
          if (tmp_player.bimestre_dos)
            bimestre_dos_count++
          if (tmp_player.bimestre_tres)
            bimestre_tres_count++
        }
        this.bimestre_inicial_c = data.size - this.players.length
        this.bimestre_uno_c = data.size - bimestre_uno_count
        this.bimestre_dos_c = data.size - bimestre_dos_count
        this.bimestre_tres_c = data.size - bimestre_tres_count
        console.log(this.bimestre_inicial_c, this.bimestre_uno_c, this.bimestre_dos_c, this.bimestre_tres_c)
      } else {
        console.log("no es de este mercado")
      }
    })
  }
  public addBimestreUno(data, callback) {
    let send_Data = { data: data, codigo: this.codigo, player_name: this.player.name }
    console.log("addBimestreUno", send_Data)
    this.socket.emit("addBimestreUno", send_Data, callback);
  }
  public addBimestreDos(data, callback) {
    let send_Data = { data: data, codigo: this.codigo, player_name: this.player.name }
    console.log("addBimestreDos", send_Data)
    this.socket.emit("addBimestreDos", send_Data, callback);
  }
  public addBimestreTres(data, callback) {
    let send_Data = { data: data, codigo: this.codigo, player_name: this.player.name }
    console.log("addBimestreTres =>", send_Data)
    this.socket.emit("addBimestreTres", send_Data, callback);
  }
  public joinGame(data, callback) {
    console.log("join game", data)
    this.codigo = data.codigo
    this.name = data.player_name
    this.socket.emit("joinGame", data, callback);

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
  bimestre_anterior: Bimestre
  constructor(data) {
    this.name = data.name
    if (data.bimestre_inicial) {
      this.bimestre_inicial = new Bimestre(data.bimestre_inicial)
      this.bimestre_anterior = this.bimestre_inicial
    }
    if (data.bimestre_uno) {
      this.bimestre_uno = new Bimestre(data.bimestre_uno)
      this.bimestre_anterior = this.bimestre_uno
    }
    if (data.bimestre_dos) {
      this.bimestre_dos = new Bimestre(data.bimestre_dos)
      this.bimestre_anterior = this.bimestre_dos
    }
    if (data.bimestre_tres) {
      this.bimestre_tres = new Bimestre(data.bimestre_tres)
      this.bimestre_anterior = this.bimestre_tres
    }
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




