
/**
 *  RxJS - Deno Version 2020

    This product is a modified by DenoBR 
    Comunitty for add support for Deno

    This file is modified by DenoBR
 */

/**
 * Tests to see if the object is an ES2015 (ES6) Promise
 * @see {@link https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects}
 * @param value the object to test
 */
export function isPromise(value: any): value is PromiseLike<any> {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
