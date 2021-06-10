import { timer } from "rxjs";

const source = timer(1000);
let observer = {
  next<T>(x: T) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
};
const subscription = source.subscribe(observer);
