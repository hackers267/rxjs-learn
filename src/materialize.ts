import { Observable, of } from "rxjs";
import { map, materialize } from "rxjs/operators";

const letters: Observable<any> = of("a", "b", 13, "c");
const upperCase = letters.pipe(map((x) => x.toUpperCase()));
const materialized = upperCase.pipe(materialize());
const subscription = materialized.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
