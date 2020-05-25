import { of } from 'rxjs.ts';
import { refCount } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const a = of(1, 2, 3).pipe(refCount()); // $ExpectType Observable<number>
});

it('should not accept any parameters', () => {
  const a = of(1, 2, 3).pipe(refCount(1)); // $ExpectError
});
