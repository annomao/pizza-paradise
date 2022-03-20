let pizzaOrders = [];

function Pizza(size, crust, meat ,toppings){
    this.size = size;
    this.crust = crust;
    this.meat = meat;
    this.toppings = toppings;

    this.price;
}

Pizza.prototype.calculateTotalPrice = function(){
  const total = this.prices.reduce((total, price)=>{
      total += price;
      return total;
  })
}

priceToppingsLarge = {
  "large": 800,
  "crispy": 200,
  "stuffed": 300,
  "glutenfree": 400,
  "chicken": 200,
  "beef": 200,
  "chevon": 200,
  "peppers": 200,
  "onions": 150,
  "olives": 250,
  "pineapples": 200,
}
priceToppingsMedium = {
  "medium" :600,
  "crispy": 150,
  "stuffed": 250,
  "glutenfree": 350,
  "chicken": 150,
  "beef": 150,
  "chevon": 150,
  "peppers": 150,
  "onions": 100,
  "olives": 200,
  "pineapples": 150,
}
priceToppingsSmall = {
  "small": 400,
  "crispy": 100,
  "stuffed": 200,
  "glutenfree": 300,
  "chicken": 100,
  "beef": 100,
  "chevon": 100,
  "peppers": 100,
  "onions": 50,
  "olives": 150,
  "pineapples": 100,
}

// form and dom manipulation
$("document").ready(function(){

  $('#pizza-form').on('submit', function(evt){
    evt.preventDefault();

    let form = this;
    let size = $(this).find('#size').val();
    let crust = $(this).find('#crust').val();
    let meat = $("input[type=radio][name=inlineRadioOptions]:checked").val();
    var selectedToppings = new Array();
    $('input[name="toppings"]:checked').each(function() {
      selectedToppings.push(this.value);
    });

    //combine values to one array
    listToppings = selectedToppings.concat([size, crust, meat]);

    // Calculate price based on size
    if(size === "large"){
      listOfPrices = listToppings.map(item =>{
        return priceToppingsLarge[item];
      });
  
      totalPrice = listOfPrices.reduce((total,current) =>{
        return total +=current
      });
    }
    else if(size === "medium"){
      listOfPrices = listToppings.map(item =>{
        return priceToppingsMedium[item];
      });
  
      totalPrice = listOfPrices.reduce((total,current) =>{
        return total +=current
      });
    }
    else{
      listOfPrices = listToppings.map(item =>{
        return priceToppingsSmall[item];
      });
  
      totalPrice = listOfPrices.reduce((total,current) =>{
        return total +=current
      });
    }
    
    pizza = new Pizza(size,crust,meat,selectedToppings);

    pizza["price"] = totalPrice;

    pizzaOrders.push(pizza);

    updateTheTable();
    form.reset();
  });

function updateTheTable(){
  $("table tbody").append(`
    <tr>
      <td>${pizza.size} </td>
      <td>${pizza.crust}</td>
      <td>${pizza.meat}</td>
      <td>${pizza.toppings}</td>
      <td>${pizza.price}</td>
    </tr>
  `)
  $("#btn-order").html("ADD ORDER");
}

})