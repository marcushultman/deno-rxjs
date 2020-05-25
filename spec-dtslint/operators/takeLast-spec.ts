import { of } from 'rxjs.ts';
import { takeLast } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of(1, 2, 3).pipe(takeLast(7)); // $ExpectType Observable<number>
});

it('should enforce types', () => {
  const o = of(1, 2, 3).pipe(takeLast('7')); // $ExpectError
});
