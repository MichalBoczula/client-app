import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type RuntimeConfig = { apiBaseUrl: string };

@Injectable({ providedIn: 'root' })
export class ConfigService {
    private http = inject(HttpClient);
    private cfg: RuntimeConfig = { apiBaseUrl: '' };

    load(): Promise<void> {
        const url = `/assets/connection.json`;
        return this.http.get<RuntimeConfig>(url)
            .toPromise()
            .then(data => { if (data) { this.cfg = data; } })
            .catch(() => { this.cfg = { apiBaseUrl: 'error' }; });
    }

    get apiBaseUrl() {
        return this.cfg.apiBaseUrl;
    }
}
