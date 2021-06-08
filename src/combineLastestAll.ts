import {take,map,combineLatestAll} from 'rxjs/operators';
import {interval} from 'rxjs';

const source = interval(2000).pipe(take(2));
const example = source.pipe(
    map(val=>interval(1000).pipe(map(i=>`Result:${val}->${i}`),take(5)))
)

const combined = example.pipe(combineLatestAll());

const subscription = combined.subscribe(value => {
    console.log(value);
})
