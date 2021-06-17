import { interval, timer } from "rxjs";
import { switchMap, take } from "rxjs/operators";

const source = timer(0, 5000);
const example = source.pipe(
  switchMap(() => interval(500)),
  take(20)
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
