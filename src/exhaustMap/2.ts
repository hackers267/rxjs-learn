import { interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const first = interval(1000).pipe(take(10));
const second = interval(1000).pipe(take(2));
const example = first.pipe(
  exhaustMap((f) => {
    console.log(`Emission Corrected of first interval:${f}`);
    return second;
  })
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
