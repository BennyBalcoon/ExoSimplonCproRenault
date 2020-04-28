var submitButton = document.getElementById("submitButton");
var displayResult = document.getElementById("result");
var doMath = function (event) {
    event.preventDefault();
    var input1 = parseInt(document.getElementsByTagName("input")[0].value);
    var input2 = parseInt(document.getElementsByTagName("input")[1].value);
    var calculArray = [];
    if (!isNaN(input1) && !isNaN(input2)) {
        calculArray.push(input1 + input2);
        calculArray.push(input1 * input2);
        displayResult.innerHTML = "La somme est " + calculArray[0] + " et la multiplication donne " + calculArray[1];
    }
    else {
        console.log("Please enter numbers");
    }
};
submitButton.addEventListener("click", doMath);
