import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientFormComponent } from "../../client-form-component/client-form-component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MatGridListModule, ClientFormComponent],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {

}
