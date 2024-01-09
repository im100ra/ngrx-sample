import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../shared/state/user/user.model';
import { AppState } from '../../../shared/model/app-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  users$: Observable<User[]>;

  constructor(private _store: Store<AppState>) {
    this.users$ = this._store.select((state) => state.user);
  }
}
