import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UpdateClientDto } from '../../dto/updateClientDto.dto';

@Component({
  selector: 'app-client-form-component',
  standalone: true,
  templateUrl: './client-form-component.html',
  styleUrl: './client-form-component.css',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule, CommonModule, MatProgressSpinnerModule, MatCardModule, MatListModule, ClientDebtComponent, ReactiveFormsModule, CommonModule],
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

  form = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    bankAccountNumber: new FormControl<string>('')
  });

  setClient(c: { firstName?: string; lastName?: string; bankAccountNumber?: string }) {
    this.form.patchValue({
      firstName: c.firstName,
      lastName: c.lastName,
      bankAccountNumber: c.bankAccountNumber
    }, { emitEvent: false });
  }

  constructor() {
    effect(() => {
      const client = this.client();
      if (!client) return;
      this.form.patchValue({
        firstName: client.firstName ?? '',
        lastName: client.lastName ?? '',
        bankAccountNumber: client.bankAccountNumber ?? ''
      }, { emitEvent: false });
    }, { allowSignalWrites: true });

    effect(() => {
      if (this.isReadOnly()) {
        this.form.disable({ emitEvent: false });
      } else {
        this.form.enable({ emitEvent: false });
      }
    }, { allowSignalWrites: true });
  }

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

  updateClientData() {
    const updateClientDto: UpdateClientDto = {
      firstName: this.form.value.firstName!,
      lastName: this.form.value.lastName!,
      bankAccountNumber: this.form.value.bankAccountNumber!
    };

    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.editClientData(clientId, updateClientDto)
        .pipe()
        .subscribe({
          next: () => {
            this.clientService.loadClient(clientId);
            this.isReadOnly.set(true);
          },
          error: err => console.error(err)
        });
    }
  }
}

