function printOdds() {

    for (let i=1; i < 20; i=i+2) {
        console.log(i); 
    }
}

function decMult3 () {
    for (let i=100; i > 0; i--) {
        if (!(i % 3)) {
            console.log(i);
        }
    }
}

function printSeq () {
    var value = 4;

    for (let i=0; i < 6; i++) {
        console.log(value);
        value -= 1.5;
    }
}

function sigma () {
    var sum = 0;
    for (let i=1; i <= 100; i++) {
        sum += i;
    }
    console.log("sigma 1-100:", sum)
}

function factorial () {
    var product = 1;
    for (let i=1; i < 13; i++) {
        product *= i;
    }
    console.log("factorial 1-12: ", product);
}