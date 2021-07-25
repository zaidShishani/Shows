
var name = prompt("what is your name")

alert("hey, wlecome to my website " + name )

var showType = prompt("what type of shows do you like :D(action, comedy, mind bending)")


while(showType != "action" && favCar != "comedy" && favCar != "mind bending")

showType = prompt("what kind do you want to watch? , please choose one of these ; action, comedy, mind bending")

var numOfT = prompt("how many times do you wanna see it?")

while(numOfT > 10 ){
  numOfT = prompt("please enter number less than 10!")
}

--------------------------
if(showType == "action"){
for(var i = 0; i<numOfT; i++){
document.write(
  "<div>" + "<h3>" + showType +"</h3>" + " Castlevania:  "
+ "<img  src='https://images-na.ssl-images-amazon.com/images/I/81W-sF%2BNxeL._AC_SL1500_.jpg' width='100' height='150'    />" + "</div>")}
}
else if (showType =="comedy"){
for(var i = 0; i<numOfT; i++){
document.write(
  "<div>" + "<h3>" + showType +"</h3>" + "bojack horseman:  "
+ "<img  src='https://i.pinimg.com/474x/71/c6/5d/71c65d8fd0d7f6eaf5e699a9bd69b126.jpg' width='100' height='150'     />" + "</div>")}
}
else if(showType =="mind bending"){
for(var i = 0; i<numOfT; i++){
document.write(
  "<div>" + "<h3>" + showType +"</h3>" + "love death + robots:  "
+ "<img  src='https://m.media-amazon.com/images/M/MV5BYjEwOWQ0MjktMjZjNy00Mzc1LWE5NTItMDQ1Yjc0Zjk0NTBlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg' width='100' height='150'     />" + "</div>")}
}
else{
  alert('no Recommendation for this genre')
}