import { from } from "rxjs";

const map = new Map();
map.set(1, "Hi");
map.set(2, "Bye");

const source = from(map);
const observer = {
  next<T>(v: T) {
    console.log(v);
  },
  complete() {
    console.log("Complete!");
  },
};
source.subscribe(observer);
