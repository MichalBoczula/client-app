import { createAction, props } from '@ngrx/store';
import { ClientInstance } from '../../models/client-instance.model';

export const loadClient = createAction(
    '[Client] Load Client',
    props<{ id: string }>()
);

export const loadClientSuccess = createAction(
    '[Client] Load Client Success',
    props<{ client: ClientInstance }>()
);

export const loadClientFailure = createAction(
    '[Client] Load Client Failure',
    props<{ error: any }>()
);