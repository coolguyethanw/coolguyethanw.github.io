// script has to be last in the body
// ---- this whole thing is a veritable tower of duct-tape
// json stuff
// json initilization below
// todo: CLEAN THIS UP!!
var subtotal = 0;
var total = 0;
var tax = 0.004712;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(this.responseText);
    console.log(mydata.menu[1].name);
    Menu1Name = mydata.menu[0].name;
    Menu1Price = mydata.menu[0].price;
    document.getElementById("fooditem1").innerHTML = Menu1Name;
    sessionStorage.setItem('Name1', 'Menu1Name');
    sessionStorage.setItem('Price1', 'Menu1Price');

    document.getElementById("foodPrice1").innerHTML = "$" + Menu1Price;
    Menu1Desc = mydata.menu[0].desc;
    document.getElementById("foodDesc1").innerHTML = Menu1Desc;
    //// inserting menu items
    Menu2Name = mydata.menu[1].name;
    document.getElementById("fooditem2").innerHTML = Menu2Name;
    Menu2Price = mydata.menu[1].price;
    document.getElementById("foodPrice2").innerHTML = "$" + Menu2Price;
    Menu2Desc = mydata.menu[1].desc;
    document.getElementById("foodDesc2").innerHTML = Menu2Desc;
    sessionStorage.setItem('Name2', 'Menu2Name');
    sessionStorage.setItem('Price2', 'Menu2Price');

    Menu3Name = mydata.menu[2].name;
    document.getElementById("fooditem3").innerHTML = Menu3Name;
    Menu3Price = mydata.menu[2].price;
    document.getElementById("foodPrice3").innerHTML = "$" + Menu3Price;
    Menu3Desc = mydata.menu[2].desc;
    document.getElementById("foodDesc3").innerHTML = Menu3Desc;
    sessionStorage.setItem('Name3', 'Menu3Name');
    sessionStorage.setItem('Price3', 'Menu3Price');

    Menu4Name = mydata.menu[3].name;
    document.getElementById("fooditem4").innerHTML = Menu4Name;
    Menu4Price = mydata.menu[3].price;
    document.getElementById("foodPrice4").innerHTML = "$" + Menu4Price;
    Menu4Desc = mydata.menu[3].desc;
    document.getElementById("foodDesc4").innerHTML = Menu4Desc;
    sessionStorage.setItem('Name4', 'Menu4Name');
    sessionStorage.setItem('Price4', 'Menu4Price');


    Menu5Name = mydata.menu[4].name;
    document.getElementById("fooditem5").innerHTML = Menu5Name;
    Menu5Price = mydata.menu[4].price;
    document.getElementById("foodPrice5").innerHTML = "$" + Menu5Price;
    Menu5Desc = mydata.menu[4].desc;
    document.getElementById("foodDesc5").innerHTML = Menu5Desc;
    sessionStorage.setItem('Name5', 'Menu5Name');
    sessionStorage.setItem('Price5', 'Menu5Price');


    Menu6Name = mydata.menu[5].name;
    document.getElementById("fooditem6").innerHTML = Menu6Name;
    Menu6Price = mydata.menu[5].price;
    document.getElementById("foodPrice6").innerHTML = "$" + Menu6Price;
    Menu6Desc = mydata.menu[5].desc;
    document.getElementById("foodDesc6").innerHTML = Menu6Desc;
    sessionStorage.setItem('Name6', 'Menu6Name');
    sessionStorage.setItem('Price6', 'Menu6Price');


    Menu7Name = mydata.menu[6].name;
    document.getElementById("fooditem7").innerHTML = Menu7Name;
    Menu7Price = mydata.menu[6].price;
    document.getElementById("foodPrice7").innerHTML = "$" + Menu7Price;
    Menu7Desc = mydata.menu[6].desc;
    document.getElementById("foodDesc7").innerHTML = Menu7Desc;


    Menu8Name = mydata.menu[7].name;
    document.getElementById("fooditem8").innerHTML = Menu8Name;
    Menu8Price = mydata.menu[7].price;
    document.getElementById("foodPrice8").innerHTML = "$" + Menu8Price;
    Menu8Desc = mydata.menu[7].desc;
    document.getElementById("foodDesc8").innerHTML = Menu8Desc;
  }
};

xmlhttp.open("GET", "menu.json", true);
xmlhttp.send();
console.log("JSON Operation completed");
/*
--------------------------- will fuck up the script if json not setup properly
var previous = null;
var current = null;
setInternal(function(){
  $.getJSON("menu.json"),function(json){
    current = JSON.stringify(json);
    if (previous && current && previous !== current){
      location.reload();
    }
    previous=current;
  };
},2000);
*/

// json food item
// optionboxes are things like ice cream that have pickable flavors
// room 4 and 8 are optionboxes which have select boxes for flavors
// todo: comment out b4 turning in
var foodsTotal = [];
var foodsRm = [];
var foodsRm2 = [];
var foodsRm3 = [];
var foodsRm4 = [];
var foodsRm5 = [];
var foodsRm6 = [];
var foodsRm7 = [];
var foodsRm8 = [];
// food names stored (doesn't fucking work for some reason)
var command = "start of food log";
// used for printing the items and then adding the price
var commandprice = "price of food here";
// used for logging commands
var NumfoodsRm1 = 0;
// fish n sticks, price 12
var NumfoodsRm2 = 0;
// soup of day price 3
var NumfoodsRm3 = 0;
// fried chicken price 8
var NumfoodsRm4 = 0;
// drink price 2 (optionbox)
var NumfoodsRm5 = 0;
// spaghet price 12
var NumfoodsRm6 = 0;
// omelet price 11
var NumfoodsRm7 = 0;
//donk price 14
var NumfoodsRm8 = 0;
// icecream price 4 (optionbox)
var d = new Date();
// find current date
// sold out options below
var Room1Full = false;
var Room2Full = false;
var Room3Full = false;
var Room4Full = false;
var Room5Full = false;
var Room6Full = false;
var Room7Full = false;
var totalItems = 0;
var Room8Full = true; //starts true for testing and because ice cream machine broke

// ============= loading in the json items as variables and then inserting in page

/* var RoomClean1 = false;
var RoomClean2 = false;
var RoomClean3 = false;
var RoomClean4 = false;
var RoomClean5 = false;
var RoomClean6 = false;
var RoomClean7 = false;
var RoomClean8 = false;
*/

// main global variables above
// main script begins  below
var RoomClean1 = false;
// list of check in foods
/*function addfoodrm1() {
  var food = Menu1Name;
  NumfoodsRm1 += 1;
  totalItems += 1;
  //foodsRm1.push(food);
  // add food name to food list
  /*var room = document.getElementById("logs");
  // find the room that were about to thro w foods into
  var checkIn = room.getElementsByTagName("li");
  // find the list inside the room
  var Newli = document.createElement('li');
  // create new element and save it as new li
  var ul = document.getElementById("logs");
  // find the list inside the room
  // add an ID to the list items so we can identify and remove it later
  var newText = document.createTextNode(food + " " + Menu1Price);
  document.body.appendChild(Newli);
  ul.appendChild(Newli);
  Newli.appendChild(newText);
  */
function removeRoom1() {
  var badfood = document.getElementById('Disposal').value;
  var room = document.getElementById('prices');
  var kick = room.getElementsByTagName('li')[badfood];
  var gtfo = kick.parentNode;
  totalItems -= 1;
  console.log("Kicking food from room 1, may create errors if no food found!");
  gtfo.removeChild(kick);
  d = new Date();
  subtotal -= commandprice;
  document.getElementById("total").innerHTML = "$" + subtotal;
  total2 -= commandprice;
  document.getElementById('total2').innerHTML = "$" + total;
}

function clearRoom1() {
  var num = 1;
  var badfood = document.getElementById('Room1Kicker').value;
  var room = document.getElementById('room1');
  var kick = room.getElementsByTagName('li')[badfood];
  d = new Date();
  while (num <= badfood) {
    // TODO: find a way to stop people from overflowing the room effectively
    totalItems += 1;
    var food = Menu1Name;
    command = food;
    commandprice = Menu1Price;
    ConsoleLog()
    foodsTotal.push(food);
    var Newli = document.createElement('option');
    // create new element and save it as new li
    var ul = document.getElementById("Disposal");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(totalItems);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    var trudat = totalItems - 1;
    Newli.setAttribute("value", trudat);
    Newli.appendChild(newText);
    NumfoodsRm1 += 1;
    num++
  };
  num = 0;
};

function clearRoom2() {
  var num = 1;
  var badfood = document.getElementById('Room2Kicker').value;
  var room = document.getElementById('room2');
  var kick = room.getElementsByTagName('li')[badfood];
  d = new Date();
  while (num <= badfood) {
    // TODO: find a way to stop people from overflowing the room effectively
    totalItems += 1;
    var food = Menu2Name;
    foodsRm2.push(food);
    command = food;
    commandprice = Menu2Price;
    ConsoleLog()
    var Newli = document.createElement('option');
    // create new element and save it as new li
    var ul = document.getElementById("Disposal");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(totalItems);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    var trudat = totalItems - 1;
    Newli.setAttribute("value", trudat);
    Newli.appendChild(newText);
    NumfoodsRm2 += 1;
    num++
  };
  num = 0;
}

function clearRoom3() {
  var num = 1;
  var badfood = document.getElementById('Room3Kicker').value;
  var room = document.getElementById('room3');
  var kick = room.getElementsByTagName('li')[badfood];
  d = new Date();
  while (num <= badfood) {
    // TODO: find a way to stop people from overflowing the room effectively
    totalItems += 1;
    var food = Menu3Name;
    foodsRm3.push(food);
    command = food;
    commandprice = Menu3Price;
    ConsoleLog()
    var Newli = document.createElement('option');
    // create new element and save it as new li
    var ul = document.getElementById("Disposal");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(totalItems);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    var trudat = totalItems - 1;
    Newli.setAttribute("value", trudat);
    Newli.appendChild(newText);
    NumfoodsRm3 += 1;
    num++
  };
  num = 0;
}

function clearRoom4() {
  var num = 1;
  var badfood = document.getElementById('Room4Kicker').value;
  var room = document.getElementById('room4');
  var kick = room.getElementsByTagName('li')[badfood];
  d = new Date();
  while (num <= badfood) {
    // TODO: find a way to stop people from overflowing the room effectively
    totalItems += 1;
    var food = Menu4Name;
    foodsRm4.push(food);
    command = food;
    commandprice = Menu4Price;
    ConsoleLog()
    var Newli = document.createElement('option');
    // create new element and save it as new li
    var ul = document.getElementById("Disposal");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(totalItems);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    var trudat = totalItems - 1;
    Newli.setAttribute("value", trudat);
    Newli.appendChild(newText);
    NumfoodsRm4 += 1;
    num++
  };
  num = 0;
}

function clearRoom5() {
  var num = 1;
  var badfood = document.getElementById('Room5Kicker').value;
  var room = document.getElementById('room5');
  var kick = room.getElementsByTagName('li')[badfood];
  d = new Date();
  while (num <= badfood) {
    // TODO: find a way to stop people from overflowing the room effectively
    totalItems += 1;
    var food = Menu5Name;
    foodsRm5.push(food);
    command = food;
    commandprice = Menu5Price;
    ConsoleLog()
    var Newli = document.createElement('option');
    // create new element and save it as new li
    var ul = document.getElementById("Disposal");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(totalItems);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    var trudat = totalItems - 1;
    Newli.setAttribute("value", trudat);
    Newli.appendChild(newText);
    NumfoodsRm5 += 1;
    num++
  };
  num = 0;
}

function clearRoom6() {
  var num = 1;
  var badfood = document.getElementById('Room6Kicker').value;
  var room = document.getElementById('room6');
  var kick = room.getElementsByTagName('li')[badfood];
  d = new Date();
  while (num <= badfood) {
    // TODO: find a way to stop people from overflowing the room effectively
    totalItems += 1;
    var food = Menu6Name;
    foodsRm6.push(food);
    command = food;
    commandprice = Menu6Price;
    ConsoleLog()
    var Newli = document.createElement('option');
    // create new element and save it as new li
    var ul = document.getElementById("Disposal");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(totalItems);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    var trudat = totalItems - 1;
    Newli.setAttribute("value", trudat);
    Newli.appendChild(newText);
    NumfoodsRm6 += 1;
    num++
  };
  num = 0;
}



function ConsoleLog() {
  // add food name to food list
  var log = document.getElementById("logger");
  // find the room that were about to thro w foods into
  var checkIn = log.getElementsByTagName("li");
  // find the list inside the room
  var Newli = document.createElement('li');
  // create new element and save it as new li
  var ul = document.getElementById("logs");
  var ol = document.getElementById("prices");
  // find the list inside the room
  // add an ID to the list items so we can identify and remove it later
  var newText = document.createTextNode(command);
  document.body.appendChild(Newli);
  ul.appendChild(Newli);
  Newli.appendChild(newText);

  var newPrice = document.createTextNode(" $" + commandprice);
  document.body.appendChild(Newli);
  ol.appendChild(Newli);
  Newli.appendChild(newPrice);
  totalcalc()
}
var subtotal
var gtotal
function totalcalc() {
  subtotal = commandprice + subtotal;
  document.getElementById("total").innerHTML = "$" + subtotal;
  var total = subtotal + tax;
  var taxes = tax * total;
  total = total + taxes;
  var gtotal = total.toFixed(2);
  document.getElementById('total2').innerHTML = "$" + gtotal;
}

function paymentpage() {
  sessionStorage.setItem('food1', 'NumfoodsRm1');
  sessionStorage.setItem('food2', 'NumfoodsRm2');
  sessionStorage.setItem('food3', 'NumfoodsRm3');
  sessionStorage.setItem('food4', 'NumfoodsRm4');
  sessionStorage.setItem('food5', 'NumfoodsRm5');
  sessionStorage.setItem('food6', 'NumfoodsRm6');
  sessionStorage.setItem('totalorder', 'totalItems');
  sessionStorage.setItem('total', 'subtotal');
  sessionStorage.setItem('total2', 'gtotal');
  location = "checkout.html";
}


// ======================================checkout page shit============

var NumfoodsRm11 = sessionStorage.getItem("food1");
var NumfoodsRm22 = sessionStorage.getItem("food2");
var NumfoodsRm33 = sessionStorage.getItem("food3");
var NumfoodsRm44 = sessionStorage.getItem("food4");
var NumfoodsRm55 = sessionStorage.getItem("food5");
var NumfoodsRm66 = sessionStorage.getItem("food6");
var Menu1Name = sessionStorage.getItem("Name1");
var Menu1Price = sessionStorage.getItem("Price1");
var Menu2Name = sessionStorage.getItem("Name2");
var Menu2Price = sessionStorage.getItem("Price2");
var Menu3Name = sessionStorage.getItem("Name3");
var Menu3Price = sessionStorage.getItem("Price3");
var Menu4Name = sessionStorage.getItem("Name4");
var Menu4Price = sessionStorage.getItem("Price4");
var Menu5Name = sessionStorage.getItem("Name5");
var Menu5Price = sessionStorage.getItem("Price5");
var Menu6Name = sessionStorage.getItem("Name6");
var Menu6Price = sessionStorage.getItem("Price6");
var totalItems = sessionStorage.getItem("totalorder");
var subtotal = sessionStorage.getItem("total");
var gtotal = sessionStorage.getItem("total2");

document.getElementById('total').innerHTML = subtotal;
document.getElementById('Gtotal').innerHTML = gtotal;
function init(){
  window.alert(Menu6Price)
  document.getElementById('total').innerHTML = gtotal;
  document.getElementById('Gtotal').innerHTML = gtotal;
}

function order1(){
  num = 1;
  while (num <= NumfoodsRm11){
    totalItems += 1;
    var food = Menu1Name;
    foodsRm1.push(food);
    command2 = food;
    ConsoleLog2()
  }
  num = 0;
}
order1()
function order2(){
  num = 1;
  while (num <= NumfoodsRm22){
    totalItems += 1;
    var food = Menu2Name;
    foodsRm1.push(food);
    command2 = food;
    ConsoleLog2()
  }
  num = 0;
}
order2()
function order3(){
  num = 1;
  while (num <= NumfoodsRm33){
    totalItems += 1;
    var food = Menu3Name;
    foodsRm1.push(food);
    command2 = food;
    ConsoleLog2()
  }
  num = 0;
}
order3()
function order4(){
  num = 1;
  while (num <= NumfoodsRm44){
    totalItems += 1;
    var food = Menu4Name;
    foodsRm1.push(food);
    command2 = food;
    ConsoleLog2()
  }
  num = 0;
}
order4()
function order5(){
  num = 1;
  while (num <= NumfoodsRm55){
    totalItems += 1;
    var food = Menu5Name;
    foodsRm1.push(food);
    command2 = food;
    ConsoleLog2()
  }
  num = 0;
}
order5()
function order6(){
  num = 1;
  while (num <= NumfoodsRm66){
    totalItems += 1;
    var food = Menu6Name;
    foodsRm1.push(food);
    command2 = food;
    ConsoleLog2()
  }
  num = 0;
}
order6()
function ConsoleLog2() {
  // add food name to food list
  var log = document.getElementById("logger");
  // find the room that were about to thro w foods into
  var checkIn = log.getElementsByTagName("li");
  // find the list inside the room
  var Newli = document.createElement('li');
  // create new element and save it as new li
  var ul = document.getElementById("logs");
  var ol = document.getElementById("prices");
  // find the list inside the room
  // add an ID to the list items so we can identify and remove it later
  var newText = document.createTextNode(command2);
  document.body.appendChild(Newli);
  ul.appendChild(Newli);
  Newli.appendChild(newText);
}
