import { of, zip } from "rxjs";
import { delay } from "rxjs/operators";

const first = of("Hello");
const second = of("World");
const three = of("GoodBye");
const four = of("World");

const example = zip(
  first,
  second.pipe(delay(500)),
  three.pipe(delay(1000)),
  four.pipe(delay(1500))
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
