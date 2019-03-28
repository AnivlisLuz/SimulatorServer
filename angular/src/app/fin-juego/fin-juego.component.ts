import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../../services/http.service";
import { Router, ActivatedRoute } from "@angular/router";
import { VisionGeneral } from "./../../models/visionGeneral";
import { Subscription, timer } from "rxjs";

@Component({
  selector: "app-fin-juego",
  templateUrl: "./fin-juego.component.html",
  styleUrls: ["./fin-juego.component.css"]
})
export class FinJuegoComponent implements OnInit {
  esFinJuego: boolean;
  numeroBimestre: number;
  codigo: string;
  visionGeneralUno: VisionGeneral[];
  visionGeneralDos: VisionGeneral[];
  visionGeneralTres: VisionGeneral[];

  resultadosFinales: number[];
  //tab manager
  tap_position: number = 1;
  subscription: Subscription;

  constructor(private http: HttpService, private route: ActivatedRoute) {
    this.visionGeneralUno = [];
    this.visionGeneralDos = [];
    this.visionGeneralTres = [];
    this.resultadosFinales = [];
    this.cargar();
  }
  cargar() {
    while (this.resultadosFinales.length > 0) {
      this.resultadosFinales.pop();
    }
    if (this.http.game.bimestre_uno_c == 0) {
      this.http.game.getVisionGeneral(1, response => {
        console.log("getVisionGeneral front", response);
        this.visionGeneralUno = response.visionGeneral;
        console.log("visionGeneralUno front", this.visionGeneralUno);
      });
      for (let i = 0; i < this.visionGeneralUno.length; i++) {
        this.resultadosFinales.push(
          this.visionGeneralUno[i].puntajeBeneficio +
            this.visionGeneralUno[i].puntajeMercado
        );
      }
      console.log("resultados fianles hasta bim 1 => ", this.resultadosFinales);
    }
    if (this.http.game.bimestre_dos_c == 0) {
      this.http.game.getVisionGeneral(2, response => {
        console.log("getVisionGeneral front", response);
        this.visionGeneralDos = response.visionGeneral;
        console.log("visionGeneralDos front", this.visionGeneralDos);
      });
      for (let i = 0; i < this.visionGeneralDos.length; i++) {
        this.resultadosFinales[i] =
          this.resultadosFinales[i] +
          this.visionGeneralDos[i].puntajeBeneficio +
          this.visionGeneralDos[i].puntajeMercado;
      }
      console.log("resultados fianles hasta bim 2 => ", this.resultadosFinales);
    }
    if (this.http.game.bimestre_tres_c == 0) {
      this.http.game.getVisionGeneral(3, response => {
        console.log("getVisionGeneral front", response);
        this.visionGeneralTres = response.visionGeneral;
        console.log("visionGeneralTres front", this.visionGeneralTres);
      });
      for (let i = 0; i < this.visionGeneralTres.length; i++) {
        this.resultadosFinales[i] =
          this.resultadosFinales[i] +
          this.visionGeneralTres[i].puntajeBeneficio +
          this.visionGeneralTres[i].puntajeMercado;
      }
      console.log("resultados fianles hasta bim 3 => ", this.resultadosFinales);
    }
  }

  ngOnInit() {
    this.subscription = timer(0, 7000).subscribe(result => this.cargar());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  parciales() {
    this.tap_position = 1;
    this.cargar();
  }
  finales() {
    this.tap_position = 2;
    this.cargar();
  }
}
