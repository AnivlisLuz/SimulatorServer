import { Moderador } from '../../models/moderador';
import { Component, OnInit } from '@angular/core';

import { HttpService } from './../../services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Http } from '@angular/http';
@Component({
  selector: 'app-moderador',
  templateUrl: './moderador.component.html',
  styleUrls: ['./moderador.component.css']
})
export class ModeradorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  moderador: Moderador;

  constructor(private http: HttpService,private formBuilder: FormBuilder ) {
    this.moderador = new Moderador();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombreMercado: ['', Validators.required],
      cantidadJugadores: [2, Validators.required]

  });
  }
  get f() { return this.registerForm.controls; }
  onClickMe() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {return;}
    this.moderador.nombreMercado=this.registerForm.value.nombreMercado
    this.moderador.cantidadJugadores=this.registerForm.value.cantidadJugadores

    this.http.game.createGame( this.moderador, (response) => {
      if (response.message && response.message == "ok")
        alert(`Creado correctamente, Codigo: ${response.token}`)
      else
        alert(`Error: ${response}`)
    })
    // this.http.post('/createGame', this.moderador).subscribe(
    //   (response: any) => {
    //     if (response.status == 200) {
    //       let body = JSON.parse(response._body)
    //       console.log(body)
    //       if (body.message == "ok") {
    //         alert(`Creado correctamente, Codigo: ${body.token}`)
    //       } else {
    //         alert(`Ya exite el mercado: ${this.moderador.nombreMercado}  Con el codigo: ${body.token}`)
    //       }
    //     } else {
    //       alert(response._body);
    //     }
    //   }, (error: any) => {
    //     console.log(error)
    //     alert("error con el servidor")
    //   }
    // );
  }
}
