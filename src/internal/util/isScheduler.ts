
/**
 *  RxJS - Deno Version 2020

    This product is a modified by DenoBR 
    Comunitty for add support for Deno

    This file is modified by DenoBR
 */

import { SchedulerLike } from '../types.ts';

export function isScheduler(value: any): value is SchedulerLike {
  return value && typeof (<any>value).schedule === 'function';
}
