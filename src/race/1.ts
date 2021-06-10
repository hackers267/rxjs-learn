import { interval, race } from "rxjs";
import { mapTo, take } from "rxjs/operators";

const example = race(
  interval(1000),
  interval(500).pipe(mapTo("I won!")),
  interval(1500)
).pipe(take(5));
example.subscribe({
  next(value) {
    console.log(value);
  },
});
