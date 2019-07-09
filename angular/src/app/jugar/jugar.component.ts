import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { Empresa } from '../../models/empresa';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../../services/http.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {

  jugador: Jugador;
  empresa: Empresa;
  registerForm: FormGroup;
  submitted = false;

  nombre_empresa: string;
  codigo: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpService,private toastr: ToastrService) {
    this.jugador = new Jugador();
    this.empresa = new Empresa();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombreE: ['', Validators.required],
      codigo: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }
  onClickMe() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) { return; }
    this.nombre_empresa = this.registerForm.value.nombreE
    this.codigo = this.registerForm.value.codigo

    let body_send = { player_name: this.nombre_empresa.toUpperCase(), codigo: this.codigo }
    this.http.game.joinGame(body_send, (response) => {
      if (response.message && response.message == "ok") {
        // alert("Tu nombre de empresa sera:" + this.nombre_empresa);
        this.alertaBienvenidoEmpresa("Damos la bienvenida a tu empresa: " +this.nombre_empresa);
        this.router.navigate(['/tabla']);
      }
      else
        // alert(`Error: ${response}`)
        this.alertaError("Error: "+`${response}`)
    })

  }

  alertaBienvenidoEmpresa(name:string){
    this.toastr.info(name)
  }

  alertaError(mensaje:string){
    this.toastr.error(mensaje)
  }
}
