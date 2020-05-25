import { of } from 'rxjs.ts';
import { publishBehavior } from 'rxjs/operators.ts';

it('should enforce parameter', () => {
  const a = of(1, 2, 3).pipe(publishBehavior()); // $ExpectError
});

it('should infer correctly with parameter', () => {
  const a = of(1, 2, 3).pipe(publishBehavior(4)); // $ExpectType Observable<number>
});

it('should enforce type on parameter', () => {
  const a = of(1, 2, 3).pipe(publishBehavior('a')); // $ExpectError
});
