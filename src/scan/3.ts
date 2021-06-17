import { interval } from "rxjs";
import { distinctUntilChanged, map, scan, take } from "rxjs/operators";

const subscription = interval(1000)
  .pipe(
    scan((acc, curr) => [...acc, curr], [] as number[]),
    map((x) => x[Math.floor(Math.random() * x.length)]),
    distinctUntilChanged(),
    take(10)
  )
  .subscribe({
    next(x) {
      console.log(x);
    },
  });
