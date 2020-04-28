const submitButton: any = document.getElementById("submitButton");
const displayResult: any = document.getElementById("result");

let monObjet: {
    doMath(),
    submitForm(),
}

const doMath = (event: any) => {
    event.preventDefault();
    const input1: number = parseInt(document.getElementsByTagName("input")[0].value);
    const input2: number = parseInt(document.getElementsByTagName("input")[1].value);
    let calculArray: number[] = [];
    if(!isNaN(input1) && !isNaN(input2)) {
         calculArray.push(input1 + input2);
         calculArray.push(input1 * input2);
         displayResult.innerHTML = `La somme est ${calculArray[0]} et la multiplication donne ${calculArray[1]}`;
    } else {
        console.log("Please enter numbers");
    }
}

const submitForm = () => submitButton.addEventListener("click", doMath);
