var Collection = function (collection) {
    this.collection = collection;
}

Collection.prototype.find = function (query, options, callback) {
    this.collection.find(query, options).toArray(callback);
}

Collection.prototype.findOne = function (query, options, callback) {
    this.collection.findOne(query, options, callback);
}

Collection.prototype.aggregate = function (pipeline, callback) {
    this.collection.aggregate(query, callback);
}

Collection.prototype.insert = function (inserts, options, callback) {
    this.collection.insert(inserts, options, callback);
}

Collection.prototype.update = function (query, updates, options, callback) {
    this.collection.update(query, updates, options, callback);
}

Collection.prototype.remove = function (query, options, callback) {
    this.collection.remove(query, options, callback);
}

Collection.prototype.ensureIndex = function (fields, properties, callback) {
    this.collection.ensureIndex(fields, properties, callback);
}

Collection.prototype.dropIndex = function (name, callback) {
    this.collection.dropIndex(name, callback);
}

Collection.prototype.indexes = function (callback) {
    this.collection.indexes(callback);
}

Collection.prototype.mapReduce = function (mapFn, reduceFn, options, callback) {
    this.collection.mapReduce(mapFn, reduceFn, options, callback);
}

Collection.prototype.findAndModify = function (query, sort, updates, options, callback) {
    this.collection.findAndModify(query, sort, updates, options, callback);
}

module.exports = Collection;


