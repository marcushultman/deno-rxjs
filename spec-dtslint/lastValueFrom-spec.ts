import { lastValueFrom } from 'rxjs.ts';
import { a$ } from 'helpers.ts';

describe('lastValueFrom', () => {
  const r0 = lastValueFrom(a$); // $ExpectType Promise<A>
  const r1 = lastValueFrom(); // $ExpectError
  const r2 = lastValueFrom(Promise.resolve(42)); // $ExpectError
});
