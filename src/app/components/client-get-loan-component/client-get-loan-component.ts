import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-get-loan-component',
  imports: [MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './client-get-loan-component.html',
  styleUrl: './client-get-loan-component.css'
})
export class ClientGetLoanComponent {
  private ref = inject(MatDialogRef<ClientGetLoanComponent>);

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
