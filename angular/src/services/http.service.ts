import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Socket } from 'ngx-socket-io';
import { Document } from '../models/document';
import { VentasIndustria } from 'src/models/ventasIndustria';
import { EstadoResultados } from 'src/models/estadoResultados';
import { BalanceGeneral } from 'src/models/balanceGeneral';
import { Ventas } from 'src/models/ventas';
import { CostosProduccion } from 'src/models/costosProduccion';
import { VisionGeneral } from 'src/models/visionGeneral';
import { Produccion } from 'src/models/produccion';



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

       let tmp = new VentasIndustria();
      tmp.jugador="nombreprueba"
      socket.emit("datosDePrueba", tmp)

      let estadoResultados = new EstadoResultados();
      estadoResultados.jugador="nombreEmpresaEstadoResultados"
      socket.emit("datosEstadoResultados", estadoResultados)

      let balanceGeneral = new BalanceGeneral();
      balanceGeneral.jugador="nombreEmpresaBalanceGeneral"
      socket.emit("datosBalanceGeneral", balanceGeneral)

      let ventas = new Ventas();
      ventas.jugador="nombreEmpresaBVentas"
      socket.emit("datosVentas", ventas)

       let costosProduccion = new CostosProduccion();
      costosProduccion.jugador="nombreEmpresacostosProduccion"
      socket.emit("datosCostosProduccion", costosProduccion)

      let visionGeneral = new VisionGeneral();
      visionGeneral.jugador="nombreEmpresavisionGeneral"
      socket.emit("datosvisionGeneral", visionGeneral)

      let produccion = new Produccion();
      produccion.jugador="nombreEmpresaproduccion"
      socket.emit("datosProduccion", produccion)

      let ventasIndustria = new VentasIndustria();
      ventasIndustria.jugador="nombreprueba"
      socket.emit("datosVentasIndustria", ventasIndustria)


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
  cantidadTotalJugadores:number
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
        this.cantidadTotalJugadores=data.size
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

  /*public calcularBalanceGeneralP(callback){
    let send_Data = { codigo: this.codigo, player_name: this.player.name }
      console.log("calcularBalanceGeneralHttpService", send_Data)
          this.socket.emit("calcularBalanceGeneralP", send_Data, callback);

  }*/

  public calcularTodoPrueba(data, callback){
    let send_Data = { numeroBimestre: data, codigo: this.codigo}
    console.log("calcularTodoPrueba =>", send_Data)
    this.socket.emit("calcularTodoPrueba", send_Data, callback);
  }

  public getBalanceGeneral(data,callback){
    let send_Data = { numeroBimestre:data, codigo: this.codigo, player_name: this.player.name }
      console.log("getBalanceGeneral", send_Data)
           this.socket.emit("getBalanceGeneral", send_Data, callback);
  }

  public getVentas(data,callback){
    let send_Data = { numeroBimestre:data, codigo: this.codigo, player_name: this.player.name }
      console.log("getVentas", send_Data)
          this.socket.emit("getVentas", send_Data, callback);

  }
  public getCostosProduccion(data,callback){
    let send_Data = { numeroBimestre:data, codigo: this.codigo, player_name: this.player.name }
    console.log("getCostosProduccion http.service", send_Data)
    this.socket.emit("getCostosProduccion", send_Data, callback);

  }

  public getProduccion(data,callback){
    let send_Data = { numeroBimestre:data, codigo: this.codigo, player_name: this.player.name }
      console.log("getProduccion", send_Data)
          this.socket.emit("getProduccion", send_Data, callback);
  }

  public getVentasIndustria(data,callback){
    let send_Data = { numeroBimestre:data, codigo: this.codigo, player_name: this.player.name }
      console.log("getVentasIndustria", send_Data)
          this.socket.emit("getVentasIndustria", send_Data, callback);

  }

    public getEstadoResultados(callback){
    let send_Data = { codigo: this.codigo, player_name: this.player.name }
      console.log("v", send_Data);
      this.socket.emit("getEstadoResultados", send_Data, callback);
  }
    public getVisionGeneral(data,callback){
    let send_Data = { numeroBimestre:data, codigo: this.codigo, player_name: this.player.name}
      console.log("getVisionGeneral", send_Data)
           this.socket.emit("getVisionGeneral", send_Data, callback);
  }

  public getAllProduccion(callback){
    let send_Data = { codigo: this.codigo, player_name: this.player.name }
      console.log("getAllProduccion", send_Data)
           this.socket.emit("getAllProduccion", send_Data, callback);
  }

  public getAllVentasIndustria(callback){
    let send_Data = { codigo: this.codigo, player_name: this.player.name }
      console.log("getAllVentasIndustria", send_Data)
           this.socket.emit("getAllVentasIndustria", send_Data, callback);
  }

    public getPromedioUtilidadNeta(callback){
    let send_Data = { codigo: this.codigo, player_name: this.player.name }
      console.log("getPromedioUtilidadNeta", send_Data)
           this.socket.emit("getPromedioUtilidadNeta", send_Data, callback);
  }
    public getSumatoriaCapacidadProduccion(callback){
    let send_Data = { codigo: this.codigo, player_name: this.player.name }
      console.log("getSumatoriaCapacidadProduccion", send_Data)
           this.socket.emit("getSumatoriaCapacidadProduccion", send_Data, callback);
  }
    public getPromedioPrecioUnitarios(callback){
    let send_Data = { codigo: this.codigo, player_name: this.player.name }
      console.log("getPromedioPrecioUnitarios", send_Data)
           this.socket.emit("getPromedioPrecioUnitarios", send_Data, callback);
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