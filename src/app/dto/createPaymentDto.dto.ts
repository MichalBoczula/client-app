export interface CreatePaymentDto {
    amount: number,
    date: string,
    note: string | null
}