import {fromEvent, merge} from 'rxjs';


// PARTIE 1

// const loadingDoc = fromEvent(document, "DOMContentLoaded");

// loadingDoc.subscribe(() => {
//     let paragraph = document.getElementsByTagName('p');
//     fromEvent(paragraph, "click")
//     .subscribe(() => {
//         let piano = document.getElementById('piano');
//         piano.setAttribute("style", "flex");
//         // piano.style.display = 'flex';
//     })
//     let spanDO = document.getElementsByTagName('span');
//     fromEvent(spanDO, 'mouseover')
//     .subscribe(() => {
//         console.log("dooooooooo");
//         let baliseAudio = document.createElement("audio");
//         let baliseSource = document.createElement("source");
//         baliseSource.setAttribute("type", "audio/wav");
//         baliseSource.setAttribute('muted', 'muted');
//         baliseSource.setAttribute('src', './sounds/do-octave.wav')
//         baliseAudio.appendChild(baliseSource);
//         fromEvent(baliseAudio, "ended")
//         .subscribe(() => {
//             baliseAudio.remove();
//         })
//         baliseAudio.play();
//     })
// });

// PARTIE 2
    
const loadingDoc = fromEvent(document, "DOMContentLoaded");
loadingDoc.subscribe(() => {

    let piano = document.getElementById('piano');
    let spanDO = document.getElementById("spanDO");
    let spanRE = document.createElement("span");
    spanRE.innerHTML = "RE";
    let spanMI = document.createElement("span");
    spanMI.innerHTML = "MI";
    let spanFA = document.createElement("span");
    spanFA.innerHTML = "FA";
    let spanSOL = document.createElement("span");
    spanSOL.innerHTML = "SOL";
    let spanLA = document.createElement("span");
    spanLA.innerHTML = "LA";
    let spanSI = document.createElement("span");
    spanSI.innerHTML = "SI";
    piano.appendChild(spanRE);
    piano.appendChild(spanMI);
    piano.appendChild(spanFA);
    piano.appendChild(spanSOL);
    piano.appendChild(spanLA);
    piano.appendChild(spanSI);

    let paragraph = document.getElementsByTagName('p');
     fromEvent(paragraph, "click")
     .subscribe(() => {
        piano.style.display = 'flex';
        piano.style.justifyContent = "space-evenly";
     })
     
     let getDO = fromEvent(spanDO, 'mouseover');
     let getRE = fromEvent(spanRE, 'mouseover');
     let getMI = fromEvent(spanMI, 'mouseover');
     let getFA = fromEvent(spanFA, 'mouseover');
     let getSOL = fromEvent(spanSOL, 'mouseover');
     let getLA = fromEvent(spanLA, 'mouseover');
     let getSI = fromEvent(spanSI, 'mouseover');

     const getMusic = merge(getDO, getRE, getMI, getFA, getSOL, getLA, getSI);

     getMusic.subscribe((value) => {
         console.log(value);
         let baliseAudio = document.createElement("audio");
         let baliseSource = document.createElement("source");
         baliseSource.setAttribute("type", "audio/wav");
         baliseSource.setAttribute('muted', 'muted');
        switch (value.toElement.innerHTML) {
            case 'DO':
                baliseSource.setAttribute('src', './sounds/do.wav');
                console.log("rééééééé");
                break;
            case 'RE':
                baliseSource.setAttribute('src', './sounds/re.wav');
                console.log("rééééééé");
                break;
            case 'MI':
                baliseSource.setAttribute('src', './sounds/mi.wav');
                break;
            case 'FA':
                baliseSource.setAttribute('src', './sounds/fa.wav');
                break;
            case 'SOL':
                baliseSource.setAttribute('src', './sounds/sol.wav');
                break;
            case 'LA':
                baliseSource.setAttribute('src', './sounds/la.wav');
                console.log("rééééééé");
                break;
            case 'SI':
                baliseSource.setAttribute('src', './sounds/si.wav');
                break;
        
            default:
                break;
        }
        baliseAudio.appendChild(baliseSource);
        baliseAudio.play();
     })

})

