import { of } from 'rxjs.ts';
import { publishLast } from 'rxjs/operators.ts';

it('should accept empty parameter', () => {
  const a = of(1, 2, 3).pipe(publishLast()); // $ExpectType Observable<number>
});

it('should infer when type is specified', () => {
  const a = of(1, 2, 3).pipe<number>(publishLast()); // $ExpectType Observable<number>
});
