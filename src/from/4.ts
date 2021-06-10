import { from } from "rxjs";

const observer = {
  next<T>(x: T) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
};

const source = from("Hello,Rxjs");
source.subscribe(observer);
