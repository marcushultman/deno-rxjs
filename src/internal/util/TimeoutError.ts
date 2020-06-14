export interface TimeoutError extends Error {
}

export interface TimeoutErrorCtor {
  new(): TimeoutError;
}

const TimeoutErrorImpl = (() => {
  function TimeoutErrorImpl(this: Error) {
    Error.call(this);
    this.message = 'Timeout has occurred.ts';
    this.name = 'TimeoutError.ts';
    return this;
  }

  TimeoutErrorImpl.prototype = Object.create(Error.prototype);

  return TimeoutErrorImpl;
})();

/**
 * An error thrown when duetime elapses.
 *
 * @see {@link operators/timeout}
 *
 * @class TimeoutError
 */
export const TimeoutError: TimeoutErrorCtor = TimeoutErrorImpl as any;
