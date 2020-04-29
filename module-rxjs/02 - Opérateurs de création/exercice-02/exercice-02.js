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

const colorTeam1 = iif(
    () => protoRobot.id % 2 === 0,
    Observable.create(function(subs){
          subs.next(protoRobot.equipeBleue());
    }),
    Observable.create(function(subs){
          subs.next(protoRobot.equipeRouge());
    })
)
colorTeam1.subscribe((value) => {
    console.log(value);
})

// OU

const blue = protoRobot.equipeBleue();
const red = protoRobot.equipeRouge();

const colorTeam2 = iif(
    () => protoRobot.id % 2 === 0,
    of(blue),
    of(red)
)

colorTeam2.subscribe((value) => {
    console.log(value);
})

// OU

const obs = new Observable(observer => observer.next(protoRobot.id));

obs.pipe(mergeMap(value => iif(() => value%2 === 0, of(blue), of(red))))
    .subscribe(value => console.log(value))

// Partie 2

const source = range(1, 100);
source.subscribe(() => {
    let robots = new Robot(Math.floor(Math.random() * 10));
    const colorTeam = iif(
        () => robots.id % 2 === 0,
        Observable.create(function(subs){
              subs.next(robots.equipeBleue());
        }),
        Observable.create(function(subs){
              subs.next(robots.equipeRouge());
        })
    )
    colorTeam.subscribe((value) => {
        console.log("le robot a l'id" + robots.id + " : " + value);
    })
});








