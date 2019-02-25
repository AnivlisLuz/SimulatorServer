import { Produccion } from './../../../models/produccion';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-produccion',
  templateUrl: './tabla-produccion.component.html',
  styleUrls: ['./tabla-produccion.component.css']
})
export class TablaProduccionComponent implements OnInit {

  @Input() public produccionIndustria: Produccion;
  Math= Math
  constructor() {
  }

  ngOnInit() {

  }

}
