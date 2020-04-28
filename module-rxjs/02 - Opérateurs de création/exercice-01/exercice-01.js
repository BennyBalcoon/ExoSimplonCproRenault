import {from} from 'rxjs';

window.addEventListener("DOMContentLoaded", (event) => {

    const myDivs = document.getElementsByTagName('div');
    console.log(myDivs);

    from(myDivs).subscribe(currentDiv => {
        currentDiv.addEventListener("mousedown", (event) => {
            event.preventDefault();
            currentDiv.style.position = 'absolute';
            let lisOfDiv = from(currentDiv.getElementsByTagName("li"));
            lisOfDiv.subscribe(currentLi => {
                currentLi.style.backgroundColor = 'red';
                console.log(currentLi);
            })
        })
        currentDiv.addEventListener("mouseup", (event) => {
            event.preventDefault(); 
            currentDiv.style.position = 'fixed';
            let lisOfDiv = from(currentDiv.getElementsByTagName("li"));
            lisOfDiv.subscribe(currentLi => {
                currentLi.style.backgroundColor = 'white';
                console.log(currentLi);
            })
        })
        
        window.addEventListener("mousemove", (event) => {
            //
        })
    })
})