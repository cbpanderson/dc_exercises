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
    for (i=0;i<=word.length;i++){
        //leetconvert.find(element => element == word[i]);
        word[i] == leetConvert key
    }
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

//not working yet
function positiveNumbers(numArray){
    var posNumArray = numArray.filter(numArray > 0);
    console.log(posNumArray);
}
positiveNumbers([1, 6, -7, 20, -33]);

//Function Exercises**********
//not working yet
function evenNumbers(numArray){
    var evenNumArray = numArray.filter(numArray % 2);
    console.log(evenNumArray);
}
evenNumbers([1,2,3,4,5,6]);

//not working yet
function squareTheNumbers(numArray){
    numArray.foreach(myFunction)
}
function myFunction(item){
    var squaredArray = [item*item];
}
squareTheNumbers();

//not working yet
function cities(cityStats){
    var warmCities = "";
    if(Object.values(cityStats) > 70.0){
         
    }
    console.log(warmCities);
}
cities();

//not working yet --------------------
function goodJob(names){
    names.foreach(myFunction);
}

function myFunction(item){
    console.log('Good job, ${item}')
}

function sortAnArray(){

}
sortAnArray();

function sortAnArray2(){

}
sortAnArray2();

function call3Times(fun){
    fun(fun);
    fun(fun);
    fun(fun);
}
function fun(fun){
    console.log(fun);
}
call3Times("Hello, world!");

//can use loops
function callNTimes(times, fun()){

}
callNTimes();

function sumAnArray(numArray){
    numArray.reduce
}
sumAnArray(numArray);

function acronym(wordArray){

}

//Closure Exercises ************
function counter(){

}

function counter2(){
    
}