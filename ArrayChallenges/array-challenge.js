function alwaysHungry(arr) {
    var foundFood = false;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy")
            foundFood = true;
        }
    }
    if (!foundFood) {
        console.log("I'm hungry")
    }
}

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function betterThanAverage(arr) {
    var sum = 0;
    var average = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum/arr.length;

    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > average) {
            count++;
        }
    }
    return count;
}

function reverse(arr) {
    var temp;
    
    for (let i = 0; i < arr.length/2; i++)
    {
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let i =1; i < n-1; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i]);
    }

    return fibArr;
}
