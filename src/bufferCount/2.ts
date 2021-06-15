import { interval } from "rxjs";
import { bufferCount, take } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(bufferCount(3, 1), take(10));
example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
