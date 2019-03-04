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
            client({
                token: token,
                message: "ok"
            })
        })
        socket.on('joinGame', (data, client) => {
            console.log("socket joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addPlayer(data.player_name, data.codigo))
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
        socket.on('datosDePrueba', (data) => {
            console.log("objeto VentasIndustria desde cliente =>", data)
            let tmp_server = new VentasIndustria()
            tmp_server.jugador = data.jugador
            console.log("objeto VentasIndustria desde server", tmp_server)

        })

        socket.on('datosEstadoResultados', (data) => {
            console.log("objeto estadoResultados desde cliente =>", data)
            let estadoResultados_server = new EstadoResultados()
            estadoResultados_server.jugador = data.jugador
            console.log("objeto estadoResultados desde server", estadoResultados_server)

        })
        socket.on('datosBalanceGeneral', (data) => {
            console.log("objeto Balance General desde cliente =>", data)
            let balanceGeneral_server = new BalanceGeneral()
            balanceGeneral_server.jugador = data.jugador
            console.log("objeto Balance General desde server", balanceGeneral_server)

        })
        socket.on('datosVentas', (data) => {
            console.log("objeto Ventas desde cliente =>", data)
            let ventas_server = new Ventas()
            ventas_server.jugador = data.jugador
            console.log("objeto Ventas desde server", ventas_server)

        })
        socket.on('datosCostosProduccion', (data) => {
            console.log("objeto CostosProduccion desde cliente =>", data)
            let visionGeneral_server = new VisionGeneral()
            visionGeneral_server.jugador = data.jugador
            console.log("objeto CostosProduccion desde server", visionGeneral_server)

        })

        socket.on('datosvisionGeneral', (data) => {
            console.log("objeto visionGeneral desde cliente =>", data)
            let costosProduccion_server = new VisionGeneral()
            costosProduccion_server.jugador = data.jugador
            console.log("objeto visionGeneral desde server", costosProduccion_server)

        })

        socket.on('datosProduccion', (data) => {
            console.log("objeto Produccion desde cliente =>", data)
            let produccion_server = new Produccion()
            produccion_server.jugador = data.jugador
            console.log("objeto Produccion desde server", produccion_server)

        })

        socket.on('datosVentasIndustria', (data) => {
            console.log("objeto VentasIndustria desde cliente =>", data)
            let ventasIndustria_server = new VentasIndustria()
            ventasIndustria_server.jugador = data.jugador
            console.log("objeto VentasIndustria desde server", ventasIndustria_server)

        })
        //      socket.on('calcularBalanceGeneralP', (data, client) => {
        //     console.log("calcularBalanceGeneralP socket =>", data)

        //     let _mercado = mercados[data.codigo]
        //     if (_mercado) {
        //         client(_mercado.calcularBalanceGeneralP(data))
        //         io.sockets.emit("getPlayers", _mercado.getPlayers())
        //     } else {
        //         client("error con el codigo")
        //     }
        // })

        socket.on('calcularTodoPrueba', (data, client) => {
            console.log("calcularTodoPrueba cliente =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.calcularTodoPrueba(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })

        socket.on('getBalanceGeneral', (data, client) => {
            console.log("getBalanceGeneral socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getBalanceGeneral(data).then(result => {
                    result.caja =Math.round(result.caja)
                    result.bancos=Math.round(result.bancos)
                    result.inventario =Math.round(result.inventario)
                    result.corriente=Math.round(result.corriente)
                    result.totalActivos =Math.round(result.totalActivos)
                    result.capital=Math.round(result.capital)
                    result.utilidadEjercicio =Math.round(result.utilidadEjercicio)
                    result.totalPatrimonio=Math.round(result.totalPatrimonio)
                    result.totalPasivoPatrimonio=Math.round(result.totalPasivoPatrimonio)
                    client(result)

                    io.sockets.emit("getBalanceGeneral(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })

        socket.on('getVentas', (data, client) => {
            console.log("getVentas socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getVentas(data).then(result => {
                    result.producidoUnidades= Math.round(result.producidoUnidades)
                    result.producidoMonetario= Math.round(result.producidoMonetario)
                    result.ventasRealizadasUnidades= Math.round(result.ventasRealizadasUnidades)
                    result.ventasRealizadasMonetario= Math.round(result.ventasRealizadasMonetario)
                    result.inventarioUnidades= Math.round(result.inventarioUnidades)
                    result.inventarioMonetario= Math.round(result.inventarioMonetario)
					result.pedidosNoAtendidosMonetario= Math.round(result.pedidosNoAtendidosMonetario)
                    result.pedidosNoAtendidosUnidades=Math.round(result.pedidosNoAtendidosUnidades)
                    client(result)
                    io.sockets.emit("getVentas(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })

        socket.on('getCostosProduccion', (data, client) => {
            console.log("getCostosProduccion socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getCostosProduccion(data).then(result => {
                    result.materiaPrima= Math.round(result.materiaPrima)
                    result.costoTotal= Math.round(result.costoTotal)
                    result.costoUnitario= Math.round(result.costoUnitario)
                    client(result)
                    io.sockets.emit("getCostosProduccion(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getProduccion', (data, client) => {
            console.log("getProduccion socket =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getProduccion(data).then(result => {
                    result.produccionIndustriaValorActual=Math.round(result.produccionIndustriaValorActual)
                    result.produccionIndustriaValorAnterior=Math.round(result.produccionIndustriaValorAnterior)
                    result.costeMedioTotalActual=Math.round(result.costeMedioTotalActual)
                    result.costeMedioTotalAnterior=Math.round(result.costeMedioTotalAnterior)
                    result.costeMedioUnitarioActual=Math.round(result.costeMedioUnitarioActual)
                    result.costeMedioUnitarioAnterior=Math.round(result.costeMedioUnitarioAnterior)
                    result.capacidadProduccionActual=Math.round(result.capacidadProduccionActual)
                    result.capacidadProduccionAnterior=Math.round(result.capacidadProduccionAnterior)
                   
                    client(result)
                    io.sockets.emit("getProduccion(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getVentasIndustria', (data, client) => {
            console.log("getVentasIndustria socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getVentasIndustria(data).then(result => {
                    result.ventasIndustriaUnidadesActual = Math.round(result.ventasIndustriaUnidadesActual)
                    result.ventasIndustriaUnidadesAnterior =  Math.round(result.ventasIndustriaUnidadesAnterior)
                    result.ventasIndustriaMonetarioActual =  Math.round(result.ventasIndustriaMonetarioActual)
                    result.ventasIndustriaMonetarioAnterior =  Math.round(result.ventasIndustriaMonetarioAnterior)
                    result.precioUnitarioPromedioActual =  Math.round(result.precioUnitarioPromedioActual)
                    result.precioUnitarioPromedioAnterior =  Math.round(result.precioUnitarioPromedioAnterior)
                    result.inventarioPromediosActual =  Math.round(result.inventarioPromediosActual)
                    result.inventarioPromediosAnterior =  Math.round(result.inventarioPromediosAnterior)
                    
                    client(result)
                    io.sockets.emit("getVentasIndustria(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getEstadoResultados', (data, client) => {
            console.log("getEstadoResultados socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getEstadoResultados(data).then(result => {
                
                    client(result)
                    console.log(result);
                    io.sockets.emit("getEstadoResultados(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getVisionGeneral', (data, client) => {
            console.log("getVisionGeneral socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getVisionGeneral(data).then(result => {

                    client(result)
                    io.sockets.emit("getVisionGeneral(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getAllProduccion', (data, client) => {
            console.log("getAllProduccion socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getAllProduccion(data).then(result => {
                    client(result)

                    io.sockets.emit("getAllProduccion(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })

        socket.on('getAllVentasIndustria', (data, client) => {
            console.log("getAllVentasIndustria socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getAllVentasIndustria(data).then(result => {
                    client(result)
                    io.sockets.emit("getAllVentasIndustria(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })

        socket.on('getPromedioUtilidadNeta', (data, client) => {
            console.log("getPromedioUtilidadNeta socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getPromedioUtilidadNeta(data).then(result => {
                    client(result)
                    io.sockets.emit("getPromedioUtilidadNeta(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getSumatoriaCapacidadProduccion', (data, client) => {
            console.log("getSumatoriaCapacidadProduccion socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getSumatoriaCapacidadProduccion(data).then(result => {
                    client(result)
                    io.sockets.emit("getSumatoriaCapacidadProduccion(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getPromedioPrecioUnitarios', (data, client) => {
            console.log("getPromedioPrecioUnitarios socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getPromedioPrecioUnitarios(data).then(result => {
                    client(result)
                    io.sockets.emit("getPromedioPrecioUnitarios(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getProduccionTotalIndustriaBimestres', (data, client) => {
            console.log("getProduccionTotalIndustriaBimestres socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
                _mercado.getProduccionTotalIndustriaBimestres(data).then(result => {
                    client(result)
                    io.sockets.emit("getProduccionTotalIndustriaBimestres(data)", result)
                }).catch(error => {
                    client("error con el socket")
                })
            } else {
                client("error con el codigo")
            }
        })
        socket.on('joinGameModerator', (data, client) => {
            console.log("socket joinGameModerator =>", data)
            let _mercado = mercados[data]
            if (_mercado) {
                client(_mercado.setModerator(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
        socket.on('getActivo', (data, client) => {
            console.log("getActivo socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
               _mercado.getActivo(data).then(result=>{
                client(result)                     
                io.sockets.emit("getActivo(data)", result)
               }) .catch(error=>{        
                client("error con el socket")
            })              
            } else {
                client("error con el codigo")
            }
        })
        socket.on('retirarseJuego', (data, client) => {
            console.log("retirarseJuego socket =>", data)

            let _mercado = mercados[data.codigo]
            if (_mercado) {
               _mercado.retirarseJuego(data).then(result=>{
                client(result)                     
                io.sockets.emit("retirarseJuego(data)", result)
               }) .catch(error=>{        
                client("error con el socket")
            })              
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
        this.mercado = 2675
        this.mercadoDesatendido = 175
        this.porcentajeMercadoDesatendido = 0
        this.moderador = token
    }
    addPlayer(name, codigo) {
        let player_tmp = this.players[name]
        if (player_tmp) {
            return {
                message: "ok"
            }
        } else if (!this.isFull()) {
            this.players[name] = new Player(name, codigo)
            db.saveEmpresa(this.players[name])
            return {
                message: "ok"
            }
        } else {
            return "ya esta lleno"
        }
    }
    addBimestreUno(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreUno(data.data, data.codigo)
            return {
                message: "ok"
            }
        } else {
            return "no hay player uno"
        }
    }
    addBimestreDos(data) {

        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreDos(data.data, data.codigo)
            return {
                message: "ok"
            }
        } else {
            return "no hay player uno"
        }
    }
    addBimestreTres(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreTres(data.data, data.codigo)
            return {
                message: "ok"
            }
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
        ordenarPlayersPorNombreAsc(res)
        return {
            size: this.cantidad_judagores,
            players: res,
            codigo: this.token
        }
    }
    calcular(empresas) {
        this.mercado = 0
        this.mercadoDesatendido = 0
        for (let i = 0; i < empresas.length; i++) {
            this.mercado = this.mercado + empresas[i].cantidadIdealTotal
            this.mercadoDesatendido = this.mercadoDesatendido + empresas[i].cantidadRealVendida
        }
        this.mercadoDesatendido = this.mercado - this.mercadoDesatendido
        this.porcentajeMercadoDesatendido = Math.floor((this.mercadoDesatendido * 100) / this.mercado)

    }
    //  calcularBalanceGeneralP(data)
    // {
    //     let player_tmp = this.players[data.player_name]
    //     // balance=new BalanceGeneral()
    //     if (player_tmp) {
    //         let BalanceGeneralPrueba= new BalanceGeneral(1,data.codigo,data.player_name);
    //         BalanceGeneralPrueba.calcular(10,10,10,10)
    //         db.saveBalanceGeneral(BalanceGeneralPrueba)
    //         console.log("calcularBalanceGeneralP socket =>", BalanceGeneralPrueba)
    //         db.getBalanceGeneralPorCodigoDeJuegoNombreNumero(data.codigo,data.player_name,1, function(error, res) {
    //             if (error) {
    //                 console.log("error")
    //             } else {

    //                 BalanceGeneralPrueba=res
    //             }
    //         })
    //         return BalanceGeneralPrueba
    //     }
    // }
    calcularTodoPrueba(data) {
        calcularTodo(data.codigo, data.numeroBimestre)
    }

    async getBalanceGeneral(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let balanceGeneral = new BalanceGeneral(data.numeroBimestre, data.codigo, data.player_name);
            console.log("getBalanceGeneral socket =>", balanceGeneral)
            balanceGeneral = await db.getBalanceGeneralPorCodigoDeJuegoNombreNumeroF(data.codigo, data.player_name, data.numeroBimestre)
            return balanceGeneral
        }
    }

    async getVentas(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let ventas =new Ventas(data.numeroBimestre,data.codigo,data.player_name);
            console.log("getVentas socket =>", ventas)
            ventas= await db.getVentasPorCodigoDeJuegoNombreNumeroF(data.codigo,data.player_name,data.numeroBimestre)
            let empresa={}
            let empresas=[]
            empresas = await db.getEmpresasPorCodigoDeJuego(data.codigo)
            console.log("mercado ==>",this.mercado," ------- ",ventas.inventarioUnidades)
            if(ventas.inventarioUnidades>=this.mercado)
            {
                for (let x = 0; x < empresas.length; x++)
                {
                    empresa=empresas[x]
                    if(empresa.name==ventas.jugador)
                    {
                        empresa.activo=0
                        db.updateActivoEmpresa(empresa)
                    }                   
                }
            }
            return ventas
        }
    }

    async getCostosProduccion(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let costosProduccion = new CostosProduccion(data.numeroBimestre, data.codigo, data.player_name);
            console.log("getCostosProduccion socket =>", costosProduccion)
            costosProduccion = await db.getCostoProduccionPorCodigoDeJuegoNombreNumeroF(data.codigo, data.player_name, data.numeroBimestre)
            return costosProduccion
        }
    }
    async getProduccion(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let produccion = new Produccion(data.numeroBimestre, data.codigo, data.player_name);
            console.log("getProduccion socket =>", produccion)
            produccion = await db.getProduccionPorCodigoDeJuegoNombreNumeroF(data.codigo, data.player_name, data.numeroBimestre)
            return produccion
        }
    }
    async getVentasIndustria(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let ventasIndustria = new VentasIndustria(data.numeroBimestre, data.codigo, data.player_name);
            console.log("getVentasIndustria socket =>", ventasIndustria)
            ventasIndustria = await db.getVentasIndustriaPorCodigoDeJuegoNombreNumeroF(data.codigo, data.player_name, data.numeroBimestre)
            return ventasIndustria
        }
    }

    async getEstadoResultados(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let estadoResultados =[]
            let cantidadJugadores=this.cantidad_judagores
            let unicaValorPositivo=false
            let estadoResultadosJugadores=[]
            let estadoResultadosJugadoresElement={}
            //console.log("getEstadoResultados socket =>", estadoResultados)
            estadoResultados= await  db.getAllEstadoResultadosPorCodigoDeJuegoNombre(data.codigo,data.player_name)
            console.log("getEstadoResultados socket =>", estadoResultados)
            for(let i=0;i<estadoResultados.length;i++){
                estadoResultados[i].ingresos = Math.round(estadoResultados[i].ingresos) 
                estadoResultados[i].ventas = Math.round(estadoResultados[i].ventas) 
                estadoResultados[i].otrosIngresos = Math.round(estadoResultados[i].otrosIngresos) 
                estadoResultados[i].capitalAnterior = Math.round(estadoResultados[i].capitalAnterior) 
                estadoResultados[i].costos = Math.round(estadoResultados[i].costos) 
                estadoResultados[i].materiaPrima = Math.round(estadoResultados[i].materiaPrima) 
                estadoResultados[i].manoObra = Math.round(estadoResultados[i].manoObra) 
                estadoResultados[i].costosIndirectos = Math.round(estadoResultados[i].costosIndirectos) 
                estadoResultados[i].utilidadBruta = Math.round(estadoResultados[i].utilidadBruta) 
                estadoResultados[i].gastosOperativos = Math.round(estadoResultados[i].gastosOperativos) 
                estadoResultados[i].inversionMarketing = Math.round(estadoResultados[i].inversionMarketing) 
                estadoResultados[i].inversionInvestigacion = Math.round(estadoResultados[i].inversionInvestigacion) 
                estadoResultados[i].inversionActivos = Math.round(estadoResultados[i].inversionActivos) 
                estadoResultados[i].utilidadNeta = Math.round(estadoResultados[i].utilidadNeta)
            }
            //console.log("estadoResultadosJugadores socket =>", estadoResultadosJugadores)
            estadoResultadosJugadores=await db.getEstadoResultadosAllJugadoresPorCodigoDeJuegoNumero(data.codigo,data.numeroBimestre)
            console.log("estadoResultadosJugadores socket =>", estadoResultadosJugadores)
            let empresa={}
            let empresas=[]
            empresas = await db.getEmpresasPorCodigoDeJuego(data.codigo)
            console.log("empresas socket =>", empresas)   
            for(let i=0; i<estadoResultadosJugadores.length;i++)
            {
                estadoResultadosJugadoresElement=estadoResultadosJugadores[i]

                console.log("estadoResultadosJugadoresElement  =>", estadoResultadosJugadoresElement.utilidadNeta)
                if(estadoResultadosJugadoresElement.utilidadNeta<0)
                {
                    cantidadJugadores--
                    for (let j = 0; j < empresas.length; j++)
                    {
                        empresa=empresas[j]
                        if(empresa.name==estadoResultadosJugadoresElement.jugador)
                        {
                            empresa.activo=0
                            db.updateActivoEmpresa(empresa)
                        }                   
                    }

                }
            }
            if(cantidadJugadores==1)
            {
                unicaValorPositivo=true
            }          
            console.log("estadoResultados =>", estadoResultados,"unicaValorPositivo =>",unicaValorPositivo)
            return {estadoResultados: estadoResultados,unicaValorPositivo:unicaValorPositivo}
        }
    }

    async getVisionGeneral(data)
    {
        let visionGeneral =[]
        let visionGeneralElement={}
        let existeGanadorPorcentajeMercado=false
        console.log("getVisionGeneral socket =>", visionGeneral)
        visionGeneral= await  db.getAllVisionGeneralByCodigoYNumero(data.codigo,data.numeroBimestre)
        console.log("getVisionGeneral socket =>", visionGeneral)
        
        let empresa={}
        let empresas=[]
        empresas = await db.getEmpresasPorCodigoDeJuego(data.codigo)
        for (let j=0;j<visionGeneral.length;j++)
        {
            visionGeneralElement=visionGeneral[j]
            visionGeneralElement.precioUnitario= Math.round(visionGeneralElement.precioUnitario)
            visionGeneralElement.beneficio= Math.round(visionGeneralElement.beneficio)
            visionGeneralElement.ventas= Math.round(visionGeneralElement.ventas)
            if(visionGeneralElement.porcentajeDeMercado>85){
                existeGanadorPorcentajeMercado=true
            }
            if(visionGeneralElement.porcentajeDeMercado<2)
            {
                for (let x = 0; x < empresas.length; x++)
                {
                    empresa=empresas[x]
                    if(empresa.name==visionGeneralElement.jugador)
                    {
                        empresa.activo=0
                        db.updateActivoEmpresa(empresa)
                    }                   
                }
            }

        }   
        console.log("visionGeneral =>", visionGeneral," existeGanadorPorcentajeMercado => ",existeGanadorPorcentajeMercado)
        return {visionGeneral: visionGeneral,existeGanadorPorcentajeMercado: existeGanadorPorcentajeMercado}
    }

    async getAllProduccion(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let produccionIndustriaBimestre = [];
            console.log("getAllProduccion socket =>", produccionIndustriaBimestre)
            produccionIndustriaBimestre = await db.getAllProduccionIndustriaPorCodigoDeJuegoNombreF(data.codigo, data.player_name)
            console.log("getAllProduccion socket =>", produccionIndustriaBimestre)
            return produccionIndustriaBimestre
        }
    }

    async getAllVentasIndustria(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let ventasIndustriaBimestre = [];
            console.log("getAllVentasIndustria socket =>", ventasIndustriaBimestre)
            ventasIndustriaBimestre = await db.getAllVentasIndustriaPorCodigoDeJuegoNombreF(data.codigo, data.player_name)
            console.log("getAllVentasIndustria socket =>", ventasIndustriaBimestre)
            return ventasIndustriaBimestre
        }
    }

    async getPromedioUtilidadNeta(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let empresas = []
            let promedioERUtilidadNeta = []
            let empresa = {}
            for (let player in this.players) {
                empresas.push(this.players[player].toString())
            }
            let indice = 0
            for (let i = 1; i <= data.numeroBimestre; i++) {
                let suma = 0
                for (let j = 0; j < empresas.length; j++) {
                    let estadoResultadosPersonal = {}
                    empresa = empresas[j]
                    estadoResultadosPersonal = await db.getEstadoResultadosPorCodigoDeJuegoNombreNumero(data.codigo, empresa.name,i)
                    suma += (estadoResultadosPersonal.utilidadNeta)
                }
                suma = suma / empresas.length
                promedioERUtilidadNeta.push(suma)
            }
            console.log("promedioERUtilidadNeta =>", promedioERUtilidadNeta)
            return promedioERUtilidadNeta
        }
    }

    async getSumatoriaCapacidadProduccion(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let sumatoriaCapacidadProduccion = []
            let bimestres = []
            bimestres = await db.getAllBimestresByCodigo(data.codigo)
            console.log("bimestres =>", bimestres)

            let suma = 0;

            for (let i = 1; i < 4; i++) {
                for (let j = 0; j < bimestres.length; j++) {
                    let bimestre = {}
                    bimestre = bimestres[j]
                    if (bimestre.numero == i) {
                        suma+=calcularLimiteProduccion(bimestre.inversionEnActivos)
                    }
                }
                sumatoriaCapacidadProduccion.push(suma)
                suma = 0;
            }
            console.log("sumatoriaCapacidadProduccion =>", sumatoriaCapacidadProduccion)
            return sumatoriaCapacidadProduccion
        }
    }
    async getPromedioPrecioUnitarios(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let bimestres = []
            let suma = 0
            let cantidad = 0
            let promedioPrecioUnitarios = []
            let bimestre = {}
            let indice = 0
            console.log("bimestres =>", bimestres)
            bimestres = await db.getAllBimestresByCodigo(data.codigo)
            console.log("bimestres =>", bimestres)
            for (let i = 1; i < 4; i++) {
                indice = 0
                //console.log("indice==>",indice)
                for (let j = 0; j < bimestres.length; j++) {
                    bimestre = bimestres[j]
                    if (bimestre.numero == i) {
console.log(bimestre.precioUnitario,bimestre.numero,bimestre.jugador)
                        suma = suma + bimestre.precioUnitario
                        cantidad += 1
                    }
                }

                if (cantidad != 0)
                    suma = suma / cantidad;
                //console.log("suma",suma,"  ",indice)
                promedioPrecioUnitarios.push(suma)
                suma = 0;
                cantidad = 0;
                console.log("promedioPrecioUnitarios =>",promedioPrecioUnitarios)
            }
            return promedioPrecioUnitarios
        }
    }
    async getProduccionTotalIndustriaBimestres(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let produccionTotalIndustriaBimestres=[]
            let produccion ={}
            for (let i = 1; i <=data.numeroBimestre; i++) {
                produccion = await db.getProduccionPorCodigoDeJuegoNombreNumeroF(data.codigo, data.player_name, i)
                produccionTotalIndustriaBimestres.push(produccion.produccionIndustriaValorActual)
            }
            console.log("produccionTotalIndustriaBimestres =>",produccionTotalIndustriaBimestres)
            return produccionTotalIndustriaBimestres
        }
    }
    setModerator(codigo) {
        console.log("socket aqui =>", this.moderador)

        this.moderador = codigo
        console.log("socket aqui =>", this.moderador)

        return {
            message: "ok"
        }
    }
    async getActivo(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let empresa={}
            let empresas=[]
            empresas = await db.getEmpresasPorCodigoDeJuego(data.codigo)
            console.log("get activo =>",empresas)
            for (let i = 0; i < empresas.length; i++)
            {
                empresa=empresas[i]
                if(empresa.name==data.player_name)
                {
                    console.log("empresa.activo =>",empresa.activo)
                    return {esActivo:empresa.activo}   
                }
            }
        } else {
            return "no hay activo"
        }
    }
    async retirarseJuego(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            let empresa={}
            let empresas=[]
            let esRetirado=false
            empresas = await db.getEmpresasPorCodigoDeJuego(data.codigo)
            console.log("retirarseJuego =>",empresas)           
            for (let i = 0; i < empresas.length; i++)
            {
                empresa=empresas[i]
                if(empresa.name==data.player_name)
                {
                    empresa.activo=0
                    db.updateActivoEmpresa(empresa)
                    esRetirado=true
                }
            }
            return {esRetirado:esRetirado}
        } else {
            return "no hay activo"
        }
    }
}

mercados["a"] = new Mercado("nombre mercardo", 2, "a")
class Player {
    constructor(name, codigo, cantidadIdealTotal, produccion, cantidadRealVendida, cantidadIdeal) {
        this.name = name
        this.bimestre_inicial = new Bimestre(150, 600, 500, 1000, 6000, 0, codigo, name)
        db.saveBimestre(this.bimestre_inicial)

        this.cantidadIdealTotal = 535
        this.produccion = 500
        this.cantidadRealVendida = 500
        this.cantidadIdeal = 500
        this.codigo = codigo
        this.activo=1
    }

    addBimestreUno(data, codigo) {
        this.bimestre_uno = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos,
            1,
            codigo,
            this.name)
        this.produccion = data.produccion
        db.saveBimestre(this.bimestre_uno)

    }
    addBimestreDos(data, codigo) {
        this.bimestre_dos = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos,
            2,
            codigo,
            this.name)
        this.produccion = data.produccion
        db.saveBimestre(this.bimestre_dos)

    }
    addBimestreTres(data, codigo) {
        this.bimestre_tres = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos,
            3,
            codigo,
            this.name)
        this.produccion = data.produccion
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
    constructor(precioUnitario, produccion, inversionEnMarketing, inversionEnInvestigacion, inversionEnActivos, numero, codigo, jugador) {
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
class Empresa {
    constructor(name, codigo, cantidadIdealTotal, produccion, cantidadRealVendida, cantidadIdeal) {
        this.name = name
        this.cantidadIdealTotal = cantidadIdealTotal
        this.produccion = produccion
        this.cantidadRealVendida = cantidadRealVendida
        this.cantidadIdeal = cantidadIdeal
        this.codigo = codigo
    }
    obtenerPorcentajeMarketing(marketing) {
        if (marketing == 0)
            return 0
        if (marketing == 500)
            return (0.03 * this.cantidadIdeal)
        if (marketing == 1800)
            return (0.075 * this.cantidadIdeal)
        if (marketing == 3100)
            return (0.15 * this.cantidadIdeal)
        if (marketing == 8300)
            return (0.33 * this.cantidadIdeal)
        return 0
    }
    obtenerPorcentajeInvestigacion(investigacion) {
        if (investigacion == 1000)
            return (0.04 * this.cantidadIdeal)
        if (investigacion == 2000)
            return (0.08 * this.cantidadIdeal)
        if (investigacion == 3000)
            return (0.12 * this.cantidadIdeal)
        if (investigacion == 4000)
            return (0.16 * this.cantidadIdeal)
        return 0
    }
    obtenerPorcentajeActivos(activos) {
        if (activos == 6000)
            return (0.02 * this.cantidadIdeal)
        if (activos == 15000)
            return (0.04 * this.cantidadIdeal)
        if (activos == 28000)
            return (0.08 * this.cantidadIdeal)
        if (activos == 40000)
            return (0.12 * this.cantidadIdeal)
        return 0
    }
    calcular(players, precioUnitario, marketing, investigacion, activos, inventarioUnidadesAnterior) {
//console.log("llego calcular FORMULA MAESTRA =>",precioUnitario,marketing, investigacion, activos, inventarioUnidadesAnterior)        
        let suma = 0
        for (let i = 0; i < players.length; i++) {
            if (players[i].name != this.name)
                suma = suma + players[i].produccion
        }
//console.log("suma =>",suma)
        suma = suma / 10
//console.log("suma =>",suma)
        let A=319.1275168
        let B=-0.100671141
        this.cantidadIdeal = ((A - precioUnitario) / (2*(-B))) - suma
//console.log("cantidadIdeal =>",this.cantidadIdeal)
        this.cantidadIdealTotal = this.cantidadIdeal + this.obtenerPorcentajeMarketing(marketing) + this.obtenerPorcentajeInvestigacion(investigacion) + this.obtenerPorcentajeActivos(activos)
//console.log("cantidadIdealTotal =>",this.cantidadIdealTotal)
        this.cantidadRealVendida=0
        if (this.cantidadIdealTotal>=0) {
            this.cantidadRealVendida = Math.min(this.cantidadIdealTotal, this.produccion + inventarioUnidadesAnterior)
        }     
//console.log("cantidadRealVendida =>",this.cantidadRealVendida)        
    }
    calcularPorcentajeMercado(mercado) {
        this.porcentajeDeMercado = Math.round((this.cantidadRealVendida * 100) / mercado)
    }
}
class BalanceGeneral {
    constructor(numeroBimestre, codigo, jugador) {
        this.caja = 32711
        this.bancos = 14019
        this.inventario = 0
        this.corriente = 46730
        this.totalActivos = 46748
        this.capital = 7218
        this.utilidadEjercicio = 38230
        this.totalPatrimonio = 45448
        this.totalPasivoPatrimonio = 46748
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular(utilidadBruta,inventarioMonetario, utilidadNeta) {
//console.log("calcular BALANCE GENERAL =>",utilidadBruta, inventarioMonetario, utilidadNeta)
        this.caja = (utilidadNeta * 0.7)
        this.bancos = (utilidadNeta * 0.3)
        this.inventario =inventarioMonetario
        this.corriente = this.bancos + this.caja + this.inventario
        this.totalActivos = this.corriente + 8500
        this.utilidadEjercicio = utilidadNeta
        this.capital = this.totalActivos - (this.utilidadEjercicio + 1300)
        this.totalPatrimonio = this.capital + this.utilidadEjercicio
        this.totalPasivoPatrimonio = this.totalPatrimonio + 1300
    }

}
class EstadoResultados {
    constructor(numeroBimestre, codigo, jugador) {
        this.ingresos = 95000
        this.ventas = 75000
        this.otrosIngresos = 0
        this.capitalAnterior = 10000
        this.costos = 48270
        this.materiaPrima = 17500
        this.manoObra = 8000
        this.costosIndirectos = 22770
        this.utilidadBruta = 46730
        this.gastosOperativos = 8500
        this.inversionMarketing = 3500
        this.inversionInvestigacion = 1500
        this.inversionActivos = 3500
        this.utilidadNeta = 38230
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }

    calcular(ventasRealizadasMonetario, materiaPrima, manoObra, costosIndirectos, inversionMarketing, inversionInvestigacion, inversionEnActivos, utilidadNetaAnterior) {
//console.log("calcular estadoResultados => ",ventasRealizadasMonetario, materiaPrima, manoObra, costosIndirectos, inversionMarketing, inversionInvestigacion, inversionEnActivos, utilidadNetaAnterior)
        this.ventas = ventasRealizadasMonetario
        this.otrosIngresos = 0
        this.capitalAnterior = utilidadNetaAnterior
        this.ingresos = this.ventas + this.otrosIngresos + this.capitalAnterior
        this.materiaPrima = materiaPrima
        this.manoObra = manoObra
        this.costosIndirectos = costosIndirectos
        this.costos = this.materiaPrima + this.manoObra + this.costosIndirectos
        this.utilidadBruta = this.ingresos - this.costos
        this.inversionMarketing = inversionMarketing
        this.inversionInvestigacion = inversionInvestigacion
        this.inversionActivos = inversionEnActivos
        this.gastosOperativos = this.inversionActivos + this.inversionInvestigacion + this.inversionMarketing
        this.utilidadNeta = this.utilidadBruta - this.gastosOperativos
    }
}

class Ventas {

    constructor(numeroBimestre, codigo, jugador) {
        this.producidoUnidades = 500
        this.producidoMonetario = 47270
        this.ventasRealizadasUnidades = 500
        this.ventasRealizadasMonetario = 75000
        this.inventarioUnidades = 0
        this.inventarioMonetario = 0
        this.pedidosNoAtendidosMonetario = 0
        this.pedidosNoAtendidosUnidades = 0
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular(produccion, costoUnitario, inventarioUnidadesAnterior, precioUnitario, cantidadReal,cantidadIdeal) {
//console.log("calcular VENTAS =>",produccion, costoUnitario, inventarioUnidadesAnterior, precioUnitario, cantidadReal,cantidadIdeal)        
        this.producidoUnidades = produccion
        this.ventasRealizadasUnidades = cantidadReal
        this.producidoMonetario = produccion * costoUnitario
        this.inventarioUnidades = this.producidoUnidades + inventarioUnidadesAnterior - this.ventasRealizadasUnidades
        this.inventarioMonetario = this.inventarioUnidades * precioUnitario
        this.ventasRealizadasMonetario = this.ventasRealizadasUnidades * precioUnitario
        if (cantidadIdeal <= (produccion + inventarioUnidadesAnterior))
        {
            this.pedidosNoAtendidosUnidades = 0
        }
        else
        {
            this.pedidosNoAtendidosUnidades = cantidadIdeal - (produccion + inventarioUnidadesAnterior)
        }
        this.pedidosNoAtendidosMonetario = this.pedidosNoAtendidosUnidades * precioUnitario
    }
}

class CostosProduccion {
    constructor(numeroBimestre, codigo, jugador) {
        this.materiaPrima = 17500
        this.costoTotal = 48270
        this.costoUnitario = 94.54
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular(produccion) {
        this.materiaPrima = produccion * 50
        this.costoTotal = this.materiaPrima + 8000 + 22770
        this.costoUnitario = this.costoTotal / produccion
    }
}
class VisionGeneral {
    constructor(ventas, beneficio, precioUnitario, porcentajeDeMercado, numeroBimestre, codigo, jugador) {
        this.porcentajeDeMercado = porcentajeDeMercado
        this.precioUnitario = precioUnitario
        this.beneficio = beneficio
        this.ventas = ventas
        this.numeroBimestre = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
        this.puntajeMercado = 2
        this.puntajeBeneficio = 2
    }
}

class Produccion {
    constructor(numeroBimestre, codigo, jugador) {
        this.produccionIndustriaValorActual = 3000
        this.produccionIndustriaValorAnterior = 3000
        this.costeMedioTotalActual = 60770
        this.costeMedioTotalAnterior = 60770
        this.costeMedioUnitarioActual = 101.283333
        this.costeMedioUnitarioAnterior = 101.283333
        this.capacidadProduccionActual = 750
        this.capacidadProduccionAnterior = 750
        this.numero = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular(bimestres,costosProduccion) {
        this.produccionIndustriaValorActual = 0
        this.costeMedioTotalActual = 0
        this.costeMedioUnitarioActual = 0
        this.capacidadProduccionActual=0
        for (let i = 0; i < bimestres.length; i++) {
            this.produccionIndustriaValorActual = this.produccionIndustriaValorActual + bimestres[i].produccion
            this.capacidadProduccionActual= this.capacidadProduccionActual+ calcularLimiteProduccion(bimestres[i].inversionEnActivos)
        }
        for (let i = 0; i < costosProduccion.length; i++) {
            this.costeMedioTotalActual = this.costeMedioTotalActual + costosProduccion[i].costoTotal
            this.costeMedioUnitarioActual = this.costeMedioUnitarioActual + costosProduccion[i].costoUnitario
        }
        this.costeMedioTotalActual = this.costeMedioTotalActual / costosProduccion.length
        this.costeMedioUnitarioActual = this.costeMedioUnitarioActual / costosProduccion.length
        this.capacidadProduccionActual = this.capacidadProduccionActual /bimestres.length
    }
}
class VentasIndustria {
    constructor(numeroBimestre, codigo, jugador) {
        this.ventasIndustriaUnidadesActual = 3000
        this.ventasIndustriaUnidadesAnterior = 3000
        this.ventasIndustriaMonetarioActual = 450000
        this.ventasIndustriaMonetarioAnterior = 450000
        this.precioUnitarioPromedioActual = 150
        this.precioUnitarioPromedioAnterior = 150
        this.inventarioPromediosActual = 1
        this.inventarioPromediosAnterior = 1
        this.numero = numeroBimestre
        this.codigo = codigo
        this.jugador = jugador
    }
    calcular(bimestres, ventas) {
        this.precioUnitarioPromedioActual = 0
        this.ventasIndustriaUnidadesActual = 0
        this.ventasIndustriaMonetarioActual = 0
        this.inventarioPromediosActual = 0
        for (let i = 0; i < bimestres.length; i++) {
            this.precioUnitarioPromedioActual = this.precioUnitarioPromedioActual + bimestres[i].precioUnitario
        }
        this.precioUnitarioPromedioActual = this.precioUnitarioPromedioActual / (bimestres.length)

        for (let i = 0; i < ventas.length; i++) {
            this.ventasIndustriaUnidadesActual = this.ventasIndustriaUnidadesActual + ventas[i].ventasRealizadasUnidades
            this.ventasIndustriaMonetarioActual = this.ventasIndustriaMonetarioActual + ventas[i].ventasRealizadasMonetario
            this.inventarioPromediosActual = this.inventarioPromediosActual + ventas[i].inventarioUnidades
        }
        this.inventarioPromediosActual = this.inventarioPromediosActual / (ventas.length)
    }

}

function calcularVentasIndustria(bimestres, ventas, ventasIndustria) {
    ventasIndustria.inventarioPromediosAnterior = ventasIndustria.inventarioPromediosActual
    ventasIndustria.ventasIndustriaMonetarioAnterior = ventasIndustria.ventasIndustriaMonetarioActual
    ventasIndustria.ventasIndustriaUnidadesAnterior = ventasIndustria.ventasIndustriaUnidadesActual
    ventasIndustria.precioUnitarioPromedioAnterior = ventasIndustria.precioUnitarioPromedioActual
    ventasIndustria.precioUnitarioPromedioActual = 0
    ventasIndustria.ventasIndustriaUnidadesActual = 0
    ventasIndustria.ventasIndustriaMonetarioActual = 0
    ventasIndustria.inventarioPromediosActual = 0
    for (let i = 0; i < bimestres.length; i++) {
        ventasIndustria.precioUnitarioPromedioActual = ventasIndustria.precioUnitarioPromedioActual + bimestres[i].precioUnitario
    }
    ventasIndustria.precioUnitarioPromedioActual = ventasIndustria.precioUnitarioPromedioActual / (bimestres.length)

    for (let i = 0; i < ventas.length; i++) {
        ventasIndustria.ventasIndustriaUnidadesActual = ventasIndustria.ventasIndustriaUnidadesActual + ventas[i].ventasRealizadasUnidades
        ventasIndustria.ventasIndustriaMonetarioActual = ventasIndustria.ventasIndustriaMonetarioActual + ventas[i].ventasRealizadasMonetario
        ventasIndustria.inventarioPromediosActual = ventasIndustria.inventarioPromediosActual + ventas[i].inventarioUnidades
    }
    ventasIndustria.inventarioPromediosActual = ventasIndustria.inventarioPromediosActual / (ventas.length)
    ventasIndustria.numero = ventasIndustria.numero + 1
    //db.updateVentasIndustria(ventasIndustria)
    db.saveVentasIndustria(ventasIndustria)
}
function calcularLimiteProduccion(inversionActivos){
    let limite=0
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
    return limite
}
function calcularProduccion(bimestres, costosProduccion, produccion) {
    produccion.produccionIndustriaValorAnterior = produccion.produccionIndustriaValorActual
    produccion.costeMedioTotalAnterior = produccion.costeMedioTotalActual
    produccion.costeMedioUnitarioAnterior = produccion.costeMedioUnitarioActual
    produccion.capacidadProduccionAnterior = produccion.capacidadProduccionActual
    produccion.produccionIndustriaValorActual = 0
    produccion.costeMedioTotalActual = 0
    produccion.costeMedioUnitarioActual = 0
    produccion.capacidadProduccionActual=0
    for (let i = 0; i < bimestres.length; i++) {
        produccion.produccionIndustriaValorActual = produccion.produccionIndustriaValorActual + bimestres[i].produccion
        produccion.capacidadProduccionActual= produccion.capacidadProduccionActual+ calcularLimiteProduccion(bimestres[i].inversionEnActivos)
    }
    for (let i = 0; i < costosProduccion.length; i++) {
        produccion.costeMedioTotalActual = produccion.costeMedioTotalActual + costosProduccion[i].costoTotal
        produccion.costeMedioUnitarioActual = produccion.costeMedioUnitarioActual + costosProduccion[i].costoUnitario
    }
    produccion.costeMedioTotalActual = produccion.costeMedioTotalActual / costosProduccion.length
    produccion.costeMedioUnitarioActual = produccion.costeMedioUnitarioActual / costosProduccion.length
    produccion.numero = produccion.numero + 1
    produccion.capacidadProduccionActual = produccion.capacidadProduccionActual /bimestres.length

    //db.updateProduccion(produccion)
    db.saveProduccion(produccion)
}

// function sleep(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms)
//     })
// }

async function calcularTodo(codigoJuego, numeroBimestre) {
    let bimestres = []
    let empresas = []
    let player = {}
    bimestres = await db.getAllBimestresByCodigoYNumero(codigoJuego, numeroBimestre)
    empresas = await db.getEmpresasPorCodigoDeJuego(codigoJuego)


    for (let i = 0; i < bimestres.length; i++) {
        bimestre = bimestres[i]
//console.log("bimestre =>",bimestre)
        ventasUnidades = 0
        utilidadNeta = 5930
        let ventasAnterior={}
        let estadoResultadosAnterior={}
        if (bimestre.numero != 1) {
            ventasAnterior = await db.getVentasPorCodigoDeJuegoNombreNumero(codigoJuego, bimestre.jugador, numeroBimestre - 1)
            //console.log("ventasAnterior ==>",ventasAnterior)
            estadoResultadosAnterior = await db.getEstadoResultadosPorCodigoDeJuegoNombreNumero(codigoJuego, bimestre.jugador, numeroBimestre - 1)
            //console.log("estadoResultadosAnterior ==>",estadoResultadosAnterior)
            ventasUnidades = ventasAnterior.inventarioUnidades
            utilidadNeta = estadoResultadosAnterior.utilidadNeta
        }
        let costoProduccion = new CostosProduccion(bimestre.numero, bimestre.codigo, bimestre.jugador)
        costoProduccion.calcular(bimestre.produccion)
        player = await db.getEmpresaPorCodigoDeJuegoYNombre(codigoJuego, bimestre.jugador)
//console.log("player =>",player,player.name, player.codigo, player.cantidadIdealTotal, bimestre.produccion, player.cantidadRealVendida, player.cantidadIdeal)                        
        empresa = new Empresa(player.name, player.codigo, player.cantidadIdealTotal, bimestre.produccion, player.cantidadRealVendida, player.cantidadIdeal)
        empresa.calcular(empresas, bimestre.precioUnitario, bimestre.inversionEnMarketing, bimestre.inversionEnInvestigacion, bimestre.inversionEnActivos, ventasUnidades)
//console.log("empresa =>",empresa)                
        db.updateEmpresa(empresa)
        cantidadRealVendida = 500
        ventas = new Ventas(bimestre.numero, bimestre.codigo, bimestre.jugador)
        ventas.calcular(bimestre.produccion, costoProduccion.costoUnitario, ventasUnidades, bimestre.precioUnitario,empresa.cantidadRealVendida, empresa.cantidadIdealTotal)

        estadoResultados = new EstadoResultados(bimestre.numero, bimestre.codigo, bimestre.jugador)
        let manoObraDirecta = 8000
        let costosIndirectos = 22770
        estadoResultados.calcular(ventas.ventasRealizadasMonetario, costoProduccion.materiaPrima, manoObraDirecta, costosIndirectos, bimestre.inversionEnMarketing, bimestre.inversionEnInvestigacion, bimestre.inversionEnActivos, utilidadNeta)
        balanceGeneral = new BalanceGeneral(bimestre.numero, bimestre.codigo, bimestre.jugador)
        balanceGeneral.calcular(estadoResultados.utilidadBruta,ventas.inventarioMonetario, estadoResultados.utilidadNeta)
//console.log("costoProduccion =>",costoProduccion)        
        db.saveCostosProduccion(costoProduccion)
//console.log("ventas =>",ventas)
        db.saveVentas(ventas)
//console.log("estadoResultados =>",estadoResultados)
        db.saveEstadoResultados(estadoResultados)
//console.log("balanceGeneral =>",balanceGeneral)
        db.saveBalanceGeneral(balanceGeneral)

    }
//console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    empresas = await db.getEmpresasPorCodigoDeJuego(codigoJuego)
    let costosProduccionBimestre = []
    let ventasBimestre = []
    costosProduccionBimestre = await db.getAllCostosProduccionByCodigoYNumero(codigoJuego, numeroBimestre)
//console.log("costosProduccionBimestre =>",costosProduccionBimestre)

    ventasBimestre = await db.getAllVentasByCodigoYNumero(codigoJuego, numeroBimestre)
//console.log("ventasBimestre =>",ventasBimestre)
    mercados[codigoJuego].calcular(empresas)

    juego = mercados[codigoJuego]
    for (let i = 0; i < empresas.length; i++) {
        player = empresas[i]
        empresa = new Empresa(player.name, player.codigo, player.cantidadIdealTotal, player.produccion, player.cantidadRealVendida, player.cantidadIdeal)
        empresa.calcularPorcentajeMercado(juego.mercado)
//console.log("empresa =>",empresa)       
        estadoResultados = await db.getEstadoResultadosPorCodigoDeJuegoNombreNumero(codigoJuego, player.name, numeroBimestre)
//console.log("estadoResultados =>",estadoResultados)             
        bimestre = await db.getBimestrePorCodigoDeJuegoNombreNumero(codigoJuego, player.name, numeroBimestre)
//console.log("bimestre =>",bimestre)             

        visionGeneral = new VisionGeneral(empresa.cantidadRealVendida, estadoResultados.utilidadNeta, bimestre.precioUnitario, empresa.porcentajeDeMercado, numeroBimestre, codigoJuego, empresa.name)
//console.log("visionGeneral =>",visionGeneral)                     
        db.saveVisionGeneral(visionGeneral)

        if (numeroBimestre == 1) {
            produccion = new Produccion(1, codigoJuego, empresa.name)
            produccion.calcular(bimestres,costosProduccionBimestre)
            ventasIndustria = new VentasIndustria(1, codigoJuego, empresa.name)
            ventasIndustria.calcular(bimestres,ventasBimestre)
            db.saveProduccion(produccion)
            db.saveVentasIndustria(ventasIndustria)
        } else {
            produccion = await db.getProduccionPorCodigoDeJuegoNombreNumero(codigoJuego, player.name, numeroBimestre - 1)
            calcularProduccion(bimestres, costosProduccionBimestre, produccion)
            ventasIndustria = await db.getVentasIndustriaPorCodigoDeJuegoNombreNumero(codigoJuego, player.name, numeroBimestre - 1)
            calcularVentasIndustria(bimestres, ventasBimestre, ventasIndustria)
        }
//console.log("produccion =>",produccion)                     
//console.log("ventasIndustria =>",ventasIndustria)                     
    }

//console.log("----------------------------------------------------------------")
    let visionGeneralList = []
    let visionGeneralElement = {}
    visionGeneralList = await db.getAllVisionGeneralByCodigoYNumeroParaUpdate(codigoJuego, numeroBimestre)
    //console.log("visionGeneralList =>", visionGeneralList, "tam ", visionGeneralList.length)
    if (visionGeneralList.length != 0) {
        visionGeneralList.sort(function (a, b) {
            return (a.porcentajeDeMercado > b.porcentajeDeMercado) ? 1 : ((b.porcentajeDeMercado < a.porcentajeDeMercado) ? -1 : 0)
        })
        let puntaje = 2 * visionGeneralList.length
        for (let i = visionGeneralList.length - 1; i >= 0; i--) {
            //console.log("element", visionGeneralElement)

            visionGeneralElement = visionGeneralList[i]
            if (i > 0 && visionGeneralElement.porcentajeDeMercado != visionGeneralList[i - 1].porcentajeDeMercado) {
                visionGeneralElement.puntajeMercado = puntaje
                puntaje -= 2;
            } else {
                visionGeneralElement.puntajeMercado = puntaje
            }
            db.updateVisionGeneral(visionGeneralElement)
        }
        //console.log("ordeno porcentajeDeMercado")
        visionGeneralList.sort(function (a, b) {
            return (a.beneficio > b.beneficio) ? 1 : ((b.beneficio < a.beneficio) ? -1 : 0)
        })
        puntaje = 2 * visionGeneralList.length
        for (let i = visionGeneralList.length - 1; i >= 0; i--) {
            visionGeneralElement = visionGeneralList[i]
            if (i > 0 && visionGeneralElement.beneficio != visionGeneralList[i - 1].beneficio) {
                visionGeneralElement.puntajeBeneficio = puntaje
                puntaje -= 2;
            } else {
                visionGeneralList[i].puntajeBeneficio = puntaje
            }
            db.updateVisionGeneral(visionGeneralElement)
        }
        console.log("como ordeno final", visionGeneralList)
    }
}
async function ordenarPlayersPorNombreAsc(lista) {
    lista.sort(function (a, b) {
        return (a.name > b.name) ? 1 : ((b.name < a.name) ? -1 : 0)
    })
}
async function ordenarJugadoresPorJugadorAsc(lista) {
    lista.sort(function (a, b) {
        return (a.jugador > b.jugador) ? 1 : ((b.jugador < a.jugador) ? -1 : 0)
    })
}