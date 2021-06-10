import { of } from "rxjs";
import { every } from "rxjs/operators";

const source = of(1, 2, 3, 4, 5);
const example = source.pipe(every((x) => x % 2 === 0));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
