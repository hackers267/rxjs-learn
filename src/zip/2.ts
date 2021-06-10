import { interval, zip } from "rxjs";
import { take } from "rxjs/operators";

const source = interval(1000);
const example = zip(source, source.pipe(take(2)));
example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
