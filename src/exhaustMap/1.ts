import { interval, merge, of } from "rxjs";
import { delay, exhaustMap, take } from "rxjs/operators";

const source = interval(1000);
const delayed = source.pipe(delay(10), take(4));
const example = merge(delayed, of(true)).pipe(
  exhaustMap((_) => source.pipe(take(5)))
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
