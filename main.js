'use strict';

var allNamesArray = [];
var numberOfFriends = [];
var groupArray = [];
var randomNumber;

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('HELLO');
  document.getElementById('addFriend').addEventListener('click', addName);
  document.getElementById('random').addEventListener('click', pickRandom);
  document.getElementById('makeGroup').addEventListener('click', createGroup);
}
// var newName = document.getElementById("nameInput").innerHTML;
// var newName = event.target.innerHTML;

function addName() {

  var newName = document.getElementById("nameInput").value;
  var sepCommas = newName.split(",");
  console.log('commas:', sepCommas);

  allNamesArray.push(newName);
  console.log('inside add name');
  console.log('name:', newName);
  console.log('nameArray:', allNamesArray);

  var addTR = document.createElement("TR");
  var addName = document.createTextNode(newName);
  addTR.classList.add('awesome');
  addTR.appendChild(addName);
  document.getElementById('display').appendChild(addTR);
  document.getElementById('nameInput').value = '';
}

function pickRandom() {
  console.log('inside random');
  var name = allNamesArray[Math.floor(Math.random() * allNamesArray.length)];
  console.log(name);
  var randomName = document.getElementById("random");
  randomName.classList.add('awesome');
  randomName.innerHTML = name;
};

function createGroup() {
  console.log('inside createGroup');

  var number = document.getElementById("groupNum").value;
  console.log('number:', number);

  // var groupArray = allNamesArray.map(function(i, item) {
  //
  // })

  for(var i = 0; i < number; i++) {
    var name = allNamesArray[Math.floor(Math.random() * allNamesArray.length)]; //everybody array
    numberOfFriends.push(name); //random
    console.log('random array', numberOfFriends);

    if(numberOfFriends.length < number) {
      function split(numberOfFriends, number) {
        while (numberOfFriends.length) {
          groupArray.push(numberOfFriends.splice(0, number));
          console.log('groupArray', groupArray)
          console.log(name);
        } return groupArray;
    }
  }
  split(numberOfFriends, number);
  document.getElementById('groupNum').value = '';
  }
}
  // var outPut = document.getElementById("display");
  // outPut.innerHTML = number;
// var outPut = document.getElementById("display");
// outPut.innerHTML = newName;
// document.getElementById("display").innerHTML = allNamesArray;
// var nameList = document.getElementById('display');
// var names = nameList.getElementsByClassName('newFriend');

// while (nameArray.length !== names.length) {
//   nameArray.push(name[nameArray.length]);
// };
//
// nameArray.forEach(function(item) {
//   item.addEventListener('click', function(event) {
//     console.log("name number is:", nameArray.indexOf(event.target));
//     // event.target.classList.toggle('blue');
//     // event.target.classList.toggle('yellow');
//   })
// });
