import { from } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";

type People = { name: string; age: number };
const people: People[] = [
  { name: "Sue", age: 25 },
  { name: "Joe", age: 30 },
  { name: "Frank", age: 30 },
  { name: "Sarah", age: 25 },
];
const source = from(people);
const example = source.pipe(
  groupBy((person) => person.age),
  mergeMap((group) => group.pipe(toArray()))
);
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete!");
  },
});
