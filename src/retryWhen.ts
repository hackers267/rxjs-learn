import { interval, timer } from "rxjs";
import { delayWhen, map, retryWhen, tap } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(
  map((val) => {
    if (val > 5) {
      throw val;
    }
    return val;
  }),
  retryWhen((errors) => {
    return errors.pipe(
      tap((val) => console.log(`Value ${val} was to high!`)),
      delayWhen((val) => timer(val * 1000))
    );
  })
);
example.subscribe({
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
