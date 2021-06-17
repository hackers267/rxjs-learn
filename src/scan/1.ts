import { of } from "rxjs";
import { scan } from "rxjs/operators";

const source = of(1, 2, 3);
const example = source.pipe(scan((acc, value) => acc + value, 0));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
