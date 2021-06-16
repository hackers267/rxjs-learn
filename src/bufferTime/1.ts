import { interval } from "rxjs";
import { bufferTime, take } from "rxjs/operators";

const source = interval(500);
const example = source.pipe(bufferTime(2000), take(8));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
