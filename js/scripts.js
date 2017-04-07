//back-end
//constructor
function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}//close constructor
//price prototype
var total = 0;
Pizza.prototype.price = function() {
  console.log(total);
  price = 1;
  this.toppings.forEach(function(topping) {
    price += topping;
  })
  price*=(this.size/2);
  price += 10;
  price*=1.07;
  total += price;
  console.log(total);
}
//end prototype
var toppings = [];
var toppingsList = [];
var sizeText = "";
var size = 1;
function addPizza() {
  toppings = [];
  toppingsList = [];
  // determine size and toppings from user input
  sizeText = $("#size").val().split(",")[1];
  size = parseFloat($("#size").val());
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
  $("#pizzaList").append("<li>" + sizeText + " " + toppingsList + "</li>");
}

//UI
$(function () {
  $(".btn-primary").click(function(event) {
    event.preventDefault();
    addPizza();
    document.getElementById("myForm").reset();
  });
  $("#myForm").submit(function(event) {
    event.preventDefault();
    addPizza();
    // update receipt
    $("#sizeOutput").text(sizeText);
    $("#toppings").text(toppingsList);
    $("#price").text(total.toFixed(2));
    $("form").hide();
    $("#receipt").show();
  });
});
