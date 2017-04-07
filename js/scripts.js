//back-end
//constructor
function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}//close constructor
//price prototype
Pizza.prototype.price = function() {
  price = 10;
  this.toppings.forEach(function(topping) {
    price += topping;
  })
  price*=(this.size/3)
  price*=1.07;
  console.log(price);
}
//end prototype
toppings = [];
//UI
$(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    var size = parseFloat($("#size").val());
    var sizeText = $("#size").val();
    console.log(sizeText);
    $("input:checkbox[name='toppings']:checked").each(function(){
      toppings.push(parseFloat($(this).val()));
    });
    var newPizza = new Pizza(size, toppings)
    newPizza.price();
    $("#sizeOutput").text('BIG');
    $("#toppings").text("YUMMY");
    $("#price").text("EXPENSIVE");
    $("form").hide();
    $("#receipt").show();
  });
});
