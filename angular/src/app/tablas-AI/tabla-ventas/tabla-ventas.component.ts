import { VentasIndustria } from './../../../models/ventasIndustria';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-ventas',
  templateUrl: './tabla-ventas.component.html',
  styleUrls: ['./tabla-ventas.component.css']
})
export class TablaVentasComponent implements OnInit {
  @Input() public ventasIndustria:VentasIndustria;
  constructor() {
  }

  ngOnInit() {
  }

}
