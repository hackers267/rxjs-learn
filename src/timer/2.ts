import { timer } from "rxjs";
import { take } from "rxjs/operators";

const source = timer(1000, 2000);
const observer = {
  next<T>(x: T) {
    console.log(x);
  },
  complete() {},
};
const subscription = source.pipe(take(10)).subscribe(observer);
