class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toText() {
    console.log(
      `${this.name} ${
        this.price
      } Euro in total. ${this.containedVAT()} euro VAT incl. (16%).`
    );
  }
  containedVAT() {
    let vat = this.price * 0.16;
    //console.log(`vat is ${vat}`);
    return vat;
  }
}

//const tracksuit = new Product("Adidas tracksuit",150.0);
const tracksuit = new Product("Adidas tracksuit", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);

tracksuit.containedVAT();
console.log("-----------------------");
tracksuit.toText();

shoes.containedVAT();
shoes.toText();

socks.toText();
socks.containedVAT();

//////////// 2. Cart/////////////////////

class Cart {
  constructor(products) {
    this.products = [];
  }
  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct);
      console.log(
        `Your shopping cart cotains ${this.products.length} products`
      );
    } else {
      console.log(`The product is not available in the shop`);
    }
    return this.products;
  }

  getProductInfoCart() {
    const result = this.products.map((item) => item.toText());

    return result;
  }

  getTotalItemsPrice() {
    let total = this.products.reduce((acc, item) => (acc += item.price), 0);
    console.log(
      `currenctly there are ${this.products.length} in your cart that amounts to ${total}`
    );
  }
}

let myCart = new Cart();
console.log(myCart);

myCart.addProduct("potato"); // This is not available in our shop!
myCart.addProduct(tracksuit); // Your shopping cart now contains 1 products
myCart.addProduct(shoes); // Your shopping cart now contains 2 products
myCart.addProduct(socks); // Your shopping cart now contains 3 products

console.log(`++++++++++++++++++++++++`);
myCart.getProductInfoCart();

console.log(`++++++++++++++++++++++++++++++++++`);
myCart.getTotalItemsPrice();
