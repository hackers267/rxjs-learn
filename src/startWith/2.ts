import { of } from "rxjs";
import { scan, startWith } from "rxjs/operators";

const source = of("World", "GoodBye", "World");
const example = source.pipe(
  startWith("Hello"),
  scan((acc, cur) => `${acc} ${cur}`)
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
});
