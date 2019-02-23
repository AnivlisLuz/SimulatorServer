const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/api/base.sqlite');

exports.getAllBimestre = (callback) => {
    db.all("select * from bimestre", callback)
}
exports.insertVentas = (valor, callback) => {
    db.all('insert into ventas values(?)', [valor], (res, error) =>
        getVentas(callback)
    )
}
exports.saveEstadoResultados = (estador) => {
    db.run("insert into estadoResultados(utilidadNeta,ingresos,ventas,otrosIngresos, capitalAnterior, costos, materiaPrima, costosIndirectos, utilidadBruta, gastosOperativos, inversionMarketing, inversionInvestigacion,inversionActivos, manoObra, numero, codigo,jugador) values(?,?,?,?,?,?,?,?,?, ?, ?, ?,?,?,?,?,?)", [estador.utilidadNeta, estador.ingresos, estador.ventas, estador.otrosIngresos, estador.capitalAnterior, estador.costos, estador.materiaPrima, estador.costosIndirectos, estador.utilidadBruta, estador.gastosOperativos, estador.inversionMarketing, estador.inversionInvestigacion, estador.inversionActivos, estador.manoObra, estador.numeroBimestre, estador.codigo, estador.jugador])
}
exports.saveVentas = (ventas) => {
    db.run("insert into ventas(producidoUnidades,producidoMonetario,ventasRealizadasUnidades,ventasRealizadasMonetario,inventarioUnidades,inventarioMonetario,pedidosNoAtendidosMonetario,pedidosNoAtendidosUnidades, numero, codigo,jugador) values(?,?,?,?,?,?,?,?, ?, ?, ?)", [ventas.producidoUnidades, ventas.producidoMonetario, ventas.ventasRealizadasUnidades, ventas.ventasRealizadasMonetario, ventas.inventarioUnidades, ventas.inventarioMonetario, ventas.pedidosNoAtendidosMonetario, ventas.pedidosNoAtendidosUnidades, ventas.numeroBimestre, ventas.codigo, ventas.jugador])
}
exports.saveCostosProduccion = (costosp) => {
    db.run("insert into costosProduccion(materiaPrima,costoTotal,costoUnitario,numero, codigo,jugador) values(?,?,?,?,?,?)", [costosp.materiaPrima, costosp.costoTotal, costosp.costoUnitario, costosp.numeroBimestre, costosp.codigo, costosp.jugador])
}
exports.saveBimestre = (bimestre) => {
    db.run("insert into bimestre(precioUnitario,produccion,inversionEnMarketing,inversionEnInvestigacion,inversionEnActivos,numero,codigo,jugador) values(?,?,?,?,?,?,?,?)", [bimestre.precioUnitario, bimestre.produccion, bimestre.inversionEnMarketing, bimestre.inversionEnInvestigacion, bimestre.inversionEnActivos, bimestre.numero, bimestre.codigo, bimestre.jugador])
}
exports.saveBalanceGeneral = (balance) => {
    db.run("insert into balanceGeneral(caja,bancos, inventario, corriente, totalActivos, capital, utilidadEjercicio, totalPatrimonio,totalPasivoPatrimonio, numero,codigo,jugador) values(?,?,?,?,?,?,?,?, ?,?,?,?)", [balance.caja, balance.bancos, balance.inventario, balance.corriente, balance.totalActivos, balance.capital, balance.utilidadEjercicio, balance.totalPatrimonio, balance.totalPasivoPatrimonio, balance.numeroBimestre, balance.codigo, balance.jugador])
}
exports.saveEmpresa = (empresa) => {
    db.run("insert into player(name, codigo,cantidadIdealTotal, produccion, cantidadRealVendida,cantidadIdeal,activo) values(?,?,?,?,?,?,?)", [empresa.name, empresa.codigo, empresa.cantidadIdealTotal, empresa.produccion, empresa.cantidadRealVendida, empresa.cantidadIdeal,empresa.activo])
}

exports.saveProduccion = (produccion) => {
    db.run("insert into produccion(produccionIndustriaValorActual,produccionIndustriaValorAnterior,costeMedioTotalActual,costeMedioTotalAnterior,costeMedioUnitarioActual,costeMedioUnitarioAnterior,capacidadProduccionActual,capacidadProduccionAnterior,numero,codigo,jugador) values(?,?,?,?,?,?,?,?,?,?,?)", [produccion.produccionIndustriaValorActual, produccion.produccionIndustriaValorAnterior, produccion.costeMedioTotalActual, produccion.costeMedioTotalAnterior, produccion.costeMedioUnitarioActual, produccion.costeMedioUnitarioAnterior, produccion.capacidadProduccionActual, produccion.capacidadProduccionAnterior, produccion.numero, produccion.codigo, produccion.jugador])
}
exports.saveVentasIndustria = (ventasi) => {
    db.run("insert into ventasIndustria(ventasIndustriaUnidadesActual,ventasIndustriaUnidadesAnterior,ventasIndustriaMonetarioActual,ventasIndustriaMonetarioAnterior,precioUnitarioPromedioActual,precioUnitarioPromedioAnterior,inventarioPromediosActual,inventarioPromediosAnterior, numero, codigo,jugador) values(?,?,?,?,?,?,?,?,?,?,?)", [ventasi.ventasIndustriaUnidadesActual, ventasi.ventasIndustriaUnidadesAnterior, ventasi.ventasIndustriaMonetarioActual, ventasi.ventasIndustriaMonetarioAnterior, ventasi.precioUnitarioPromedioActual, ventasi.precioUnitarioPromedioAnterior, ventasi.inventarioPromediosActual, ventasi.inventarioPromediosAnterior, ventasi.numero, ventasi.codigo, ventasi.jugador])
}
exports.saveVisionGeneral = (vision) => {
    db.run("insert into visionGeneral(ventas,beneficio,precioUnitario,porcentajeDeMercado,numero,codigo, jugador,puntajeBeneficio,puntajeMercado) values(?,?,?,?,?,?,?,?,?)", [vision.ventas, vision.beneficio, vision.precioUnitario, vision.porcentajeDeMercado, vision.numeroBimestre, vision.codigo, vision.jugador, vision.puntajeBeneficio, vision.puntajeMercado])
}

exports.getAllBimestresByCodigoYNumero = (codigo, numero) => {
    return new Promise((resolve, reject) => {
        db.all("select * from bimestre where codigo = ?  AND numero = ? ", [codigo, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getAllBimestresByCodigoYNumero", error)
        return []
    })
}
exports.getAllVentasByCodigoYNumero = (codigo, numero) => {
    return new Promise((resolve, reject) => {
        db.all("select * from ventas where codigo = ?  AND numero = ? ", [codigo, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getAllCostosProduccionByCodigoYNumero", error)
        return []
    })

}
exports.getAllCostosProduccionByCodigoYNumero = (codigo, numero) => {
    return new Promise((resolve, reject) => {
        db.all("select * from costosProduccion where codigo = ?  AND numero = ? ", [codigo, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getAllCostosProduccionByCodigoYNumero", error)
        return []
    })
}
exports.getEmpresasPorCodigoDeJuego = (codigo) => {
    return new Promise((resolve, reject) => {
        db.all("select * from player where codigo = ? ", [codigo], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getEmpresasPorCodigoDeJuego", error)
        return []
    })
}
exports.getVentasPorCodigoDeJuegoNombreNumero = (codigo, nombre, numero) => {
    return new Promise((resolve, reject) => {
        db.get("select * from ventas where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getVentasPorCodigoDeJuegoNombreNumero", error)
        return []
    })
}
exports.getEstadoResultadosPorCodigoDeJuegoNombreNumero = (codigo, nombre, numero) => {
    return new Promise((resolve, reject) => {
        db.get("select * from estadoResultados where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getEstadoResultadosPorCodigoDeJuegoNombreNumero", error)
        return []
    })
}
exports.getProduccionPorCodigoDeJuegoNombreNumero = (codigo, nombre, numero) => {
    return new Promise((resolve, reject) => {
        db.get("select * from produccion where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log(error)
        return []
    })
}
exports.getVentasIndustriaPorCodigoDeJuegoNombreNumero = (codigo, nombre, numero) => {
    return new Promise((resolve, reject) => {
        db.get("select * from ventasIndustria where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log(error)
        return []
    })
}
exports.getBimestrePorCodigoDeJuegoNombreNumero = (codigo, nombre, numero) => {
    return new Promise((resolve, reject) => {
        db.get("select * from bimestre where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getBimestrePorCodigoDeJuegoNombreNumero", error)
        return []
    })
}
exports.getEmpresaPorCodigoDeJuegoYNombre = (codigo, nombre) => {
    return new Promise((resolve, reject) => {
        db.get("select * from player where codigo = ?  AND name = ? ", [codigo, nombre], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getEmpresaPorCodigoDeJuegoYNombre", error)
        return []
    })
}
exports.updateEmpresa = (empresa) => {
    db.run("update  player set cantidadIdealTotal=? , cantidadRealVendida = ?, cantidadIdeal = ? , produccion = ? where codigo = ? AND name = ?", [empresa.cantidadIdealTotal, empresa.cantidadRealVendida, empresa.cantidadIdeal, empresa.produccion, empresa.codigo, empresa.name])
}
exports.updateVentasIndustria = (ventasi) => {
    db.run("update  ventasIndustria set ventasIndustriaUnidadesActual=? , ventasIndustriaUnidadesAnterior = ?, ventasIndustriaMonetarioActual = ? , ventasIndustriaMonetarioAnterior = ?, precioUnitarioPromedioActual=? , precioUnitarioPromedioAnterior = ?, inventarioPromediosActual = ? , inventarioPromediosAnterior = ?,numero=? where codigo = ? AND jugador = ?", [ventasi.ventasIndustriaUnidadesActual, ventasi.ventasIndustriaUnidadesAnterior, ventasi.ventasIndustriaMonetarioActual, ventasi.ventasIndustriaMonetarioAnterior, ventasi.precioUnitarioPromedioActual, ventasi.precioUnitarioPromedioAnterior, ventasi.inventarioPromediosActual, ventasi.inventarioPromediosAnterior, ventasi.numero, ventasi.codigo, ventasi.jugador])
}
exports.updateProduccion = (empresa) => {
    db.run("update  produccion set produccionIndustriaValorActual=? , produccionIndustriaValorAnterior = ?, costeMedioTotalActual = ? , costeMedioTotalAnterior = ?, costeMedioUnitarioActual=? , costeMedioUnitarioAnterior = ?, capacidadProduccionActual = ? , capacidadProduccionActual = ?,numero= ? where codigo = ? AND jugador = ?", [produccion.produccionIndustriaValorActual, produccion.produccionIndustriaValorAnterior, produccion.costeMedioTotalActual, produccion.costeMedioTotalAnterior, produccion.costeMedioUnitarioActual, produccion.costeMedioUnitarioAnterior, produccion.capacidadProduccionActual, produccion.capacidadProduccionAnterior, produccion.numero, produccion.codigo, produccion.jugador])
}




exports.getBalanceGeneralPorCodigoDeJuegoNombreNumero = (codigo, nombre, numero, callback) => {
    db.get("select * from balanceGeneral where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], callback)
}

exports.getCostoProduccionPorCodigoDeJuegoNombreNumeroF = (codigo, nombre, numero, callback) => {
    db.get("select * from costosProduccion where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], callback)
}

exports.getBalanceGeneralPorCodigoDeJuegoNombre = (codigo, nombre, callback) => {
    db.all("select * from balanceGeneral where codigo = ? AND jugador = ?", [codigo, nombre], callback)
}

exports.getAllVisionGeneralByCodigoYNumeroParaUpdate = async (codigo, numero) => {
    return new Promise((resolve, reject) => {
        db.all("select * from visionGeneral where codigo = ?  AND numero = ? ", [codigo, numero], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log( error)
        return []
    })
}

exports.getAllEstadoResultadosPorCodigoDeJuegoNombre = async (codigo, nombre) => {
    return new Promise((resolve, reject) => {
        db.all("select * from estadoResultados where codigo = ? AND jugador = ? ", [codigo, nombre], (error, res) => (error) ? reject(error) : resolve(res))
    }).catch(error => {
        console.log("error getAllEstadoResultadosPorCodigoDeJuegoNombre", error)
        return []
    })
}

exports.getAllVisionGeneralByCodigoYNumero = async (codigo, numero, callback) => {
    return new Promise((resolve, reject) => {
        db.all("select * from visionGeneral where codigo = ?  AND numero = ? order by jugador", [codigo, numero], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getAllVisionGeneralByCodigoYNumero", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getAllVisionGeneralByCodigoYNumero", response)
        return []
    })
}

exports.getProduccionPorCodigoDeJuegoNombreNumeroF = async (codigo, nombre, numero, callback) => {
    return new Promise((resolve, reject) => {
        db.get("select * from produccion where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getProduccionPorCodigoDeJuegoNombreNumeroF", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getProduccionPorCodigoDeJuegoNombreNumeroF", response)
        return null
    })
}

exports.getVentasIndustriaPorCodigoDeJuegoNombreNumeroF = async (codigo, nombre, numero, callback) => {
    return new Promise((resolve, reject) => {
        db.get("select * from ventasIndustria where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getVentasIndustriaPorCodigoDeJuegoNombreNumeroF", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getVentasIndustriaPorCodigoDeJuegoNombreNumeroF", response)
        return null
    })
}

exports.getCostoProduccionPorCodigoDeJuegoNombreNumeroF = async (codigo, nombre, numero, callback) => {
    return new Promise((resolve, reject) => {
        db.get("select * from costosProduccion where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getCostoProduccionPorCodigoDeJuegoNombreNumeroF", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getCostoProduccionPorCodigoDeJuegoNombreNumeroF", response)
        return null
    })
}

exports.getVentasPorCodigoDeJuegoNombreNumeroF = async (codigo, nombre, numero, callback) => {
    return new Promise((resolve, reject) => {
        db.get("select * from ventas where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getVentasPorCodigoDeJuegoNombreNumeroF", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getVentasPorCodigoDeJuegoNombreNumeroF", response)
        return null
    })
}

exports.getBalanceGeneralPorCodigoDeJuegoNombreNumeroF = async (codigo, nombre, numero, callback) => {
    return new Promise((resolve, reject) => {
        db.get("select * from balanceGeneral where codigo = ? AND jugador = ? AND numero = ? ", [codigo, nombre, numero], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getBalanceGeneralPorCodigoDeJuegoNombreNumeroF", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getBalanceGeneralPorCodigoDeJuegoNombreNumeroF", response)
        return null
    })
}

exports.getAllProduccionIndustriaPorCodigoDeJuegoNombreF = async (codigo, nombre) => {
    return new Promise((resolve, reject) => {
        db.all("select * from produccion where codigo = ? AND jugador = ? ", [codigo, nombre], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getAllProduccionIndustriaPorCodigoDeJuegoNombreF", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getAllProduccionIndustriaPorCodigoDeJuegoNombreF", response)
        return []
    })

}

exports.getAllVentasIndustriaPorCodigoDeJuegoNombreF = async (codigo, nombre) => {
    return new Promise((resolve, reject) => {
        db.all("select * from ventasIndustria where codigo = ? AND jugador = ? ", [codigo, nombre], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getAllVentasIndustriaPorCodigoDeJuegoNombreF", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getAllVentasIndustriaPorCodigoDeJuegoNombreF", response)
        return []
    })
}


exports.getAllBimestresByCodigo = async (codigo) => {
    return new Promise((resolve, reject) => {
        db.all("select * from bimestre where codigo = ? ", [codigo], (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    }).then(response => {
        console.log("esta funcionando getAllBimestresByCodigo", response)
        return response
    }).catch(error => {
        console.log("error con funcionando getAllBimestresByCodigo", response)
        return []
    })
}
/*
exports.getAllBimestresByCodigo = (codigo,callback) => {
    db.all("select * from bimestre where codigo = ?" ,[codigo], callback)
}*/
exports.updateVisionGeneral = (vision) => {
    db.run("update  visionGeneral set puntajeBeneficio = ?,puntajeMercado= ? where codigo = ? AND numero = ? AND jugador = ?", [vision.puntajeBeneficio, vision.puntajeMercado, vision.codigo, vision.numero, vision.jugador])
}

exports.getEstadoResultadosAllJugadoresPorCodigoDeJuegoNumero = async(codigo, numero) => {
    return new Promise((resolve,reject)=>{
        db.all("select * from estadoResultados where codigo = ? AND numero = ?",[codigo,numero], (error,res)=>{
            if(error){
                reject(error)
            }else{
                resolve(res)
            }
        })
    }).then(response=>{
        console.log("esta funcionando getEstadoResultadosAllJugadoresPorCodigoDeJuegoNumero", response)
        return response
    }).catch(error=>{        
        console.log("error con funcionando getEstadoResultadosAllJugadoresPorCodigoDeJuegoNumero", response)
        return []
    })
}

exports.updateActivoEmpresa = (empresa) => {
    db.run("update  player set activo=? where codigo = ? AND name = ?"  ,[empresa.activo,empresa.codigo,empresa.name])
}