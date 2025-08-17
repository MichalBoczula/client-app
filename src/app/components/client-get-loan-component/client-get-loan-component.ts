import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateDebtDto } from '../../dto/createDebtDto.dto';
import { ClientService } from '../client.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-get-loan-component',
  imports: [MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, CommonModule],
  templateUrl: './client-get-loan-component.html',
  styleUrl: './client-get-loan-component.css'
})
export class ClientGetLoanComponent implements OnInit {
  private ref = inject(MatDialogRef<ClientGetLoanComponent>);
  private readonly clientService = inject(ClientService);

  data = inject(MAT_DIALOG_DATA) as { id: string };

  form = new FormGroup({
    amount: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(0.01)]
    }),
    dueDate: new FormControl<string>('')
  });

  ngOnInit(): void {
    console.log(this.data);
  }

  close(): void {
    this.ref.close();
  }

  confirm(): void {
    const payload: CreateDebtDto = {
      amount: this.form.value.amount!,
      dueDate: this.form.value.dueDate!
    };
    this.clientService.addDebt(this.data.id, payload).subscribe({
      next: () => this.ref.close(true),
      error: err => {
        console.error(err);
      }
    });
  }
}
