import {Observable} from 'rxjs';
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

const obs = new Observable(observer => {
    iif(() => (protoRobot.id % 2 === 0), 
    observer.next(protoRobot.equipeBleue()),
    observer.next(protoRobot.equipeRouge())
    )
})

obs.subscribe((value) => {
    console.log(value)
});

