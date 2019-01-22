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
function getVentas(callback) {
    db.all("select * from ventas", (res, error) =>
        callback(res, error)
    )
}