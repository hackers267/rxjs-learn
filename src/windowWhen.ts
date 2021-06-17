import { interval, timer } from "rxjs";
import { mergeAll, take, tap, windowWhen } from "rxjs/operators";

const source = timer(0, 1000);
const example = source.pipe(
  windowWhen(() => interval(3000)),
  tap(() => console.info("New Window!"))
);
const subscription = example.pipe(mergeAll(), take(8)).subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
