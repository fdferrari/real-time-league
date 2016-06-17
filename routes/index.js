var express = require('express');
var router = express.Router();

router.get('/', getMatches);

function getMatches(req, res, next) {
    getTable(req.app, 'matches')
        .then(function (resultado) {
            res.render('index', {
                title: 'Real Time League'
                , title_tabla: 'Today\'s Matches'
                , matches: resultado
            });
        }).catch(function (err) {
            throw err;
        });
}

function getTable(app, table) {

    var promise = new Promise(
        function (resolve, reject) {
            var db = app.get('db');
            var conn = app.get('conn');
            var elementos = {};

            db.table(table)
                .run(conn, function (err, cursor) {
                    if (err) reject(err);
                    cursor.toArray(function (err, result) {
                        if (err) reject(err);
                        resolve({
                            data: result
                        });
                    });
                });

        });

    return promise;
}

module.exports = router;