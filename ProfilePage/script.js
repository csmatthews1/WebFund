
function editprofile () {
    var user_name = prompt("Enter a new profile name:");

    document.getElementById("name").innerText = user_name;
}

function addConnection (index) {
    var numConnect = parseInt(document.getElementById("numConnections").innerText);
    var numReq = parseInt(document.getElementById("numRequests").innerText);
    var currEntry = "entry" + index;

    numConnect++;
    numReq--;

    document.getElementById(currEntry).remove();

    document.getElementById("numConnections").innerText = numConnect;
    document.getElementById("numRequests").innerText = numReq;
}

function denyConnection (index) {
    var numReq = parseInt(document.getElementById("numRequests").innerText);
    var currEntry = "entry" + index;

    numReq--;

    document.getElementById(currEntry).remove();

    document.getElementById("numRequests").innerText = numReq;

}