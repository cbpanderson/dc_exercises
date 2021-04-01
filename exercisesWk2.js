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

function printNumbers(startNum, endNum) {
    var i;
    for(i=startNum; i<=endNum; i++) {
        console.log(i);
    }
}

printNumbers(1, 10);