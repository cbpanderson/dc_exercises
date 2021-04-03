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

//not working yet
function printBox(w,h){
    boxWidth(w);
    boxHeight(h, w);
    boxWidth(w);
}
printBox(6,4);

//working
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
//not working
function boxHeight(h, w){
    var height = h-2;
    var blank = w-2;
    console.log('* '+);

}

function printBanner(text){
    bannerLength = text.length + 4;
    boxWidth(bannerLength);
    console.log('* '+text+' *');
    boxWidth(bannerLength);
}
printBanner("hello");