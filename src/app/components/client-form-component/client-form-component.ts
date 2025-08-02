import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClientInstance } from '../../models/client-instance.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form-component',
  standalone: true,
  templateUrl: './client-form-component.html',
  styleUrl: './client-form-component.css',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  client = this.createEmptyClient();
  formDisabled = true;

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
