/*
//Cost of Egg Calculator
var eggPrice = 5;
var numOfEggs = 100;
var totalCostOfEggs = eggPrice * numOfEggs;
console.log("Total Cost of Egg ", totalCostOfEggs, "Taka.");

//Area of Circle Calculator = pi * r squared
const pi = 3.14159;
var radius = 7;
var areaOfCircle = pi * (radius * radius);
console.log("Area of the Circle is ", areaOfCircle, "Sq Inch");

//USD to BDT Calculator
var usdToBdt = 83.5;
var bdt = 5000;
var usd = bdt / usdToBdt;
console.log("$",usd);

//Operator + - * / %
var n1 = 5;
var r1 = 5 % 2;
console.log(r1);

//Class 3.5
var x = 4;
x++; //x = x+1
console.log(x);
var y = 4;
y--; //x = y-1
console.log(y);

//Class 4
var n = 11;
if(n<10){
	console.log(n);
	console.log("This number",n, "is less than 10");
} else {
	console.log("This number",n,"is greater than 10");
}

//Class 5
var i = 10;
while(i-->0){
	console.log(i);
}

var i = 0;
while(i < 10) {
	i++;
	console.log("i is",i);
}

var i = 0;
while(i <= 10) {
	if(i % 2 == 0) {
		console.log("i%2",i);
	}
	i++;
}

// OR

var i = 0;
while(i <= 10){
	console.log(i);
	i += 2;
}

var i = 0;
while(true){
	console.log(i);
	if(5 == i) {
		break;
	}
	i++;
}

//Class 5.2
var i = 0;

while(i++ <5) {
	console.log("\n");
	console.log("Class 5.2 i++",i);
}

i = 0;
console.log("\n reset \n");

while(++i <5) {
	console.log("Class 5.2 ++i",i);
}

//Class 5.3
var i = 0;
console.log("\n");
do{
	console.log("class 5.3 i++",i);
	i++;
}
while(i < 5);


i = 0;
console.log("\n reset \n");
do{
	i++;
	console.log("class 5.3 i++ before line",i);			
}
while(i < 5);
	

//Class 5.4 For Loop
console.log("\n");
for(i = 0; i < 5; i++){
	console.log("for Loop",i);
}

console.log("\n");
for(i = 0; i <= 6; i+= 2){
	console.log("for Loop stepping 02",i);
}

//INfinite loop
console.log("\n");
var i = 0;
for(;;){
	i++;
	console.log("INfinite loop",i);
	if(10 == i){
		break;
	}
}

//Print Odd Number
for(i = 0; i <= 10; i++){
	if(i % 2 != 0) {
		console.log("Odd Number",i);
	}
}

//Print Even Number
for(i = 0; i <= 10; i++){
	if(i % 2 == 0) {
		console.log("Even Number",i);
	}
}

//Class 5.5
var i, j;
for(i=0, j=10;i<=10;i++, j--){
	console.log(i,j);
}

//Class 5.6 FACTORIAL OF 5 = 1*2*3*4*5
var n = 5;
var factorial = 1;
for (var i = n; i>1; i--){
	factorial = factorial * i;
	//or factorial *= i
}
console.log("factorial of ",n," is",factorial);

// or
factorial = 1;
for (var i = 1; i <= 5; i++){
	factorial *= i;
	console.log("factorial of",i," is",factorial);
}
*/

//Class 5.7 SERIES
//S0 = 1 2 3 4 5 6 7 8 9
//S1 = 2 4 6 8 10 12 .....
//S2 = 1 4 7 10 13 16 ....
//S3 = 0 3 8 15 24 35 48 ....
//S4 = 1 4 3 8 5 12 7 16 9 20 ...
//S5 = 0 1 1 2 3 5 8 13 ..... fibonacci


//SOLUTION S1 2 4 6 8 10 12 ....
/*
var series = "";
var n;
for (i=1; i<=10; i++){
	n = i*2;
	//console.log("i =",i," n= ",n);
	series = series + n + " ";
}
console.log("Series S1 :",series);
*/

//SOLUTION S2 = 1 4 7 10 13 16 ....
/*
var series = "1 ";
var n = 1;
for (i=1; i<10; i++){
	n = n+3;
	series = series + n + " ";
}
console.log("Series S2 :",series);
*/

//SOLUTION S3 = 0 3 8 15 24 35 48 ....
/*
var series = "";
for(i=1; i<10; i++) {
	n = i*i-1;
	series = series + n + " ";
	
}
console.log("Series S3:",series);
*/

//Solution S4 = 1 4 3 8 5 12 7 16 9 20 ...
/*
var series="";
var n;
for(i=1; i<10; i++) {
	n = i;
	if(n%2 == 0){
		n = i*2;
	}
	series = series + n + " ";
}
console.log("Series S4 :",series);
*/

//SOLUTION S5 = 0 1 1 2 3 5 8 13 ..... fibonacci
/*
var series = "0 1 ";
var n = 0;
var x = 0;
var y = 1;
for(i = 1; i<10; i++){
	n = x+y;
	x = y;
	y = n;
	//console.log("n :",n,"x :",x,"y :",y);
	series = series + n + " ";
}
console.log("Series S5 :",series);
*/

//Class 5.8 NAMTA
/*
var series = "";
var i = 0;
var j = 0;
for(i=1; i<=10; i++){
	series = "";
	for(j=1; j<=10; j++){
		series = series + i * j + " ";
	}
	console.log(i," :",series);
}
*/

//Class 5.10 CALENDAR PRINT
var monthName = "February";
var days = 28;
var startingDay = 2;

console.log("\n\nCalendar Of",monthName,"\n");
console.log("Sun   Mon   Tue   Wed   Thu   Fri   Sat");

for(var i=0; i<6; i++) {
	dayRow = "";
	for(j=1; j<=7; j++) {
		var currentDay = 7*i+j - startingDay;
		if(currentDay > days){
			break;
		} else if(currentDay < 1) {
			currentDay = " ";
		}
		if(currentDay > 9) {
			dayRow += currentDay + "    ";
		} else {
			dayRow += currentDay + "     ";
		}
	}
	console.log(dayRow);
}
