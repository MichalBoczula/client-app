import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-client-pay-loan-component',
  imports: [MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './client-pay-loan-component.html',
  styleUrl: './client-pay-loan-component.css'
})
export class ClientPayLoanComponent {

}
