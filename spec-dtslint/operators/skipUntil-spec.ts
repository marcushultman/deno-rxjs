import { of } from 'rxjs.ts';
import { skipUntil } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of('foo', 'bar', 'baz').pipe(skipUntil(of(4, 'RxJS', 7))); // $ExpectType Observable<string>
});

it('should enforce types', () => {
  const o = of('foo', 'bar', 'baz').pipe(skipUntil()); // $ExpectError
  const p = of('foo', 'bar', 'baz').pipe(skipUntil('7')); // $ExpectError
});
