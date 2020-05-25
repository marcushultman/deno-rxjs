import { of } from 'rxjs.ts';
import { pairwise } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of('apple', 'banana', 'peach').pipe(pairwise()); // $ExpectType Observable<[string, string]>
});

it('should infer correctly with multiple types', () => {
  const o = of('apple', 4, 'peach', 7).pipe(pairwise()); // $ExpectType Observable<[string | number, string | number]>
});

it('should enforce types', () => {
  const o = of('apple', 'banana', 'peach').pipe(pairwise('lemon')); // $ExpectError
});
