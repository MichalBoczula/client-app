import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { ClientDebtComponent } from "../client-debt-component/client-debt-component";
import { ClientGetLoanComponent } from "../client-get-loan-component/client-get-loan-component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form-component',
  standalone: true,
  templateUrl: './client-form-component.html',
  styleUrl: './client-form-component.css',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule, CommonModule, MatProgressSpinnerModule, MatCardModule, MatListModule, ClientDebtComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent implements OnInit {
  private readonly clientService = inject(ClientService);
  private dialog = inject(MatDialog);
  private readonly route = inject(ActivatedRoute);

  client = this.clientService.client;
  loading = this.clientService.loading;
  error = this.clientService.error;
  isReadOnly = signal<boolean>(true);

  ngOnInit(): void {
    //07b84ce5-08d0-4c2c-81a4-9bd7779dbd99
    //e54fe002-9f23-4a39-b85a-05aea5a4fb96
    //ee7223ba-6c39-4a63-ab58-b04ccc3dca8c
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.loadClient(clientId);
    }
  }

  openDebtDialog() {
    const id = this.client()?.id;
    this.dialog.open(ClientGetLoanComponent, {
      width: 'fit-content',
      disableClose: true,
      autoFocus: 'first-tabbable',
      data: { id: id }
    }).afterClosed().subscribe(result => {
      if (result) {
        const clientId = this.route.snapshot.paramMap.get('id');
        if (clientId) {
          this.clientService.loadClient(clientId);
        }
      }
    });
  }

  changeReadOnlyStatus() {
    this.isReadOnly.set(!this.isReadOnly());
  }
}

