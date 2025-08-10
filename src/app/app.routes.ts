import { Routes } from '@angular/router';
import { ClientFormComponent } from '../app/components/client-form-component/client-form-component';

export const routes: Routes = [
    { path: 'clients/:id', component: ClientFormComponent }
];