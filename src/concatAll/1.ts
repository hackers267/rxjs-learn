import { interval, of } from "rxjs";
import { concatAll, map } from "rxjs/operators";

const source = interval(2000);
const example = source.pipe(
  map((x) => of(x + 10)),
  concatAll()
);
const subscription = example.subscribe({
  next(value) {
    console.log(`Example with Basic Observable :${value}`);
  },
  complete() {
    console.log("Complete!");
  },
});
