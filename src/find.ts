import { from } from "rxjs";
import { find } from "rxjs/operators";

const arr: number[] = [3, 9, 15, 20];
const source = from(arr);
const example = source.pipe(find((x) => x % 5 === 0));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
