import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-client-get-loan-component',
  imports: [MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './client-get-loan-component.html',
  styleUrl: './client-get-loan-component.css'
})
export class ClientGetLoanComponent {
}
