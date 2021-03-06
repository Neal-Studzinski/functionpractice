// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(param1,param2) {
  return param1 + param2;
}


// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,4) === 6, 'expected sum of 2 and 4 to be 6');
console.assert(sum(1,0) === 1);
console.assert(sum(-48,5) === -43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:

var avg = function(number1,number2,number3) {
  return (number1 + number2 + number3) / 3;
}

// write your console.log/asserts here:
console.log('The average of 4, 6, and 8 is ', avg(4,6,8));
console.assert(avg(4,6,8) === 6, 'expected avg of 4,6,8 to be 6');
console.assert(avg(10,20,30) === 20);
console.assert(avg(5,10,15) === 10);
// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
var getLength = function(string) {
  return string.length;

}

// write your console.log/asserts here:
console.log('The length of the string is ' + getLength('This is a string.'));
console.assert(getLength('Two words') === 9, 'expected outcome of 9 characters');
console.assert(getLength('Three words now') === 15);
console.assert(getLength('One') === 3);


// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here
var greaterThan = function(param1,param2) {
  if (param2 > param1) {
    return true;
  }
  else return false;
}

// write your console.log/asserts here:
console.log(greaterThan(6,3));
console.assert(greaterThan(2,4) === true, 'expected outcome of true');
console.assert(greaterThan(5,3) === false);
console.assert(greaterThan(10,5) === false);

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formatted like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
var greet = function(name) {
  return ('Hello, ' + name + "!");
}

// write your console.log/asserts here:

console.log(greet("Neal"));
console.assert(greet("Neal") === "Hello, Neal!", 'expected outcome of Hello, Neal!');
console.assert(greet("Joe") === "Hello, Joe!");
console.assert(greet("Jess") === "Hello, Jess!");
// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
var madlib = function(param1,param2, param3, param4) {
  var sentence = ('The ' + param1 + ' jumps ' + 'up and ' + param2 + ' and ' + param3 + " it\'s ") + param4;
  return sentence;
}

// write your console.log/asserts here:
console.log(madlib("dog", "down", "wags", "tail") === "The dog jumps up and down and wags it's tail", "expected outcome of The dog jumps up and down and wags it's tail");
console.assert(madlib("cat", "around", "shakes", "head") === "The cat jumps up and around and shakes it's head");
console.assert(madlib("lizard", "down", "changes", "colors") === "The lizard jumps up and down and changes it's colors");
console.assert(madlib("fish", "over", "eats", "food") === "The fish jumps up and over and eats it's food");

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
max = function(num1,num2) {
  if (num1 > num2) {
    return num1;
  }
  else return num2;
}

// write your console.log/asserts here:
console.log(max(22,34));
console.assert(max(48,34) === 48, 'expected outcome of 48');
console.assert(max(28,33) === 33);
console.assert(max(8,44) === 44);
// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
var maxOfThree = function(num1,num2,num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  }                                    //Or I could use function maxOfThree(num1,num2,num3)
  else if (num2>num1 && num2>num3) {   // return Math.max(num1,num2,num3)
    return num2;
  }
  else return num3;
}

// write your console.log/asserts here:
console.log(maxOfThree(41,53,33));
console.assert(maxOfThree(41,53,33) === 53, 'expected answer of 53');
console.assert(maxOfThree(1,3,33) === 33);
console.assert(maxOfThree(4,5,3) === 5);
// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
var isVowel = function(letter) {
  var result;
  result = letter == "A" || letter == "E" || letter == "I" || letter == "O" ||
  letter == "U" || letter == "a" || letter == "e" || letter == "i" || letter == "o" ||
  letter == "u";
  return result;
}

// write your console.log/asserts here:
console.log(isVowel("o"));
console.assert(isVowel("i") === true, 'expected outcome of true');
console.assert(isVowel("e"));
console.assert(isVowel("a"));

// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:

function isConsonant(letter)
{
  if(letter === 'b' ||
    letter === 'c' ||
    letter === 'd' ||
    letter === 'e' ||
    letter === 'f' ||
    letter === 'g' ||
    letter === 'h' ||
    letter === 'j' ||
    letter === 'k' ||
    letter === 'l' ||
    letter === 'm' ||
    letter === 'n' ||
    letter === 'p' ||
    letter === 'q' ||
    letter === 'r' ||
    letter === 's' ||
    letter === 't' ||
    letter === 'v' ||
    letter === 'w' ||
    letter === 'x' ||
    letter === 'y' ||
    letter === 'z') {
     return true;
   }
   else {
     return false;
   }
}
function translation(originalSentence) {
  var newSentence = '';

  for(var i = 0; i < originalSentence.length; i++)
  {
    var currentLetter = originalSentence.charAt(i);
    if(isConsonant(currentLetter))
    {
      newSentence += currentLetter + 'o' + currentLetter;
    }
    else {
      newSentence += currentLetter;
    }
  }
  return newSentence;
}


// write your console.log/asserts here:
console.log(translation('test this'));
console.assert(translation('test this') === 'toteoesostot tothohisos', ' error in translation' );



// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:

var reverse = function(originalStr) {
  var newStr =  ''
  for (var i = originalStr.length - 1; i >= 0; i--) {
    newStr = newStr += originalStr[i];

  }
return newStr;

}

// write your console.log/asserts here:
console.log(reverse("IronYard"));
console.assert(reverse("Hello") === "olleH", 'expected outcome of olleH');
console.assert(reverse("Goodbye") === "eybdooG");
console.assert(reverse("Neal") === "laeN");
// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
largest = function(numArray) {
  return Math.max.apply(null, numArray);

}

// write your console.log/asserts here:
console.log(largest([5, 7, 2]));
console.assert(largest([48,38,28]) === 48, 'output should be 48');
console.assert(largest([57,4,93]) === 93);
console.assert(largest([4,44,444]) === 444);


// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
function longest(array){
  var max = 0;
  var word = "";
  for (var i = 0; i < array.length-1; i++){
    if (array[i].length > max){
      max = array[i].length;
      word = array[i];
    }
  }
  return word;
}

// write your console.log/asserts here:
console.log("The longest word is " + longest(strings));
console.assert(longest(strings) === 'collection', 'output should be collection');

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:

function getEvens(numbers) {
  var evenNumbers = [];
  for (var i=0; i < numbers.length; i++) {
    if (numbers[i]%2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  return evenNumbers;
}

// write your console.log/asserts here:
console.log(getEvens([1,2,3,4,5,6,7]));

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
function getOdds(numbers) {
  var oddNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 !== 0) {
      oddNumbers.push(numbers[i])
    }
  }
  return oddNumbers;
}
// write your console.log/asserts here:
console.log(getOdds([4,5,1,9,7,67,54,32]));
console.assert(getOdds([1,2,3,4,5,6,7]) === 1,3,5,7, 'output shout be 1,3,5,7');
// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
function containsIs(testIs) {
  var newArray = [];

  for (var i = 0; i < testIs.length; i++) {

    if (testIs[i].includes('is')) {
      newArray.push(testIs[i]);
    }
  }
  return newArray;
};


// write your console.log/asserts here:
console.log(containsIs(['is it hot outside']));
//console.assert(containsIs(['the dog is outside','cat', 'jumps up', 'over is not under']) === ['the dog is outside', 'over is not under']);
//console.assert(containsIs(['It is hot', 'it was hot', 'Is it hot?']) === ['It is hot', 'is it hot?']);
//console.assert(containsIs(['is this right?', 'maybe it is', 'probably not though']) === ['is this right?', 'maybe it is'], 'should equal ['is this right?', 'maybe it is']');


///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:


///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
