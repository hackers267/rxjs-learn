import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const myPromise = (val: string) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Promise Resolved:${val}`), 5000)
  );

const example = forkJoin([
  of("hello"),
  of("world").pipe(delay(1000)),
  interval(1000).pipe(take(1)),
  interval(1000).pipe(take(2)),
  myPromise("Result"),
]);

const subscription = example.subscribe((value) => console.log(value));
