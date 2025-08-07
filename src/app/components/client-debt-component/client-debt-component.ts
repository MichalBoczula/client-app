import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Debt } from '../../models/debt.model';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from "@angular/material/list";
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-client-debt-component',
  imports: [CommonModule, MatCardModule, MatListModule, MatButton],
  providers: [CurrencyPipe, DatePipe],
  templateUrl: './client-debt-component.html',
  styleUrl: './client-debt-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDebtComponent {
  @Input() debts: Debt[] = [];
}
