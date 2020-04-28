// import {ReplaySubject} from 'rxjs';


// window.addEventListener("DOMContentLoaded", (event) => {
//     const sub = new ReplaySubject();

//     sub.subscribe({
//         next: (value)=>{
//             switch(value.keyCode) {
//             case 40:
//               window.document.body.innerHTML += '&#8595;';
//               break;
//             case 38:
//               window.document.body.innerHTML += '&#8593;';
//               break;
//             case 37:
//                 window.document.body.innerHTML += '&#8592;';
//                 break;
//             case 39:
//                 window.document.body.innerHTML += '&#8594;';
//                 break;  
//           }
//         },
//         complete() {
//                 console.log("fini de dessiner!");
//         }
//     })

//     window.addEventListener("keydown", (event) => {
//         sub.next(event);
//         if(event.keyCode == 13) {
//             sub.complete();
//         }
//     })

//     window.addEventListener("click", (event) => {
//         console.log(event);
//         let observer2 = sub.subscribe({
//             next: (value)=>{
//                 switch(value.keyCode) {
//                 case 40:
//                   window.document.body.innerHTML += '&#8595;';
//                   break;
//                 case 38:
//                   window.document.body.innerHTML += '&#8593;';
//                   break;
//                 case 37:
//                     window.document.body.innerHTML += '&#8592;';
//                     break;
//                 case 39:
//                     window.document.body.innerHTML += '&#8594;';
//                     break;  
//               }
//             }
//         })
//     })

// })

import {BehaviorSubject} from 'rxjs';


window.addEventListener("DOMContentLoaded", (event) => {
    const sub = new BehaviorSubject(1);

    sub.subscribe({
        next: (value)=>{
            switch(value.keyCode) {
            case 40:
              window.document.body.innerHTML += '&#8595;';
              break;
            case 38:
              window.document.body.innerHTML += '&#8593;';
              break;
            case 37:
                window.document.body.innerHTML += '&#8592;';
                break;
            case 39:
                window.document.body.innerHTML += '&#8594;';
                break;  
          }
        },
        complete() {
                console.log("fini de dessiner!");
        }
    })

    window.addEventListener("keydown", (event) => {
        sub.next(event);
        if(event.keyCode == 13) {
            sub.complete();
        }
    })

    window.addEventListener("click", (event) => {
        console.log(event);
        let observer2 = sub.subscribe({
            next: (value)=>{
                switch(value.keyCode) {
                case 40:
                  window.document.body.innerHTML += '&#8595;';
                  break;
                case 38:
                  window.document.body.innerHTML += '&#8593;';
                  break;
                case 37:
                    window.document.body.innerHTML += '&#8592;';
                    break;
                case 39:
                    window.document.body.innerHTML += '&#8594;';
                    break;  
              }
            }
        })
    })

})