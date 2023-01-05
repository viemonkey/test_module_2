import {Goods} from "../Model/Goods";

let readlineSync = require('readline-sync');

export class GoodsManager {
    static goods: Goods[] = [];

    constructor() {
        GoodsManager.goods.push(new Goods(1, "keolac", 'keo', 2000, 10, 'hangton'));
        GoodsManager.goods.push(new Goods(2, "banhmi", 'banh', 1000, 15,  'sap het han'));
        GoodsManager.goods.push(new Goods(3, "coca", 'nuocngot', 2000, 20, 'hangmoive'));
        GoodsManager.goods.push(new Goods(4, "khoaitay", 'raucu', 1000, 30, 'hangmoive'));
        GoodsManager.goods.push(new Goods(5, "cam", 'hoaqua', 1000, 20, 'hangmoive'));
    }

    searchByName(name: string) {
        for (let i = 0; i < GoodsManager.goods.length; i++) {
            if (GoodsManager.goods[i].getName() === name) {
                return i;
            }
        }
        return -1;
    }

    addGood(): void {
        let id: number = +readlineSync.question("Add Id: ")
        let name = readlineSync.question('Add name: ')
        let type = readlineSync.question('Add type: ')
        let price = +readlineSync.question('Add price: ')
        let quantity = +readlineSync.question('Add quantity: ')

        let describe = readlineSync.question('Add describe: ')
        let good = new Goods(id, name, type, price, quantity, describe);
        GoodsManager.goods.push(good)
    }

    showList() {
        console.table(GoodsManager.goods)
    }

    deleteGood() {
        let id: number = +readlineSync.question('Nhap ma hang hoa can xoa: ')
        while (true) {
            for (let i = 0; i < GoodsManager.goods.length; i++) {
                if (GoodsManager.goods[i].id == id) {
                    GoodsManager.goods.splice(i, 1)
                    console.log("Xoa thanh cong ")
                    return
                }
            }
            console.log("khong ton tai mat hang can xoa, yeu cau nhap lai ")
            id = +readlineSync.question('Nhap ma hang hoa can xoa : ')
        }

    }

    updateGood() {
        let id: number = +readlineSync.question('Nhap ma hang hoa can sua: ')
        while (true) {
            for (let i = 0; i < GoodsManager.goods.length; i++) {
                if (GoodsManager.goods[i].id == id) {
                    GoodsManager.goods[i].name = readlineSync.question('Sua ten hang hoa: ');
                    GoodsManager.goods[i].type = readlineSync.question('Sua loai hang hoa: ');
                    GoodsManager.goods[i].price = readlineSync.question('Sua gia hang hoa: ');
                    GoodsManager.goods[i].quantity = readlineSync.question('Sua so luong hang hoa: ');
                    GoodsManager.goods[i].describe = readlineSync.question('Sua mo ta: ');
                    return
                }
            }
            console.log("Ma hang hoa khong ton tai, nhap lai")
            id = +readlineSync.question("Nhap ma hang hoa can sua: ")
        }
    }

}
