const main = () => {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("myDIV2");
  const d = new Date();
  const listOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = d.getDay();
  var choice = null;
  var dayOfWeek = listOfDays[day];
  choice = checkBeverageChoice();

  if (choice === "tea") {
    let response = null;

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      document.getElementById("test").style.color = "green";
      document.getElementById("test").innerHTML =
        "Today is " + dayOfWeek + ".You chose Tea";
    }
  } else if (choice === "coffee") {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      document.getElementById("test").style.color = "Brown";
      document.getElementById("test").innerHTML =
        "Today is " + dayOfWeek + ".You chose Coffee";
    }
  } else {
  
    document.getElementById("test").style.color = "red";
    document.getElementById("test").innerHTML = "Choose Tea or Coffee!";
  }

  function checkBeverageChoice() {
    let beverageChoice = null;

    if (document.getElementById("tea").checked === true) {
      beverageChoice = "tea";
      return beverageChoice;
    } else if (document.getElementById("coffee").checked === true) {
      beverageChoice = "coffee";
      return beverageChoice;
    } else {
      return null;
    }
  }
};
