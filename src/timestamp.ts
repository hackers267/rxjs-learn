import { interval } from "rxjs";
import { take, timestamp } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(timestamp(), take(8));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
