import { interval, merge } from "rxjs";
import { mapTo } from "rxjs/operators";

const first = interval(2500);
const second = interval(2000);
const third = interval(1000);
const fourth = interval(1500);

const example = merge(
  first.pipe(mapTo("FIRST!")),
  second.pipe(mapTo("SECOND!")),
  third.pipe(mapTo("THIRD")),
  fourth.pipe(mapTo("FOURTH"))
);
const subscription = example.subscribe({
  next(value) {
    console.log(value);
  },
});
