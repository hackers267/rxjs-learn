import { of } from "rxjs";
import { every } from "rxjs/operators";

const source = of(2, 4, 6, 8, 10);
const example = source.pipe(every((x) => x % 2 === 0));
example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
