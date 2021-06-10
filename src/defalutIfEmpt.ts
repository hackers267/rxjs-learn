import { of } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

const example = of().pipe(defaultIfEmpty("Observable.of() Empty"));
example.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete!");
  },
});
