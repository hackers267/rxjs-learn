import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

const source = of("Hello");
const example = source.pipe(mergeMap((val) => of(`${val} world!`)));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
