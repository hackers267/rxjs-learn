import { of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

const source = of(2000, 1000);
const example = source.pipe(
  concatMap((val) => of(`Delayed by:${val}ms`).pipe(delay(val)))
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
