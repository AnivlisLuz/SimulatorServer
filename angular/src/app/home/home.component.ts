import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
            jugador: ['', Validators.required],
            ciudad: ['', Validators.required],
            edad: ['', Validators.required]
        });
  }
  aceptado(){this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {return;}
  
  }
  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }
  registrarse(){
    this.router.navigateByUrl('/register');

  }
  get f() { return this.registerForm.controls; }
  moderador() {{}
   this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {return;}
    this.router.navigateByUrl('/moderador');
  }

  jugar() {{}
   this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {return;}
    this.router.navigateByUrl('/jugar');
  }
}
