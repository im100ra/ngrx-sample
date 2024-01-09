import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '../shared/model/app-state.model';
import { AppInit } from '../shared/state/app.actions';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from '../shared/state/app.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({}),
  ],
})
export class PagesModule {}
