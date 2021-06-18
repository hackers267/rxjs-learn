import { EMPTY } from "rxjs";
import { isEmpty } from "rxjs/operators";

const result = EMPTY.pipe(isEmpty());
const subscription = result.subscribe({
  next(x) {
    console.log(x);
  },
});
