//back-end
//constructor
function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}//close constructor
//price prototype, to be updated
Pizza.prototype.price = function() {
  return "Price" + size + toppings;
}//end prototype
//UI
$(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    console.log(size);
    $("input:checkbox[name='toppings']:checked").each(function(){
      var toppings = $(this).val();
      console.log(toppings);
    });
  });
});
