import { forkJoin, Observable, of } from "rxjs";
import { mergeMap } from "rxjs/operators";

const myPromise = (val: number) =>
  new Promise((resolve) => resolve(`Promise resolved:${val}`));

const source: Observable<number[]> = of([1, 2, 3, 4, 5]);
const example = source.pipe(mergeMap((x) => forkJoin(x.map(myPromise))));
const subscription = example.subscribe((value) => console.log(value));
