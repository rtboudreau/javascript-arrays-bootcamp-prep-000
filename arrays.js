var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

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
  return chocolateBars;
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
  
}
