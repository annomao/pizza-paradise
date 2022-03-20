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

priceToppings = {
  "large": 800,
  "medium" :600,
  "small": 400,
  "crispy": 200,
  "stuffed": 300,
  "glutenfree": 400,
  "chicken": 200,
  "beef": 200,
  "chevon": 200,
  "peppers": 100,
  "onions": 50,
  "olives": 200,
  "pineapples": 150,
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

    listToppings = selectedToppings.concat([size, crust, meat]);

    listOfPrices = listToppings.map(item =>{
      return priceToppings[item];
    });

    totalPrice = listOfPrices.reduce((total,current) =>{
      return total +=current
    });

    pizza = new Pizza(size,crust,meat,selectedToppings);

    pizza["price"] = totalPrice;

    pizzaOrders.push(pizza);

    updateTheTable();
    deleteOrder();
    form.reset();

  });

  function deleteOrder(){
    $('.btnDelete').on({click: function(){
      var index = $('.btnDelete').index(this);
      pizzaOrders.splice(index, 1);
      $('.div-results').eq(index).remove();}
    })
  }


function updateTheTable(){
  $("div #results").append(`
    <div class="div-results">
      ${pizza.size} | ${pizza.crust} | ${pizza.meat} | ${pizza.toppings} | ${pizza.price}
       <button type="button" class="btn btn-primary btn-sm btnDelete">DELETE</button>
    </div>
  `)
  $("#btn-order").html("ADD ORDER");
}

})