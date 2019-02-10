import { Ventas } from '../../../models/ventas';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabl-ventas',
  templateUrl: './tabl-ventas.component.html',
  styleUrls: ['./tabl-ventas.component.css']
})
export class TablVentasComponent implements OnInit {

  @Input() public ventas: Ventas;

  constructor() { }

  ngOnInit() {
  }

}
