import { interval } from "rxjs";
import { take, timeInterval } from "rxjs/operators";

const seconds = interval(1000);
const subscription = seconds.pipe(timeInterval(), take(8)).subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
