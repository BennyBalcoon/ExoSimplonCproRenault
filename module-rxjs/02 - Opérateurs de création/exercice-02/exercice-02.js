import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators'
import {iif, of, range} from 'rxjs';

class Robot {
    constructor(id) {
        this.id = id;
    }
    equipeBleue(){
        return "Equipe Bleue !"
    } 
    equipeRouge(){
        return "Equipe Rouge !"
    }   
}

let protoRobot = new Robot(Math.floor(Math.random() * 10));
console.log(protoRobot);
console.log(protoRobot.id % 2 === 0);

const blue = protoRobot.equipeBleue();
const red = protoRobot.equipeRouge();

// Avec IF ELSE

// const obs = new Observable(observer => {
//     if(protoRobot.id % 2 === 0) {
//         observer.next(protoRobot.equipeBleue());
//     } else {
//         observer.next(protoRobot.equipeRouge());
//     }
// })

// obs.subscribe((value) => {
//     console.log(value)
// });


const colorTeam = iif(
    () => protoRobot.id % 2 === 0,
    of(blue),
    of(red)
)

colorTeam.subscribe((value) => {
    console.log(value);
})

// OU

const obs = new Observable(observer => observer.next(protoRobot.id));

obs.pipe(mergeMap(value => iif(() => value%2 === 0, of(blue), of(red))))
    .subscribe(value => console.log(value))

// Partie 2

const source = range(1, 100);
source.subscribe(() => console.log(new Robot(Math.floor(Math.random() * 10))));

// source.subscribe(() => {
//     const obs2 = new Observable(observer => observer.next(new Robot(Math.floor(Math.random() * 10))))
//     obs2.pipe(mergeMap(value => iif(() => value%2 === 0, of(blue), of(red))))
//     .subscribe(value => console.log(value))
// });








