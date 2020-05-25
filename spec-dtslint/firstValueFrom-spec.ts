import { firstValueFrom } from 'rxjs.ts';
import { a$ } from 'helpers.ts';

describe('firstValueFrom', () => {
  const r0 = firstValueFrom(a$); // $ExpectType Promise<A>
  const r1 = firstValueFrom(); // $ExpectError
  const r2 = firstValueFrom(Promise.resolve(42)); // $ExpectError
});
