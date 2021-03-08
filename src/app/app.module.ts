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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent,
    JavascriptComponent,
    UnitTestComponent,
    ScssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule,
    NgbModule,
    NgxJsonViewerModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
