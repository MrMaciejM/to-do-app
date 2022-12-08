// add item
// make items visible even after refresh - localStorage
// delete item
// prettier-ignore
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var inputBtn = document.getElementById("inputBtn");
//inputBtn.addEventListener("click", (e) => {
// console.log(e.target);
//});

// implement localStroage to save to-dos
// localStorage.setItem('myCat', 'Tom');

var toDoArr = [];
var arrTest = [1, 2, 3];
console.log("arr test: " + arrTest);
console.log(arrTest);
var getItemsList = localStorage.getItem("todos");
var submitBtn = document.getElementById("submit");
var inputBtn = document.getElementById("inputBtn");
var deleteAllBtn = document.getElementById("deleteAll");

var ul = document.querySelectorAll("ul");

// delete all
deleteAllBtn.addEventListener("click", function () {
  var confirmation = confirm(
    "Are you sure you want to delete ALL items forever?"
  );
  if (confirmation === true) {
    localStorage.clear();
    // refresh browser
    location.reload();
    console.log("bye bye arrays...");
  }
});

//console.log(inputBtn);
// add items to the list
//submitBtn.value = null;
var toDoArrAll = [];
submitBtn.addEventListener("click", (e) => {
  var submitVal = inputBtn.value;
  //toDoArr = []; //resets array to prevent duplication

  // prettier-ignore
  if (submitVal === undefined || submitVal === "" || submitVal === " " || submitVal === null) {
    //
    console.log("inside if check");
    console.log(submitVal.event);
    return;
  }
  // prettier-ignore

  var li = document.createElement("li");

  //adds "center" class to li
  li.setAttribute("class", "center");

  //var saveItem = (li.textContent = inputBtn.value);
  var saveItem = (li.textContent = inputBtn.value);

  document.body.appendChild(li);

  //console.log("empty input");
  console.log("log saveItem: ");
  console.log(saveItem);
  toDoArr.push(saveItem);
  //saveItem.push(toDoArr);
  console.log("todoArr after document body: " + toDoArr);

  // joins with the original array and separates with a comma
  //getItemsList += toDoArr + ",";
  toDoArrAll += toDoArr + ",";
  console.log("toDoArrAll:::");
  console.log(toDoArrAll);

  // ***** save to Local storage
  localStorage.setItem("todos", getItemsList);
  //localStorage.setItem("todos", toDoArrAll);

  // clears input button
  inputBtn.value = null;
  toDoArr = [];
});
var storedArr = localStorage.getItem("todos");

console.log("stored arr " + storedArr);
for (var i = 0; i < storedArr.length; i++) {
  var li2 = document.createElement("li");
  li2.setAttribute("class", "center");
  console.log("inside the return loop: " + toDoArrAll[i]);
  li2.textContent = toDoArrAll[i];
  document.body.append(li2);
}
//var arr = getItemsList.split(",");
// cleans up last item
//var arrCleaned = arr.slice(0, -1);

//console.log(arrCleaned);
/*
for (var i = 0; i < arrCleaned.length; i++) {
  var li2 = document.createElement("li");
  li2.setAttribute("class", "center");
  li2.textContent = arrCleaned[i];
  document.body.append(li2);

  //console.log(li2);
}
*/
// retrieve items

// Retrieve
//document.getElementById("inputBtn").innerHTML = localStorage.getItem("todos");

/*
function reason(){
    var dropd = document.getElementById("savedrop").value;
    var drophistory = JSON.parse(localStorage.getItem("reason")) || [];
    drophistory.push(dropd);
    localStorage.setItem("reason", JSON.stringify(drophistory));
}
*/

/*
var getList = JSON.parse(localStorage.getItem("todos")) || [];
  getList.push(toDoArr);
  localStorage.setItem("todos", JSON.stringify(toDoArr));
  console.log(toDoArr);
*/
