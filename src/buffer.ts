import { fromEvent, interval } from "rxjs";
import { buffer } from "rxjs/operators";

const myInterval = interval(1000);
const bufferBy = fromEvent(document, "click");

const example = myInterval.pipe(buffer(bufferBy));
const subscription = example.subscribe({
  next(x) {
    console.log(`Buffered Values:${x}`);
  },
});
