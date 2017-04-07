//back-end
//constructor
function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}//close constructor
//price prototype, to be updated
Pizza.prototype.price = function() {
  price = 10;
  price += this.size;
  this.toppings.forEach(function(topping) {
    price += topping;
  })
  console.log(price);
  return "Price" + size + toppings;
}
//end prototype
toppings = [];
//UI
$(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    var size = parseFloat($("#size").val());
    $("input:checkbox[name='toppings']:checked").each(function(){
      toppings.push(parseFloat($(this).val()));
    });
    var newPizza = new Pizza(size, toppings)
    console.log(newPizza);
    newPizza.price()
  });
});
