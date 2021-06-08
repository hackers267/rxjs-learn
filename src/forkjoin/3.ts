import { forkJoin, of, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";

const example = forkJoin([
  of("Hello"),
  of("World").pipe(delay(1000)),
  throwError(() => new Error("This will error")),
]).pipe(catchError((error) => of(error)));

const subscription = example.subscribe((value) => console.log(value));
