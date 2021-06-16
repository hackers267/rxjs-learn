import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

const source = of("Hello");
const myPromise = (val: string) => new Promise((resolve) => resolve(val));
const example = source.pipe(mergeMap((val) => myPromise(val)));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
