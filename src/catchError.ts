import { from, of, timer } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";

const myBadPromise = () =>
  new Promise((resolve, reject) => reject("Rejected!"));
const source = timer(1000);
const example = source.pipe(
  mergeMap(() =>
    from(myBadPromise()).pipe(catchError((err) => of(`Bad Promise:${err}`)))
  )
);
const subscription = example.subscribe({
  next(v) {
    console.log(v);
  },
  complete() {
    console.log("Complete!");
  },
  error(e) {
    console.error(e);
  },
});
