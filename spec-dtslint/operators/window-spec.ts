import { of } from 'rxjs.ts';
import { window } from 'rxjs/operators.ts';

it('should infer correctly', () => {
  of(1).pipe(window(of('1'))); // $ExpectType Observable<Observable<number>>
});

it('should enforce types', () => {
  of(1).pipe(window('')); // $ExpectError
});
