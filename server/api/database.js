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
    db.run("insert into estadoResultados(ingresos,ventas,otrosIngresos, capitalAnterior, costos, materiaPrima, costosIndirectos, utilidadBruta, gastosOperativos, inversionMarketing, inversionInvestigacion,inversionActivos, numero, codigo,jugador) values(?,?,?,?,?,?,?,?, ?, ?, ?,?,?,?,?)", [estador.ingresos,estador.ventas,estador.otrosIngresos, estador.capitalAnterior, estador.costos, estador.materiaPrima, estador.costosIndirectos, estador.utilidadBruta, estador.gastosOperativos, estador.inversionMarketing, estador.inversionInvestigacion,estador.inversionActivos, estador.numeroBimestre, estador.codigo,estador.jugador])    
}
exports.saveVentas = (ventas) => {
    db.run("insert into ventas(producidoUnidades,producidoMonetario,ventasRealizadasUnidades,ventasRealizadasMonetario,inventarioUnidades,inventarioMonetario,pedidosNoAtendidosMonetario,pedidosNoAtendidosUnidades, numero, codigo,jugador) values(?,?,?,?,?,?,?,?, ?, ?, ?)", [ventas.producidoUnidades,ventas.producidoMonetario,ventas.ventasRealizadasUnidades,ventas.ventasRealizadasMonetario,ventas.inventarioUnidades,ventas.inventarioMonetario,ventas.pedidosNoAtendidosMonetario,ventas.pedidosNoAtendidosUnidades, ventas.numeroBimestre, ventas.codigo,ventas.jugador])    
}
exports.saveCostosProduccion = (costosp) => {
    db.run("insert into costosProduccion(materiaPrima,costoTotal,costoUnitario,numero, codigo,jugador) values(?,?,?,?,?,?)", [costosp.materiaPrima,costosp.costoTotal,costosp.costoUnitario,costosp.numeroBimestre, costosp.codigo,costosp.jugador])    
}
exports.saveBimestre = (bimestre) => {
    db.run("insert into bimestre(precioUnitario,produccion,inversionEnMarketing,inversionEnInvestigacion,inversionEnActivos,numero,codigo,jugador) values(?,?,?,?,?,?,?,?)", [bimestre.precioUnitario,bimestre.produccion,bimestre.inversionEnMarketing,bimestre.inversionEnInvestigacion,bimestre.inversionEnActivos,bimestre.numero,bimestre.codigo,bimestre.jugador])    
}
exports.saveBalanceGeneral = (balance) => { 
    db.run("insert into balanceGeneral(caja,bancos, inventario, corriente, totalActivos, capital, utilidadEjercicio, totalPatrimonio,totalPasivoPatrimonio, numero,codigo,jugador) values(?,?,?,?,?,?,?,?, ?,?,?,?)", [balance.caja,balance.bancos, balance.inventario, balance.corriente, balance.totalActivos, balance.capital, balance.utilidadEjercicio, balance.totalPatrimonio,balance.totalPasivoPatrimonio, balance.numeroBimestre,balance.codigo,balance.jugador])    
}
exports.saveEmpresa = (empresa) => {
    db.run("insert into player(name, codigo,cantidadIdealTotal, produccion, cantidadRealVendida,cantidadIdeal) values(?,?,?,?,?,?)", [empresa.name, empresa.codigo,empresa.cantidadIdealTotal, empresa.produccion, empresa.cantidadRealVendida,empresa.cantidadIdeal])    
}
exports.getAllBimestresByCodigoYNumero = (codigo, numero,callback) => {
    db.all("select * from bimestre where codigo = ?  AND numero = ? " ,[codigo,numero], callback)
}
exports.getEmpresasPorCodigoDeJuego = (codigo,callback) => {
    db.all("select * from player where codigo = ? ",[codigo], callback)
}
exports.getVentasPorCodigoDeJuegoNombreNumero = (codigo, nombre, numero, callback) => {
    db.get("select * from ventas where codigo = ? AND jugador = ? AND numero = ? ",[codigo,nombre,numero], callback)
}
exports.getEstadoResultadosPorCodigoDeJuegoNombreNumero = (codigo, nombre, numero, callback) => {
    db.get("select * from estadoResultados where codigo = ? AND jugador = ? AND numero = ? ",[codigo,nombre,numero], callback)
}

   

   

