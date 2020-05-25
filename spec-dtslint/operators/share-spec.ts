import { of } from 'rxjs.ts';
import { share } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of('foo', 'bar', 'baz').pipe(share()); // $ExpectType Observable<string>
});

it('should enforce types', () => {
  const o = of('foo', 'bar', 'baz').pipe(share('abc')); // $ExpectError
});
