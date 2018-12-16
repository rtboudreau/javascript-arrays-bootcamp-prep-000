var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
<<<<<<< HEAD
var gummys = "foo";

function addElementToBeginningOfArray(chocolateBars, gummys) {
  return [gummys, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, gummys) {
  chocolateBars.unshift(gummys);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, gummys) {
  return [...chocolateBars, gummys]
}

function destructivelyAddElementToEndOfArray(chocolateBars, gummys) {
  chocolateBars.push(gummys);
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2];
}
=======


function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToEndOfArray() {
  
}

>>>>>>> f86d136ccc4667167eb79dc4dc4de7c1d5575931
