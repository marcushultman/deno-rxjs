import { of } from 'rxjs.ts';
import { ignoreElements } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of(1, 2, 3).pipe(ignoreElements()); // $ExpectType Observable<never>
});

it('should enforce types', () => {
  const o = of(1, 2, 3).pipe(ignoreElements('nope')); // $ExpectError
});
