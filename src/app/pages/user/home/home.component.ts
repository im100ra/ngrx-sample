import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../shared/state/user/user.model';
import { AppState } from '../../../shared/model/app-state.model';
import { Observable } from 'rxjs';
import { AppInit } from '../../../shared/state/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  users$: Observable<User[]>;

  constructor(private _store: Store<AppState>) {
    this._store.dispatch(AppInit())
    this.users$ = this._store.select((state) => state.user);
  }
}
