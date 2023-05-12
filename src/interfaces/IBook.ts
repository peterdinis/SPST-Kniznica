export interface IBook {
  id?: number;
  externalId: string;
  name: string;
  description: string;
  authorId: number;
  year: number;
  available: boolean;
  pages: number;
  publisher: string;
  image: string;
  status: string;
  categoryId: number;
}

export interface IBookResult {
  data: Record<string, IBook>;
}