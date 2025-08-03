import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'service',
        pathMatch: 'full',
    },
    {
        path: 'service',
        title: 'Client Form – Service Only',
        loadComponent: () => import('../app/components/client-form-component/client-form-component')
            .then(m => m.ClientFormComponent),
    },
    {
        path: 'effects',
        title: 'Client Form – NgRx Effects',
        loadComponent: () => import('../app/components/client-form-component-ngrx/client-form-component-ngrx')
            .then(m => m.ClientFormComponentNgrx),
    },
];