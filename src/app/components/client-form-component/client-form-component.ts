import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClientDebtComponent } from "../client-debt-component/client-debt-component";
import { ClientInstance } from '../../models/client-instance.model';

@Component({
  selector: 'app-client-form-component',
  standalone: true,
  templateUrl: './client-form-component.html',
  styleUrl: './client-form-component.css',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule, MatProgressSpinnerModule, ClientDebtComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  private readonly clientService = inject(ClientService);

  mockedClient: ClientInstance = {
    id: 'e54fe002-9f23-4a39-b85a-05aea5a4fb96',
    firstName: 'John',
    lastName: 'Doe',
    bankAccountNumber: '123-456',
    debts: [
      {
        id: '8e73adba-e2c1-44d0-85bd-24dbfa4b8b31',
        amount: 1000,
        dueDate: '2025-08-31T22:00:00.000Z',
        payments: [
          {
            id: 'b9280a70-0f06-401f-833d-1b8cb378e263',
            amount: 300,
            date: '2025-07-31T22:00:00.000Z',
            note: 'Initial payment'
          },
          {
            id: 'b9280a70-0f06-401f-833d-1b8cb378e263',
            amount: 300,
            date: '2025-08-31T22:00:00.000Z',
            note: 'Initial payment'
          }
        ]
      },
      {
        id: '2e73adba-e2c1-44d0-85bd-24dbfa4b8b31',
        amount: 2000,
        dueDate: '2025-08-31T22:00:00.000Z',
        payments: [
          {
            id: 'b9280a70-0f06-401f-833d-1b8cb378e263',
            amount: 500,
            date: '2025-07-31T22:00:00.000Z',
            note: 'Initial payment'
          },
          {
            id: 'b9280a70-0f06-401f-833d-1b8cb378e263',
            amount: 500,
            date: '2025-08-31T22:00:00.000Z',
            note: 'Initial payment'
          }
        ]
      }
    ]
  };

  // client = this.clientService.client;
  client = signal<ClientInstance>(this.mockedClient);
  loading = this.clientService.loading;
  error = this.clientService.error;

  constructor() {
    // this.clientService.loadClient('ee7223ba-6c39-4a63-ab58-b04ccc3dca8c');
  }
}

