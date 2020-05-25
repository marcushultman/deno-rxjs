import { of, Notification } from 'rxjs.ts';
import { dematerialize } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  const o = of(Notification.createNext('foo')).pipe(dematerialize()); // $ExpectType Observable<string>
});

it('should enforce types', () => {
  const o = of(Notification.createNext('foo')).pipe(dematerialize(() => {})); // $ExpectError
});

it('should enforce Notification source', () => {
  const o = of('foo').pipe(dematerialize()); // $ExpectError
});
