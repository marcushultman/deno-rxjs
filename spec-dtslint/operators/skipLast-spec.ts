import { of } from 'rxjs.ts';
import { skipLast } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of('foo', 'bar', 'baz').pipe(skipLast(7)); // $ExpectType Observable<string>
});

it('should enforce types', () => {
  const o = of('foo', 'bar', 'baz').pipe(skipLast()); // $ExpectError
  const p = of('foo', 'bar', 'baz').pipe(skipLast('7')); // $ExpectError
});
