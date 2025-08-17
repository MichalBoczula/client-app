import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ClientPayLoanComponent } from '../client-pay-loan-component/client-pay-loan-component';
import { Debt } from '../../models/debt.model';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-debt-component',
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule],
  providers: [CurrencyPipe, DatePipe],
  templateUrl: './client-debt-component.html',
  styleUrl: './client-debt-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDebtComponent {
  @Input() debts: Debt[] = [];

  private dialog = inject(MatDialog);
  private readonly route = inject(ActivatedRoute);
  private readonly clientService = inject(ClientService);

  openPayDialog(debt: Debt) {
    const clientId = this.route.snapshot.paramMap.get('id');

    this.dialog.open(ClientPayLoanComponent, {
      width: 'fit-content',
      data: { debt, clientId },
      disableClose: true,
      autoFocus: 'first-tabbable'
    }).afterClosed()
      .subscribe(result => {
        if (result) {
          const clientId = this.route.snapshot.paramMap.get('id');
          if (clientId) {
            this.clientService.loadClient(clientId);
          }
        }
      });
  }
}