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

