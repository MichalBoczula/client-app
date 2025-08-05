import { inject, Injectable, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInstance } from '../models/client-instance.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
    private http = inject(HttpClient);

    client = signal<ClientInstance | null>(null);
    loading = signal(false);
    error = signal<any>(null);

    id = signal<string | null>(null);

    constructor() {
        effect(() => {
            const currentId = this.id();
            if (!currentId) return;

            this.loading.set(true);
            this.error.set(null);

            this.http.get<ClientInstance>(`http://localhost:5123/clients/${currentId}`).subscribe({
                next: (client) => {
                    console.log(client);
                    this.client.set(client);
                    this.loading.set(false);
                },
                error: (err) => {
                    this.error.set(err);
                    this.loading.set(false);
                }
            });
        });
    }

    loadClient(id: string) {
        this.id.set(id);
    }
}
