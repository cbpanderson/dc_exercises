//Javascript Exercises*********
function madLib(name, subject){
    return name+"'s favorite subject in school is "+subject+".";
}
madLib("Joe", "math");

function tipAmount(billAmt, levelOfService) {
    var tipAmt;
    if(levelOfService == 'good'){
        tipAmt = 0.2;
    }else if (levelOfService == 'fair') {
        tipAmt = 0.15;
    }else {
        tipAmt = 0.1;
    }
    tipAmt *= billAmt;
    return tipAmt;
}
tipAmount(100, 'poor');

function totalAmount(billAmt, levelOfService) {
    var tipAmt = tipAmount(billAmt, levelOfService);
    var totalAmount = billAmt + tipAmt;
    return totalAmount;
}
totalAmount(100, 'fair');

function printNumbersFor(startNum, endNum) {
    var i;
    for(i=startNum; i<=endNum; i++) {
        console.log(i);
    }
}
printNumbersFor(1, 10);

function printNumbersWhile(startNum, endNum) {
    var i = startNum;
    while(i<=endNum) {
        console.log(i);
        i++;
    }
}
printNumbersWhile(1, 10);

function printSquare(squareSz){
    var length = squareSz;
    for(count=0; count<length; count++){
        var i = 0;
        var line = "";
        while(i<squareSz){
            line = line + '*';
            i++;
        }
        console.log(line);
        line = "";
    }
}
printSquare(5);

function printBox(w,h){
    boxWidth(w);
    boxHeight(w, h);
    boxWidth(w);
}
printBox(6,4);

function boxWidth(w){
    var i = 0;
    var line = "";
    while(i<w){
        line = line + '*';
        i++;
    }
    console.log(line);
    line = "";
}
boxWidth(4);

function boxHeight(w, h){
    var height = h-2;
    var width = w-2;
    var line = "*";
    for (i=0;i<height;i++){
        for (j=0;j<width;j++){
            line = line + " ";
        }
        line = line + "*";
        console.log(line);
        line = "*";
    }
}
boxHeight(6, 4);

function printBanner(text){
    bannerLength = text.length + 4;
    boxWidth(bannerLength);
    console.log('* '+text+' *');
    boxWidth(bannerLength);
}
printBanner("hello");

//not working yet
function leetspeak(word){
    var leetConvert = {"A":4, "E":3, "G":6, "I":1, "O":0, "S":5, "T":7};
    var leetString = "";
    for (i=0;i<=word.length;i++){

        if(word[i] === leetConvert[keyName]) {
            leetString += leetConvert[keyName];
        }
        else{
            leetString += word[i];
        }
        i++; 
    }
    console.log(leetString);
}
leetspeak("street");

function longLongVowels(word){
    var i=0;
    var firstLetter = "";
    var secondLetter = "";

    firstLetter = word[i];
    finalWord = firstLetter;
    i++;
    while(i<word.length){
        secondLetter = word[i];
        if(secondLetter === firstLetter){
            finalWord = finalWord + firstLetter + firstLetter + firstLetter + firstLetter;
        } else{
            finalWord = finalWord + secondLetter; 
        }
        firstLetter = secondLetter;
        i++;
    }
    console.log(finalWord);
}
longLongVowels("cookie");
longLongVowels("igloo");

function positiveNumbers(numArray){
    var posNumbers = [];
    numArray.forEach(function(posNum){
        if(posNum>0){
            posNumbers.push(posNum);
        }
    });
    console.log(posNumbers);  
}
positiveNumbers([1, 6, -7, 20, -33]);

//Function Exercises**********
function evenNumbers(numArray){
    var evenNumbers = [];
    numArray.forEach(function(evenNum){
        if(evenNum % 2 == 0){
            evenNumbers.push(evenNum);
        }
    });
    console.log(evenNumbers);  
}
evenNumbers([1,2,3,4,5,6]);

function squareTheNumbers(numArray){
    var squaredNumbers = [];
    numArray.forEach(function(number) {
        squaredNumbers.push(number * number);
    });
    console.log(squaredNumbers);  
}
squareTheNumbers([1,2,3]);

function cities(cityStats){
    var warmCities = [];
    cityStats.forEach(function(warmCity){
        if(warmCity.temperature < 70.0){
            warmCities.push(warmCity.name);
        }
    });
    console.log(warmCities);
}
cities([
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ]);

function goodJob(people){
    people.forEach(function(names) {
        console.log(`Good Job, ${names}!\n`);
    });
}

goodJob([
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ]);

function sortAnArray(stringArray){
    stringArray.sort();
    console.log(stringArray);
}
sortAnArray([
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ]);

function sortAnArray2(stringArray){
    stringArray.sort((a,b) => a.length - b.length);
    console.log(stringArray);
}
sortAnArray2([
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ]);

function call3Times(fun){
    fun();
    fun();
    fun();
}

function fun(){
    console.log("Hello, world!");
}
call3Times(fun);

function callNTimes(times, fun){
    for(i=0; i<times; i++){
        fun();
    }
}
function fun(){
    console.log("Hello, world!");
}

callNTimes(7, fun);

function sum(numArray){
    var finalSum = numArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      })
    console.log(finalSum);
}
sum([1, 2, 3]);

function acronym(wordArray){
        finalAcronym = wordArray.reduce((accumulator, wordArray) => accumulator + wordArray[0], '')
    console.log(finalAcronym);
}
acronym(['very', 'important', 'person']);
acronym(['national', 'aeronautics', 'space', 'administration']);

//Closure Exercises ************
function counter(){
    return keepsCount;
}
keepsCount(){
    var count += count;
}
var count1 = counter();
count1();

function counter(){
    var counter = (function() {
        var privateCounter = 0;
        function changeBy(val) {
          privateCounter += val;
        }
      
        return {
          increment: function() {
            changeBy(1);
          },

}

function counter2(){
    
}