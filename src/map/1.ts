import { from } from "rxjs";
import { map } from "rxjs/operators";

const input: number[] = [1, 2, 3, 4, 5];
const source = from(input);
const example = source.pipe(map((x) => x * 10));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
