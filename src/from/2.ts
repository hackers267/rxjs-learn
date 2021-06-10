import { from } from "rxjs";

const source = from(new Promise((resolve) => resolve("Hello World!")));
source.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete!");
  },
});
