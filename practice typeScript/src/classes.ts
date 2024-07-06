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
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {}
  myHeight = () => this.height;

  get getMyHeight(): number {
    return this.height;
  }
  set changeHeight(val: number) {
    this.height = val;
  }
}

class Player2 extends Player {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power); // copy parent class constructor
    this.special = special;
  }
  getMyPower = () => {
    return this.power; // we can access protected properties in nested classes
    // this.height; // we can't access private properties in nested classes and outside of classes
  };
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
// console.log(player3.power);

interface ProductType {
  //   name: string;
  //   price: number;
  stock: number;
  id: string;
  offer?: boolean;
}

class Product implements ProductType {
  protected name: string;
  private price: number;
  //   public stock: number;
  // private id: string;
  //   offer?: boolean;
  constructor(
    name: string,
    price: number,
    public stock: number,
    public id: string,
    public offer?: boolean
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.id = id;
    this.offer = true;
  }
}
const product = new Product("Face wash", 10, 4, "Dafdsa", true);
console.log(product);

