import { never } from 'rxjs.ts';

it('should not support any parameter', () => {
  const a = never(1); // $ExpectError
});

it('should infer never', () => {
  const a = never(); // $ExpectType Observable<never>
});
