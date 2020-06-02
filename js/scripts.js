// Business Logic -------------

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

// User Interface Logic -------------

$(document).ready(function() {
  var pizza = new Pizza ();
  
    $("form#size").change(function(event) {
        event.preventDefault();
        var size = $("input:radio[name=size]:checked").val();
        pizza.pizzaPrice(size);
    });
});
