import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInstance } from '../../models/client-instance.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientService {
    private http = inject(HttpClient);

    getClient(id: string): Observable<ClientInstance> {
        return this.http.get<ClientInstance>(`http://localhost:5123/clients/${id}`);
    }
}
