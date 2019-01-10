import { Moderador } from '../../models/moderador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderador',
  templateUrl: './moderador.component.html',
  styleUrls: ['./moderador.component.css']
})
export class ModeradorComponent implements OnInit {

moderador: Moderador;
  constructor() {
    this.moderador = new Moderador();
  }

  ngOnInit() {
  }

}
