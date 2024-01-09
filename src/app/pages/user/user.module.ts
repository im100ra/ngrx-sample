import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../shared/state/user/reducers/user.reducer';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AddComponent,HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userReducer),
  ],
})
export class UserModule {}
