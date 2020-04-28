// import {Observable} from 'rxjs';

// window.addEventListener("DOMContentLoaded", (event) => {
//     const observable = new Observable(observer => {
//         window.addEventListener("keydown", (event) => {
//          // ['&#8595;', '&#8593;', '&#8592;', '&#8594;']
//           observer.next(event);
//           if (event.keyCode == 13) {
//               observer.complete();
//           }
//         })
//     })
    
//     observable.subscribe({
//       next(value){
//           switch(value.keyCode) {
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
//       },
//       complete(){
//         console.log("C'est fini !");
//       }
//    });
// })

import { Subject } from 'rxjs';

window.addEventListener("DOMContentLoaded", (event) => {
    const sub = new Subject();

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

})
