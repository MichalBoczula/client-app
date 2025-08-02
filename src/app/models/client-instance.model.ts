import { Debt } from "./debt.model";

export interface ClientInstance {
    id: string;
    firstName: string;
    lastName: string;
    bankAccountNumber: string;
    debts: Debt[];
}
