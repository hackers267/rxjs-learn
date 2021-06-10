import { interval } from "rxjs";
import { startWith, take } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(startWith(-3, -2, -1), take(10));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
});
