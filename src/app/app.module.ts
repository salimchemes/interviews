import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';
import { RoutingModule } from './routing/routing.module';
import { ScssComponent } from './components/scss/scss.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent,
    JavascriptComponent,
    UnitTestComponent,
    ScssComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
