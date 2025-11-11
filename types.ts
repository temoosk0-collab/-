
export enum ContractType {
    Lease = 'lease',
    Sale = 'sale',
    Contracting = 'contracting',
    Partnership = 'partnership',
}

export interface FormData {
    [key: string]: string;
}
