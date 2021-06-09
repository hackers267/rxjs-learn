import { interval } from "rxjs";
import { delay, map, mergeAll, take } from "rxjs/operators";

const source = interval(500).pipe(take(5));
const example = source.pipe(
  map((x) => source.pipe(delay(1000), take(3))),
  mergeAll(2)
);
example.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete!");
  },
});
