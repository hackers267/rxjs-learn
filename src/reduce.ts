import { of } from "rxjs";
import { reduce } from "rxjs/operators";

const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, value) => acc + value));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
