import { of } from 'rxjs.ts';
import { retryWhen } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of(1, 2, 3).pipe(retryWhen(errors => errors)); // $ExpectType Observable<number>
});

it('should infer correctly when the error observable has a different type', () => {
  const o = of(1, 2, 3).pipe(retryWhen(retryWhen(errors => of('a', 'b', 'c')))); // $ExpectType Observable<number>
});

it('should enforce types', () => {
  const o = of(1, 2, 3).pipe(retryWhen()); // $ExpectError
});

it('should enforce types of the notifier', () => {
  const o = of(1, 2, 3).pipe(retryWhen(() => 8)); // $ExpectError
});
