var inputBtn = document.getElementById("inputBtn");

var toDoArr = [];
var todoArrCopy = [];
var submitBtn = document.getElementById("submit");
var inputBtn = document.getElementById("inputBtn");
var deleteAllBtn = document.getElementById("deleteAll");

var ul = document.querySelectorAll("ul");

// delete all
deleteAllBtn.addEventListener("click", function () {
  var confirmation = confirm(
    "Are you sure you want to delete ALL items in the list forever?"
  );
  if (confirmation === true) {
    localStorage.clear();
    // refresh browser
    location.reload();
    //console.log("bye bye arrays...");
  }
});

console.log(inputBtn.innerText);
submitBtn.addEventListener("click", (e) => {
  //
  var submitValString = inputBtn.value;
  var submitVal = submitValString.trim();

  // below if statement checks whether input is empty or not
  // prettier-ignore
  if (submitVal === undefined || submitVal === "" || submitVal === " " || submitVal === null) {
    //
    alert(
      "You cannot add an empty item... \nI mean, c'mon... :("
    );
    inputBtn.value = "";
    return;
  }

  // adds item to page
  var li = document.createElement("li");
  li.setAttribute("class", "center");
  li.innerText = submitVal;
  document.body.append(li);
  var liValue = li.innerText; // list item string to be passed into array

  // add string item to array
  toDoArr.push(`${liValue}`); // ["11"];

  // save to local storage
  localStorage.setItem("todos", toDoArr);

  //reset input field
  inputBtn.value = "";
});

// get items from localStorage
var savedList = localStorage.getItem("todos");
var savedListArr = savedList.split(",");

for (var i = 0; i < savedListArr.length; i++) {
  var li = document.createElement("li");
  li.setAttribute("class", "center");
  li.innerText = savedListArr[i];
  document.body.append(li);
  console.log(savedListArr);
}
