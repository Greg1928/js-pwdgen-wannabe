/* input */
const nameP = (prompt("Enter your name"));
const surname = (prompt("Enter your surname"));
const color = (prompt("enter your favourite color"));

/* data manipulation*/
const password = nameP + surname + color + 21;

/* output */
document.getElementById("name").innerHTML = nameP;
document.getElementById("surname").innerHTML = surname;
document.getElementById("color").innerHTML = color;
document.getElementById("passwordP").innerHTML = password;


function myFunction() {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("passwordP");
        if (checkBox.checked == true){
          text.style.display = "block";
        } else {
           text.style.display = "none";
        }
}