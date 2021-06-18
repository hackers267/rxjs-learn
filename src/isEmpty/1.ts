import { Subject } from "rxjs";
import { isEmpty } from "rxjs/operators";

const source = new Subject<string>();
const result = source.pipe(isEmpty());

source.subscribe({
  next(x) {
    console.log(x);
  },
});
result.subscribe({
  next(x) {
    console.log(x);
  },
});

source.next("a");
source.next("b");
source.next("c");
source.complete();
