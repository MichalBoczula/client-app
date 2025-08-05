import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientFormComponent } from "../../client-form-component/client-form-component";
// import { ClientFormComponentNgrx } from "../../client-form-component-ngrx/client-form-component-ngrx"; //ClientFormComponentNgrx
import { ClientPayLoanComponent } from "../../client-pay-loan-component/client-pay-loan-component";
import { ClientGetLoanComponent } from "../../client-get-loan-component/client-get-loan-component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MatGridListModule, ClientFormComponent, ClientPayLoanComponent, ClientGetLoanComponent],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {

}
