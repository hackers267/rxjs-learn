import { timer } from "rxjs";
import { delay, take } from "rxjs/operators";

const source = timer(0, 1000);
const example = source.pipe(delay(500), take(8));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
