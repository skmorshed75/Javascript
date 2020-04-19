//Class 6.1
/*
var fruits = ["apple","orange","banana","plum"];

console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[4]);

//fruits[4] = "grape";
//console.log(fruits[4]);

console.log(fruits.length);

var lastOffset = fruits.length - 1; //to access last element
console.log(fruits[lastOffset]);
*/

//Class 6.2
/*
var myList = ["apple","banana","orange"];

//myList[myList.length] = "plum";
//myList[myList.length] = "grape";
myList[myList.length] = "mango";

myList.push("pineapple"); //to Add the array in the last
//myList.push("plum");

myList.unshift("plum"); //to Add the array in the first

//myList.pop(); //to delete last one from array


var lastElement = myList.pop(); //to store the deleted last items in variable

//myList.shift(); //Remove first element from array

var firstElement = myList.shift(); //to store the deleted first items in variable

console.log(myList);
console.log(lastElement);
console.log(firstElement);

*/

//Class 6.3

/*
var males = ["Rahim","Karim","Shamim","Rahima"];
var females = ["Laila","Shahana"];

var lastPerson = males.pop();
females.push(lastPerson);

//console.log(males, females);
//console.log(females);

console.log(males.length,females.length);

*/

/*
var males = ["Rahim","Karim","Shamim","Rahima"];
var females = ["Laila","Shahana"];

var personToRemove = males[2]
females.push(personToRemove); //Add the date removed from males

//delete(males[2]); //Item deleted but number items shown same, so this is not the right way

males.splice(2,2); //Remove Items from offset 2 to 2 items

console.log(males, females);
*/

//Class 6.4

/*
var list = [
	'sun', //0 = -7
	'mon', //1 = -6
	'tue', //2 = -5
	'wed', //3 = -4
	'thu', //4 = -3
	'fri', //4 = -2 
	'sat', //5 = -1
];

var chunk = list.slice(1,4); // slice the item from offset 1 and before offset 4.
//var chunk = list.slice(1); // slice the item from offset 1 to all.


//var length = list.length - 3; //Declude last three items from the list
//var chunk = list.slice(length); //Show last 03 items


//var chunk = list.slice(-4); //We can select items as -4 [04 from last -1 as last one]
//var chunk = list.slice(-5,-3);

//console.log(list,chunk);
*/

//Class 6.5
//ARRAY SPLICE - Starts from selected items & how many. Declude selected items from main array
//var chunk = list.splice(2,3); //from index 2 and 3 items (from tue to thu).
/*
var list = [
	'sun', //0 = -7
	'mon', //1 = -6
	'tue', //2 = -5
	'wed', //3 = -4
	'thu', //4 = -3
	'fri', //4 = -2 
	'sat', //5 = -1
];
var chunk = list.splice(-4,3); //we can also access through negative index ie. from index -4 and 3 items (from wed to fri).
console.log(list,chunk);
*/

//Class 6.6
//SHALLOW COPY AND DEEP COPY
/*
var list = [
	'sun', //0 = -7
	'mon', //1 = -6
	'tue', //2 = -5
	'wed', //3 = -4
	'thu', //4 = -3
	'fri', //4 = -2 
	'sat', //5 = -1
];

//Deep Copy - Copy 
//var list2 = list;
//list2[2] = "no day";
//console.log(list,list2);

//Shalow Copy
//var list2 = list.slice();
// or var list2 = Array.from(list);
//list2[2] = "no day";
//console.log(list,list2);

*/

//Class 6.7
//Add Array with another Array (Merging)
/*
list1 = [
	'sun',
	'mon',
	'tue',
];

list2 = [
	'wed',
	'thu',
];

list3 = [
	'fri',
	'sat'
];

//var list = list1.concat(list2);
//var list = list1.concat(list2).concat(list3);
//var list = list1.concat(list2,list3);
var list = [].concat(list1,list2,list3);
//console.log("Merge 02 Array :",list);
console.log("Merge 03 Array :",list);

*/

//Class 6.8
//Array Loop

/*
list = [
	'sun',
	'mon',
	'tue',
	'wed',
	'thu',
	'fri',
	'sat'
];
var i;

for(i=0; i<list.length; i++) {
	console.log("Element at",i," Offset is ",list[i]);
}

//for Reverse
var length = list.length //Calculate once in full loop, save time & operation smoothly, save processing time

for(i = length-1; i >= 0; i--){
	console.log("Reverse Element at",i,"Offset is",list[i]);
}

//Another process
for(i in list) {
	console.log("I In List Element at",i,"Offset is",list[i]);
}

*/

//Class 6.9
//Exclude unnecessary / empty items from Array

/*
var list = [
	'sun',
	,
	NaN,
	'tue',
	'wed',
	null,
	,
	,
	'thu',
	'',
	"fri",
	null,
	'sat'
];

console.log(list);


//var newList = [];

//for(i in list){
//	if(list[i]) {
//		newList.push(list[i]);
//	}
//}

//OR see below

var newList;
newList = list.filter(Boolean);

console.log(newList);
*/

//Class 6.10
//Sorting within Array

//String Sorting
/*
list = [
	'a',
	'z',
	'f',
	'c',
	'b',
	'y',
	'd',
	'm',
];

list.sort();

console.log(list);

//Number Sorting
list = [9,4,92,3,9,88,52,64,29,18,10,7,6,35,1];

var length = list.length -1;
var tmpI = 0;
var tmpJ = 0;
for(var i = 0; i<length; i++) {
	for(var j=0; j<length; j++) {
		if(list[j] > list[j+1]) {
			[list[j], list[j+1]] = [ list[j+1], list[j] ]; //SWAP
			tmpJ = j + "  ";			
		}
		
	}
	tmpI = i + " ";
	
}

console.log(tmpJ);
console.log(tmpI);
console.log(list);
*/


//Class 6.11
//Convert string to array and array to string
/*
var s = "hello world, how are you?";
var a = s.split(" ");
console.log(a);
console.log(a[2]);

var ns = a.join(".");
console.log(ns);

var ns = a.join(". ");
console.log(ns);

var s = "orange.mango.banana.apple.jackfruit.pineapple";
var a = s.split(".");
console.log(a);

var ns = a.join("-");
console.log(ns);

console.log("i am a boy".split(" "));
console.log("i am a boy".split(" ").join("-"));

//String Reverse
var n = "Hasin Hayder";
var rev = n.split("");
console.log(rev);

var rev = n.split("").reverse().join("");
console.log(rev);
*/


//Class 6.12
//Word / Character Count

var s = "The quick brown fox jumps over the lazy dog";

var a = s.split(" "); //Word Count
console.log(a.length);

var c = s.split(""); //Character Count
console.log(c.length);

var f = s.split("r"); //Specific character count
console.log(f.length-1); //To count a specific character 1 should be minus from the length
