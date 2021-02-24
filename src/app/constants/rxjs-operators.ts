export const operators = [
  {
    id: 'of',
    label: 'of',
    group: 'creation',
    handler: function of() {
      console.log('asdasdsa');
    },
  },
  { id: 'from', label: 'from', group: 'creation' },
  { id: 'map', label: 'map', group: 'transformation' },
  { id: 'tap', label: 'tap', group: 'transformation' },
  { id: 'switchMap', label: 'switchMap', group: 'transformation' },
  { id: 'mergeMap', label: 'mergeMap', group: 'transformation' },
  { id: 'pluck', label: 'pluck', group: 'transformation' },
  { id: 'scan', label: 'scan', group: 'transformation' },
  { id: 'debounceTime', label: 'debounceTime', group: 'filtering' },
  { id: 'take', label: 'take', group: 'filtering' },
  { id: 'concat', label: 'concat', group: 'combination' },
  { id: 'forkJoin', label: 'forkJoin', group: 'combination' },
  { id: 'combineLatest', label: 'combineLatest', group: 'combination' },
];
