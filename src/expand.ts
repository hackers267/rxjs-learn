import { of } from "rxjs";
import { expand, take } from "rxjs/operators";

const source = of(2);
const example = source.pipe(
  expand((val) => {
    console.log(`Cur:${val}`);
    return of(val * 2);
  }),
  take(6)
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
