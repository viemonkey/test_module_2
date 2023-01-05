"use strict";
exports.__esModule = true;
exports.Goods = void 0;
var Goods = /** @class */ (function () {
    function Goods(id, name, type, price, quantity, describe) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.created = new Date().toString();
        this.describe = describe;
    }
    Goods.prototype.getId = function () {
        return this.id;
    };
    Goods.prototype.setId = function (id) {
        this.id = id;
    };
    Goods.prototype.getName = function () {
        return this.name;
    };
    Goods.prototype.setName = function (name) {
        this.name = name;
    };
    Goods.prototype.getType = function () {
        return this.type;
    };
    Goods.prototype.setType = function (type) {
        this.type = type;
    };
    Goods.prototype.getPrice = function () {
        return this.price;
    };
    Goods.prototype.setPrice = function (price) {
        this.price = price;
    };
    Goods.prototype.getQuantity = function () {
        return this.quantity;
    };
    Goods.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Goods.prototype.getCreated = function () {
        return this.created;
    };
    Goods.prototype.setCreated = function (created) {
        this.created = created;
    };
    Goods.prototype.getDescribe = function () {
        return this.created;
    };
    Goods.prototype.setDescribe = function (describe) {
        this.describe = describe;
    };
    return Goods;
}());
exports.Goods = Goods;
