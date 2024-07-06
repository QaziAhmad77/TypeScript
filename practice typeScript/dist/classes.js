"use strict";
// class Player {
//   private height;
//   public weight; // by default its public
//   constructor(height: number, weight: number) {
//     this.height = height;
//     this.weight = weight;
//   }
//   myHeight = () => {
//     return this.height;
//   };
// }
// const player1 = new Player(100, 150);
// // console.log(player1.height, player1.weight);
// console.log(player1.weight);
// console.log(player1.myHeight());
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.myHeight = () => this.height;
    }
    get getMyHeight() {
        return this.height;
    }
    set changeHeight(val) {
        this.height = val;
    }
}
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power); // copy parent class constructor
        this.getMyPower = () => {
            return this.power; // we can access protected properties in nested classes
            // this.height; // we can't access private properties in nested classes and outside of classes
        };
        this.special = special;
    }
}
const player1 = new Player(100, 150, 23);
// console.log(player1.height);
console.log(player1.weight);
// console.log(player1.power);
console.log(player1.myHeight());
console.log(player1.getMyHeight, "get");
player1.changeHeight = 10;
console.log(player1.getMyHeight, "set");
const player3 = new Player2(1, 2, 3, true);
console.log(player3);
console.log(player3.weight);
console.log(player3.myHeight());
// console.log(player3.height);
console.log(player3.getMyPower());
class Product {
    //   public stock: number;
    // private id: string;
    //   offer?: boolean;
    constructor(name, price, stock, id, offer) {
        this.stock = stock;
        this.id = id;
        this.offer = offer;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = id;
        this.offer = true;
    }
}
const product = new Product("Face wash", 10, 4, "Dafdsa", true);
console.log(product);
