let pizzaOrders = [];

function Pizza(size, crust, meat ,toppings){
    this.size = size;
    this.crust = crust;
    this.meat = meat;
    this.toppings = toppings;

    this.prices = [];
}

Pizza.prototype.calculateTotalPrice = function(){
  const total = this.prices.reduce((total, price)=>{
      total += price;
      return total;
  })
}
function Toppings(name, price){
  this.name = name;
  this.price = price;
}

priceToppings = [
  new Toppings("large", 800),
  new Toppings("medium", 800),
  new Toppings("small", 800),
  new Toppings("crispy", 800),
  new Toppings("stuffed", 800),
  new Toppings("glutenfree", 800),
  new Toppings("chicken", 800),
  new Toppings("beef", 800),
  new Toppings("chevon", 800),
  new Toppings("peppers", 800),
  new Toppings("onions", 800),
  new Toppings("olives", 800),
  new Toppings("pineapples", 800),
]