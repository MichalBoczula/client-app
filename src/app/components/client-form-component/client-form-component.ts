import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../features/clients/client.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-client-form-component',
  standalone: true,
  templateUrl: './client-form-component.html',
  styleUrl: './client-form-component.css',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  private readonly clientService = inject(ClientService);

  formDisabled = true;

  readonly client = this.clientService.client;

  constructor() {
    this.clientService.loadClient('ee7223ba-6c39-4a63-ab58-b04ccc3dca8c');
  }
}

