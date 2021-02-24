import { Routes } from '@angular/router';
import { RxjsOperatorsComponent } from '../components/rxjs-operators/rxjs-operators.component';
import { JavascriptComponent } from '../components/javascript/javascript.component';
import { UnitTestComponent } from '../components/unit-test/unit-test.component';
import { ScssComponent } from '../components/scss/scss.component';

export const routes: Routes = [
  {
    path: 'rxjs-operators',
    component: RxjsOperatorsComponent,
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
  {
    path: 'unit-test',
    component: UnitTestComponent,
  },
  {
    path: 'scss',
    component: ScssComponent,
  },
];
