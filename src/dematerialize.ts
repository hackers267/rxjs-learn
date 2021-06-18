import { ObservableNotification, of } from "rxjs";
import { dematerialize } from "rxjs/operators";

const notifA: ObservableNotification<string> = { kind: "N", value: "A" };
const notifB: ObservableNotification<string> = { kind: "N", value: "B" };
const notifC: ObservableNotification<null> = {
  kind: "E",
  error: new TypeError("x.toUpperCase is not a function"),
};
const materialize = of(notifA, notifB, notifC);
const example = materialize.pipe(dematerialize());
const subscription = example.subscribe({
  next(x) {
    console.log(x);
  },
  complete() {
    console.log("Complete");
  },
  error(e) {
    console.log(e);
  },
});
