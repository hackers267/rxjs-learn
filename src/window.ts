import { interval, timer } from "rxjs";
import { mergeAll, scan, take, window } from "rxjs/operators";

const source = timer(0, 1000);
const example = source.pipe(window(interval(3000)), take(10));

example.pipe(scan((acc) => acc + 1, 0)).subscribe({
  next(x) {
    console.log(`Window:${x}`);
  },
  complete() {
    console.log("Complete");
  },
});

const subscription = example.pipe(mergeAll()).subscribe({
  next(x) {
    console.log(x);
  },
});
