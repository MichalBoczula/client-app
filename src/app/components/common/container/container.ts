import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MatGridListModule, RouterOutlet],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {

}
