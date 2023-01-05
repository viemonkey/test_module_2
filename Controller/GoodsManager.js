"use strict";
exports.__esModule = true;
exports.GoodsManager = void 0;
var Goods_1 = require("../Model/Goods");
var readlineSync = require('readline-sync');
var GoodsManager = /** @class */ (function () {
    function GoodsManager() {
        GoodsManager.goods.push(new Goods_1.Goods(1, "keolac", 'keo', 2000, 10, 'hangton'));
        GoodsManager.goods.push(new Goods_1.Goods(2, "banhmi", 'banh', 1000, 15, 'sap het han'));
        GoodsManager.goods.push(new Goods_1.Goods(3, "coca", 'nuocngot', 2000, 20, 'hangmoive'));
        GoodsManager.goods.push(new Goods_1.Goods(4, "khoaitay", 'raucu', 1000, 30, 'hangmoive'));
        GoodsManager.goods.push(new Goods_1.Goods(5, "cam", 'hoaqua', 1000, 20, 'hangmoive'));
    }
    GoodsManager.prototype.searchByName = function (name) {
        for (var i = 0; i < GoodsManager.goods.length; i++) {
            if (GoodsManager.goods[i].getName() === name) {
                return i;
            }
        }
        return -1;
    };
    GoodsManager.prototype.addGood = function () {
        var id = +readlineSync.question("Add Id: ");
        var name = readlineSync.question('Add name: ');
        var type = readlineSync.question('Add type: ');
        var price = +readlineSync.question('Add price: ');
        var quantity = +readlineSync.question('Add quantity: ');
        var describe = readlineSync.question('Add describe: ');
        var good = new Goods_1.Goods(id, name, type, price, quantity, describe);
        GoodsManager.goods.push(good);
    };
    GoodsManager.prototype.showList = function () {
        console.table(GoodsManager.goods);
    };
    GoodsManager.prototype.deleteGood = function () {
        var id = +readlineSync.question('Nhap ma hang hoa can xoa: ');
        while (true) {
            for (var i = 0; i < GoodsManager.goods.length; i++) {
                if (GoodsManager.goods[i].id == id) {
                    GoodsManager.goods.splice(i, 1);
                    console.log("Xoa thanh cong ");
                    return;
                }
            }
            console.log("khong ton tai mat hang can xoa, yeu cau nhap lai ");
            id = +readlineSync.question('Nhap ma hang hoa can xoa : ');
        }
    };
    GoodsManager.prototype.updateGood = function () {
        var id = +readlineSync.question('Nhap ma hang hoa can sua: ');
        while (true) {
            for (var i = 0; i < GoodsManager.goods.length; i++) {
                if (GoodsManager.goods[i].id == id) {
                    GoodsManager.goods[i].name = readlineSync.question('Sua ten hang hoa: ');
                    GoodsManager.goods[i].type = readlineSync.question('Sua loai hang hoa: ');
                    GoodsManager.goods[i].price = readlineSync.question('Sua gia hang hoa: ');
                    GoodsManager.goods[i].quantity = readlineSync.question('Sua so luong hang hoa: ');
                    GoodsManager.goods[i].describe = readlineSync.question('Sua mo ta: ');
                    return;
                }
            }
            console.log("Ma hang hoa khong ton tai, nhap lai");
            id = +readlineSync.question("Nhap ma hang hoa can sua: ");
        }
    };
    GoodsManager.goods = [];
    return GoodsManager;
}());
exports.GoodsManager = GoodsManager;
