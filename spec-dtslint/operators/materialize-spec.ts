import { of } from 'rxjs.ts';
import { materialize } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of('foo').pipe(materialize()); // $ExpectType Observable<Notification<string>>
});

it('should enforce types', () => {
  const o = of('foo').pipe(materialize(() => {})); // $ExpectError
});
