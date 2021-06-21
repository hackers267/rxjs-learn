import { animationFrameScheduler, fromEvent, interval } from "rxjs";
import { mergeMap, observeOn, startWith, take } from "rxjs/operators";

const someStart: HTMLElement = document.querySelector("#someStart")!;
const someDiv: HTMLElement = document.querySelector("#someDiv")!;
const intervals = interval(10);

const example = fromEvent(someStart, "click").pipe(
  mergeMap(() => intervals.pipe(observeOn(animationFrameScheduler))),
  startWith(0),
  take(100)
);

const subscription = example.subscribe({
  next(x) {
    someDiv.style.height = x + "px";
  },
  complete() {
    console.log("Complete");
    subscription.unsubscribe();
  },
});
