import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  concat,
  forkJoin,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  timer,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  first,
  map,
  mergeMap,
  pluck,
  scan,
  switchMap,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs/operators';
import { groups, operators } from 'src/app/constants/rxjs-operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent implements OnInit {
  loading: boolean;
  operators: (
    | { id: string; label: string; group: string }
    | { id: string; label: string; group: string }
  )[];
  groups: string[];
  personObs: Observable<any>;
  personPromise: Promise<any>;
  person: any = {
    name: 'john',
    age: 20,
  };
  selectedOperator: any;
  data: any;
  result: any;
  method: any;
  keyup$: Observable<any> | undefined;
  originalOperators: {
    id: string;
    label: string;
    group: string;
    description: string;
  }[];
  constructor(private apiService: ApiService) {
    this.loading = false;
    this.operators = operators;
    this.originalOperators = operators;
    this.groups = groups;
    this.filterByGroup(this.groups[0]);
    this.personObs = of(this.person);
    this.personPromise = Promise.resolve(this.person);
  }

  ngOnInit(): void {}

  performOperator(operator: any) {
    this.selectedOperator = operator;
    this.cleanResults();
    const functionName = operator.id;
    this[functionName]();
    this.method = this[functionName].toString();
  }

  filterByGroup(group: string) {
    this.selectedOperator = null;
    this.cleanResults();
    this.operators = this.originalOperators.filter(
      (operator) => operator.group === group
    );
  }

  //#region operators
  of() {
    this.data = [1, 2, 3, 4];
    const source = of(this.data);
    source.subscribe((data) => {
      this.result = data + 'text';
    });
  }

  from() {
    this.data = [1, 2, 3, 4];

    const source = from(this.data);

    source.subscribe((value) => {
      this.result = this.result + value + 'text';
    });
  }

  tap() {
    this.personObs
      .pipe(tap((person: any) => console.log(person.name)))
      .subscribe((person: any) => console.log(person));
  }

  map() {
    this.data = this.person;
    this.personObs
      .pipe(map((person: any) => person.name))
      .subscribe((person: any) => {
        this.result = person;
      });
  }

  share() {
    const request = this.apiService.getPostsWithShare();
    this.loading = true;
    request.subscribe(() => (this.loading = false));
    request.subscribe((data) => {
      this.result = data;
    });
  }

  switchMap() {
    // cancel from one obs and switch to another having access to both

    const posts = this.apiService.getPosts();
    const comments = this.apiService.getComments();

    const combined = posts.pipe(
      switchMap((posts) => {
        return comments.pipe(
          tap((comments) => {
            this.result = { ...comments, ...posts };
          })
        );
      })
    );

    combined.subscribe();
  }

  debounceTime() {
    //used for search bar. Avoid multiple api request
    of([1, 3, 4])
      .pipe(
        debounceTime(50000),
        distinctUntilChanged(),
        tap((data) => console.log(data))
      )
      .subscribe();
  }

  first() {
    this.data = [1, 2, 3, 4];
    from(this.data)
      .pipe(first())
      .subscribe((value) => (this.result = value));
  }

  takeWhile() {
    let counter = 0;
    const source = interval(1000);
    source.pipe(takeWhile(() => counter < 3)).subscribe(() => {
      counter++;
      this.result = counter;
    });
  }

  takeLast() {
    this.data = [1, 2, 3, 4];
    from(this.data)
      .pipe(takeLast(2))
      .subscribe((value) => {
        this.result += value;
      });
  }

  take() {
    this.data = [1, 2, 3, 4];

    from(this.data)
      .pipe(take(1))
      .subscribe((value) => (this.result = value));
  }

  takeUntil() {
    //emit value every 1s
    const source = interval(1000);
    //after 5 seconds, emit value
    const timer$ = timer(5000);
    //when timer emits after 5s, complete source
    const example = source.pipe(takeUntil(timer$));
    //output: 0,1,2,3
    const subscribe = example.subscribe((val) => {
      this.result = val;
    });
  }

  mergeMap() {
    // declare 2 obs
    const carColorObs = of({ color: 'blue' });
    const carDriverObs = of({ driver: 'john' });

    // merge map and map generating a new map (flatMap is exactly the same)
    const carObs: Observable<any> = carColorObs.pipe(
      mergeMap((color) => {
        return carDriverObs.pipe(
          map((driver) => {
            this.data = { ...color, ...driver };
            const car: any = {
              driver: driver,
              color: color,
            };
            return car;
          })
        );
      })
    );

    carObs.subscribe((car) => {
      this.result = { car: car };
    });
  }

  concat() {
    // declare 2 obs
    const carColorObs = of({ color: 'blue' });
    const carDriverObs = of({ driver: 'john' });
    this.data = { color: 'blue', driver: 'john' };
    // its from rxjs not from rxjs/operators
    // it is going to emit one value for each obs in order
    const combined = concat(carColorObs, carDriverObs);

    combined.subscribe((data) => {
      this.result = { ...this.result, ...data };
    });
  }

  forkJoin() {
    const comments = this.apiService.getComments();
    const posts = this.apiService.getPosts();

    // finish all the observables and emit an array with all of them
    const combined = forkJoin(comments, posts);

    combined.subscribe((combined) => {
      this.result = combined;
    });
  }

  combineLatest() {
    const comments = this.apiService.getComments();
    const posts = this.apiService.getPosts();

    // Not only does forkJoin require all input observables to be completed,
    // but it also returns an observable that produces a single value that is an array of the last values produced by the input observables.In other words,
    // it waits until the last input observable completes, and then produces a single value and completes.

    // In contrast, combineLatest returns an Observable that produces a new value every time the input observables do,
    // once all input observables have produced at least one value.This means it could have infinite values and may not complete.
    // It also means that the input observables don't have to complete before producing a value
    const combined = combineLatest(comments, posts);

    combined.subscribe((combined) => {
      this.result = { ...this.result, combined };
    });
  }

  pluck() {
    // pick a property from the obs
    this.keyup$ = fromEvent(document, 'keyup');

    this.keyup$
      .pipe(pluck('code'))
      // 'Space', 'Enter'
      .subscribe((data) => {
        this.result = data;
      });
  }

  scan() {
    const source = of(1, 2, 3);
    this.data = [1, 2, 3];
    // basic scan example, sum over time starting with zero
    const example = source.pipe(scan((acc, curr) => acc + curr, 0));
    // log accumulated values
    // output: 1,3,6
    example.subscribe((val) => {
      this.result = val;
    });
  }
  //#endregion

  private cleanResults() {
    this.data = null;
    this.result = null;
    this.method = null;
  }
}
