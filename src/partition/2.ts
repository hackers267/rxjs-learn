import { from, merge, of, partition } from "rxjs";
import { catchError, map } from "rxjs/operators";

const arr: number[] = [1, 2, 3, 4, 5, 6];
const source = from(arr);
const example = source.pipe(
  map((val) => {
    if (val > 3) {
      throw `${val} greater than 3`;
    }
    return { success: true, value: val, error: null };
  }),
  catchError((val) => of({ error: val, value: null, success: false }))
);
const [success, error] = partition(example, (val) => val.success);
const subscription = merge(
  success.pipe(
    map((x) => {
      console.log(x.value);
      return x.value;
    })
  ),
  error.pipe(
    map((x) => {
      console.error(x.error);
      return x.value;
    })
  )
).subscribe({
  next(x) {
    console.log(x);
  },
});
