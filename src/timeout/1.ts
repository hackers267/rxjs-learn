import { interval } from "rxjs";
import { take, timeInterval, timeout } from "rxjs/operators";

const slow$ = interval(900);
const fast$ = interval(500);
const example = slow$.pipe(
  timeout({
    each: 800,
    with: () => fast$,
  }),
  timeInterval(),
  take(16)
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
