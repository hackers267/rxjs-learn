import { of, concat } from "rxjs";

const sourceOne = of(1, 2, 3);
const sourceTwo = of(4, 5, 6);
const example = concat(sourceOne, sourceTwo);

example.subscribe((x) => console.log(x));
