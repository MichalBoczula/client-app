import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientFormComponent } from "../../client-form-component/client-form-component";
import { ClientFormComponentNgrx } from "../../client-form-component-ngrx/client-form-component-ngrx";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MatGridListModule, ClientFormComponent, ClientFormComponentNgrx],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {

}
