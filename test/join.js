var expect = require('chai').expect;
var MongoRDBMS = require("../mongordbms.js");

//mocha --recursive --timeout 10000 -g jointestcase --reporter spec


describe("jointestcase", function () {

    it("join", function (done) {
        MongoRDBMS.MongoClient.connect("mongodb://127.0.0.1:27017/northwind", function (err, db) {
            if (err) {
                done(err);
                return;
            }

            var collection = db.collection("books");
            collection.find({}, {}, function (err, data) {
                if (err) {
                    done(err);
                    return;
                }
                expect(data).to.have.length(0);
                done();
            });
        })
    })


})