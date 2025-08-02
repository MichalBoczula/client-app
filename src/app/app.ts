import { Component, signal } from '@angular/core';
import { Navigation } from "./components/common/navigation/navigation";
import { Container } from "./components/common/container/container";

@Component({
  selector: 'app-root',
  imports: [Navigation, Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client-app');
}
