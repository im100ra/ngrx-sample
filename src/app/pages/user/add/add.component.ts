import { Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { User } from '../../../shared/state/user/user.model';
import { userAddAction } from '../../../shared/state/user/actions/user.action';
import { AppState } from '../../../shared/model/app-state.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  users$: Observable<User[]>;
  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select((state) => state.user);
  }

  addUser() {
    let user = {
      id: Date.now(),
      userName: 'sadra',
      password: '1234',
    };
    this.store.dispatch(userAddAction(user));
    console.log(user);
  }
}
