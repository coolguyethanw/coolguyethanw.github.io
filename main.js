// script has to be last in the body

// json stuff
// json initilization below



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if(this.readyState == 4 && this.status == 200){
var mydata = JSON.parse(this.responseText);
window.alert(mydata.menu[1].name);
Menu1Name = mydata.menu[0].name;
 Menu1Price = mydata.menu[0].price;
$.getElementById("foodPrice1") = Menu1Price;
 Menu1Desc = mydata.menu[0].desc;
$.getElementById("foodDesc1") = Menu1Desc;
//// inserting menu items
 Menu2Name = mydata.menu[1].name;
$.getElementById("fooditem2") = Menu2Name;
 Menu2Price = mydata.menu[1].price;
$.getElementById("foodPrice2") = Menu2Price;
 Menu2Desc = mydata.menu[1].desc;
$.getElementById("foodDesc2") = Menu2Desc;

 Menu3Name = mydata.menu[2].name;
$.getElementById("fooditem3") = Menu3Name;
 Menu3Price = mydata.menu[2].price;
$.getElementById("foodPrice3") = Menu3Price;
 Menu3Desc = mydata.menu[2].desc;
$.getElementById("foodDesc3") = Menu3Desc;

 Menu4Name = mydata.menu[3].name;
$.getElementById("fooditem4") = Menu4Name;
 Menu4Price = mydata.menu[3].price;
$.getElementById("foodPrice4") = Menu4Price;
 Menu4Desc = mydata.menu[3].desc;
$.getElementById("foodDesc4") = Menu4Desc;

 Menu5Name = mydata.menu[4].name;
$.getElementById("fooditem5") = Menu5Name;
 Menu5Price = mydata.menu[4].price;
$.getElementById("foodPrice5") = Menu5Price;
 Menu5Desc = mydata.menu[4].desc;
$.getElementById("foodDesc5") = Menu5Desc;


 Menu6Name = mydata.menu[5].name;
$.getElementById("fooditem6") = Menu6Name;
 Menu6Price = mydata.menu[5].price;
$.getElementById("foodPrice6") = Menu6Price;
 Menu6Desc = mydata.menu[5].desc;
$.getElementById("foodDesc6") = Menu6Desc;


 Menu7Name = mydata.menu[6].name;
$.getElementById("fooditem7") = Menu7Name;
 Menu7Price = mydata.menu[6].price;
$.getElementById("foodPrice7") = Menu7Price;
 Menu7Desc = mydata.menu[6].desc;
$.getElementById("foodDesc7") = Menu7Desc;


 Menu8Name = mydata.menu[7].name;
$.getElementById("fooditem8") = Menu8Name;
 Menu8Price = mydata.menu[7].price;
$.getElementById("foodPrice8") = Menu8Price;
 Menu8Desc = mydata.menu[7].desc;
$.getElementById("foodDesc8") = Menu8Desc;

}
};

xmlhttp.open("GET","menu.json",true);
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
var foodsRm1 = [];
var foodsRm2 = [];
var foodsRm3 = [];
var foodsRm4 = [];
var foodsRm5 = [];
var foodsRm6 = [];
var foodsRm7 = [];
var foodsRm8 = [];
// food names stored (doesn't fucking work for some reason)
var command = "start of food log";
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

//  window.alert(d)
//  getUTCMonth()
//  getUTCDate()
//  getUTCHours()
//  getUTCMinutes()
//  getUTCSeconds()

// main script begins  below
var RoomClean1 = false;
// list of check in foods
function addfoodrm1() {
  var food = Menu1Name;
  NumfoodsRm1 += 1;
  //foodsRm1.push(food);
  // add food name to food list
  document.getElementById('statusbar1').innerHTML = "Enter food name!";
  var room = document.getElementById("GRoom1");
  // find the room that were about to thro w foods into
  var checkIn = room.getElementsByTagName("li");
  // find the list inside the room
  var Newli = document.createElement('li');
  // create new element and save it as new li
  var ul = document.getElementById("GRoom1");
  // find the list inside the room
  // add an ID to the list items so we can identify and remove it later
  var newText = document.createTextNode(food + " " + Menu1Price);
  document.body.appendChild(Newli);
  ul.appendChild(Newli);
  Newli.appendChild(newText);
  d = new Date();
  command = food + " has been checked into room 1 at " + d + "!";
  ConsoleLog()

  document.getElementById("foodName1").value = "";

  if (NumfoodsRm1 >= 5) {
    document.getElementById('statusbar1').innerHTML = "This ain't an all you-can-eat buffet";
    // tell other funcs that room is full
    Room1Full = true;
    document.getElementById('button1', 'foodName1', 'buttonCLR1').disabled = true;
    // TODO: find a way to stop people from overflowing the room effectively
  } else if (NumfoodsRm1 <= 5) {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1', 'buttonCLR1').disabled = false;
    Room1Full = false;
  } else {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1', 'buttonCLR1').disabled = false;
    Room1Full = false;
  }

};
/*
function clearRoom1() {
  var num = 1;
  document.getElementById("foodName1").value = "";
  foodsRm1 = [""];
  foodsRm1.length = 0;
  d = new Date();
  command = "Room1 has been cleared at " + d + "!";
  ConsoleLog()
  while (num <= 4) {
    // run remove code 4 times to remove all foods, will create errors
    var badfood = document.getElementById('Room1Kicker').value = 0;
    // make sure the value is 0 so we can remove all foods properly
    var room = document.getElementById('room1');
    var kick = room.getElementsByTagName('li')[badfood];
    var gtfo = kick.parentNode;
    NumfoodsRm1 -= 1;
    console.log("Clearing room! (Creates errors if less than 4 foods)")
    gtfo.removeChild(kick);
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1').disabled = false;
    num++;
  }
  num = 0;
  document.getElementById('statusbar1').innerHTML = " ";
  document.getElementById('button1', 'foodName1').disabled = false;
}
*/
function removeRoom1() {
  var badfood = document.getElementById('Room1Kicker').value;
  var room = document.getElementById('room1');
  var kick = room.getElementsByTagName('li')[badfood];
  var gtfo = kick.parentNode;
  NumfoodsRm1 -= 1;
  console.log("Kicking food from room 1, may create errors if no food found!");
  gtfo.removeChild(kick);
  d = new Date();
  command = "food number " + badfood + " has been removed at " + d + "!";
  ConsoleLog();
  // logging section
  //  document.getElementById("foodName1").value = "";
 /* if (NumfoodsRm1 >= 5) {
    document.getElementById('statusbar1').innerHTML = "This ain't an all you-can-eat buffet";
    // tell other funcs that room is full
    Room1Full = true;
    document.getElementById('button1', 'foodName1').disabled = true;
    // TODO: find a way to stop people from overflowing the room effectively
  } else if (NumfoodsRm1 <= 5) {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1').disabled = false;
    Room1Full = false;
  } else {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1').disabled = false;
    Room1Full = false;
  }
}
*/

function OpenRoom1() {
  RoomClean1 = false;
    document.getElementById('statusbar1').innerHTML = "";
    d = new Date();
    ConsoleLog();
    // logging section
    // open room up
    document.getElementById('button1').disabled = false;

}
function clearRoom1() {
  var num = 1;
  var badfood = document.getElementById('Room1Kicker').value;
  var room = document.getElementById('room1');
  var kick = room.getElementsByTagName('li')[badfood];
  document.getElementById("foodName1").value = "";
  foodsRm1 = [""];
  foodsRm1.length = 0;
  d = new Date();
  command = "Room2 has been cleared at " + d + "!";
  ConsoleLog()
  while (num <= badfood) {
    if (NumfoodsRm1 >= 5) {
      var food = Menu1Name;
      document.getElementById('statusbar1').innerHTML = "This isn't catering!!";
      // tell other funcs that room is full
      Room1Full = true;
      document.getElementById('button1', 'foodName1', 'buttonCLR1').disabled = true;
      // TODO: find a way to stop people from overflowing the room effectively
    }
      // TODO: find a way to stop people from overflowing the room effectively
    var food = Menu1Name;
    foodsRm1.push(food);
    // add food name to food list
    var room = document.getElementById("GRoom1");
    // find the room that were about to thro w foods into
    var checkIn = room.getElementsByTagName("li");
    // find the list inside the room
    var Newli = document.createElement('li');
    // create new element and save it as new li
    var ul = document.getElementById("GRoom1");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(food + " " + Menu1Price);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    Newli.appendChild(newText);
    // run remove code 4 times to remove all foods, will create errors
    // make sure the value is 0 so we can remove all foods properly
    var room = document.getElementById('room1');
    var kick = room.getElementsByTagName('li')[badfood];
    NumfoodsRm1 -= badfood;
    console.log("Clearing room! (Creates errors if less than 4 foods)")
    NumfoodsRm1 += 1;
    num++
  };
  num = 0;
  if (NumfoodsRm1 >= 5) {
    document.getElementById('statusbar1').innerHTML = "This ain't an all you-can-eat buffet";
    // tell other funcs that room is full
    Room1Full = true;
    document.getElementById('button1', 'foodName1', 'buttonCLR1', 'buttonCLR1', 'buttonCLR1').disabled = true;
    // TODO: find a way to stop people from overflowing the room effectively
  } else if (NumfoodsRm1 <= 5) {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1', 'buttonCLR1', 'buttonCLR1').disabled = false;
    Room1Full = false;
  } else {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1', 'buttonCLR1').disabled = false;
    Room1Full = false;
  }
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
  // find the list inside the room
  // add an ID to the list items so we can identify and remove it later
  var newText = document.createTextNode(command);
  document.body.appendChild(Newli);
  ul.appendChild(Newli);
  Newli.appendChild(newText);
}
}
