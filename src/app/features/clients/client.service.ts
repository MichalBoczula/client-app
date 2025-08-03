import { inject, Injectable, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInstance } from '../../models/client-instance.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
    private http = inject(HttpClient);

    private readonly clientSignal = signal<ClientInstance | null>(null);

    readonly client = this.clientSignal.asReadonly();

    loadClient(id: string) {
        this.http.get<ClientInstance>(`http://localhost:5123/clients/${id}`).subscribe({
            next: (data) => this.clientSignal.set(data),
            error: (err) => console.error('Failed to load client', err),
        });
    }
}
