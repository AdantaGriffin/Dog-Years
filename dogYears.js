let myAge = 18; 
// Variable representing my age
let earlyYears = 2; 
//earlyYears set to 2 
earlyYears = earlyYears * 10.5; 
//early value  times 10.5 
let laterYears = myAge - 2; 
// my Age minus the first 2 already accounted for in code above earlyears
laterYears = laterYears * 4; 
//later years of my age times 4 to calculate laterYears age in dog year.
let myAgeInDogYears = earlyYears + laterYears;

let myName = 'ADANTA GRIFFIN';

myName = myName.toLowerCase(); // returns text lower case

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);