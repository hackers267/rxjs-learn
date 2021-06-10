import { of, race } from "rxjs";
import { delay, map } from "rxjs/operators";

const first = of("first").pipe(
  delay(100),
  map(() => {
    throw "error";
  })
);
const second = of("second").pipe(delay(200));
const third = of("third").pipe(delay(300));
const observable = race(first, second, third);
observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete!");
  },
  error(e) {
    console.error(e);
  },
});
