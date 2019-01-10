import { EstadoResultados } from './../../../models/estadoResultados';
import { Bimestre } from '../../../models/bimestre';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabl-resultados',
  templateUrl: './tabl-resultados.component.html',
  styleUrls: ['./tabl-resultados.component.css']
})
export class TablResultadosComponent implements OnInit {
  @Input() public estadoResultados:Array<EstadoResultados>;

  constructor() { }

  ngOnInit() {

  }

}
