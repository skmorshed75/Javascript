//Class 7.0

/*
function sayHi(name){
	console.log("Hello "+name);
}
sayHi("Morshed");
sayHi();
sayHi("");
sayHi("Rahim");
sayHi("Monavi");
*/

/*
function sayHi(name){
	if(name){
		console.log("Hello "+name);
	} else {
		console.log("Hello How are you");
	}
	
}
sayHi("Morshed");
sayHi();
sayHi("");
sayHi("Rahim");
sayHi("Monavi");
*/

/*
function isEven(number){
	if(number % 2 == 0) {
		return true;
	}
	return false;
}
console.log(isEven(12));
console.log(isEven(13));
console.log(isEven(17));
console.log(isEven(15));
*/

//CLASS 7.1
//JAVASCRIPT FUNCTION
/*
function sayHi(name = "Anonymous", age = "unknown"){
	console.log("Hello "+name+", you are "+age+" years old");
}
sayHi("Rahim");
sayHi("Karim",27);
sayHi();
sayHi('',20);
*/


//CLASS 7.2
//Reverse String using Function
/*
function reverseString(data){
	//var reversedString = data.split(' ');
	var reversedString = data.split('');
	//var reversedString = data.split(' ').reverse();
	var reversedString = data.split('').reverse().join('');
	return reversedString;
}
var sentence = "Hello World";
var reversedSentence = reverseString(sentence);
//console.log(reversedSentence);

var sentence2 = "Hello Pluto";
var reversedSentence2 = reverseString(sentence2);

console.log(reversedSentence, reversedSentence2);
*/


//CLASS 7.3
//SPREAD OPERATOR

function addStudents(storage, ...people){
	for(i = 0; i < people.length; i++){
		storage.push(people[i])
	}	
}

var students = [];

addStudents(students, "Rahim","Karim","Rahima");
console.log(students.length);
addStudents(students, "Shamim");
console.log(students.length);
addStudents(students, "Sharmin, Shamima");
console.log(students.length);

//spread operator


/*
function dummy(...params){
	console.log(params.length);
	console.log(params);
	console.log(params[1]);
}

dummy(1,4,6,8);
dummy(1,4,6,8,12,14,16,18);
dummy(22,3);
*/

/*
function dummy(n,m,...params){
	console.log(params.length);
	console.log(params);
	//console.log(params[1]);
}

dummy(1,4,6,8);
dummy(1,4,6,8,12,14,16,18);
dummy(22,3);
*/