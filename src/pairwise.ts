import { interval } from "rxjs";
import { pairwise, take } from "rxjs/operators";

interval(1000)
  .pipe(pairwise(), take(5))
  .subscribe({
    next(value) {
      console.log(value);
    },
  });
