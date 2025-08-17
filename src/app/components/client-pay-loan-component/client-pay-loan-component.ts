import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../client.service';
import { CreatePaymentDto } from '../../dto/createPaymentDto.dto';
import { Debt } from '../../models/debt.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-pay-loan-component',
  imports: [MatInputModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatListModule, CommonModule, ReactiveFormsModule],
  templateUrl: './client-pay-loan-component.html',
  styleUrl: './client-pay-loan-component.css'
})
export class ClientPayLoanComponent {
  private ref = inject(MatDialogRef<ClientPayLoanComponent>);
  private readonly clientService = inject(ClientService);
  data = inject(MAT_DIALOG_DATA) as { debt: Debt, clientId: string };

  form = new FormGroup({
    amount: new FormControl(0),
    note: new FormControl('')
  });

  close(): void {
    this.ref.close();
  }

  confirm(): void {
    const createPaymentDto: CreatePaymentDto = {
      amount: Number(this.form.value.amount),
      date: new Date().toISOString(),
      note: this.form.value.note ?? null
    };

    this.clientService.addPaymentToDebt(this.data.clientId!, this.data.debt.id!, createPaymentDto)
      .pipe()
      .subscribe({
        next: () => this.ref.close(true),
        error: err => console.error('Add payment failed', err)
      });
  }
}
