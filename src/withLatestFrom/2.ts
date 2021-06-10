import { interval } from "rxjs";
import { map, take, withLatestFrom } from "rxjs/operators";

const source = interval(5000);
const secondSource = interval(1000);

const example = secondSource.pipe(
  withLatestFrom(source),
  map(
    ([first, second]) =>
      `First source (5s):${first},Second source (1s):${second}`
  ),
  take(15)
);

const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
