
/**
 *  RxJS - Deno Version 2020

    This product is a modified by DenoBR 
    Comunitty for add support for Deno

    This file is modified by DenoBR
 */

import { iterator as Symbol_iterator } from '../symbol/iterator.ts';

/** Identifies an input as being an Iterable */
export function isIterable(input: any): input is Iterable<any> {
  return input && typeof input[Symbol_iterator] === 'function';
}
