// script has to be last in the body

var foodsRm1 = [""];
var foodsRm2 = [""];
var foodsRm3 = [""];
var foodsRm4 = [""];
var foodsRm5 = [""];
var foodsRm6 = [""];
var foodsRm7 = [""];
var foodsRm8 = [""];
// food names stored (doesn't fucking work for some reason)
var command = "start of food log";
// used for logging commands
var NumfoodsRm1 = 0;
// fish n sticks, price 12
var NumfoodsRm2 = 0;
// soup of day price 3
var NumfoodsRm3 = 0;
// salad price 4
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
var Room8Full = true; //starts true for testing

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
var RoomClean1 = false;
// list of check in foods
function addfoodrm1() {
  NumfoodsRm1 += 1;
  //var food = document.getElementById('foodName1').value;
  foodsRm1.push(food);
  // add food name to food list
 // document.getElementById('statusbar1').innerHTML = "Enter food name!";
 // var room = document.getElementById("GRoom1");
  // find the room that were about to thro w foods into
  // var checkIn = room.getElementsByTagName("li");
  // find the list inside the room
  // var Newli = document.createElement('li');
  // create new element and save it as new li
  // var ul = document.getElementById("GRoom1");
  // find the list inside the room
  // add an ID to the list items so we can identify and remove it later
 // var newText = document.createTextNode(food);
  // document.body.appendChild(Newli);
  // ul.appendChild(Newli);
  // Newli.appendChild(newText);
  d = new Date();
  command = food + " has been checked into room 1 at " + d + "!";
  ConsoleLog()

  document.getElementById("foodName1").value = "";

  document.getElementById("foodName1").value = "";
  if (NumfoodsRm1 >= 4) {
    document.getElementById('statusbar1').innerHTML = "Room Full";
    // tell other funcs that room is full
    Room1Full = true;
    document.getElementById('button1', 'foodName1').disabled = true;
    // TODO: find a way to stop people from overflowing the room effectively
  } else if (NumfoodsRm1 <= 4) {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1').disabled = false;
    Room1Full = false;
  } else {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1').disabled = false;
    Room1Full = false;
  }
}
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
  console.log("Kicking food from room 1, may create errors if no food found!")
  gtfo.removeChild(kick);
  d = new Date();
  command = "food number " + badfood + " has been removed at " + d + "!";
  ConsoleLog()
  // logging section
  //  document.getElementById("foodName1").value = "";
  if (NumfoodsRm1 >= 4) {
    document.getElementById('statusbar1').innerHTML = "Room Full";
    document.getElementById('button1').disabled = true;
    document.getElementById("foodName1").value = "";
    // enable foods to enter room if not full
    Room1Full = true;
    // TODO: find a way to stop people from overflowing the room effectively
  } else if (NumfoodsRm1 <= 4) {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1').disabled = false;
    // enable foods to enter room once not full
    Room1Full = false;
  } else {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'foodName1').disabled = false;
    Room1Full = false;
  }

}

function OpenRoom1() {
  RoomClean1 = false;
  if (NumfoodsRm1 >= 4) {
    document.getElementById('statusbar1').innerHTML = "Remove food to unlock!";
    document.getElementById('button1').disabled = true;
    // enable foods to enter room if not full
    Room1Full = true;
  } else if (RoomClean1 = true) {
    document.getElementById('statusbar1').innerHTML = "";
    d = new Date();
    command = "Room 1 has been unlocked at " + d + "!";
    ConsoleLog()
    // logging section
    // disable and close room
    document.getElementById('button1').disabled = false;

  } else {
    document.getElementById('statusbar1').innerHTML = "";
    d = new Date();
    command = "Room 1 has been unlocked at " + d + "!";
    ConsoleLog()
    // logging section
    // open room up
    document.getElementById('button1').disabled = false;

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
