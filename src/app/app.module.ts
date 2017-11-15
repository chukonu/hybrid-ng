import * as angular from 'angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { downgradeComponent } from '@angular/upgrade/static';
import { AgentTableComponent } from './agent-table/agent-table.component';


@NgModule({
  declarations: [
    AppComponent,
    AgentTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

angular.module('hybridApp', [])
  .directive(
    'agentTable',
    downgradeComponent({ component: AgentTableComponent }) as angular.IDirectiveFactory
  );

angular.bootstrap(document.body, ['hybridApp'], { strictDi: true });
