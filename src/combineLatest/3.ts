import { combineLatest, fromEvent } from "rxjs";
import { map, mapTo, scan, startWith, tap } from "rxjs/operators";

const setHtml = (id: string) => (val: string | number) =>
  (document.getElementById(id)!.innerHTML = `${val}`);

export const addOneClick$ = (id: string) =>
  fromEvent(document.getElementById(id)!, "click").pipe(
    mapTo(1),
    startWith(0),
    scan((acc, cur) => acc + cur),
    tap(setHtml(`${id}Total`))
  );

combineLatest([addOneClick$("red"), addOneClick$("black")])
  .pipe(map(([a, b]) => Number(a) + Number(b)))
  .subscribe(setHtml("total"));
