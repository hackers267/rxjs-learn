import { interval } from "rxjs";
import { take, toArray } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(take(8), toArray());
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
