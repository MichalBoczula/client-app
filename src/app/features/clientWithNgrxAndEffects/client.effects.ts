import { Injectable, inject } from '@angular/core';
import { loadClient, loadClientSuccess, loadClientFailure } from './client.actions';
import { catchError, map, switchMap, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClientService } from './client.service';

@Injectable()
export class ClientEffects {
    private actions$ = inject(Actions);
    private clientService = inject(ClientService);

    loadClient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadClient),
            switchMap(({ id }) =>
                this.clientService.getClient(id).pipe(
                    map(client => loadClientSuccess({ client })),
                    catchError(error => of(loadClientFailure({ error })))
                )
            )
        )
    );
}
