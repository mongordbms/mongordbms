var DB = function (mongodb) {
    this.db = mongodb;
}
DB.prototype.collection = function (collection) {
    var Collection = require("./collection.js");
    return new Collection(this.db.collection(collection));
}
module.exports = DB;
