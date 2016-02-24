'use strict';

var allNamesArray = [];
var numberOfFriends = [];
var groupArray = [];
var randomNumber
var sepCommasArray = [];

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('HELLO');
  document.getElementById('addFriend').addEventListener('click', addName);
  document.getElementById('random').addEventListener('click', pickRandom);
  document.getElementById('makeGroup').addEventListener('click', createGroup);
}

function addName() {

  var newName = document.getElementById("nameInput").value;
  console.log('nameArray:', allNamesArray);

  var sepCommas = newName.split(", ");
  for(var i = 0; i < sepCommas.length; i++ ) {
    // console.log("i", sepCommas[i]);
    sepCommasArray.push(sepCommas[i]);
    for(var i = 0; i < sepCommasArray.length; i++){
      console.log("sep", sepCommasArray[i]);
      allNamesArray.push(sepCommasArray[i]);
    }
  }

  allNamesArray.push(newName);
  // allNamesArray.push(newName, sepCommasArray[i]);

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

  for(var i = 0; i < number; i++) {
    var name = allNamesArray[Math.floor(Math.random() * allNamesArray.length)]; //everybody array
    numberOfFriends.push(name); //random
    console.log('random array', numberOfFriends);

    // if(numberOfFriends.length < number) {
      // function split(numberOfFriends, number) {
      while (numberOfFriends.length) {
        groupArray.push(numberOfFriends.splice(0, number));
        console.log('groupArray', groupArray)
        console.log(name);

        var addGroupTR = document.createElement("TR");
        var addGroup = document.createTextNode(groupArray);
        addGroupTR.classList.add('awesome');
        addGroupTR.appendChild(addGroup);
        document.getElementById('randomGroup').appendChild(addGroupTR);
      } return groupArray;
      split(numberOfFriends, number);
    // }
      document.getElementById('groupNum').value = '';
  }
}
