import { Payment } from "./payment.model";

export interface Debt {
    id: string;
    amount: number;
    dueDate: string;
    payments: Payment[];
}