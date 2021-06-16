import { interval, of } from "rxjs";
import { concatMapTo, delay, take } from "rxjs/operators";

const source = interval(500).pipe(take(5));
const fakeRequest = of("Network request complete").pipe(delay(3000));
const example = source.pipe(concatMapTo(fakeRequest));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
