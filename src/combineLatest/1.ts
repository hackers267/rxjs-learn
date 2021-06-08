import {timer,combineLatest} from 'rxjs';

const timerOne = timer(1000,4000);
const timerTwo = timer(2000,4000);
const timerThree = timer(3000,4000);

const combined = combineLatest([timerOne,timerTwo,timerThree]);
const subscription = combined.subscribe(x=>console.log(x));
