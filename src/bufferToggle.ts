import { interval } from "rxjs";
import { bufferToggle, take } from "rxjs/operators";

const source = interval(1000);
const start = interval(5000);
const closing = (val: number) => {
  const period = 2000;
  console.log(
    `Value ${val} emitted, starting buffer! Closing in ${period / 1000}s!`
  );
  return interval(period);
};
const example = source.pipe(bufferToggle(start, closing), take(10));
example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
