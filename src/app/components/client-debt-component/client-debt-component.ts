import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClientPaymentComponent } from "../client-payment-component/client-payment-component";
import { Debt } from '../../models/debt.model';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-client-debt-component',
  imports: [ClientPaymentComponent, CommonModule, MatCardModule],
  providers: [CurrencyPipe, DatePipe],
  templateUrl: './client-debt-component.html',
  styleUrl: './client-debt-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDebtComponent {
  @Input() debts: Debt[] = [];
}
