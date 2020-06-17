# Introduction

RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by [Array#extras](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6) (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

<span class="informal">Think of RxJS as Lodash for events.</span>

ReactiveX combines the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) with the [Iterator pattern](https://en.wikipedia.org/wiki/Iterator_pattern) and [functional programming with collections](http://martinfowler.com/articles/collection-pipeline/#NestedOperatorExpressions) to fill the need for an ideal way of managing sequences of events.

The essential concepts in RxJS which solve async event management are:

-   **Observable:** represents the idea of an invokable collection of future values or events.
-   **Observer:** is a collection of callbacks that knows how to listen to values delivered by the Observable.
-   **Subscription:** represents the execution of an Observable, is primarily useful for cancelling the execution.
-   **Operators:** are pure functions that enable a functional programming style of dealing with collections with operations like `map`, `filter`, `concat`, `reduce`, etc.
-   **Subject:** is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
-   **Schedulers:** are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. `setTimeout` or `requestAnimationFrame` or others.

## First examples -> Observable

```js
import { Observable } from 'https://deno.land/x/rxjs/mod.ts';

const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('before subscribe');
observable.subscribe({
    next: (x) => {
        console.log('value ' + x);
    },
    error: (err) => {
        console.error('error: ' + err);
    },
    complete: () => {
        console.log('complete');
    },
});
console.log('after subscribe');
```
