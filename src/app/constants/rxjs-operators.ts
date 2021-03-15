export const arrayData = [1, 2, 3, 4];
export const person = {
  name: 'john',
  age: 20,
};
export const operators = [
  {
    id: 'of',
    label: 'of',
    group: 'creation',
    description:
      'emit variable amount of values in a sequence and then emits a single complete notification',
    data: arrayData,
  },
  {
    id: 'from',
    label: 'from',
    group: 'creation',
    description: 'turn an array, promise, or iterable into an observable.',
    data: arrayData,
  },
  {
    id: 'map',
    label: 'map',
    group: 'transformation',
    description:
      'apply projection with each value from source. Will only map person name from person object.',
  },
  {
    id: 'tap',
    label: 'tap',
    group: 'utility',
    description:
      'transparently perform actions or side-effects, such as logging. (Check console to see the logs)',
  },
  {
    id: 'switchMap',
    label: 'switchMap',
    group: 'transformation',
    description:
      'map to observable, complete previous inner observable, emit values. This operator can cancel in-flight network requests! Will request comments and posts from 2 endpoints',
  },
  {
    id: 'mergeMap',
    label: 'mergeMap',
    group: 'transformation',
    description:
      'merge map and map generating a new map (flatMap is exactly the same). Map to observable, emit values. Based on Color and Driver, we create the Car object',
  },
  {
    id: 'pluck',
    label: 'pluck',
    group: 'transformation',
    description:
      'select property to emit. We pluck the code from the typed key. Type something...',
  },
  {
    id: 'exhaustMap',
    label: 'exhaustMap',
    group: 'transformation',
    description:
      'map to inner observable, ignore other values until that observable completes',
  },
  {
    id: 'scan',
    label: 'scan',
    group: 'transformation',
    description: 'reduce over time. Sum over time starting with zero',
  },
  {
    id: 'debounceTime',
    label: 'debounceTime',
    group: 'filtering',
    description:
      'discard emitted values that take less than the specified time between output',
  },
  {
    id: 'take',
    label: 'take',
    group: 'filtering',
    description:
      'emit provided number of values before completing. We take the first value emitted from an array of streams',
  },
  {
    id: 'takeUntil',
    label: 'takeUntil',
    group: 'filtering',
    description:
      'emit values until provided observable emits. Will emit for every second until timer$ is completed after 5s',
  },
  {
    id: 'takeLast',
    label: 'takeLast',
    group: 'filtering',
    description:
      'emit the last n emitted values before completion. Sum last 2 digits from an array',
  },
  {
    id: 'takeWhile',
    label: 'takeWhile',
    group: 'filtering',
    description:
      'emit values until provided expression is false. Console log counter until counter < 3',
  },
  {
    id: 'first',
    label: 'first',
    group: 'filtering',
    description: 'emit the first value or first to pass provided expression',
  },
  {
    id: 'concat',
    label: 'concat',
    group: 'combination',
    description:
      'subscribe to observables in order as previous completes.  You can think of concat like a line at a ATM, the next transaction (subscription) cannot start until the previous completes!',
  },
  {
    id: 'forkJoin',
    label: 'forkJoin',
    group: 'combination',
    description:
      'when all observables complete, emit the last emitted value from each. We get comments and post from api request as an array of responses',
  },
  {
    id: 'combineLatest',
    label: 'combineLatest',
    group: 'combination',
    description:
      'when any observable emits a value, emit the last emitted value from each.',
  },
  {
    id: 'withLatestFrom',
    label: 'withLatestFrom',
    group: 'combination',
    description:
      'provide the last value from another observable. Useful for caching to avoid api request',
  },
  {
    id: 'share',
    label: 'share',
    group: 'multicasting',
    description:
      'share source among multiple subscribers. We get posts from api. Used to avoid multiple API requests. Remove share operator to check 2 requests were performed',
  },
];

export const groups = [
  {
    id: 'creation',
    label: 'creation',
    description:
      'These operators allow the creation of an observable from nearly anything. From generic to specific use-cases you are free, and encouraged, to turn everything into a stream.',
  },
  {
    id: 'filtering',
    label: 'filtering',
    description:
      'In a push based approach, picking and choosing how and when to accept items is important. These operators provide techniques for accepting values from an observable source and dealing with backpressure.',
  },
  {
    id: 'transformation',
    label: 'transformation',
    description:
      'Transforming values as they pass through the operator chain is a common task. These operators provide transformation techniques for nearly any use-case you will encounter.',
  },
  {
    id: 'combination',
    label: 'combination',
    description:
      'The combination operators allow the joining of information from multiple observables. Order, time, and structure of emitted values is the primary variation among these operators.',
  },
  {
    id: 'multicasting',
    label: 'multicasting',
    description:
      'In RxJS observables are cold, or unicast by default. These operators can make an observable hot, or multicast, allowing side-effects to be shared among multiple subscribers.',
  },
  {
    id: 'utility',
    label: 'utility',
    description:
      'From logging, handling notifications, to setting up schedulers, these operators provide helpful utilities in your observable toolkit.',
  },
];
