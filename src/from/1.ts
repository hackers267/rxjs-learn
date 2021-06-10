import { from } from "rxjs";

const source = from([1, 2, 3, 4, 5]);
console.log(
  source.subscribe({
    next(x) {
      console.log(x);
    },
    complete() {
      console.log("Complete!");
    },
  })
);
