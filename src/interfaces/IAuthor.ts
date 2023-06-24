export interface IAuthor {
    id?: number | string;
    externalId?: string
    name: string;
    lastName: string;
    image: string;
    birthYear: number;
    isAlive: boolean;
    country: string;
    description: string;
    litPeriod: string;
};

export type IUpdateAuthor = Partial<IAuthor>;
export type IAuthorInfo = Partial<IAuthor>;