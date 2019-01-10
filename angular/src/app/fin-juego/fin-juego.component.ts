import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VisionGeneral } from './../../models/visionGeneral';


@Component({
  selector: 'app-fin-juego',
  templateUrl: './fin-juego.component.html',
  styleUrls: ['./fin-juego.component.css']
})
export class FinJuegoComponent implements OnInit {
  esFinJuego:boolean;
  numeroBimestre:number;
  codigo:string;
  visionGeneral: VisionGeneral[];

  constructor(private http:HttpService,     private route:ActivatedRoute) {
    this.visionGeneral= [];
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      if( params['codigo']!=null){
          this.codigo=params['codigo'];
      }
      });
  }
  cargar(){
    this.http.get('http://localhost:8080/visionGeneral/'+this.codigo+'/'+this.numeroBimestre).subscribe(
      (response:any) => {
        console.log(response);
      this.visionGeneral =response;
  });

}

}
