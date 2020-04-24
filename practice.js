//1 Write a function that returns the year someone is born given their age as input
//2 Using the answer from step 1, write a function that takes someone's name and age 
// as input and returns a string that states the person's name and year they were born in a sentence
// typeof get the type of date eg string  number
function getYear(age){
return 2020 - age;

}
//console.log(getYear())//when it has these )) extra parenthesis are calling function 
//console.log("Peter Comer")
//console.log(getYear(25))

function getNameYearLocation (myName,age,location){
return "My name is " + myName +  " and I was born in  " + getYear (age) + " and I am from " + location;

}
//const myStr = "My name is Peter " + "and i'm learning JavaScript.";
const name = "Peter Comer" 
//console.log(getNameYear(name))//this needs to be an arguement data with an actual value 
console.log(getNameYearLocation("Peter" , 40 , "Manchester"))

