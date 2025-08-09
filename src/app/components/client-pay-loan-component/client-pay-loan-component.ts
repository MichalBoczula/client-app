import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-pay-loan-component',
  imports: [MatInputModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatListModule],
  templateUrl: './client-pay-loan-component.html',
  styleUrl: './client-pay-loan-component.css'
})
export class ClientPayLoanComponent {
  private ref = inject(MatDialogRef<ClientPayLoanComponent>);

  data = inject(MAT_DIALOG_DATA) as { debt: any };
  amount: number | null = null;
  notes = '';

  close(): void {
    this.ref.close();
  }

  confirm(): void {
    this.ref.close({
      confirmed: true,
      amount: this.amount,
      notes: this.notes,
      debtId: this.data?.debt?.id
    });
  }
}
