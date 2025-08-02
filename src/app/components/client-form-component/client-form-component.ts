import { Component } from '@angular/core';
import { ClientInstance } from '../../models/client-instance.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form-component',
  standalone: true,
  templateUrl: './client-form-component.html',
  styleUrl: './client-form-component.css',
  imports: [FormsModule]
})
export class ClientFormComponent {
  client = this.createEmptyClient();

  private createEmptyClient(): ClientInstance {
    return {
      id: crypto.randomUUID(),
      firstName: 'John',
      lastName: 'Doe',
      bankAccountNumber: '12345',
      debts: [],
    };
  }
}
