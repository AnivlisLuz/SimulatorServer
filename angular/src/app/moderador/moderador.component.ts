import { Moderador } from '../../models/moderador';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-moderador',
  templateUrl: './moderador.component.html',
  styleUrls: ['./moderador.component.css']
})
export class ModeradorComponent implements OnInit {
  moderador: Moderador;
  constructor(private http: HttpService, private router: Router) {
    this.moderador = new Moderador();
  }

  ngOnInit() {
  }
  onClickMe() {
    this.http.game.createGame( this.moderador, (response) => {
      if (response.message && response.message == "ok")
      {
        alert(`Creado correctamente, Codigo: ${response.token}`)
        let codigo=response.token;
        this.http.game.joinGameModerator( codigo, (response) => {
          if (response.message && response.message == "ok") {
            this.router.navigate(['/fin']);
          }
      });
      }
      else
        alert(`Error: ${response}`)
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
  });
  }
}
