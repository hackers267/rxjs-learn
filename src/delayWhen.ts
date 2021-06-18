import { interval } from "rxjs";
import { delayWhen, take } from "rxjs/operators";

const source = interval(800);
const example = source.pipe(
  delayWhen((val) => interval(val * 1000)),
  take(8)
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
