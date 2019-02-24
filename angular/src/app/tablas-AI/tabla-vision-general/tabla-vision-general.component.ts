import { VisionGeneral } from '../../../models/visionGeneral';
import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from './../../../services/http.service';
@Component({
  selector: 'app-tabla-vision-general',
  templateUrl: './tabla-vision-general.component.html',
  styleUrls: ['./tabla-vision-general.component.css']
})
export class TablaVisionGeneralComponent implements OnInit {
  totalesVentas: number = 0;
  totalesBeneficio: number = 0;
  totalesPrecioUnitario: number = 0;
  totalesPorcentajeMercado: number = 0;
  mercadoDesatendido: number = 0;
  @Input() public visionGeneral: Array<VisionGeneral>;

  constructor(private http: HttpService, ) {
  }

  ngOnInit() {
    for (let i = 0; i < this.visionGeneral.length; i++) {
      this.totalesVentas += this.visionGeneral[i].ventas;
      this.totalesBeneficio += this.visionGeneral[i].beneficio;
      this.totalesPrecioUnitario += this.visionGeneral[i].precioUnitario;
      this.totalesPorcentajeMercado += this.visionGeneral[i].porcentajeDeMercado;
    }
  }

  sumatoriasTotales() {
    let auxiliarMercado = 0;
    this.totalesVentas = 0;
    this.totalesBeneficio = 0;
    this.totalesPrecioUnitario = 0;
    this.totalesPorcentajeMercado = 0;
    this.mercadoDesatendido = 0;
    for (let i = 0; i < this.visionGeneral.length; i++) {
      this.totalesVentas += this.visionGeneral[i].ventas;
      this.totalesBeneficio += this.visionGeneral[i].beneficio;
      this.totalesPrecioUnitario += this.visionGeneral[i].precioUnitario;
      this.totalesPorcentajeMercado += this.visionGeneral[i].porcentajeDeMercado;
    } 
    this.totalesPrecioUnitario /= this.visionGeneral.length;
    if (this.totalesPorcentajeMercado < 100) {
      this.mercadoDesatendido = 100 - this.totalesPorcentajeMercado;
    }
    this.totalesPorcentajeMercado+=this.mercadoDesatendido
  }

}
