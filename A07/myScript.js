/**
 * Created by Shonelle on 9/22/2015.
 * I got the scripts from w3schools.
 */

function getClasses(elem){
  var allClasses = document.getElementsByTagName(elem).className;
  var names = allClasses.split(" ");
  return names;
}

function addClass(elem, className){
  var classes = document.getElementsByTagName(elem);
  elem.className += "className";
}

function validateForm(){
  var fName = document.forms["myForm"]["name"].value;
  if (fName == null || fName == "" || fName == " "){
    document.getElementById("username").style.backgroundColor = "red";
    document.getElementById("top").innerHTML = "Error! Please fill in your name.";
    return false;
  }
  else {
    document.getElementById("username").style.backgroundColor = "white";
  }

  var fEmail = document.forms["myForm"]["email"].value;
  if (fEmail == null || fEmail == "" || fEmail == " "){
    document.getElementById("email").style.backgroundColor = "red";
    document.getElementById("top").innerHTML = "Error! Please fill in your email.";
    return false;
  }
  else {
    document.getElementById("email").style.backgroundColor = "white";
  }

  var fPw = document.forms["myForm"]["password"].value;
  if (fPw == null || fPw == "" || fPw == " "){
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("top").innerHTML = "Error! Please fill in your password.";
    return false;
  }
  else {
    document.getElementById("password").style.backgroundColor = "white";
  }

  var fConfirm = document.forms["myForm"]["confirm"].value;
  if (fConfirm == null || fConfirm == "" || fConfirm == " "){
    document.getElementById("confirm").style.backgroundColor = "red";
    document.getElementById("top").innerHTML = "Error! Please fill in a confirmation for your password.";
    return false;
  }
  else {
    document.getElementById("confirm").style.backgroundColor = "white";
  }

  if (fPw != fConfirm){
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("confirm").style.backgroundColor = "red";
    document.getElementById("top").innerHTML = "Error! Your passwords don't match. Double check and try again.";
    return false;
  }
  else{
    document.getElementById("password").style.backgroundColor = "white";
    document.getElementById("confirm").style.backgroundColor = "white";
  }
}