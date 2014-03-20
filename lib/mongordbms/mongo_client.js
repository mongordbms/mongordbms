var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
exports.connect = function (url, callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(err);
            return;
        }
        var MongoRDBMSDB = require("./db.js");
        callback(null, new MongoRDBMSDB(db));
    });
}