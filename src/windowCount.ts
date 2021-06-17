import { interval } from "rxjs";
import { mergeAll, take, tap, windowCount } from "rxjs/operators";

const source = interval(3000);
const example = source.pipe(
  windowCount(3),
  tap(() => console.log(`Window!`)),
  mergeAll(),
  take(9)
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
