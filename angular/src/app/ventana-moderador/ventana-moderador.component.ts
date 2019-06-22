import { Moderador } from '../../models/moderador';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ventana-moderador',
  templateUrl: './ventana-moderador.component.html',
  styleUrls: ['./ventana-moderador.component.css']
})
export class VentanaModeradorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  moderador: Moderador;
  constructor(private http: HttpService, private formBuilder: FormBuilder, private router: Router) {
    this.moderador = new Moderador();
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      codigo: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }
  onClickMe() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) { return; }
    this.moderador.codigo = this.registerForm.value.codigo;
    this.http.game.joinGameModerator(this.moderador.codigo, (response) => {
    if (response.message && response.message == "ok") {
            this.router.navigate(['/fin']);
          }
      });

      }
}
