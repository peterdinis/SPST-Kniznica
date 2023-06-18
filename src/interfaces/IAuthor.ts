export interface IAuthor {
    id?: number | string;
    externalId?: string
    name: string;
    lastName: string;
    picture: string;
    birthYear: number;
    deathYear?: number;
    country: string;
    description: string;
    litPeriod: string;
};

export type IUpdateAuthor = Partial<IAuthor>;
export type IAuthorInfo = Partial<IAuthor>;