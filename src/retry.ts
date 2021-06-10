import { interval, of, throwError } from "rxjs";
import { mergeMap, retry } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(
  mergeMap((x) => {
    if (x > 5) {
      return throwError("Error!");
    }
    return of(x);
  }),
  retry(2)
);
example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
  error(e) {
    console.log(e);
  },
});
