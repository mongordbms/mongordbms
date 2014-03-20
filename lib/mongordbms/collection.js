var Collection = function (collection) {
    this.collection = collection;
}

Collection.prototype.find = function (query, options, callback) {
    this.collection.find(query, options).toArray(callback);
}

module.exports = Collection;


