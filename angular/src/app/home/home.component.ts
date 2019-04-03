import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jugador: string;
  edad: number;
  ciudad: string;


  constructor(private http: HttpService,private router: Router, private formBuilder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      jugador: ['', Validators.required],
      ciudad: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }
  aceptado() {
  this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) { return; }

  }
  iniciarSesion() {
    this.router.navigateByUrl('/login');
  }
  registrarse() {
    this.router.navigateByUrl('/register');

  }
  get f() { return this.registerForm.controls; }
  moderador() {
    { }
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) { return; }

    this.almacenarDatos();
    this.router.navigateByUrl('/moderador');
  }
  almacenarDatos(){
    this.jugador = this.registerForm.value.jugador
    this.ciudad = this.registerForm.value.ciudad
    this.edad = this.registerForm.value.edad

    let json = { jugador: this.jugador, ciudad: this.ciudad, edad: this.edad }

    this.http.post('/api/jugador', json).subscribe(
     (response: any) => {
       if (response.status == 2001) {
         console.log('ok');
     }
       else {
         console.log(response);
       }
     });
  }

  jugar() {
    { }
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) { return; }
    this.almacenarDatos();
    this.router.navigateByUrl('/jugar');
  }
}
