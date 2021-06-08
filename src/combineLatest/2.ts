import {timer,combineLatest} from 'rxjs';
import {take} from 'rxjs/operators';

const timerOne = timer(1000,4000).pipe(take(3));
const timerTwo = timer(2000,4000).pipe(take(3));
const timerThree = timer(3000,4000).pipe(take(2));

const combinedProject = combineLatest<number[],string>(
    [timerOne,timerTwo,timerThree],
    (one,two,three)=>{
        return `Timer One Latest:${one},
        Timer Two Latest:${two},
        Timer Three Latest:${three}`
    }
)
combinedProject.subscribe(x=>console.log(x));
