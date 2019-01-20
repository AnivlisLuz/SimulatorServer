import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }
  registrarse(){
    this.router.navigateByUrl('/register');

  }

  moderador() {
    this.router.navigateByUrl('/moderador');
  }

  jugar() {
    this.router.navigateByUrl('/jugar');
  }
}
