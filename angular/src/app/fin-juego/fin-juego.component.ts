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
  visionGeneralUno: VisionGeneral[];
  visionGeneralDos: VisionGeneral[];
  visionGeneralTres: VisionGeneral[];
  resultadosFinales:[]
    //tab manager
  tap_position: number = 1;

  constructor(private http:HttpService,     private route:ActivatedRoute) {
    this.visionGeneralUno= [];
    this.visionGeneralDos= [];
    this.visionGeneralTres= [];
    this.resultadosFinales=[];
    this.cargar();

   }
 cargar(){
    if(this.http.game.bimestre_uno_c==0)
    {
      this.http.game.getVisionGeneral(0,(response) => {
              console.log("getVisionGeneral front", response)
              this.visionGeneralUno=response
    /*this.visionGeneralUno.sort(a,b)=>(a:{},b:{})=> {if (a.jugador < b.jugador) {return 1;}
    if(a.jugador > b.jugador) {return -1}return 0;};*/
                  console.log("visionGeneralUno front", this.visionGeneralUno)

            });

    }
    if(this.http.game.bimestre_dos_c==0)
    {
      this.http.game.getVisionGeneral(1,(response) => {
              console.log("getVisionGeneral front", response)
              this.visionGeneralDos=response
      /*this.visionGeneralDos.sort(a,b)=>(a:{},b:{})=> {if (a.jugador < b.jugador) {return 1;}
    if(a.jugador > b.jugador) {return -1}return 0;};*/
              console.log("visionGeneralDos front", this.visionGeneralDos)

            });
    }
    if(this.http.game.bimestre_tres_c==0)
    {
      this.http.game.getVisionGeneral(2,(response) => {
              console.log("getVisionGeneral front", response)
              this.visionGeneralTres=response
      /*this.visionGeneralTres.sort(a,b)=>(a:{},b:{})=> {if (a.jugador < b.jugador) {return 1;}
    if(a.jugador > b.jugador) {return -1}return 0;};*/
              console.log("visionGeneralTres front", this.visionGeneralTres)

            });

    }
}

  ngOnInit() {
    /*this.route.params.subscribe(params=>{
      if( params['numeroBimestre']!=null){
          this.numeroBimestre=params['numeroBimestre'];
      }
      this.numeroBimestre=params['numeroBimestre']
      });*/
  }
  
  parciales() {
    this.tap_position = 1;
    this.cargar();
    
  }
  finales() {
    this.tap_position = 2;
    this.cargar();
  }
}
