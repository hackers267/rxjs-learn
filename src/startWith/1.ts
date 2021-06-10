import { of } from "rxjs";
import { startWith } from "rxjs/operators";

const source = of(1, 2, 3);
const example = source.pipe(startWith(0));
const subscription = example.subscribe({
  next(value) {
    console.log(value);
  },
});
