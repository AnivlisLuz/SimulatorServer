import { BalanceGeneral } from './../../models/balanceGeneral';
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
import { Alert } from 'selenium-webdriver';

import 'chartjs-plugin-labels';
import 'chartjs-plugin-piechart-outlabels';

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

  precioUnitario: number = 150;
  produccion: number = 600;
  inversionEnMarketings: number[] = [0, 500, 1800, 3100, 8300];
  inversionEnMarketing: number = this.inversionEnMarketings[0];
  inversionEnInvestigacions: number[] = [0,1000, 2000, 3000, 4000];
  inversionEnInvestigacion: number = this.inversionEnInvestigacions[0];
  inversionEnActivoss: number[] = [0,6000, 15000, 28000, 40000];
  inversionEnActivos: number = this.inversionEnActivoss[0];

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
  produccionIndustria: Produccion
  ventasIndustria: VentasIndustria;
  codigo: string;

  sumatoriaCapacidadProduccion: number[];
  promedioPrecioUnitarios: number[];
  promedioERUtilidadNeta: number[];
  produccionTotalIndustriaBimestres: number[]



  //LineChart=[];
  myPieChart: any;
  LineChart2: any;
  LineChart3: any;
  LineChart4: any;
  LineChart5: any;
  LineChart: any;

  capitalPeriodoAnterior: number = 5930;
  auxiliarMercadoSinAtender: number;
  mercadoSinAtender: number;
  produccionIndustriaBimestres: Produccion[];
  ventasIndustriaBimestres: VentasIndustria[];
  porcentajeDeMercadoTotal: number;
  existeGanadorPorcentajeMercado:boolean=false;
  unicaValorPositivo:boolean=false;
  esActivo:number=1;
  esUnicaEmpresa:boolean=false;


  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) {
    this.bimestreInicial = new Bimestre();
    this.bimestreActual = new Bimestre();
    this.bimestres = [];
    this.costoProduccion = new CostosProduccion();
    this.ventas = new Ventas();
    this.estadoResultados = [];
    this.balanceGeneral = new BalanceGeneral();
    this.numeroBimestre = 0;
    this.produccionIndustria = new Produccion();
    this.ventasIndustria = new VentasIndustria();
    this.visionGeneral = [];
    this.produccionIndustriaBimestres = [];
    this.ventasIndustriaBimestres = [];
    this.sumatoriaCapacidadProduccion = [];
    this.promedioPrecioUnitarios = [];
    this.promedioERUtilidadNeta = [];
    this.produccionTotalIndustriaBimestres=[];
    if (!this.http.game)
      this.router.navigateByUrl('/jugar');
  }
  onChangeinversionEnMarketings(data) {
    console.log("changed onChangeinversionEnMarketings", data)
    this.inversionEnMarketing = parseInt(data);
  }
  onChangeinversionEnInvestigacions(data) {
    console.log("changed onChangeinversionEnInvestigacions", data)
    this.inversionEnInvestigacion = parseInt(data);
  }
  onChangeinversionEnActivoss(data) {
    console.log("changed onChangeinversionEnActivoss", data)
    this.inversionEnActivos = parseInt(data);
    this.calcularLimiteProduccion(parseInt(data));
  }
  calcularLimiteProduccion(inversionActivos){
    let produccion=document.getElementById("produccion")
    let limite=600
    if(inversionActivos === 0)
      limite=600
    if(inversionActivos === 6000)
      limite=750
    if(inversionActivos === 15000)
      limite=900
    if(inversionActivos === 28000)
      limite=1140
    if(inversionActivos === 40000)
      limite=1500
    produccion.setAttribute("max",limite.toString())
  console.log(inversionActivos)
  console.log(limite)
    if(parseInt((<HTMLInputElement>document.getElementById("produccion")).value) >limite)
      (<HTMLInputElement>document.getElementById("produccion")).value= limite.toString()

  }
  calcularLimitePrecioUnitario(data){
    let precioUnitario=document.getElementById("precioUnitario")
    let limite=Math.round((parseInt(data)*35+ 30270)/parseInt(data))
    precioUnitario.setAttribute("min",limite.toString())
    if(parseInt((<HTMLInputElement>document.getElementById("precioUnitario")).value) <limite)
      (<HTMLInputElement>document.getElementById("precioUnitario")).value= limite.toString()



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
  //     if (this.produccionIndustriaBimestres.length > 0) {
  //       if (this.produccionIndustriaBimestres[this.produccionIndustriaBimestres.length - 1].numero != this.produccion.numero) {
  //         this.produccionIndustriaBimestres.push(this.produccion);
  //       }
  //     }
  //     else {
  //       this.produccionIndustriaBimestres.push(this.produccion);

  //     }

  //   }

  // }
  bloquear()
  {
    console.log("this.numeroBimestre => ",this.numeroBimestre,"this.existeGanadorPorcentajeMercado =>",this.existeGanadorPorcentajeMercado," this.unicaValorPositivo =>",this.unicaValorPositivo,"this.esActivo =>",this.esActivo,"this.esUnicaEmpresa =>",this.esUnicaEmpresa);
    if(this.numeroBimestre == 3||this.existeGanadorPorcentajeMercado==true||this.unicaValorPositivo==true||this.esActivo==0||this.esUnicaEmpresa==true)
    {
      document.getElementById("numero-bimestre-siguiente").style.display = "none";
      document.getElementById("precioUnitarioTD").style.display = "none";
      document.getElementById("tabla-proyeccionesID").style.display = "none";
      document.getElementById("boton-decisionID").style.display = "none";
      document.getElementById("produccionTD").style.display = "none";
      document.getElementById("inversionEnMarketingTD").style.display = "none";
      document.getElementById("inversionEnInvestigacionTD").style.display = "none";
      document.getElementById("inversionEnActivosTD").style.display = "none";
    }
  }
  actualizarActivo()
  {
    this.http.game.getActivo((response) => {
    if (response)
    {
      this.esActivo = response.esActivo
      console.log("getActivo front", this.esActivo)
      this.bloquear();
    }
    });
      this.bloquear();
  }
  retirarseJuego()
  {
      let esRetirarse = confirm("¿Seguro de retirarse del juego?");
      if( esRetirarse )
      {
          this.http.game.retirarseJuego(this.numeroBimestre,(response) => {
            if(response)
            {
              console.log("retirarseJuego front =>", response.esRetirado)
              this.bloquear();
            }
          });
          this.bloquear();

      }
      this.actualizarActivo();
      console.log("Ya acabria actualizar activo")
      this.bloquear();
  }
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

  obtenerTodosLosDatos() {

    this.http.game.calcularTodoPrueba(this.numeroBimestre, (response) => {
      console.log("calcularTodoPrueba", response)
    });
  }
  iniciar() {
    let data_bimestre = {
      precioUnitario: this.precioUnitario,
      produccion: this.produccion,
      inversionEnMarketing: this.inversionEnMarketing,
      inversionEnInvestigacion: this.inversionEnInvestigacion,
      inversionEnActivos: this.inversionEnActivos
    }
    let propuesta_Actual: number = parseInt(data_bimestre.inversionEnActivos + "")
      + parseInt(data_bimestre.inversionEnInvestigacion + "") +
      parseInt(data_bimestre.inversionEnMarketing + "")
    //alert("presupuesto actual " + propuesta_Actual + " => capital anterior " + this.capitalPeriodoAnterior)
    if (this.http.game.bimestre_inicial_c == 0) {
      if (this.http.game.player.bimestre_uno) {
        if (this.http.game.bimestre_uno_c == 0) {
          if (this.http.game.player.bimestre_dos) {
            if (this.http.game.bimestre_dos_c == 0) {
              if (this.http.game.player.bimestre_tres) {
                alert("Terminado")
              } else {
                this.http.game.addBimestreTres(data_bimestre, (response) => {
                  console.log("addBimestreTres", response)
                })
                this.numeroBimestre = 3;
                if (this.http.game.bimestre_tres_c == 1) {
                  this.obtenerTodosLosDatos();
                }
                this.bloquear();
              }
            } else {
              alert("faltan completar el bimestre dos")
            }
          } else {
            this.http.game.addBimestreDos(data_bimestre, (response) => {
              console.log("addBimestreDos", response)
            })
            this.numeroBimestre = 2;
            if (this.http.game.bimestre_dos_c == 1) {
              this.obtenerTodosLosDatos();
            }
            console.log("numero Bimestre front => ", this.numeroBimestre)
          }
        } else {
          alert("faltan completar el bimestre uno")
        }
      } else {
        this.http.game.addBimestreUno(data_bimestre, (response) => {
          console.log("addBimestreUno", response)
        })
        this.numeroBimestre = 1;
        if (this.http.game.bimestre_uno_c == 1) {
          this.obtenerTodosLosDatos();
        }
        console.log("numero Bimestre front => ", this.numeroBimestre)
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
    this.bimestreActual.jugador = this.nombreEmpresa;
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

    this.actualizarActivo();
    this.bloquear();

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
    this.actualizarActivo();
    this.bloquear();
  }

  tanalisis() {
    this.tap_position = 2
    this.http.game.getVisionGeneral(this.numeroBimestre, (response) => {
      console.log("getVisionGeneral front", response)
      if (response){
        this.visionGeneral = response.visionGeneral
        console.log("existeGanadorPorcentajeMercado ==>", this.existeGanadorPorcentajeMercado)
        this.existeGanadorPorcentajeMercado=response.existeGanadorPorcentajeMercado
        console.log("existeGanadorPorcentajeMercado ==>", this.existeGanadorPorcentajeMercado)
        this.bloquear();
      }
    });
    this.http.game.getProduccion(this.numeroBimestre, (response) => {
      console.log("getProduccion front", response)
      if (response)
        this.produccionIndustria = response
        this.produccionIndustria.costeMedioUnitarioActualDecimal=this.produccionIndustria.costeMedioUnitarioActual.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    });
    this.http.game.getVentasIndustria(this.numeroBimestre, (response) => {
      console.log("getVentasIndustria front", response)
      if (response)
        this.ventasIndustria = response
    });

    this.actualizarActivo();
    this.bloquear();

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
    this.tap_position = 3;
    this.http.game.getEstadoResultados(this.numeroBimestre,(response) => {
      console.log("getEstadoResultados front", response)
      if (response){
        this.estadoResultados = response.estadoResultados
        this.unicaValorPositivo=response.unicaValorPositivo
        console.log("estadoResultados front", this.estadoResultados)
        console.log("unicaValorPositivo front", this.unicaValorPositivo)
        this.capitalPeriodoAnterior=this.estadoResultados[this.estadoResultados.length-1].utilidadNeta
        this.bloquear();
        }
    });
    this.bloquear();
    this.http.game.getBalanceGeneral(this.numeroBimestre, (response) => {
      console.log("getBalanceGeneral front", response)
      if (response)
        this.balanceGeneral = response
    });

    this.http.game.getVentas(this.numeroBimestre, (response) => {
      console.log("getVentas front", response)
      if (response){
        this.ventas = response
        this.actualizarActivo();
        this.bloquear();
      }
    });
    this.bloquear();
    this.http.game.getCostosProduccion(this.numeroBimestre, (response) => {
      console.log("getCostosProduccion front", response)
      if (response)
        this.costoProduccion = response

        this.costoProduccion.costoUnitarioDecimal=this.costoProduccion.costoUnitario.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    });

    this.actualizarActivo();
    this.bloquear();
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
    this.LineChart2 = new Chart('lineChart2', {
      type: 'line',
      data: {
        labels: ["Bimestre inicial"],
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
              beginAtZero: true,
              callback: function(valor, index, valores) {
                return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              }
            }
          }]
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
                label: function(tooltipItem, data) {
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });

    //produccion vs ventas //costo vs precio
    this.http.game.getAllProduccion((response) => {
      console.log("getAllProduccion front", response)
      this.produccionIndustriaBimestres = response

    for (let i = 0; i < this.produccionIndustriaBimestres.length; i++) {
      console.log("produccionIndustriaBimestres ==> ", this.produccionIndustriaBimestres[i]);

      //this.LineChart2.data.labels.push("Bimestre "+this.produccionIndustriaBimestres[i].numero);
      if (this.produccionIndustriaBimestres[i])
        this.LineChart2.data.datasets[0].data.push(this.produccionIndustriaBimestres[i].produccionIndustriaValorActual);
      this.LineChart2.update();
    }

    });

    //produccion vs ventas
    this.http.game.getAllVentasIndustria((response) => {
      console.log("getAllVentasIndustria front", response)
      this.ventasIndustriaBimestres = response


    for (let i = 0; i <=this.numeroBimestre; i++) {
      if(this.ventasIndustriaBimestres[i].numero!=0)
      {
        this.LineChart2.data.labels.push("Bimestre " + this.ventasIndustriaBimestres[i].numero);
      }
      this.LineChart2.data.datasets[1].data.push(this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual);
      this.LineChart2.update();
    }

    });

    //costo vs precio
           this.http.game.getPromedioPrecioUnitarios((response) => {
      console.log("getPromedioPrecioUnitarios  front", response)
      this.promedioPrecioUnitarios = response
    });

    //capacidad vs produccion
    this.http.game.getSumatoriaCapacidadProduccion((response) => {
      console.log("getSumatoriaCapacidadProduccion  front", response)
      this.sumatoriaCapacidadProduccion = response
    });
    this.http.game.getProduccionTotalIndustriaBimestres(this.numeroBimestre, (response) => {
      console.log("getProduccionTotalIndustriaBimestres front", response)
      if (response)
        this.produccionTotalIndustriaBimestres=response
    });

    //compania vs competencia
    this.http.game.getPromedioUtilidadNeta(this.numeroBimestre,(response) => {
      console.log("getPromedioUtilidadNeta front", response)
      this.promedioERUtilidadNeta = response
    });
    this.http.game.getEstadoResultados(this.numeroBimestre,(response) => {
      console.log("getEstadoResultados front", response)
      if (response){
        this.estadoResultados = response.estadoResultados
        this.bloquear();
        }
    });
    this.actualizarActivo();
    this.bloquear();





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
    //this.produccionvsventas();

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

  maquinaria() {
    this.section_tap_1 = 5;
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
        labels: ["Bimestre inicial"],
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
              beginAtZero: true,
              callback: function(valor, index, valores) {
                return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              }
            }
          }]
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
                label: function(tooltipItem, data) {
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });

    for (let i = 0; i < this.produccionIndustriaBimestres.length; i++) {
      console.log("produccionIndustriaBimestres ==> ", this.produccionIndustriaBimestres[i]);

      //this.LineChart2.data.labels.push("Bimestre "+this.produccionIndustriaBimestres[i].numero);
      if (this.produccionIndustriaBimestres[i])
        this.LineChart2.data.datasets[0].data.push(Math.round(this.produccionIndustriaBimestres[i].produccionIndustriaValorActual));
      this.LineChart2.update();
    }
    for (let i = 0; i <=this.numeroBimestre; i++) {
      if(this.ventasIndustriaBimestres[i].numero!=0)
      {
        this.LineChart2.data.labels.push("Bimestre " + this.ventasIndustriaBimestres[i].numero);
      }
      this.LineChart2.data.datasets[1].data.push(Math.round(this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual));
      this.LineChart2.update();
    }




  }
  costovsprecio() {

    this.section_tap_4 = 1;
    /*this.http.get('http://localhost:8080/precioUnitarioBimestres/' + this.codigo).subscribe(
      (response: any) => {
        console.log(this.codigo);
        console.log(response);
        this.promedioPrecioUnitarios = response;

      });*/


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
        labels: ["Bimestre inicial"],
        datasets: [{
          label: 'Costo medio de produccion (unitario)',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          backgroundColor: "green",
          borderWidth: 1
        }, {
          label: 'Precio unitario (promedio)',
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
              beginAtZero: true,
              callback: function(valor, index, valores) {
                return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              }
            }
          }]
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
                label: function(tooltipItem, data,) {
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });

    for (let i = 0; i <=this.numeroBimestre; i++) {
      this.LineChart3.data.datasets[1].data.push(Math.round(this.promedioPrecioUnitarios[i]));
      this.LineChart3.update();
    }

    for (let i = 0; i <=this.numeroBimestre; i++) {
      if(this.produccionIndustriaBimestres[i].numero!=0)
      {
        this.LineChart3.data.labels.push("Bimestre "+this.produccionIndustriaBimestres[i].numero);
      }
        this.LineChart3.data.datasets[0].data.push(Math.round(this.produccionIndustriaBimestres[i].costeMedioUnitarioActual));
        this.LineChart3.update();
    }



  }
  capacidadvsproduccion() {

    this.section_tap_4 = 2;
    /*this.http.get('http://localhost:8080/produccionBimestres/' + this.codigo).subscribe(
      (response: any) => {
        console.log(this.codigo);
        console.log(response);
        this.sumatoriaCapacidadProduccion = response;
      });*/
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
        labels: ["Bimestre inicial"],
        datasets: [{
          label: 'Capacidad de producción',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          backgroundColor: "green",
          borderWidth: 1
        }, {
          label: 'Produccion de la industria',
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
             beginAtZero: true,
              callback: function(valor, index, valores) {
                return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              }
            }
          }]
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
                label: function(tooltipItem, data) {
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });

    for (let i = 0; i <=this.numeroBimestre; i++) {
        this.LineChart4.data.datasets[0].data.push(Math.round(this.sumatoriaCapacidadProduccion[i]));
        if(i!=0)
        {
          this.LineChart4.data.labels.push("Bimestre " + i);
        }
        this.LineChart4.update();
    }

    for (let i = 0; i <=this.numeroBimestre; i++) {   
        this.LineChart4.data.datasets[1].data.push(Math.round(this.produccionTotalIndustriaBimestres[i]));
        this.LineChart4.update();
    }
  }
  companiavscompetencia() {


    this.section_tap_4 = 3;
    /*this.http.get('http://localhost:8080/utilidadNetaBimestres/' + this.codigo + '/' + this.nombreEmpresa).subscribe(
      (response: any) => {
        console.log(this.codigo);
        console.log(response);
        this.promedioERUtilidadNeta = response;
      });
    */
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
        labels: ["Bimestre inicial"],
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
              beginAtZero: true,
              callback: function(valor, index, valores) {
                return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              }
            }
          }]
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
                label: function(tooltipItem, data) {
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });

    for (let i = 0; i <=this.numeroBimestre; i++) {
      this.LineChart5.data.datasets[1].data.push(Math.round(this.promedioERUtilidadNeta[i]));
      if(i!=0) 
      {
        this.LineChart5.data.labels.push("Bimestre " + i);
      }
      this.LineChart5.update();
    }

    for (let i = 0; i <=this.numeroBimestre; i++) {
      this.LineChart5.data.datasets[0].data.push(Math.round(this.estadoResultados[i].utilidadNeta));
      this.LineChart5.update();
    }
  }

  consejos() {

    this.section_tap_4 = 4;
    /*this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(
      (response: any) => {
        console.log(response);
        this.visionGeneral = response;
      });*/

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
        labels: ["Bimestre inicial"],
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
        hover: {
          mode: 'nearest',
          intersect: true
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
                label: function(tooltipItem, data) {
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
          } // end callbacks:
        }, //end tooltips
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        callback: function(value, index, values) {
                               return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                       }
                    }
                }]
            }
      }
    });

    for (let i = 0; i < this.estadoResultados.length; i++) {
      this.LineChart.data.datasets[0].data.push(this.estadoResultados[i].utilidadNeta);
      if(i!=0)
      {
        this.LineChart.data.labels.push("Bimestre " + i);
      }
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
    //this.http.get('http://localhost:8080/visionGeneral/' + //this.codigo + '/' + this.numeroBimestre).subscribe(
    //(response: any) => {
    //console.log(response);
    //this.visionGeneral = response;
    //});

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
      type: 'outlabeledPie',
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
          display: true,
          responsive: false
        },
        plugins:{
          legend: false,
            outlabels: {
              text: '%l %v' + '%',
              color: 'white',
              stretch: 45,
              font: {
                resizable: true,
                minSize: 12,
                maxSize: 24
                    }
              }
        }
      }
    });

    this.auxiliarMercadoSinAtender = 0;
    for (let i = 0; i < this.visionGeneral.length; i++) {
      this.myPieChart.data.labels.push(this.visionGeneral[i].jugador);
      this.myPieChart.data.datasets[0].data.push(this.visionGeneral[i].porcentajeDeMercado);
      this.auxiliarMercadoSinAtender += (this.visionGeneral[i].porcentajeDeMercado);
      if (i == 0) {
        this.myPieChart.data.datasets[0].borderColor.push("#FF3784");
        this.myPieChart.data.datasets[0].backgroundColor.push("#FF3784");
      }
      if (i == 1) {
        this.myPieChart.data.datasets[0].borderColor.push("#36A2EB");
        this.myPieChart.data.datasets[0].backgroundColor.push("#36A2EB");
      }
      if (i == 2) {
        this.myPieChart.data.datasets[0].borderColor.push("#4BC0C0");
        this.myPieChart.data.datasets[0].backgroundColor.push("#4BC0C0");
      }
      if (i == 3) {
        this.myPieChart.data.datasets[0].borderColor.push("#F77825");
        this.myPieChart.data.datasets[0].backgroundColor.push("#F77825");
      }
      if (i == 4) {
        this.myPieChart.data.datasets[0].borderColor.push("#9966FF");
        this.myPieChart.data.datasets[0].backgroundColor.push("#9966FF");
      }
      this.myPieChart.update();
    }
    if (this.auxiliarMercadoSinAtender < 100 && this.auxiliarMercadoSinAtender != 0) {
      this.mercadoSinAtender = 100 - this.auxiliarMercadoSinAtender;
      this.myPieChart.data.labels.push("Mercado sin atender");
      this.myPieChart.data.datasets[0].data.push(this.mercadoSinAtender);
      this.myPieChart.data.datasets[0].borderColor.push("#000000");
      this.myPieChart.data.datasets[0].backgroundColor.push("#000000");
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

    if (this.ventas && this.ventas.inventarioUnidades && this.ventas.inventarioUnidades > 100)
      return true;
    else
      return false;
  }
  generarConsejo2(): boolean {
    let indice = this.estadoResultados.length;
    if (this.estadoResultados.length > 0) {
      if (this.estadoResultados[indice - 1].utilidadNeta < 5000)
        return true;
      else
        return false;
    }
    else
      return false;
  }
  generarConsejo3(): boolean {
    for (let i = 0; i < this.visionGeneral.length; i++) {
      if (this.visionGeneral[i].jugador === this.nombreEmpresa) {
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
  fin() {
    let numerito = this.numeroBimestre
    this.router.navigateByUrl('/fin');
  }
}
