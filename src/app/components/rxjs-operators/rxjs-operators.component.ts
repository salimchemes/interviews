import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  concat,
  forkJoin,
  from,
  fromEvent,
  Observable,
  of,
  Subject,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  first,
  map,
  mergeMap,
  share,
  switchMap,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
  pluck,
  scan,
} from 'rxjs/operators';
import { operators } from 'src/app/constants/rxjs-operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent implements OnInit {
  loading: boolean;
  onStop = new Subject<void>();
  operators: (
    | { id: string; label: string; group: string }
    | { id: string; label: string; group: string }
  )[];
  personObs: Observable<any>;
  personPromise: Promise<any>;
  person: any = {
    name: 'salim',
    age: 34,
  };
  selectedOperator: any;
  data: any;
  result: any;
  method: any;
  keyup$: Observable<any> | undefined;
  constructor(private httpClient: HttpClient) {
    this.loading = false;
    this.operators = operators;
    this.personObs = of(this.person);
    this.personPromise = Promise.resolve(this.person);
  }

  ngOnInit(): void {}

  subscribe(personObs: any, personPromise: Promise<any>) {
    personObs.subscribe((data: any) => console.log(data));
    from(personPromise).subscribe((data) => console.log(data));
  }

  of() {
    this.data = [1, 2, 3, 4];
    of(this.data).subscribe((data) => {
      console.log(data + 'text');
      this.result = data + 'text';
    });
  }

  from() {
    this.data = [1, 2, 3, 4];

    from(this.data).subscribe((value) => {
      console.log(value + 'text');
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
        console.log(person);
        this.result = person;
      });
  }

  share() {
    const request = this.getPostsWithShare();
    this.loading = true;
    request.subscribe(() => (this.loading = false));
    request.subscribe((data) => {
      console.log(data);
      this.result = data;
    });
  }

  getPostsWithShare() {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(share());
  }

  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }

  switchMap() {
    // cancel from one obs and switch to another having access to both

    const posts = this.getPosts();
    const comments = this.getComments();

    const combined = posts.pipe(
      switchMap((posts) => {
        return comments.pipe(
          tap((comments) => {
            console.log(comments);
            console.log(posts);
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

  take() {
    // this.data = [1, 2, 3, 4];
    const source = fromEvent(document, 'click');
    let counter = 0;
    // source.pipe(take(1)).subscribe(() => console.log('clicked'));
    // source.pipe(first()).subscribe(() => console.log('clicked'));
    source.pipe(takeWhile(() => counter < 3)).subscribe(() => {
      console.log('clicked', counter);

      counter++;
      this.result = counter;
    });

    // of(this.data)
    //   .pipe(takeLast(2))
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.result = data;
    //   });

    // source.pipe(takeUntil(this.onStop)).subscribe(() => {
    //   console.log('keydown', counter);
    //   counter++;
    //   this.result = counter;
    // });
  }

  mergeMap() {
    // declare 2 obs
    const carColorObs = of({ color: 'blue' });
    const carDriverObs = of({ driver: 'salim' });

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
      console.log(car);
      this.result = { car: car };
    });
  }

  private concat() {
    // declare 2 obs
    const carColorObs = of({ color: 'blue' });
    const carDriverObs = of({ driver: 'salim' });
    this.data = { color: 'blue', driver: 'salim' };
    // its from rxjs not from rxjs/operators
    // it is going to emit one value for each obs in order
    const combined = concat(carColorObs, carDriverObs);

    combined.subscribe((data) => {
      console.log(data);
      this.result = { ...this.result, ...data };
    });
  }

  stop() {
    this.onStop.next();
    this.onStop.complete();
  }

  forkJoin() {
    const comments = this.getComments();
    const posts = this.getPosts();

    // finish all the observables and emit an array with all of them
    const combined = forkJoin(comments, posts);

    combined.subscribe((combined) => {
      console.log(combined);
      this.result = combined;
    });
  }

  combineLatest() {
    const comments = this.getComments();
    const posts = this.getPosts();

    // Not only does forkJoin require all input observables to be completed,
    // but it also returns an observable that produces a single value that is an array of the last values produced by the input observables.In other words,
    // it waits until the last input observable completes, and then produces a single value and completes.

    // In contrast, combineLatest returns an Observable that produces a new value every time the input observables do,
    // once all input observables have produced at least one value.This means it could have infinite values and may not complete.
    // It also means that the input observables don't have to complete before producing a value
    const combined = combineLatest(comments, posts);

    combined.subscribe((combined) => {
      console.log(combined, 'combine latest');
      this.result = { ...this.result, combined };
    });
  }

  pluck() {
    // pick a property frome the obs
    this.keyup$ = fromEvent(document, 'keyup');

    this.keyup$
      .pipe(pluck('code'))
      // 'Space', 'Enter'
      .subscribe((data) => {
        console.log(data);
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
    const subscribe = example.subscribe((val) => {
      console.log(val);
      this.result = val;
    });
  }

  performOperator(operator: any) {
    this.selectedOperator = operator;
    this.data = null;
    this.result = null;
    this.method = null;
    switch (operator.id) {
      case 'tap':
        this.tap();
        this.method = this.tap.toString();
        break;
      case 'map':
        this.map();
        this.method = this.map.toString();
        break;
      case 'pluck':
        this.pluck();
        this.method = this.pluck.toString();
        break;
      case 'combineLatest':
        this.combineLatest();
        this.method = this.combineLatest.toString();
        break;
      case 'forkJoin':
        this.forkJoin();
        this.method = this.forkJoin.toString();
        break;
      case 'take':
        this.take();
        this.method = this.take.toString();
        break;
      case 'share':
        this.share();
        this.method = this.share.toString();
        break;
      case 'concat':
        this.concat();
        this.method = this.concat.toString();
        break;
      case 'switchMap':
        this.switchMap();
        this.method = this.switchMap.toString();
        break;
      case 'mergeMap':
        this.mergeMap();
        this.method = this.mergeMap.toString();
        break;
      case 'debounceTime':
        this.debounceTime();
        this.method = this.debounceTime.toString();
        break;
      case 'from':
        this.from();
        this.method = this.from.toString();
        break;
      case 'of':
        this.of();
        this.method = this.of.toString();
        break;
      case 'scan':
        this.scan();
        this.method = this.scan.toString();
        break;
      default:
        break;
    }
  }
}
