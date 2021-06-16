import { of } from "rxjs";
import { concatMap } from "rxjs/operators";

const source = of("hello", "world");
const examplePromise = (val: string) => new Promise((resolve) => resolve(val));
const example = source.pipe(concatMap((val) => examplePromise(val)));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
