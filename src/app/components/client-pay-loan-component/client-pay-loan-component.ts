import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: 'app-client-pay-loan-component',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './client-pay-loan-component.html',
  styleUrl: './client-pay-loan-component.css'
})
export class ClientPayLoanComponent {

}
