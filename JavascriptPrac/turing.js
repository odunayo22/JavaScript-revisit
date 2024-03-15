// for the web display
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}



listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    /**
     * else if(e.target.click){
     * 
     * }
     */

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

/*For draggable component
const draggable_List = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople  = [
    'Babalola Bukola',
    'Oketoye Odunayo',
    'Funmilayo Elizabeth',
    'Michelle Mark',
    'Zion Mega',
    'Breakthrough Cathedral',
    'Abeni Odunayo'
];

//Store listItems
const listItems = [];

let dragStartIndex;

createList();

//Insert list items into DOM
function createList(){
    [...richestPeople]
    .map
    .forEach((person, index)=>{
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);

        draggable_List.appendChild(listItem);
    });
}
*/

//for the console 

/*
var petShop = ["pupp", "kit", "hams", "snakes", "Bird"]
var petShop = petts;
console.log(petts)
*/
//question 2
var power = ['red', 'black', 'blue', 'brown'];
console.log('second: +', power[1])

for(var i = 0; i < power.length; i++){
    console.log(i + ':' , power[i]);
}
console.log(power.length)

//question3
var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
var newDisk = [];
var corruptionSymbol = 'ø';

 function multiply  (a, b ) {
  a * b};

multiply(2,3)




newDisk.push(corruptionSymbol)
console.log (newDisk)
console.log (corruptionSymbol)

//check for divisible
function isDivide (x, y, z){
    const res1 = x % y;
    const res2 = x % z;

    if (res1 ===0  && res2 ===0 ){
        return true
    } else {
        return false;
    }

}

//add negative sign if it is not present

function checkNumber (number){
   if(number === -number){
    return -number
   }else{
    return - number
   }
}
checkNumber(3)

//check for smallest integer
class SmallInt{
    findSmall(args){
        return Math.min(...args)
    }
}

// write a prog that finds the sum of every number from 1 to num. the number wil always be a positive integer greater than 0

var summation = function(num){
   var  numbers = 0;
    for(let i = 1; i <= num; i++){
        numbers +=i;
    }
    return numbers;
}
summation(10);


  //average of a given array
  function average (scores) {
    var count = scores.length;
    var sum = 0;
    
    for (let i = 0; i < count; i++)
    {
        sum = sum + scores[i]
    }
    return Math.floor(sum / count);
  
  }  
  average([2, 4, 6])
  
/* rock, paper and scissors
 There will be 3instances for each
i.e for rock
1.rock and rock= draw
2.rock and paper = rock wins
3.rock and scissors = scissors wins
*/
function rps(player1, player2){
    if (player1 === 'rock'){
        if (player2 === 'rock'){
            return "Draw";
        }
        if (player2 === 'paper'){
            return "player1 wins!";
        }
        if (player2 === 'scissors'){
            return "player2 wins";
        }
    }

    if (player1 === 'paper'){
        if (player2 === 'paper'){
            return "Draw";
        }
        if (player2 === 'rock'){
            return "player1 wins!";
        }
        if (player2 === 'scissors'){
            return "player2 wins";
        }

    }

    if (player1 === 'scissors'){
        if (player2 === 'scissors'){
            return "Draw"
        }
        if (player2 === 'paper'){
            return "player1 wins!"
        }
        if (player2 === 'rock'){
            return "player2 wins"
        }

    }
}
rps('rock', 'paper')


// checking for correct bracket

function checkValid( a,b){
    var myChecks = ["(", "{", "[", ")", "}", "]" ];

    
        if (a === '('  || "()"){
            if (b === ')'){
                return "()";
            }
            if (b === '}'){
                return "notValid";
            }
            if (b === ']'){
                return "notValid";
            }
            if (b === ''){
                return "Valid";
            }
        }
    
        if (a === '{' ){
            if (b === '}' ){
                return "{}" ;
            }
            if (b === ']'){
                return "notValid";
            }
            if (b === ')' ){
                "notValid";
            }
    
        }
    
        if (a === '['){
            if (b === ']'){
                return "valid"
            }
            if (b === '}'){
                return "invalid"
            }
            if (b === ')'){
                return "inValid"
            }
    
        }
    }
    
   checkValid("[", "]") 

   
   // function that remove first and last character of a string

  function removeChar(entries){
    return entries.substr(1, entries.length - 1);
  }
  removeChar('hello');
   
  //return the sum of all the positive ones from an array
  
  function sumPositiv(arrayNum) {
    sum = 0;
    for(i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0){
            sum += arrayNum[i];
        } 
    }
    return sum;
  }
  sumPositiv([1,-3,0])


  // '+', 4, 6 =it will add d 2 nos
  //'*', 3, 2= it will multiply;
 function arguments(operation, value1, value2){
   switch(operation){
    case '+':
        return value1 + value2;
    case '*':
        return value1 * value2;
    case '-':
        return value1 - value2;    
    case '/':
        return value1 / value2;
    default:
        return 0;
    }
}

arguments('+', 3, 10)
arguments('*',3,5);

//OR
function operate(operation, valu1, valu2){
    const operateStr = valu1 + operation + valu2;
    const result = eval(operateStr);
    return result;
}
operate('/', 12, 6);

// A function to repeat string i.e repeatString(6, 'in')--- this repeats in in 6 times.

function repeatString(n, s){
  let start = '';
  for (i =0; i < n; i++) {
    start = start + s;
  }
  return start;
}

repeatString(3, 'yes');

//a function to split a string nd convert it to an array

function convertString(numStr){
   return numStr.split(" ");
}

convertString("i love you");

//remove the spaces from d string nd return d result string
/*
function removeSpace(stringSpace){
var splitss = stringSpace.split(" "); 
    var arr = [];

    for (let i = 0; i < splitss.lenght; i++); {
        var trimStr = splitss[i];
        var trimFinal = trimStr.trim;
        arr.push(trimFinal);
    }
    const finals = arr.join("");
    return finals;

    console.log(finals);
}
console.log('finals');
removeSpace("programming is real");
*/

//to return a new array with each number doubled using map method

function double(numDouble){

    const results =numDouble.map((arrNum)=>{
        arrNum * 2
    });
    return results;
}

double([2, 4, 5]);

/*
//Turing javascript challeng
1st method
var bracket = ["[", ")", "}", "{", "(", "]"];
var sum = bracket.join();
console.log(sum)
var sums= [];

sums.push(sum);
console.log(sums);
 function checkValids(str1, str2){
    for(let i = 0; i < sums.length; i++){
        if (str1 + str2 === '()' || str1 + str2 === '[]' || str1 + str2 ==='{}'){
            console.log('valid')
        }else{
            console.log('inValid')
        }
    }
    return ;

}
checkValids('(',')');


//Turing javascript challenge
//2nd method
var bracket = ["[", ")", "}", "{", "(", "]"];

var str = "";
function checkss(str1, str2){
    for(let i = 0; i < bracket.length; i++){
        if (str1  === '(' && str2 ===')'){
             return 'valid';
        }

        if (str1  === '{' && str2 ==='}'){
            return 'valid';
       }
           

        if (str1  === '[' && str2 ===']'){
        return 'valid';
        
        }else{
        return 'inValid';
   }
                
       }
          
       }


checkss('[',']');
*/
//Turing javascript challenge
//3rd method
var bracket = ["[", ")", "}", "{", "(", "]"];

var str = "";
function checkss(str1){
    
        if (str1  === '()'){
             return 'valid';
        }
        if (str1  === '{}' ){
            return 'valid';
       }
           

        if (str1  === '[]'){
        return 'valid';
        
        }else{
        return 'inValid';
   }
                
       
          
}
checkss('[',']');


//parent class Car
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
}

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at {this.speed} km/h`);
};

Car.prototype.brake = function(){
    this.speed -=5;
    console.log(`${this.make} is going at {this.speed} km/h`);
};



const game ={
    scored: ['odun', 'damisi', 'Ejire', 'Amaria'],
    odds: {
        team1: 3,
        x: 3,
        team2: 6, 
    },
}

for (const [i, player] of game.scored.entries()){
    console.log(`"Goal ${i + 1}: ${player}"`);
}


let avg = 0;
const odd = Object.values(game.odds)
for(const od of odd){
    avg += od;
    console.log(avg);
}



const restaurant ={
    name: 'damisi belle-full',
    location: 'uk tavanti 23',
    category:['italy', 'pizza', 'veggies'],
    starter:['efo', 'eba', 'rice', 'fufu'],
    openingHours:{
        thur:{
            open: 11,
            close: 22,
        },

        fri:{
            open: 12,
            close: 22,
        }
    },

    order: function(start, end){
        return [this.starter[start], this.category[end]];
    },
}
//array destructuring
 console.log(restaurant.category);
 let [one, five] = (restaurant.category);
 console.log(one, five);
 
 const [one1,  ,five5] = (restaurant.category);
 console.log(one1, five5);
 
 const [ones, , , threes] = (restaurant.starter);
 const newCat = [];
 newCat.push(ones, threes);
 console.log(newCat);
 console.log(ones,threes);

[one, five] = [five, one]
console.log(one, five);


const[star, main]= restaurant.order(2,0);
console.log(star, main);

//destructuring objects i.e like api
const {name, openingHours, starter} = restaurant;
console.log(name, openingHours, starter);

//Reassigning another names for object properties.

const {
    name: restaurantName,
    openingHours: hours,
    category: tags,

} = restaurant;
console.log(restaurantName, hours, tags);


//default values
const { 
    menu = [],
    starter: starts = [] }
 = restaurant
 console.log(menu, starts);

 //nested object
 const {
    fri: {open: o, close: c},} = openingHours
console.log(o, c);

//to reverse a string.
function solution(str){
    return str.split("").reverse().join("");
}
solution("world")


//check for odd or even number
function evenOdd(num){
    return num  % 2 === 0 ? "even" : "odd";
 }
evenOdd(10)

//check for vowel in a string
function getVowelCount(str){
    let vowelsCount = 0;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++){
       switch(arr[i]){
        case 'a':
            vowelsCount++;
            break;

        case 'e':
            vowelsCount++;
            break;

        case 'i':
            vowelsCount++;
            break;

        case 'o':
            vowelsCount++;
            break;

        case 'u':
            vowelsCount++;
            break;
       }
    } return vowelsCount;
}   
getVowelCount("adeayo");

//special message to jenny
// const greet = function(nam){
  // { nam === jenny ? "hello love" : "hello" + nam}
 //}
//greet();

//create a function that checks if a number is divisible by two numbers x nd y, all input are positive nd non-zero digits.
    function checkDivisible(n, x, y){
        if ((n > 1) && (n % x === 0)  && (n % y === 0 ))
            return true;
            else 
            return false;
        }

checkDivisible(6, 2, 3)

//make number negative
function makeNegative(numb){
    if (numb < 0)
        return numb;
    else
        return -numb;
}

makeNegative(33);

//check for smallest number from an array
class SmallInteger{
    findSmallInt(args){
        return Math.min(...args)
    }
}

// add all numbers below the parameter
var summation = function(num){
    var sum = 0;
    for (let i = 1; i <= num; i++){
    sum =  sum + i;
    }
    return sum;
}
summation(10);

//get average of numbers
function calcAver(arrayNo){
    var sum = 0;
    const tota = arrayNo.length
    var average;
    for (let i = 0; i < tota; i++){
    sum = sum + arrayNo[i]
}
      average = sum / tota;
      return Math.floor(average);
   
}
calcAver([5, 5]);


//return the sum of positive numbers in an array

function returnPositive(arr){
var sum = 0;
for (i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        sum  = sum + arr[i]
    }
    return sum;
}
}

returnPositive([-4, 3, 4])

//repeat strings
function repeatStr(n, s){

    let startStr = "";
    for (let i = 0; i < n; i++){
         startStr = startStr + s;
    }
    return startStr; 
}
repeatStr(6, 'hello')

//return double of value
function maps(x){
    const ans = x.map((i) =>{
       return  2 * i
    })
    return ans;
}
maps([2, 4]);



function hero(dragon, bullet){
    return bullet / dragon >= 2
}

//add two arrays
function addArr(arr1, arr2){
let sum = 0;
var totalArr = [];
    for (let i = 0; i < arr1.length; i++){
        const arr1Val = arr1[i];
        const arr2Val = arr2[i]
        sum = sum + arr1Val + arr2Val
    }
    return sum;

}    
     
    
addArr([1,2,3], [4,5,6])

/*
var bracke = ["[", ")", "}", "{", "(", "]"];

var str = "";
function checkss(str){
   
    for (i = 0; i < bracke.length; i++);
    {
        if ((str + bracke[i] ==="( )") || (str + bracke[i] ==="[ ]") || (str + bracke[i] ==="{ }") )
        
            return 'valid';
         else 
        return 'invalid'
            
    }
              
}
checkss('[',']');
*/
//Personal Live coding challenge @ turing using javascript
var total = 0;
function burnCalory(cals, d, min, max){
    for(let k = 0; k < cals.length; k++){
        total = total + d+ cals[k]
        if (total < min){
            return total - 1
        } else if (total > max){
            return total + 1;
        } else 
        return;
    }
}
burnCalory([1, 2, 3, 4]);


//find missing number in an array
function missArr(arr){
    let missingAr = [];

    //check for smallest number//Math.min(1, 2, 3); //1
    let minNum = Math.min(...arr);

     //check for greater value//Math.max(1, 2, 3); //3
    let maxNum = Math.max(...arr);

    //indexOf returns the position, and if its not there-returns -1
    for (let i = minNum; i < maxNum; i++){
        if (arr.indexOf(i) < 0){
            missingAr.push(i);
        }
    }
    return missingAr;
}
console.log(missArr([1,3,4,3]));


//find duplicate number
const findDuplicate = (arr) =>{
    let sortedArray = arr.sort();
    let results = [];

    for(let i = 0; i < sortedArray.length; i++){
        if (sortedArray[i + 1] === sortedArray[i]){
            results.push(sortedArray[i]);
        }
    }
console.log(results);
    return results;
}
console.log(findDuplicate([1,2,3,4,3]))

//find missing number and duplicate number at the same time--turing javascript challenge

const findDuplicateAndMissing = (arrNumbers) =>{
    let sortArr = arrNumbers.sort();
    let duplicateAndMiss = [];

    //check for smallest number//Math.min(1, 2, 3); //1
    let minNum = Math.min(...sortArr);

     //check for greater value//Math.max(1, 2, 3); //3
    let maxNum = Math.max(...sortArr);

  
    for (let i = 0; i < sortArr.length; i++){
        if (sortArr[i + 1] === sortArr[i]){
            duplicateAndMiss.push(sortArr[i])
        }
        /*
        for (let i = j = minNum; j < maxNum; i++){
            if (sortArr.indexOf(j) < 0){
                duplicateAndMiss.push(i);
            }
        }*/
        
    }
    return duplicateAndMiss;
    
}

console.log(findDuplicateAndMissing([1, 2, 3, 5, 1]))


//to remove all white space character from a string
const inputStr = function (white){
    return white.concat(" ");
}
console.log(inputStr("hello damsy"));


























