export interface ObjectUnsubscribedError extends Error {
}

export interface ObjectUnsubscribedErrorCtor {
  new(): ObjectUnsubscribedError;
}

const ObjectUnsubscribedErrorImpl = (() => {
  function ObjectUnsubscribedErrorImpl(this: Error) {
    Error.call(this);
    this.message = 'object unsubscribed.ts';
    this.name = 'ObjectUnsubscribedError.ts';
    return this;
  }

  ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);

  return ObjectUnsubscribedErrorImpl;
})();

/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
export const ObjectUnsubscribedError: ObjectUnsubscribedErrorCtor = ObjectUnsubscribedErrorImpl as any;