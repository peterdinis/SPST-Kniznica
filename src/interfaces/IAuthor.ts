export interface IAuthor {
    id?: number | string;
    name: string;
    lastName: string;
    picture: string;
    birthYear: number;
    deathYear?: number;
    country: string;
    description: string;
    litPeriod: string;
};