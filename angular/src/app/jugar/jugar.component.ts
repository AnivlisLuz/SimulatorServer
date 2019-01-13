import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { Empresa } from '../../models/empresa';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../../services/http.service';


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

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpService) {
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
    let body_send = { player_name: this.nombre_empresa, codigo: this.codigo }
    this.http.game.joinGame( body_send, (response) => {
      if (response.message && response.message == "ok") {
        alert("Tu nombre de empresa sera:" + this.nombre_empresa);
        this.router.navigate(['/tabla']);
      }
      else
        alert(`Error: ${response}`)
    })
    // this.http.post('/joinGame', body_send).subscribe(
    //   (response: any) => {
    //     if (response.status == 200) {
    //       let body = JSON.parse(response._body)
    //       if (body.message == "ok") {
    //         alert("Tu nombre de empresa sera:" + this.nombre_empresa);
    //         this.router.navigate(['/tabla',body_send]);
    //       } else {
    //         alert("error con el cogigo o la sala ya esta llena");
    //       }
    //       console.log('ok ' + response._body);
    //       // this.router.navigate(['/tabla',this.jugador.nombreEmpresa,this.jugador.codigo]);

    //     }
    //     else {
    //       console.log(response);
    //     }
    //   });
    //    alert("Tu nombre de empresa sera: "+this.jugador.nombreEmpresa);

  }
}
