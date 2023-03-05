let choice = null;
  choice = toString(prompt("Will you take  Tea or Coffe?"));
// choice = choice.toString();
choice = choice.toLowerCase();
if (choice === "tea") {
  document.getElementById("demo").innerHTML = "You chose Tea";
} else if (choice === "coffee") {
  document.getElementById("demo").innerHTML = "You chose Cofee";
} else {
  document.getElementById("demo").innerHTML =
    "Please chose either Tea or Cofee";
}
