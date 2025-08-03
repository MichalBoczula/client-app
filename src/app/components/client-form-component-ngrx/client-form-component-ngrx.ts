import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { selectClient } from '../../features/clientWithNgrxAndEffects/client.selectors';
import { loadClient } from '../../features/clientWithNgrxAndEffects/client.actions';

@Component({
  selector: 'app-client-form-component-ngrx',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule],
  templateUrl: './client-form-component-ngrx.html',
  styleUrl: './client-form-component-ngrx.css'
})
export class ClientFormComponentNgrx {
  private store = inject(Store);
  client$ = this.store.select(selectClient);

  constructor() {
    this.store.dispatch(loadClient({ id: 'ee7223ba-6c39-4a63-ab58-b04ccc3dca8c' }));
  }
}
