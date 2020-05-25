import { of } from 'rxjs.ts';
import { isEmpty } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of(1, 2, 3).pipe(isEmpty()); // $ExpectType Observable<boolean>
});

it('should enforce types', () => {
  const o = of(1, 2, 3).pipe(isEmpty('nope')); // $ExpectError
});
