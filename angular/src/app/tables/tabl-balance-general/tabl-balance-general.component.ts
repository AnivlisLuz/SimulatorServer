import { BalanceGeneral } from './../../../models/balanceGeneral';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabl-balance-general',
  templateUrl: './tabl-balance-general.component.html',
  styleUrls: ['./tabl-balance-general.component.css']
})
export class TablBalanceGeneralComponent implements OnInit {

  @Input() public balanceGeneral:BalanceGeneral;

  constructor() { }

  ngOnInit() {
  }

}
