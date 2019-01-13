﻿import { BalanceGeneral } from './../../models/balanceGeneral';
import { CostosProduccion } from './../../models/costosProduccion';
import { EstadoResultados } from './../../models/estadoResultados';

import { VisionGeneral } from './../../models/visionGeneral';
import { Produccion } from './../../models/produccion';
import { VentasIndustria } from './../../models/ventasIndustria';

import { Ventas } from '../../models/ventas';
import { Bimestre } from '../../models/bimestre';
import { Proyecciones } from '../../models/proyecciones';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Chart } from 'chart.js';




@Component({
  selector: 'app-tabla-de-decision',
  templateUrl: './tabla-de-decision.component.html',
  styleUrls: ['./tabla-de-decision.component.css']
})
export class TablaDeDecisionComponent implements OnInit {

  //tab manager
  tap_position: number = 1;
  section_tap_1: number = 0;
  section_tap_2: number = 0;
  section_tap_3: number = 0;
  section_tap_4: number = 0;

  precioUnitario: number = 150
  produccion: number = 500
  inversionEnMarketings: number[] = [0, 1500, 3000, 4500, 6000]
  inversionEnMarketing: number = this.inversionEnMarketings[0]
  inversionEnInvestigacions: number[] = [0, 1500, 3000, 4500, 6000]
  inversionEnInvestigacion: number = this.inversionEnInvestigacions[0]
  inversionEnActivoss: number[] = [0, 1500, 3000, 4500, 6000]
  inversionEnActivos: number = this.inversionEnActivoss[0]

  nombreEmpresa: string;
  bimestreInicial: Bimestre;

  bimestreActual: Bimestre;
  bimestres: Bimestre[];
  nombreBimestre: string;
  proyecciones: Proyecciones;

  costoProduccion: CostosProduccion;
  ventas: Ventas;
  estadoResultados: EstadoResultados[];
  balanceGeneral: BalanceGeneral;
  numeroBimestre: number;

  //a partir de aqui
  visionGeneral: VisionGeneral[];
  // produccion: Produccion;
  ventasIndustria: VentasIndustria;
  codigo: string;

  sumatoriaCapacidadProduccion: number[];
  promedioPrecioUnitarios: number[];
  promedioERUtilidadNeta: number[];



  //LineChart=[];
  myPieChart: any;
  LineChart2: any;
  LineChart3: any;
  LineChart4: any;
  LineChart5: any;
  LineChart: any;

  capitalPeriodoAnterior: number = 10000;
  auxiliarMercadoSinAtender: number;
  mercadoSinAtender: number;
  capacidadProduccionIndustriaBimestres: Produccion[];
  ventasIndustriaBimestres: VentasIndustria[];
  porcentajeDeMercadoTotal: number;


  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) {
    this.bimestreInicial = new Bimestre();
    this.bimestreActual = new Bimestre();
    this.bimestres = [];
    this.costoProduccion = new CostosProduccion();
    this.ventas = new Ventas();
    this.estadoResultados = [];
    this.balanceGeneral = new BalanceGeneral();
    this.numeroBimestre = 0;
    // this.produccion = new Produccion();
    this.ventasIndustria = new VentasIndustria();
    this.visionGeneral = [];
    this.capacidadProduccionIndustriaBimestres = [];
    this.ventasIndustriaBimestres = [];

    this.sumatoriaCapacidadProduccion = [];
    this.promedioPrecioUnitarios = [];
    this.promedioERUtilidadNeta = [];
    if (!this.http.game)
      this.router.navigateByUrl('/jugar');
  }
  onChangeinversionEnMarketings(data) {
    console.log("changed onChangeinversionEnMarketings", data)
    this.inversionEnMarketing = data
  }
  onChangeinversionEnInvestigacions(data) {
    console.log("changed onChangeinversionEnInvestigacions", data)
    this.inversionEnInvestigacion = data
  }
  onChangeinversionEnActivoss(data) {
    console.log("changed onChangeinversionEnActivoss", data)
    this.inversionEnActivos = data
  }
  ngOnInit() {

    // this.route.params.subscribe(params => {
    //   if (params['player_name'] != null && params['codigo'] != null) {
    //     this.nombreEmpresa = params['player_name'];
    //     this.codigo = params['codigo'];
    //   }
    // });
    // console.log(this.nombreEmpresa);
    // console.log(this.codigo);
    // this.bimestreInicial.codigo = this.codigo;
    // this.bimestreInicial.nombreEmpresa = this.nombreEmpresa;

    // this.decision();



    // let json = JSON.stringify(this.bimestreInicial);
    // let params = 'json' + json;
    // console.log(json);
    // this.http.post('http://localhost:8080/bimestre', json).subscribe(
    //   (response: any) => {
    //     if (response.status == 201) {
    //       console.log('ok');
    // this.cargarDatosSocket();
    //     }
    //     else {
    //       console.log(response);
    //     }
    //   });


  }

  // actualizaProduccionIndustriaBimestres() {
  //   this.http.get('http://localhost:8080/produccion/PR' + this.nombreEmpresa + '' + this.codigo).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.produccion = response;
  //     });
  //   if (this.produccion !== null && this.produccion !== undefined) {
  //     if (this.capacidadProduccionIndustriaBimestres.length > 0) {
  //       if (this.capacidadProduccionIndustriaBimestres[this.capacidadProduccionIndustriaBimestres.length - 1].numero != this.produccion.numero) {
  //         this.capacidadProduccionIndustriaBimestres.push(this.produccion);
  //       }
  //     }
  //     else {
  //       this.capacidadProduccionIndustriaBimestres.push(this.produccion);

  //     }

  //   }

  // }

  actualizarVentasIndustriasBimestre() {
    this.http.get('http://localhost:8080/ventasIndustria/VI' + this.nombreEmpresa + '' + this.codigo).subscribe(
      (response: any) => {
        console.log(response);
        this.ventasIndustria = response;
      });
    if (this.ventasIndustria !== undefined) {
      if (this.ventasIndustriaBimestres.length > 0) {
        if (this.ventasIndustriaBimestres[this.ventasIndustriaBimestres.length - 1].numero != this.ventasIndustria.numero) {
          this.ventasIndustriaBimestres.push(this.ventasIndustria);
        }
      }
      else {
        this.ventasIndustriaBimestres.push(this.ventasIndustria);

      }

    }
  }
  iniciar() {
    let data_bimestre = {
      precioUnitario: this.precioUnitario,
      produccion: this.produccion,
      inversionEnMarketing: this.inversionEnMarketing,
      inversionEnInvestigacion: this.inversionEnInvestigacion,
      inversionEnActivos: this.inversionEnActivos
    }
    if (this.http.game.bimestre_inicial_c == 0) {
      if (this.http.game.player.bimestre_uno) {
        if (this.http.game.bimestre_uno_c == 0) {
          if (this.http.game.player.bimestre_dos) {
            if (this.http.game.bimestre_dos_c == 0) {
              if (this.http.game.player.bimestre_tres) {
                console.log("completo")
              } else {
                // if (this.http.game.bimestre_tres_c == 0) {
                this.http.game.addBimestreTres(data_bimestre, (response) => {
                  console.log("addBimestreTres", response)
                })
                // } else {
                //   console.log("faltan completar 3")
                // }
              }
            } else {
              console.log("faltan los dos")
            }
          } else {
            // if (this.http.game.bimestre_dos_c == 0) {
            this.http.game.addBimestreDos(data_bimestre, (response) => {
              console.log("addBimestreDos", response)
            })
            // } else {
            //   console.log("faltan completar 2")
            // }
          }
        } else {
          console.log("faltan los unos")
        }
      } else {
        // if (this.http.game.bimestre_uno_c == 0) {
        this.http.game.addBimestreUno(data_bimestre, (response) => {
          console.log("addBimestreUno", response)
        })
        // } else {
        //   console.log("faltan completar 1")
        // }
      }
    }
    else {
      alert("aun faltan " + this.http.game.bimestre_inicial_c + " jugadores")
    }
  }
  iniciarAfter() {
    alert("Iniciando inversion, preparando bimestre");
    let precioUnitario = document.getElementById("precioUnitario") as HTMLInputElement;
    if (document.getElementById("precio-unitario1").innerText === "") {
      document.getElementById("precio-unitario1").innerText = precioUnitario.value;
    }
    else {
      if (document.getElementById("precio-unitario2").innerText === "") {
        document.getElementById("precio-unitario2").innerText = precioUnitario.value;
      }
      else {
        if (document.getElementById("precio-unitario3").innerText === "") {
          document.getElementById("precio-unitario3").innerText = precioUnitario.value;
          document.getElementById("decisionID").style.display = "none";
          document.getElementById("tabla-proyeccionesID").style.display = "none";
          document.getElementById("numero-bimestre-siguiente").style.display = "none";
          document.getElementById("precioUnitarioTD").style.display = "none";

        }
      }
    }


    let produccion2 = document.getElementById("produccion") as HTMLInputElement;
    if (document.getElementById("produccion1").innerText === "") {
      document.getElementById("produccion1").innerText = produccion2.value;
    }
    else {
      if (document.getElementById("produccion2").innerText === "") {
        document.getElementById("produccion2").innerText = produccion2.value;
      }
      else {
        if (document.getElementById("produccion3").innerText === "") {
          document.getElementById("produccion3").innerText = produccion2.value;
          document.getElementById("produccion").style.display = "none";
          document.getElementById("produccionTD").style.display = "none";

        }
      }
    }

    let inversionMarketing = document.getElementById("inversionEnMarketing") as HTMLInputElement;
    if (document.getElementById("inversion-marketing1").innerText === "") {
      document.getElementById("inversion-marketing1").innerText = inversionMarketing.value;
    }
    else {
      if (document.getElementById("inversion-marketing2").innerText === "") {
        document.getElementById("inversion-marketing2").innerText = inversionMarketing.value;
      }
      else {
        if (document.getElementById("inversion-marketing3").innerText === "") {
          document.getElementById("inversion-marketing3").innerText = inversionMarketing.value;
          document.getElementById("inversionEnMarketing").style.display = "none";
          document.getElementById("inversionEnMarketingTD").style.display = "none";

        }
      }
    }

    let inversionInvestigacion = document.getElementById("inversionEnInvestigacion") as HTMLInputElement;
    if (document.getElementById("inversion-investigacion1").innerText === "") {
      document.getElementById("inversion-investigacion1").innerText = inversionInvestigacion.value;
    }
    else {
      if (document.getElementById("inversion-investigacion2").innerText === "") {
        document.getElementById("inversion-investigacion2").innerText = inversionInvestigacion.value;
      }
      else {
        if (document.getElementById("inversion-investigacion3").innerText === "") {
          document.getElementById("inversion-investigacion3").innerText = inversionInvestigacion.value;
          document.getElementById("inversionEnInvestigacion").style.display = "none";
          document.getElementById("inversionEnInvestigacionTD").style.display = "none";

        }
      }
    }

    let inversionActivos = document.getElementById("inversionEnActivos") as HTMLInputElement;
    if (document.getElementById("inversion-activos1").innerText === "") {
      document.getElementById("inversion-activos1").innerText = inversionActivos.value;
    }
    else {
      if (document.getElementById("inversion-activos2").innerText === "") {
        document.getElementById("inversion-activos2").innerText = inversionActivos.value;
      }
      else {
        if (document.getElementById("inversion-activos3").innerText === "") {
          document.getElementById("inversion-activos3").innerText = inversionActivos.value;
          document.getElementById("inversionEnActivos").style.display = "none";
          document.getElementById("inversionEnActivosTD").style.display = "none";

        }
      }
    }



    this.bimestres.push(this.bimestreActual);

    this.nombreBimestre = "B-" + this.bimestres.length;
    if (document.getElementById("numero-bimestre1").innerText === "") {
      document.getElementById("numero-bimestre1").innerText = this.nombreBimestre;
    }
    else {
      if (document.getElementById("numero-bimestre2").innerText === "") {
        document.getElementById("numero-bimestre2").innerText = this.nombreBimestre;
      }
      else {
        if (document.getElementById("numero-bimestre3").innerText === "") {
          document.getElementById("numero-bimestre3").innerText = this.nombreBimestre;
        }
      }
    }

    this.nombreBimestre = "B-" + (this.bimestres.length + 1);
    document.getElementById("numero-bimestre-siguiente").innerText = this.nombreBimestre;
    this.numeroBimestre = this.numeroBimestre + 1;
    this.bimestreActual.numero = this.numeroBimestre;
    this.bimestreActual.nombreEmpresa = this.nombreEmpresa;
    this.bimestreActual.codigo = this.codigo;

    let json = JSON.stringify(this.bimestreActual);
    let params = 'json' + json;
    console.log(json);
    // this.http.emit("bimestre", this.bimestreActual, (response) => {
    //   if (response.message && response.message == "ok")
    //     this.cargarDatosSocket();
    //   else {
    //     alert("error")
    //   }
    // })
    // this.http.post('http://localhost:8080/bimestre', json).subscribe(
    //   (response: any) => {
    //     if (response.status == 201) {
    //       console.log('ok');
    //       this.cargarDatosSocket();


    //     }
    //     else {
    //       console.log(response);
    //     }
    //   });

    // this.actualizaProduccionIndustriaBimestres();
  }
  cargarDatosSocket() {
    console.log("cargarDatosSocket")
    // let players = this.http.getPlayers()
    // if (players)
    //   for (let player of players) {
    //     let tmp_player = new VisionGeneral();
    //     tmp_player.nombreEmpresa = player
    //     this.visionGeneral.push(tmp_player);
    //   }
    // .emit("visionGeneral", { codigo: this.codigo }, (response) => {
    //   console.log(response);
    //   if (response.players) {
    //     this.visionGeneral = []
    //     for (let player of response.players) {
    //       let tmp_player = new VisionGeneral();
    //       tmp_player.nombreEmpresa = player
    //       this.visionGeneral.push(tmp_player);
    //     }
    //   }
    //   console.log(this.visionGeneral)
    // })
  }
  cargarDatos() {
    this.http.get('http://localhost:8080/estadoResultadosEmpresa/' + this.nombreEmpresa).subscribe(
      (response: any) => {
        console.log(response);
        this.estadoResultados = response;
      });
    this.http.get('http://localhost:8080/balanceGeneral/BG' + this.nombreEmpresa + '' + this.numeroBimestre.toString() + this.codigo).subscribe(
      (response: any) => {
        console.log(response);
        this.balanceGeneral = response;
      });
    this.http.get('http://localhost:8080/ventas/V' + this.nombreEmpresa + '' + this.numeroBimestre.toString() + this.codigo).subscribe(
      (response: any) => {
        console.log(response);
        this.ventas = response;
      });

    this.http.get('http://localhost:8080/costosProduccion/CP' + this.nombreEmpresa + '' + this.numeroBimestre.toString() + this.codigo).subscribe(
      (response: any) => {
        console.log(response);
        this.costoProduccion = response;
      });

    this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(
      (response: any) => {
        console.log(response);
        this.visionGeneral = response;
      });

    this.http.get('http://localhost:8080/produccion/PR' + this.nombreEmpresa + '' + this.codigo).subscribe(
      (response: any) => {
        console.log(response);
        this.produccion = response;
      });
    this.http.get('http://localhost:8080/ventasIndustria/VI' + this.nombreEmpresa + '' + this.codigo).subscribe(
      (response: any) => {
        console.log(response);
        this.ventasIndustria = response;
      });
  }

  informacion() {
    this.tap_position = 0;
    // document.getElementById("decisiones").style.display = "none";
    // document.getElementById("tabla-analisis-industria").style.display = "none";
    // document.getElementById("informe").style.display = "none";
    // document.getElementById("analisis").style.display = "none";
    // document.getElementById("informacion-compania").style.display = "block";
    // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
    // document.getElementById("header").style.backgroundColor = "rgb(8, 25, 43)";
    // document.getElementById("icono").style.backgroundColor = "rgb(8, 25, 43)";
    // /*document.getElementById("informacion-compania").style.backgroundColor="rgb(8, 25, 43)";*/
    // document.getElementById("historiaID").style.display = "block";
    // document.getElementById("mision-visionID").style.display = "none";
    // document.getElementById("nuestro-productoID").style.display = "none";
    // document.getElementById("organigramaID").style.display = "none";
    // document.getElementById("objetivosID").style.display = "none";
    // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(8, 25, 43)";
    // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("info-informacionCompañia").style.display = "block";
    // document.getElementById("info-decisiones").style.display = "none";
    // document.getElementById("info-analisisIndustria").style.display = "none";
    // document.getElementById("info-informeCompañia").style.display = "none";
    // document.getElementById("info-analisis").style.display = "none";

  }
  decision() {
    this.tap_position = 1;
    // document.getElementById("decisiones").style.display = "block";
    // document.getElementById("tabla-analisis-industria").style.display = "none";
    // document.getElementById("informe").style.display = "none";
    // document.getElementById("analisis").style.display = "none";
    // document.getElementById("informacion-compania").style.display = "none";
    // document.getElementById("titulo").innerText = "MIS DECISIONES";
    // document.getElementById("header").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("icono").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("info-informacionCompañia").style.display = "none";
    // document.getElementById("info-decisiones").style.display = "block";
    // document.getElementById("info-analisisIndustria").style.display = "none";
    // document.getElementById("info-informeCompañia").style.display = "none";
    // document.getElementById("info-analisis").style.display = "none";


  }

  tanalisis() {
    this.tap_position = 2
    // document.getElementById("decisiones").style.display = "none";
    // document.getElementById("tabla-analisis-industria").style.display = "block";
    // document.getElementById("informe").style.display = "none";
    // document.getElementById("analisis").style.display = "none";
    // document.getElementById("informacion-compania").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";
    // document.getElementById("header").style.backgroundColor = "rgb(0, 139, 208)";
    // document.getElementById("icono").style.backgroundColor = "rgb(0, 139, 208)";
    // /*document.getElementById("tabla-analisis-industria").style.backgroundColor="rgb(0, 139, 208)";*/
    // document.getElementById("VisionGeneralID").style.display = "block";
    // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
    // document.getElementById("VentasTablaAnalisisID").style.display = "none";
    // document.getElementById("PorcentajeMercado").style.display = "none";
    // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(0, 139, 208)";
    // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("info-informacionCompañia").style.display = "none";
    // document.getElementById("info-decisiones").style.display = "none";
    // document.getElementById("info-analisisIndustria").style.display = "block";
    // document.getElementById("info-informeCompañia").style.display = "none";
    // document.getElementById("info-analisis").style.display = "none";

  }
  informe() {
    this.tap_position = 3
    // document.getElementById("decisiones").style.display = "none";
    // document.getElementById("tabla-analisis-industria").style.display = "none";
    // document.getElementById("informe").style.display = "block";
    // document.getElementById("analisis").style.display = "none";
    // document.getElementById("informacion-compania").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";
    // document.getElementById("EstadoDeResultadosID").style.display = "block";
    // document.getElementById("BalanceGeneralID").style.display = "none";
    // document.getElementById("VentasID").style.display = "none";
    // document.getElementById("ProduccionID").style.display = "none";
    // document.getElementById("CompaniaID").style.display = "none";
    // document.getElementById("header").style.backgroundColor = "rgb(0, 197, 245)";
    // document.getElementById("icono").style.backgroundColor = "rgb(0, 197, 245)";
    // //document.getElementById("informe").style.backgroundColor="rgb(0, 197, 245)";
    // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(0, 197, 245)";
    // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("info-informacionCompañia").style.display = "none";
    // document.getElementById("info-decisiones").style.display = "none";
    // document.getElementById("info-analisisIndustria").style.display = "none";
    // document.getElementById("info-informeCompañia").style.display = "block";
    // document.getElementById("info-analisis").style.display = "none";

  }
  analisis() {
    this.tap_position = 4;
    // document.getElementById("decisiones").style.display = "none";
    // document.getElementById("tabla-analisis-industria").style.display = "none";
    // document.getElementById("informe").style.display = "none";
    // document.getElementById("analisis").style.display = "block";
    // document.getElementById("informacion-compania").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS";
    // document.getElementById("produccionvsventasID").style.display = "block";
    // document.getElementById("costovsprecioID").style.display = "none";
    // document.getElementById("capacidadvsproduccionID").style.display = "none";
    // document.getElementById("companiavscompetenciaID").style.display = "none";
    // document.getElementById("consejosID").style.display = "none";
    // document.getElementById("header").style.backgroundColor = "rgb(0, 168, 233)";
    // document.getElementById("icono").style.backgroundColor = "rgb(0, 168, 233)";
    // /*document.getElementById("analisis").style.backgroundColor="rgb(0, 168, 233)";*/
    // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(0, 168, 233)";
    // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("info-informacionCompañia").style.display = "none";
    // document.getElementById("info-decisiones").style.display = "none";
    // document.getElementById("info-analisisIndustria").style.display = "none";
    // document.getElementById("info-informeCompañia").style.display = "none";
    // document.getElementById("info-analisis").style.display = "block";
    this.produccionvsventas();

  }

  historia() {
    this.section_tap_1 = 0;
    // document.getElementById("historiaID").style.display = "block";
    // document.getElementById("mision-visionID").style.display = "none";
    // document.getElementById("nuestro-productoID").style.display = "none";
    // document.getElementById("organigramaID").style.display = "none";
    // document.getElementById("objetivosID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";

    // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(8, 25, 43)";
    // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
  }

  misionVision() {
    this.section_tap_1 = 1;
    // document.getElementById("historiaID").style.display = "none";
    // document.getElementById("mision-visionID").style.display = "block";
    // document.getElementById("nuestro-productoID").style.display = "none";
    // document.getElementById("organigramaID").style.display = "none";
    // document.getElementById("objetivosID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";

    // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(8, 25, 43)";
    // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
  }

  nuestroProducto() {
    this.section_tap_1 = 2;
    // document.getElementById("historiaID").style.display = "none";
    // document.getElementById("mision-visionID").style.display = "none";
    // document.getElementById("nuestro-productoID").style.display = "block";
    // document.getElementById("organigramaID").style.display = "none";
    // document.getElementById("objetivosID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";

    // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(8, 25, 43)";
    // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
  }
  organigrama() {
    this.section_tap_1 = 3;
    // document.getElementById("historiaID").style.display = "none";
    // document.getElementById("mision-visionID").style.display = "none";
    // document.getElementById("nuestro-productoID").style.display = "none";
    // document.getElementById("organigramaID").style.display = "block";
    // document.getElementById("objetivosID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";

    // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(8, 25, 43)";
    // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
  }
  objetivos() {
    this.section_tap_1 = 4;
    // document.getElementById("historiaID").style.display = "none";
    // document.getElementById("mision-visionID").style.display = "none";
    // document.getElementById("nuestro-productoID").style.display = "none";
    // document.getElementById("organigramaID").style.display = "none";
    // document.getElementById("objetivosID").style.display = "block";
    // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";

    // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(8, 25, 43)";
  }

  produccionvsventas() {
    this.section_tap_4 = 0;
    // document.getElementById("produccionvsventasID").style.display = "block";
    // document.getElementById("costovsprecioID").style.display = "none";
    // document.getElementById("capacidadvsproduccionID").style.display = "none";
    // document.getElementById("companiavscompetenciaID").style.display = "none";
    // document.getElementById("consejosID").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS";

    // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(0, 168, 233)";
    // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgbrgb(24, 76, 133)";
    // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";

    //Line chart2:
    this.LineChart2 = new Chart('lineChart2', {
      type: 'line',
      data: {
        labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
        datasets: [{
          label: 'Produccion de la industria',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          backgroundColor: "green",
          borderWidth: 1
        },
        {
          label: 'Ventas de la industria (unidades)',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.actualizarVentasIndustriasBimestre()
    for (let i = 0; i < this.ventasIndustriaBimestres.length; i++) {
      //this.LineChart2.data.labels.push("Bimestre "+this.ventasIndustriaBimestres[i].numero);
      if (this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual != 0) {
        this.LineChart2.data.datasets[1].data.push(this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual);
        this.LineChart2.update();
      }
    }
    // this.actualizaProduccionIndustriaBimestres();

    for (let i = 0; i < this.capacidadProduccionIndustriaBimestres.length; i++) {
      //this.LineChart2.data.labels.push("Bimestre "+this.capacidadProduccionIndustriaBimestres[i].numero);

      if (this.capacidadProduccionIndustriaBimestres[i].produccionIndustriaValorActual != 0) {
        this.LineChart2.data.datasets[0].data.push(this.capacidadProduccionIndustriaBimestres[i].produccionIndustriaValorActual);
        this.LineChart2.update();
      }
    }




  }
  costovsprecio() {

    this.section_tap_4 = 1;
    this.http.get('http://localhost:8080/precioUnitarioBimestres/' + this.codigo).subscribe(
      (response: any) => {
        console.log(this.codigo);
        console.log(response);
        this.promedioPrecioUnitarios = response;

      });


    // document.getElementById("produccionvsventasID").style.display = "none";
    // document.getElementById("costovsprecioID").style.display = "block";
    // document.getElementById("capacidadvsproduccionID").style.display = "none";
    // document.getElementById("companiavscompetenciaID").style.display = "none";
    // document.getElementById("consejosID").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS";

    // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(0, 168, 233)";
    // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";

    //Line chart3:
    this.LineChart3 = new Chart('lineChart3', {
      type: 'line',
      data: {
        labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
        datasets: [{
          label: 'Costo unitario de la industria (promedio)',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          backgroundColor: "green",
          borderWidth: 1
        }, {
          label: 'Precio unitario de la industria (promedio)',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    for (let i = 0; i < this.promedioPrecioUnitarios.length; i++) {
      this.LineChart3.data.datasets[1].data.push(this.promedioPrecioUnitarios[i]);
      //this.LineChart3.data.labels.push("Bimestre "+(i+1));
      this.LineChart3.update();
    }
    // this.actualizaProduccionIndustriaBimestres();

    for (let i = 0; i < this.capacidadProduccionIndustriaBimestres.length; i++) {
      //this.LineChart3.data.labels.push("Bimestre "+this.capacidadProduccionIndustriaBimestres[i].numero);

      if (this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual != 0) {
        this.LineChart3.data.datasets[0].data.push(this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual);
        this.LineChart3.update();
      }
    }



  }
  capacidadvsproduccion() {

    this.section_tap_4 = 2;
    this.http.get('http://localhost:8080/produccionBimestres/' + this.codigo).subscribe(
      (response: any) => {
        console.log(this.codigo);
        console.log(response);
        this.sumatoriaCapacidadProduccion = response;
      });
    // document.getElementById("produccionvsventasID").style.display = "none";
    // document.getElementById("costovsprecioID").style.display = "none";
    // document.getElementById("capacidadvsproduccionID").style.display = "block";
    // document.getElementById("companiavscompetenciaID").style.display = "none";
    // document.getElementById("consejosID").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS";

    // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(0, 168, 233)";
    // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";
    //Line chart4:
    this.LineChart4 = new Chart('lineChart4', {
      type: 'line',
      data: {
        labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
        datasets: [{
          label: 'Capacidad de producción de la industria',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          backgroundColor: "green",
          borderWidth: 1
        }, {
          label: 'Produccion real de la industria',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    for (let i = 0; i < this.sumatoriaCapacidadProduccion.length; i++) {
      this.LineChart4.data.datasets[1].data.push(this.sumatoriaCapacidadProduccion[i]);
      //this.LineChart4.data.labels.push("Bimestre "+ (i+1));
      this.LineChart4.update();
    }
    // this.actualizaProduccionIndustriaBimestres();

    for (let i = 0; i < this.capacidadProduccionIndustriaBimestres.length; i++) {
      //this.LineChart4.data.labels.push("Bimestre "+this.capacidadProduccionIndustriaBimestres[i].numero);
      if (this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual != 0) {
        this.LineChart4.data.datasets[0].data.push(this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual);
        this.LineChart4.update();
      }
    }

  }
  companiavscompetencia() {


    this.section_tap_4 = 3;
    this.http.get('http://localhost:8080/utilidadNetaBimestres/' + this.codigo + '/' + this.nombreEmpresa).subscribe(
      (response: any) => {
        console.log(this.codigo);
        console.log(response);
        this.promedioERUtilidadNeta = response;
      });

    // document.getElementById("produccionvsventasID").style.display = "none";
    // document.getElementById("costovsprecioID").style.display = "none";
    // document.getElementById("capacidadvsproduccionID").style.display = "none";
    // document.getElementById("companiavscompetenciaID").style.display = "block";
    // document.getElementById("consejosID").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS";

    // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(0, 168, 233)";
    // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";

    //Line chart5:
    this.LineChart5 = new Chart('lineChart5', {
      type: 'line',
      data: {
        labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
        datasets: [{
          label: 'Utilidad de la compañia',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          backgroundColor: "green",
          borderWidth: 1
        }, {
          label: 'Utilidad promedio de la industria',

          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    for (let i = 0; i < this.promedioERUtilidadNeta.length; i++) {
      this.LineChart5.data.datasets[1].data.push(this.promedioERUtilidadNeta[i]);
      //this.LineChart5.data.labels.push("Bimestre "+(i+1));
      this.LineChart5.update();
    }
    for (let i = 0; i < this.estadoResultados.length; i++) {
      this.LineChart5.data.datasets[0].data.push(this.estadoResultados[i].utilidadNeta);
      //this.LineChart5.data.labels.push("Bimestre "+(i+1));
      this.LineChart5.update();
    }
  }

  consejos() {

    this.section_tap_4 = 4;
    this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(
      (response: any) => {
        console.log(response);
        this.visionGeneral = response;
      });

    // document.getElementById("produccionvsventasID").style.display = "none";
    // document.getElementById("costovsprecioID").style.display = "none";
    // document.getElementById("capacidadvsproduccionID").style.display = "none";
    // document.getElementById("companiavscompetenciaID").style.display = "none";
    // document.getElementById("consejosID").style.display = "block";
    // document.getElementById("titulo").innerText = "ANALISIS";

    // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(0, 168, 233)";
  }


  EstadoDeResultados() {
    this.section_tap_3 = 0;


    // document.getElementById("EstadoDeResultadosID").style.display = "block";
    // document.getElementById("BalanceGeneralID").style.display = "none";
    // document.getElementById("VentasID").style.display = "none";
    // document.getElementById("ProduccionID").style.display = "none";
    // document.getElementById("CompaniaID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";

    // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(0, 197, 245)";
    // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";

  }

  BalanceGeneral() {
    this.section_tap_3 = 1;

    // document.getElementById("EstadoDeResultadosID").style.display = "none";
    // document.getElementById("BalanceGeneralID").style.display = "block";
    // document.getElementById("VentasID").style.display = "none";
    // document.getElementById("ProduccionID").style.display = "none";
    // document.getElementById("CompaniaID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";

    // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(0, 197, 245)";
    // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
  }
  Ventas() {

    this.section_tap_3 = 2;

    // document.getElementById("EstadoDeResultadosID").style.display = "none";
    // document.getElementById("BalanceGeneralID").style.display = "none";
    // document.getElementById("VentasID").style.display = "block";
    // document.getElementById("ProduccionID").style.display = "none";
    // document.getElementById("CompaniaID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";

    // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(0, 197, 245)";
    // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
  }

  Produccion() {
    this.section_tap_3 = 3;
    // document.getElementById("EstadoDeResultadosID").style.display = "none";
    // document.getElementById("BalanceGeneralID").style.display = "none";
    // document.getElementById("VentasID").style.display = "none";
    // document.getElementById("ProduccionID").style.display = "block";
    // document.getElementById("CompaniaID").style.display = "none";
    // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";

    // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(0, 197, 245)";
    // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
  }

  Compania() {

    this.section_tap_3 = 4;
    // document.getElementById("EstadoDeResultadosID").style.display = "none";
    // document.getElementById("BalanceGeneralID").style.display = "none";
    // document.getElementById("VentasID").style.display = "none";
    // document.getElementById("ProduccionID").style.display = "none";
    // document.getElementById("CompaniaID").style.display = "block";
    // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";

    // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(0, 197, 245)";
    //Line chart:
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Utilidad neta por bimestre',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Gráfica Utilidad Neta",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    for (let i = 0; i < this.estadoResultados.length; i++) {
      this.LineChart.data.datasets[0].data.push(this.estadoResultados[i].utilidadNeta);
      this.LineChart.data.labels.push("Bimestre " + (i + 1));
      this.LineChart.update();
    }
  }


  VisionGeneral() {
    this.section_tap_2 = 0;
    // let players_tmp = this.http.getPlayers()
    // if (players_tmp)
    //   for (let player of players_tmp) {
    //     let tmp_player = new VisionGeneral();
    //     tmp_player.nombreEmpresa = player
    //     this.visionGeneral.push(tmp_player);
    //   }
    // this.http.emit("visionGeneral", { codigo: this.codigo }, (response) => {
    //   console.log(response);
    //   if (response.players) {
    //     this.visionGeneral = []
    //     for (let player of response.players) {
    //       let tmp_player = new VisionGeneral();
    //       tmp_player.nombreEmpresa = player
    //       this.visionGeneral.push(tmp_player);
    //     }
    //   }
    //   console.log(this.visionGeneral)
    // })
    //cargar visionGeneral
    // this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     this.visionGeneral = response;
    //   });

    // document.getElementById("VisionGeneralID").style.display = "block";
    // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
    // document.getElementById("VentasTablaAnalisisID").style.display = "none";
    // document.getElementById("PorcentajeMercado").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";

    // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(0, 139, 208)";
    // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
  }

  ProduccionTablaAnalisis() {
    this.section_tap_2 = 1;

    // document.getElementById("VisionGeneralID").style.display = "none";
    // document.getElementById("ProduccionTablaAnalisisID").style.display = "block";
    // document.getElementById("VentasTablaAnalisisID").style.display = "none";
    // document.getElementById("PorcentajeMercado").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";

    // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(0, 139, 208)";
    // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
  }

  VentasTablaAnalisis() {

    this.section_tap_2 = 2;
    // document.getElementById("VisionGeneralID").style.display = "none";
    // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
    // document.getElementById("VentasTablaAnalisisID").style.display = "block";
    // document.getElementById("PorcentajeMercado").style.display = "none";
    // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";

    // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(0, 139, 208)";
    // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
  }


  PorcentajeMercado() {
    this.section_tap_2 = 3;
    //cargar visionGeneral
    this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(
      (response: any) => {
        console.log(response);
        this.visionGeneral = response;
      });

    // document.getElementById("VisionGeneralID").style.display = "none";
    // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
    // document.getElementById("VentasTablaAnalisisID").style.display = "none";
    // document.getElementById("PorcentajeMercado").style.display = "block";
    // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";

    // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
    // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(0, 139, 208)";
    //Pie chart
    this.myPieChart = new Chart('pieI', {
      type: 'pie',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            borderColor: [],
            backgroundColor: []
          }
        ]
      },
      options: {
        title: {
          text: "% Mercado",
          display: true
        }
      }
    });

    this.auxiliarMercadoSinAtender = 0;
    for (let i = 0; i < this.visionGeneral.length; i++) {
      this.myPieChart.data.labels.push(this.visionGeneral[i].nombreEmpresa);
      this.myPieChart.data.datasets[0].data.push(this.visionGeneral[i].porcentajeDeMercado);
      this.auxiliarMercadoSinAtender += (this.visionGeneral[i].porcentajeDeMercado);
      if (i == 0) {
        this.myPieChart.data.datasets[0].borderColor.push("blue");
        this.myPieChart.data.datasets[0].backgroundColor.push("blue");
      }
      if (i == 1) {
        this.myPieChart.data.datasets[0].borderColor.push("green");
        this.myPieChart.data.datasets[0].backgroundColor.push("green");
      }
      if (i == 2) {
        this.myPieChart.data.datasets[0].borderColor.push("red");
        this.myPieChart.data.datasets[0].backgroundColor.push("red");
      }
      if (i == 3) {
        this.myPieChart.data.datasets[0].borderColor.push("orange");
        this.myPieChart.data.datasets[0].backgroundColor.push("orange");
      }
      if (i == 4) {
        this.myPieChart.data.datasets[0].borderColor.push("purple");
        this.myPieChart.data.datasets[0].backgroundColor.push("purple");
      }
      if (i > 4) {
        this.myPieChart.data.datasets[0].borderColor.push("yellow");
        this.myPieChart.data.datasets[0].backgroundColor.push("yellow");
      }
      this.myPieChart.update();
    }
    if (this.auxiliarMercadoSinAtender < 100 && this.auxiliarMercadoSinAtender != 0) {
      this.mercadoSinAtender = 100 - this.auxiliarMercadoSinAtender;
      this.myPieChart.data.labels.push("Mercado sin atender");
      this.myPieChart.data.datasets[0].data.push(this.mercadoSinAtender);
      this.myPieChart.data.datasets[0].borderColor.push("black");
      this.myPieChart.data.datasets[0].backgroundColor.push("black");
      this.myPieChart.update();
    }

  }
  general() { }
  ingresoDiv() {
    if (document.getElementById("div-ingresos").style.display === "none") {
      document.getElementById("div-ingresos").style.display = "block"
    }
    else {
      document.getElementById("div-ingresos").style.display = "none"
    }
  }
  gastosDiv() {
    if (document.getElementById("div-gastos").style.display === "none") {
      document.getElementById("div-gastos").style.display = "block"
    }
    else {
      document.getElementById("div-gastos").style.display = "none"
    }
  }
  resultadosDiv() {
    if (document.getElementById("div-resultados").style.display === "none") {
      document.getElementById("div-resultados").style.display = "block"
    }
    else {
      document.getElementById("div-resultados").style.display = "none"
    }
  }


  generarConsejo1(): boolean {

    if (this.ventas.inventarioUnidades >= 50)
      return true;
    else
      return false;
  }
  generarConsejo2(): boolean {
    let indice = this.estadoResultados.length;
    if (this.estadoResultados.length > 0) {
      if (this.estadoResultados[indice - 1].utilidadNeta < 8000)
        return true;
      else
        return false;
    }
    else
      return false;
  }
  generarConsejo3(): boolean {
    for (let i = 0; i < this.visionGeneral.length; i++) {
      if (this.visionGeneral[i].nombreEmpresa === this.nombreEmpresa) {
        if (this.visionGeneral[i].porcentajeDeMercado < 5)
          return true;
      }
    }
    return false;
  }
  generarConsejo4(): boolean {

    this.porcentajeDeMercadoTotal = 0;
    for (let i = 0; i < this.visionGeneral.length; i++) {
      this.porcentajeDeMercadoTotal += this.visionGeneral[i].porcentajeDeMercado;
    }
    if (this.porcentajeDeMercadoTotal <= 85)
      return true;
    else
      return false;
  }
}
