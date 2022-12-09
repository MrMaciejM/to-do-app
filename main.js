// to-do:
// - fix issue where localStorage gets overwritten incorrectly

var inputBtn = document.getElementById("inputBtn");

var toDoArr = [];
var todoArrCopy = [];

var getStoredItems = localStorage.getItem("todos");
//console.log(getStoredItems);

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
      "You cannot add an empty item... :("
    );
    inputBtn.value = "";
    return;
  }

  // adds item(s) to page, their respective buttons and classes
  var li = document.createElement("li");
  var delBtn = document.createElement("button");
  li.setAttribute("class", "center");
  delBtn.setAttribute("class", "delItemBtn");
  li.innerText = submitVal;
  li.insertAdjacentHTML(
    "beforeend",
    `<button class="delItemBtn">Delete</button>`
  );
  document.body.append(li);

  var liValue = li.innerText; // list item string to be passed into array

  // add string item to array
  toDoArr.push(`${liValue}`); // ["11"];
  //console.log(toDoArr);

  // push to copy array / save to localStorage - needs fixing
  // get OG array with getItem
  // getStoredItems
  // add array to getStorageOG
  arr = getStoredItems;

  arr = JSON.parse(localStorage.getItem("todos")) || "[]";
  console.log(arr);
  arr.push(toDoArr);
  localStorage.setItem("todos", JSON.stringify(getSavedItems));

  //todoArrCopy.push(toDoArr);
  // add new
  //getOGArray.push(toDoArr);
  // update
  //localStorage.setItem("todos", toDoArr);

  //toDoArr.push(todoArrCopy);
  //localStorage.setItem("todos", todoArrCopy);
  //console.log(getStoredItems);

  //reset input field
  inputBtn.value = "";
});
// save to local storage
//localStorage.setItem("todos", todoArrCopy);

// get items from localStorage

//var savedList = localStorage.getItem("todos");
//console.log("savedList");
//console.log(savedList);
//var savedListArr = savedList.split(",");
