import { interval } from "rxjs";
import { mapTo, take } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(mapTo("Hello World!"), take(10));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
