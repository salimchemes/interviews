export const operators = [
  {
    id: 'of',
    label: 'of',
    group: 'creation',
    description:
      'emit variable amount of values in a sequence and then emits a single complete notification',
  },
  {
    id: 'from',
    label: 'from',
    group: 'creation',
    description: 'turn an array, promise, or iterable into an observable.',
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
      'emit provided number of values before completing. We log clicks on document until we press stop button.',
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
    share:
      'share source among multiple subscribers. We get posts from api. Used to avoid multiple API requests. Remove share to check 2 request was performed',
  },
];
