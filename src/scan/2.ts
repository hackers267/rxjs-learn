import { Subject } from "rxjs";
import { scan } from "rxjs/operators";

const subject = new Subject();
const example = subject.pipe(
  scan((acc, cur) => Object.assign({}, acc, cur), {})
);
const subscription = example.subscribe({
  next(x) {
    console.log(`Accumulated object:`, x);
  },
});
subject.next({ name: "Jone" });
subject.next({ age: 30 });
subject.next({ favoriteLanguage: "JavaScript" });
