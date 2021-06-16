import { from, merge, partition } from "rxjs";
import { map } from "rxjs/operators";

const arr: number[] = [1, 2, 3, 4, 5];
const source = from(arr);
const [evens, odds] = partition(source, (val) => val % 2 === 0);
const example = merge(
  evens.pipe(map((val) => `Even:${val}`)),
  odds.pipe(map((val) => `Odd:${val}`))
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
