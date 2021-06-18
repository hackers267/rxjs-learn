import { from } from "rxjs";
import { findIndex } from "rxjs/operators";

const arr: number[] = [3, 5, 15, 20];
const source = from(arr);
const example = source.pipe(findIndex((x) => x % 4 === 0));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
