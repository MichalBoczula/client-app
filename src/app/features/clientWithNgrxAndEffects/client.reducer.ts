import { createReducer, on } from '@ngrx/store';
import { ClientInstance } from '../../models/client-instance.model';
import { loadClient, loadClientFailure, loadClientSuccess } from './client.actions';

export interface ClientState {
    client: ClientInstance | null;
    loading: boolean,
    error: string | null
}

export const initialState: ClientState = {
    client: {
        id: crypto.randomUUID(),
        firstName: 'John',
        lastName: 'Doe',
        bankAccountNumber: '12345',
        debts: []
    },
    loading: false,
    error: null
};

export const clientReducer = createReducer(
    initialState,
    on(loadClient, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(loadClientSuccess, (state, { client }) => ({
        ...state,
        client,
        loading: false,
        error: null
    })),

    on(loadClientFailure, (state, { error }) => ({
        ...state,
        erorr: typeof error === 'string' ? error : JSON.stringify(error),
        loading: false,
    }))
);
