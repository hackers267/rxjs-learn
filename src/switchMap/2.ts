import { EMPTY, fromEvent, interval, merge } from "rxjs";
import { mapTo, scan, startWith, switchMap, takeWhile } from "rxjs/operators";

const countdownSeconds = 10;
const setHtml = (id: string) => (val: string) =>
  (document.getElementById(id)!.innerHTML = val);
const interval$ = interval(1000).pipe(mapTo(-1));
const pause = document.getElementById("pause");
const resume = document.getElementById("resume");
const pause$ = fromEvent(pause!, "click").pipe(mapTo(false));
const resume$ = fromEvent(resume!, "click").pipe(mapTo(true));

const example = merge(pause$, resume$).pipe(
  startWith(true),
  switchMap((val) => (val ? interval$ : EMPTY)),
  scan((acc, value) => acc + value, countdownSeconds),
  takeWhile((v) => v >= 0)
);
const subscription = example.subscribe({
  next(x) {
    setHtml("remaining")(`${x}`);
  },
  complete() {
    console.log("Complete");
  },
});
