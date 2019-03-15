function burg1(){
  var burger1 = {
    burgname:"Mild Burger",
    burgsacue:"Ketchup",
    burgmeat:"Chicken",
    veg:"lettuce",
    price:5.99
  };
  
}
function burg2(){
    var burger2 = {
    burgname:"Spicy Burger",
    burgsacue:"Hot Sauce",
    burgmeat:"Spicy BBQ Chicken",
    veg:"Tomato & Pickles",
    price:6.99
  };
  document.getElementById("burgname1").innerhtml = burger1.burgname;
  document.getElementById("burgname2").innerhtml = burger2.burgname;
  document.getElementById("burgsauce1").innerhtml = burger1.burgsacue;
  document.getElementById("burgsauce2").innerhtml = burger2.burgsacue;
  document.getElementById("burgmeat1").innerhtml = burger1.burgmeat;
    document.getElementById("burgmeat2").innerhtml = burger2.burgmeat;
    document.getElementById("veg1").innerhtml = burger1.veg;
    document.getElementById("veg2").innerhtml = burger2.veg;
    document.getElementById("price1").innerhtml = burger1.price;
    document.getElementById("price2").innerhtml = burger1.veg;
}
function TaxCalc(){
  
}