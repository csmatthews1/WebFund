function fizzbuzz () {
    var output = "";
    var modthree = false;
    var modfive = false;

    for (var i = 1; i <= 100; i++) {
        modthree = !(i % 3)
        modfive = !(i % 5)

        if(modthree) {
            output = "Fizz"
            if (modfive) {
                output += "Buzz"
            }
        }
        else if (modfive) {
            output = "Buzz"
        }
        else {
            output = i;
        }
        console.log (output);
            
    }
}