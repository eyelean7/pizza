//back-end
var numberOfPizzas = 0;
//constructor
function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}//close constructor
//price prototype
var total = 0;
Pizza.prototype.price = function() {
  toppingPrice = 1;
  price = 5;
  this.toppings.forEach(function(topping) {
    toppingPrice += topping;
  });
  price+=(toppingPrice*this.size);
  price-=(this.toppings.length*.25);
  price*=1.07;
  total += price;
  console.log(total);
}
//end prototype
//verify toppings
function valToppings() {
  var checkboxs=document.getElementsByName("toppings");
  var okay=false;
  for(var i=0,l=checkboxs.length;i<l;i++) {
    if(checkboxs[i].checked) {
      okay=true;
      break;
    }
  }
  if(okay) {
    toppingsList.pop();
  };
}//end verify toppings
var toppings = [];
var toppingsList = ["no toppings"];
var sizeText = "";
var size = 1;
function addPizza() {
  toppings = [];
  toppingsList = ["no toppings"];
  // determine size and toppings from user input
  sizeText = $("#size").val().split(",")[1];//e.g. small, medium
  size = parseFloat($("#size").val());//to determine price
  valToppings();
  $("input:checkbox[name='toppings']:checked").each(function(){
    toppingsList.push($(this).val().split(",")[1]);//name of toppings
  });
  $("input:checkbox[name='toppings']:checked").each(function(){
    toppings.push(parseFloat($(this).val()));//to determine price
  });
  // create Pizza instance
  var newPizza = new Pizza(size, toppings)
  // run price prototype
  newPizza.price();
  $("#pizzaList").append("<li>" + sizeText + ": " + toppingsList.join(", ") + "</li>");
  numberOfPizzas += 1;
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
    // update receipt
    if (numberOfPizzas < 1) {
      alert("Please add at least one pizza to your order.")
    }
    else {
      $("#price").text(total.toFixed(2));
      $("form").hide();
      $("#receipt").show();
      if (numberOfPizzas > 1) {
        $("#plural").text("s");
      }
    }
  });
});
