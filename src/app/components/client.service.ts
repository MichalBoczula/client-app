import { inject, Injectable, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInstance } from '../models/client-instance.model';
import { catchError, finalize, throwError } from 'rxjs';
import { CreateDebtDto } from '../dto/createDebtDto.dto';
import { UpdateClientDto } from '../dto/updateClientDto.dto';
import { CreatePaymentDto } from '../dto/createPaymentDto.dto';
import { ConfigService } from '../config.service';

@Injectable({ providedIn: 'root' })
export class ClientService {
    private http = inject(HttpClient);
    private cfg = inject(ConfigService);
    private get base() { console.log(this.cfg); return this.cfg.apiBaseUrl; }

    client = signal<ClientInstance | undefined>(undefined);
    loading = signal(false);
    error = signal<any>(null);

    loadClient(clientId: string) {
        this.loading.set(true);
        this.error.set(null);

        this.http.get<ClientInstance>(`${this.base}/clients/${clientId}`)
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
                next: c => this.client.set(c),
                error: e => this.error.set(e)
            });
    }

    addDebt(clientId: string, body: CreateDebtDto) {
        this.loading.set(true);
        this.error.set(null);

        return this.http.put<void>(`${this.base}/clients/${clientId}/debts`, body)
            .pipe(
                finalize(() => this.loading.set(false)),
                catchError(err => {
                    this.error.set(err);
                    return throwError(() => err);
                })
            );
    }

    editClientData(clientId: string, body: UpdateClientDto) {
        this.loading.set(true);
        this.error.set(null);

        return this.http.put<void>(`${this.base}/clients/${clientId}`, body)
            .pipe(
                finalize(() => this.loading.set(false)),
                catchError(err => {
                    this.error.set(err);
                    return throwError(() => err);
                })
            );
    }

    addPaymentToDebt(clientId: string, debtId: string, body: CreatePaymentDto) {
        this.loading.set(true);
        this.error.set(null);

        return this.http.put<void>(`${this.base}/clients/${clientId}/debts/${debtId}/payments`, body)
            .pipe(
                finalize(() => this.loading.set(false)),
                catchError(err => {
                    this.error.set(err);
                    return throwError(() => err);
                })
            );
    }
}
