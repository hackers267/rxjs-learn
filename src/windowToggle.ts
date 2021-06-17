import { interval, timer } from "rxjs";
import { mergeAll, take, tap, windowToggle } from "rxjs/operators";

const source = timer(0, 1000);
const toggle = interval(5000);
const example = source.pipe(
  windowToggle(toggle, (val) => interval(val * 1000)),
  tap(() => console.log("New Window"))
);
const subscription = example.pipe(mergeAll(), take(10)).subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
