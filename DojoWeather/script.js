var tempMode = 0;  // 0 is deg C, 1 is deg F

function changeCity() {
    alert("Loading weather report...")
}

function changeTemp(element) {
    var tempF = 0;
    var tempC = 0;

    if(element.value == "°C" && tempMode == 1) {
        tempMode = 0;
        console.log("Change to deg C");
        //Loop through the high temps and convert to deg C
        var highs = document.getElementsByClassName("high")
        for (var i=0; i < highs.length; i++) {
            tempF = parseInt(highs[i].innerText);
            tempC = Math.round((tempF - 32) * 5 / 9);
            highs[i].innerText = tempC + "°";
        }

        //Loop through the low temps and convert to deg F
        var lows = document.getElementsByClassName("low")
        for (var i=0; i < lows.length; i++) {
            tempF = parseInt(lows[i].innerText);
            tempC = Math.round((tempF - 32) * 5 / 9);
            lows[i].innerText = tempC + "°";
        }
    }
    if(element.value == "°F" && tempMode == 0) {
        tempMode = 1;
        console.log("Change to deg F");
        //Loop through the high temps and convert to deg F
        var highs = document.getElementsByClassName("high")
        console.log(highs);
        for (var i=0; i < highs.length; i++) {
            tempC = parseInt(highs[i].innerText)
            tempF = Math.round(tempC * 9 / 5 + 32);
            highs[i].innerText = tempF + "°";
        }

        //Loop through the low temps and convert to deg F
        var lows = document.getElementsByClassName("low")
        console.log(highs);
        for (var i=0; i < lows.length; i++) {
            tempC = parseInt(lows[i].innerText)
            tempF = Math.round(tempC * 9 / 5 + 32);
            lows[i].innerText = tempF + "°";
        }

    }
}
function accept() {
    document.getElementById("modal-dialog").remove();
}
