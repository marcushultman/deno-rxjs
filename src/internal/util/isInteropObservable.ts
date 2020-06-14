
/**
 *  RxJS - Deno Version 2020

    This product is a modified by DenoBR 
    Comunitty for add support for Deno

    This file is modified by DenoBR
 */

import { InteropObservable } from '../types.ts';
import { observable as Symbol_observable } from '../symbol/observable.ts';

/** Identifies an input as being Observable (but not necessary an Rx Observable) */
export function isInteropObservable(input: any): input is InteropObservable<any> {
  return input && typeof input[Symbol_observable] === 'function';
}
