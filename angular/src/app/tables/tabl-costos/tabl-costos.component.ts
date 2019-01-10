import { CostosProduccion } from '../../../models/costosProduccion';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabl-costos',
  templateUrl: './tabl-costos.component.html',
  styleUrls: ['./tabl-costos.component.css']
})
export class TablCostosComponent implements OnInit {

  @Input() public costosProduccion:CostosProduccion;
  constructor() { }

  ngOnInit() {
  }

}
