import { from } from "rxjs";
import { map } from "rxjs/operators";

type Person = { name: string; age: number };
const people: Person[] = [
  { name: "Frank", age: 25 },
  { name: "Joe", age: 30 },
  { name: "Ryan", age: 24 },
];
const source = from(people);
const example = source.pipe(map((x) => x.name));
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
});
