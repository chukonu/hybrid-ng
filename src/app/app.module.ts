import * as angular from 'angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { AgentTableComponent } from './agent-table/agent-table.component';
import { ApplicationRef } from '@angular/core/src/application_ref';

angular.module('hybridApp', [])
  .controller('ajs', function () {
    this.message = 'AngularJS';
  })
  .directive(
    'agentTable',
    downgradeComponent({ component: AgentTableComponent }) as angular.IDirectiveFactory
  );

@NgModule({
  declarations: [
    AppComponent,
    AgentTableComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [
    AppComponent,
    AgentTableComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap(app: ApplicationRef) {
    this.upgrade.bootstrap(document.body, ['hybridApp'], { strictDi: true });
    app.bootstrap(AppComponent);
  }
}
