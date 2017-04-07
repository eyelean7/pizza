//back-end
//constructor
function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}//close constructor
//price prototype
Pizza.prototype.price = function() {
  price = 0;
  this.toppings.forEach(function(topping) {
    price += topping;
  })
  price*=(this.size/2);
  price += 10;
  price*=1.07;
  console.log(price);
}
//end prototype
toppings = [];
toppingsList = [];
//UI
$(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    // determine size and toppings from user input
    var sizeText = $("#size").val().split(",")[1];
    var size = parseFloat($("#size").val());
    $("input:checkbox[name='toppings']:checked").each(function(){
      toppingsList.push($(this).val().split(",")[1]);
    });
    $("input:checkbox[name='toppings']:checked").each(function(){
      toppings.push(parseFloat($(this).val()));
    });

    // create Pizza instance
    var newPizza = new Pizza(size, toppings)
    // run price prototype
    newPizza.price();
    console.log(newPizza);
    // update receipt
    $("#sizeOutput").text(sizeText);
    $("#toppings").text(toppingsList);
    $("#price").text(price.toFixed(2));
    $("form").hide();
    $("#receipt").show();
  });
});
