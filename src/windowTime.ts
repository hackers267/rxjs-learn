import { timer } from "rxjs";
import { mergeAll, take, tap, windowTime } from "rxjs/operators";

const source = timer(0, 1000);
const example = source.pipe(
  windowTime(3000),
  tap(() => console.info(`WindowTime`))
);
const subscription = example.pipe(mergeAll(), take(10)).subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
