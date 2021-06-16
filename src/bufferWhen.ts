import { interval } from "rxjs";
import { bufferWhen, take } from "rxjs/operators";

const source = interval(1000);
const when = () => interval(5000);
const example = source.pipe(bufferWhen(when), take(8));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
