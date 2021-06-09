import { forkJoin, interval } from "rxjs";
import { concatAll, map } from "rxjs/operators";

const samplePromise = (val: number) => new Promise((resolve) => resolve(val));

const source = interval(2000);

const example = source.pipe(
  map((x) => samplePromise(x)),
  concatAll()
);

const subscription = example.subscribe({
  next(value) {
    console.log(`Example with Promise:${value}`);
  },
});
