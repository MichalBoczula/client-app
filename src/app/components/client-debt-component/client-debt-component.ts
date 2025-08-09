import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from "@angular/material/list";
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ClientPayLoanComponent } from '../client-pay-loan-component/client-pay-loan-component';

@Component({
  selector: 'app-client-debt-component',
  imports: [CommonModule, MatCardModule, MatListModule, MatButton],
  providers: [CurrencyPipe, DatePipe],
  templateUrl: './client-debt-component.html',
  styleUrl: './client-debt-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDebtComponent {
  @Input() debts: any[] = [];

  private dialog = inject(MatDialog);

  openPayDialog(debt: any) {
    this.dialog.open(ClientPayLoanComponent, {
      width: 'fit-content',
      data: { debt },
      disableClose: true,
      autoFocus: 'first-tabbable'
    }).afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }
}