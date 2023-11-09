export interface Image {
  id: number;
  title: string;
  description?: string;
  path: string;
  categoriesId?: string[];
}


export interface CreationImage {
  title: string;
  description?: string;
  image: File
}