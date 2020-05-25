import { of } from 'rxjs.ts';
import { find } from 'rxjs/operators.ts';

it('should support a user-defined type guard', () => {
  const o = of('foo').pipe(find((s): s is 'foo' => true)); // $ExpectType Observable<"foo" | undefined>
});

it('should support a user-defined type guard that takes an index', () => {
  const o = of('foo').pipe(find((s, index): s is 'foo' => true)); // $ExpectType Observable<"foo" | undefined>
});

it('should support a user-defined type guard that takes an index and the source', () => {
  const o = of('foo').pipe(find((s, index, source): s is 'foo' => true)); // $ExpectType Observable<"foo" | undefined>
});

it('should support a predicate', () => {
  const o = of('foo').pipe(find(s => true)); // $ExpectType Observable<string | undefined>
});

it('should support a predicate that takes an index', () => {
  const o = of('foo').pipe(find((s, index) => true)); // $ExpectType Observable<string | undefined>
});

it('should support a predicate that takes an index and the source', () => {
  const o = of('foo').pipe(find((s, index, source) => true)); // $ExpectType Observable<string | undefined>
});
