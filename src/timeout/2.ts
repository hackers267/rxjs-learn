import { interval } from "rxjs";
import { take, timeInterval, timeout } from "rxjs/operators";

const slow$ = interval(1000);
const fast$ = interval(500);
const example = slow$.pipe(
  timeout({
    first: 800,
    with: (val) => {
      console.log(val);
      return fast$;
    },
  }),
  timeInterval(),
  take(16)
);
example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
