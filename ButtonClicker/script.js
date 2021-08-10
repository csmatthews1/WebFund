
function login (element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

function like () {
    alert("Ninja was liked!")
}

function adddef (element) {
    element.remove();
}
