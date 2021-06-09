import { interval, of } from "rxjs";
import { concatAll, take } from "rxjs/operators";

const obs1 = interval(1000).pipe(take(5));
const obs2 = interval(500).pipe(take(2));
const obs3 = interval(2000).pipe(take(1));
const source = of(obs1, obs2, obs3);
const example = source.pipe(concatAll());
const subscription = example.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete!");
  },
});
