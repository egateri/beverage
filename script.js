const main = () => {
  let choice = null;

  choice = prompt("Will you take  Tea or Coffe?");

  choice = choice.toLocaleLowerCase();

  if (choice === "tea") {
    document.getElementById("demo").innerHTML = "You chose Tea";
    document.getElementById("demo").style.color = "green";
    document.getElementById("button").style.display = 'none';
    document.getElementById("form").style.display = 'block';
    
    //alert("Tea");
  } else if (choice === "coffee") {
    document.getElementById("demo").innerHTML = "You chose Cofee";
    document.getElementById("demo").style.color = "green";
    document.getElementById("button").style.display = 'none'
    document.getElementById("form").style.display = 'block';
    //alert("coffe");
  } else {
    document.getElementById("demo").innerHTML =
      "Please chose either Tea or Cofee";
      document.getElementById("demo").style.color = "red";
      document.getElementById("button").style.display = 'none'
      document.getElementById("form").style.display = 'block';
      
    // alert("Error: Choose tea or coffee");
  }
};