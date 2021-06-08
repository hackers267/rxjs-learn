import { concat, of } from "rxjs";
import { delay } from "rxjs/operators";

const sourceOne = of(1, 2, 3);
const sourceTwo = of(4, 5, 6);
const sourceThree = sourceOne.pipe(delay(3000));
const example = concat(sourceThree, sourceTwo);
example.subscribe((x) => console.log(`Example: Delayed source one:${x}`));
