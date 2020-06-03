// Business Logic -------------
function Pizza () {
  this.size = "";
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function(size) {
  this.size = size;
  if (this.size === 'small') {
    this.price = 8
  } else if (this.size === 'medium') {
    this.price = 10
  } else {
    this.price = 12
  }
}

Pizza.prototype.pizzaToppings = function() {
  var toppings = [0]
  $("input[name='topping']:checked").each(function() {
    toppings.push($(this).val());
  });
  this.toppings = toppings;
}

Pizza.prototype.toppingsPrice = function() {
  console.log(this.price);
  this.price = (this.price + (this.toppings.length * 2) - 2);
}

// User Interface Logic -------------

$(document).ready(function() {
    $("form#size").change(function(event) {
        event.preventDefault();
        var size = $("input:radio[name=size]:checked").val();
        pizza.pizzaPrice(size);
        $("#toppings").fadeIn();
    });
});