const randtoken = require('rand-token');
const db = require("./database")

var mercados = {}

exports.setSocket = io => {
    io.on('connection', (socket) => {
        console.log('user connected');
        socket.on('createGame', (data, client) => {
            console.log("createGame =>", data)
            let token = randtoken.generate(5);
            mercados[token] = new Mercado(data.nombreMercado, data.cantidadJugadores, token)
            client({ token: token, message: "ok" })
        })
        socket.on('joinGame', (data, client) => {
            console.log("socket joinGame =>", data)
            let _mercado = mercados[data.codigo] 
            if (_mercado) {
                client(_mercado.addPlayer(data.player_name,data.codigo))  
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
        socket.on('addBimestreUno', (data, client) => {
            console.log("addBimestreUno joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addBimestreUno(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
        socket.on('addBimestreDos', (data, client) => {
            console.log("addBimestreDos joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addBimestreDos(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
        socket.on('addBimestreTres', (data, client) => {
            console.log("addBimestreTres joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addBimestreTres(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
    });
}

class Mercado {

    constructor(nombre, cantidad_judagores, token) {
        this.nombre = nombre
        this.cantidad_judagores = cantidad_judagores
        this.token = token
        this.players = {}
        this.mercado=2675
        this.mercadoDesatendido=175
        this.porcentajeMercadoDesatendido=0
    }
    addPlayer(name,codigo) {
        let player_tmp = this.players[name]
        if (player_tmp) {
            return { message: "ok" }
        } else if (!this.isFull()) {
            this.players[name] = new Player(name,codigo)
            db.saveEmpresa(this.players[name])
            return { message: "ok" }
        } else {
            return "ya esta lleno"
        }
    }
    addBimestreUno(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreUno(data.data, data.codigo )
            return { message: "ok" }
        } else {
            return "no hay player uno"
        }
    }
    addBimestreDos(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreDos(data.data, data.codigo)
            return { message: "ok" }
        } else {
            return "no hay player uno"
        }
    }
    addBimestreTres(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreTres(data.data, data.codigo)
            return { message: "ok" }
        } else {
            return "no hay player uno"
        }
    }
    isFull() {
        return Object.keys(this.players).length >= this.cantidad_judagores
    }
    getPlayers() {
        let res = []
        for (let player in this.players) {
            res.push(this.players[player].toString())
        }
        return { size: this.cantidad_judagores, players: res, codigo: this.token }
    }
    calcular(empresas){
        this.mercado=0
        this.mercadoDesatendido=0
        for(empresa of empresas){
            this.mercado=this.mercado+empresa.cantidadIdealTotal
            this.mercadoDesatendido=this.mercadoDesatendido+empresa.cantidadRealVendida
        }
        this.mercadoDesatendido=this.mercado- this.mercadoDesatendido
        this.porcentajeMercadoDesatendido=Math.floor((this.mercadoDesatendido*100)/this.mercado)


     } 

}

mercados["a"] = new Mercado("nombre mercardo", 2, "a")
class Player {
    constructor(name,codigo,cantidadIdealTotal,produccion,cantidadRealVendida,cantidadIdeal) {
        this.name = name
        this.bimestre_inicial = new Bimestre(150, 500, 3000, 1500, 3000,0,codigo,name)
        db.saveBimestre(this.bimestre_inicial)
        this.cantidadIdealTotal=535
        this.produccion=500
        this.cantidadRealVendida=500
        this.cantidadIdeal=500
        this.codigo=codigo
    }
  
    addBimestreUno(data,codigo) {
        this.bimestre_uno = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos,
            1,
            codigo,
            this.name)
            this.produccion=data.produccion
        db.saveBimestre(this.bimestre_uno)

    }
    addBimestreDos(data,codigo) {
        this.bimestre_dos = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos,
            2,
            codigo,
            this.name)
            this.produccion=data.produccion
            db.saveBimestre(this.bimestre_dos)

    }
    addBimestreTres(data,codigo) {
        this.bimestre_tres = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos,
            3,
            codigo,
            this.name)
            this.produccion=data.produccion
            db.saveBimestre(this.bimestre_tres)

    }
    toString() {
        let res = {}
        res.name = this.name
        res.bimestre_inicial = this.bimestre_inicial.toString()
        if (this.bimestre_uno) res.bimestre_uno = this.bimestre_uno.toString()
        if (this.bimestre_dos) res.bimestre_dos = this.bimestre_dos.toString()
        if (this.bimestre_tres) res.bimestre_tres = this.bimestre_tres.toString()
        return res
    }

}
class Bimestre {
    constructor(precioUnitario, produccion, inversionEnMarketing, inversionEnInvestigacion, inversionEnActivos,numero,codigo, jugador) {
        this.precioUnitario = precioUnitario
        this.produccion = produccion
        this.inversionEnMarketing = inversionEnMarketing
        this.inversionEnInvestigacion = inversionEnInvestigacion
        this.inversionEnActivos = inversionEnActivos
        this.numero = numero
        this.codigo = codigo
        this.jugador = jugador
    }
    toString() {
        return {
            precioUnitario: this.precioUnitario,
            produccion: this.produccion,
            inversionEnMarketing: this.inversionEnMarketing,
            inversionEnInvestigacion: this.inversionEnInvestigacion,
            inversionEnActivos: this.inversionEnActivos
        }
    }
}
class Empresa{
      constructor(name,codigo,cantidadIdealTotal,produccion,cantidadRealVendida,cantidadIdeal){
        this.name = name
        this.cantidadIdealTotal=cantidadIdealTotal
        this.produccion=produccion
        this.cantidadRealVendida=cantidadRealVendida
        this.cantidadIdeal=cantidadIdeal
        this.codigo=codigo
    }
        obtenerPorcentaje( investigacion){
        if(investigacion==0)
            return 0
        if(investigacion==1500)
            return  (0.1*this.cantidadIdeal)
        if(investigacion==3000)
            return  (0.3*this.cantidadIdeal)
        if(investigacion==4500)
            return  (0.5*this.cantidadIdeal)
        if(investigacion==6000)
            return  (0.7*this.cantidadIdeal)
        return 0;
    }
    calcular(players, precioUnitario, marketing, investigacion , activos, inventarioUnidadesAnterior ){
        suma=0;
       for ( player of players){
           if(player.name != this.name)
               suma=suma+player.produccion();
       }
       suma=suma/2;
       this.cantidadIdeal= ((337.5-precioUnitario)/0.125)-suma;
       this.cantidadIdealTotal=this.cantidadIdeal+obtenerPorcentaje(marketing)+obtenerPorcentaje(investigacion)+obtenerPorcentaje(activos);
       this.cantidadRealVendida=Math.min(cantidadIdealTotal,produccion+inventarioUnidadesAnterior);
    }
}
class BalanceGeneral{
    constructor(numeroBimestre,codigo, jugador ) {
        this.caja=32711
        this.bancos=14019
        this.inventario=0
        this.corriente=46730
        this.totalActivos=46748
        this.capital=7218
        this.utilidadEjercicio=38230
        this.totalPatrimonio=45448
        this.totalPasivoPatrimonio=46748
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular( utilidadBruta, precioUnitario,  inventario, utilidadNeta){
        this.caja=  (utilidadBruta*0.7);
        this.bancos= (utilidadBruta*0.3);
        this.inventario=precioUnitario-inventario;
        this.corriente=this.bancos+this.caja+this.inventario;
        this.totalActivos=this.corriente+8500;
        this.utilidadEjercicio=utilidadNeta;
        this.capital=this.totalActivos-this.utilidadEjercicio+1300;
        this.totalPatrimonio=this.capital+this.utilidadEjercicio;
        this.totalPasivoPatrimonio=this.totalPatrimonio+1300;
    }

  }
  class EstadoResultados{
    constructor(numeroBimestre,codigo, jugador ) {
        this.ingresos=95000;
        this.ventas=75000;
        this.otrosIngresos=10000;
        this.capitalAnterior=10000;
        this.costos=48270;
        this.materiaPrima=17500;
        this.manoObra=8000;
        this.costosIndirectos=22770;
        this.utilidadBruta=46730;
        this.gastosOperativos=8500;
        this.inversionMarketing=3500;
        this.inversionInvestigacion=1500;
        this.inversionActivos=3500;
        this.utilidadNeta=38230;
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }

    calcular(ventasRealizadasMonetario, materiaPrima, manoObra, costosIndirectos, inversionMarketing, inversionInvestigacion, inversionEnActivos, utilidadNetaAnterior ){
        this.ventas=ventasRealizadasMonetario;
        this.otrosIngresos=10000;
        this.capitalAnterior=utilidadNetaAnterior;
        this.ingresos=this.ventas+this.otrosIngresos+this.capitalAnterior;
        this.materiaPrima=materiaPrima;
        this.manoObra=manoObra;
        this.costosIndirectos=costosIndirectos;
        this.costos=this.materiaPrima+this.manoObra+this.costosIndirectos;
        this.utilidadBruta=this.ingresos-this.costos;
        this.inversionMarketing=inversionMarketing;
        this.inversionInvestigacion=inversionInvestigacion;
        this.inversionActivos=inversionEnActivos;
        this.gastosOperativos=this.inversionActivos+this.inversionInvestigacion+this.inversionMarketing;
        this.utilidadNeta=this.utilidadBruta-this.gastosOperativos;
    }
  }

  class Ventas{
  
    constructor(numeroBimestre,codigo, jugador ) {
        this.producidoUnidades=500
        this.producidoMonetario=47270
        this.ventasRealizadasUnidades=500
        this.ventasRealizadasMonetario=75000
        this.inventarioUnidades=0
        this.inventarioMonetario=0
        this.pedidosNoAtendidosMonetario=0
        this.pedidosNoAtendidosUnidades=0
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular( produccion,  costoUnitario,  inventarioUnidadesAnterior,  precioUnitario,  cantidadReal){
        this.producidoUnidades=produccion;
        this.producidoMonetario=produccion*costoUnitario;
        this.inventarioUnidades=this.producidoUnidades+inventarioUnidadesAnterior-this.ventasRealizadasUnidades;
        this.inventarioMonetario=this.inventarioUnidades*precioUnitario;
        this.ventasRealizadasUnidades=cantidadReal;
        this.ventasRealizadasMonetario=this.ventasRealizadasUnidades*precioUnitario;
        if(cantidadReal<(produccion+inventarioUnidadesAnterior))
            this.pedidosNoAtendidosUnidades=0;
        else
            this.pedidosNoAtendidosUnidades=cantidadReal-(produccion+inventarioUnidadesAnterior);
        this.pedidosNoAtendidosMonetario=this.pedidosNoAtendidosUnidades*precioUnitario;
    }
}

class CostosProduccion{
    constructor(numeroBimestre,codigo, jugador ) {
        this.materiaPrima=17500;
        this.costoTotal=48270;
        this.costoUnitario= 94.54;
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular( produccion){
        this.materiaPrima=produccion*35;
        this.costoTotal=this.materiaPrima+8000+22770;
        this.costoUnitario=this.costoTotal/produccion;
    }
}
class VisionGeneral{
    constructor(ventas,beneficio,precioUnitario,porcentajeDeMercado,numeroBimestre,codigo, jugador){
        this.porcentajeDeMercado=porcentajeDeMercado
        this.precioUnitario=precioUnitario
        this.beneficio=beneficio
        this.ventas=ventas
        this.numeroBimestre=numeroBimestre
        this.codigo=codigo;
        this.jugador=jugador
    }
}

class Produccion{
    constructor(numeroBimestre,codigo, jugador){
        this.produccionIndustriaValorActual=2500
        this.produccionIndustriaValorAnterior
        this.costeMedioTotalActual=48270
        this.costeMedioTotalAnterior
        this.costeMedioUnitarioActual=94.54
        this.costeMedioUnitarioAnterior
        this.numeroBimestre=numeroBimestre
        this.codigo=codigo
        this.jugador=jugador
    }
    calcular(){
        this.produccionIndustriaValorAnterior=this.produccionIndustriaValorActual
        this.costeMedioTotalAnterior=this.costeMedioTotalActual
        this.costeMedioUnitarioAnteriort=this.costeMedioUnitarioActual
        this.produccionIndustriaValorActual=0
        this.costeMedioTotalActual=0
        this.costeMedioUnitarioActual=0
        for(bimestre of bimestres){
            this.produccionIndustriaValorActual= this.produccionIndustriaValorActual+bimestre.produccion
        }
        for(costoProduccion of costosProduccion){
            this.costeMedioTotalActual=this.costeMedioTotalActual+costoProduccion.costoTotal
            this.costeMedioUnitarioActual=this.costeMedioUnitarioActual +costoProduccion.costoUnitario
        }
        this.costeMedioTotalActual=this.costeMedioTotalActual /costosProduccionList.length
        this.costeMedioUnitarioActual=this.costeMedioUnitarioActual /costosProduccionList.length
    }
}
class VentasIndustria{
    constructor(numeroBimestre,codigo, jugador){
        this.ventasIndustriaUnidadesActual=2500
        this.ventasIndustriaUnidadesAnterior
        this.ventasIndustriaMonetarioActual=375000
        this.ventasIndustriaMonetarioAnterior
        this.precioUnitarioPromedioActual=150
        this.precioUnitarioPromedioAnterior
        this.inventarioPromediosActual=25
        this.invetarioPromediosAnterior
        this.numeroBimestre=numeroBimestre
        this.codigo=codigo
        this.jugador=jugador
    }
    calcular(bimestres, ventas){
        this.invetarioPromediosAnterior=this.inventarioPromediosActual
        this.ventasIndustriaMonetarioAnterior=this.ventasIndustriaMonetarioActual
        this.ventasIndustriaUnidadesAnterior=this.ventasIndustriaUnidadesActual
        this.precioUnitarioPromedioAnterior=this.precioUnitarioPromedioActual
        this.precioUnitarioPromedioActual=0
        this.ventasIndustriaUnidadesActual=0
        this.ventasIndustriaMonetarioActual=0
        this.inventarioPromediosActual=0
        for(bimestre of bimestres){
            precioUnitarioPromedioActual=precioUnitarioPromedioActual+bimestre.precioUnitario
        }
        this.precioUnitarioPromedioActual=this.precioUnitarioPromedioActual/(bimestres.length)

        for(venta of ventas){
            this.ventasIndustriaUnidadesActual=this.ventasIndustriaUnidadesActual+venta.ventasRealizadasUnidades
            this.ventasIndustriaMonetarioActual=this.ventasIndustriaMonetarioActual+venta.ventasRealizadasMonetario
            this.inventarioPromediosActual=this.inventarioPromediosActual+venta.inventarioUnidades
        }
        this.inventarioPromediosActual=this.inventarioPromediosActual/(ventas.length)
    }
      
}
function  sleep(ms){
    return new Promise(resolve=>{setTimeout(resolve,ms)})
}
async function calcularTodo(codigoJuego, numeroBimestre) {
    let bimestres = []
    let empresas    =[]
    let player = {}
    db.getAllBimestresByCodigoYNumero(codigoJuego,numeroBimestre, function(error, res)  {
        if (error) {
            console.log("mierrorsdfskfjskjfklfjkl")
            console.log(error.message)
        } else {
            bimestres=res
            console.log("mi bimestres")
            console.log(bimestres)

        }
    })
    await  sleep(2000)
    db.getEmpresasPorCodigoDeJuego(codigoJuego, function(error, res) {
        if (error) {
            console.log("error")
        } else {
            
            empresas=res
            console.log(empresas)

        }
    })
    await  sleep(2000)

    suma=0
    console.log(bimestres.length)
    for(let i = 0; i<bimestres.length; i++){
        bimestre= bimestres[i]
        console.log("entro")
        console.log(bimestre)
        ventasUnidades=0
        utilidadNeta=10000
        if(bimestre.numero!=0){
            db.getVentasPorCodigoDeJuegoNombreNumero(codigoJuego,bimestre.jugador,numeroBimestre-1, function(error, res) {
                if (error) {
                    console.log("error")
                } else {
                    ventasAnterior=res
                }
            })     
            await  sleep(3000)

           db.getEstadoResultadosPorCodigoDeJuegoNombreNumero(codigoJuego,bimestre.jugador,numeroBimestre-1,  function(error, res) {
                if (error) {
                    console.log("error")
                } else {
                    estadoResultadosAnterior=res
                }
            })            
            await  sleep(3000)
            ventasUnidades = ventasAnterior.inventarioUnidades
            utilidadNeta = estadoResultadosAnterior.utilidadNeta
        }
        let costoProduccion=new CostosProduccion(bimestre.numero, bimestre.codigo, bimestre.jugador)
        costoProduccion.calcular(bimestre.produccion)
        /*db.getEmpresaPorCodigoDeJuegoYNombre(codigoJuego,bimestre.jugador,  function(error, res) {
            if (error) {
                console.log("error")
            } else {
                player=res
            }
        })    
        await  sleep(8000)
        empresa= new Empresa(player.name,player.codigo,player.cantidadIdealTotal,player.produccion,player.cantidadRealVendida,player.cantidadIdeal)
        empresa.calcular(empresas,bimestre.precioUnitario,bimestre.inversionEnMarketing,bimestre.inversionEnInvestigacion,bimestre.inversionEnActivos,ventasUnidades)
        db.updateEmpresa(empresa)*/
        cantidadRealVendida=500
        ventas= new Ventas(bimestre.numero, bimestre.codigo, bimestre.jugador)
        ventas.calcular(bimestre.produccion,costoProduccion.costoUnitario,ventasUnidades,bimestre.precioUnitario,cantidadRealVendida)
        estadoResultados = new EstadoResultados(bimestre.numero, bimestre.codigo, bimestre.jugador)
        estadoResultados.calcular(ventas.ventasRealizadasMonetario,costoProduccion.materiaPrima,costoProduccion.manoDeObraDirecta,costoProduccion.costosIndirectos,bimestre.inversionEnMarketing,bimestre.inversionEnInvestigacion,bimestre.inversionEnActivos,utilidadNeta)
        balanceGeneral = new BalanceGeneral(bimestre.numero, bimestre.codigo, bimestre.jugador)
        balanceGeneral.calcular(estadoResultados.utilidadBruta,bimestre.precioUnitario,ventas.inventarioUnidades,estadoResultados.utilidadNeta)
        db.saveCostosProduccion(costoProduccion)
        db.saveVentas(ventas)
        db.saveEstadoResultados(estadoResultados)
        db.saveBalanceGeneral(balanceGeneral)

    }
 
  
}





  
  
