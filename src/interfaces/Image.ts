export interface Image {
  id: number;
  title: string;
  description?: string;
  path: string;
  translatedText: string;
  categoriesId?: string[];
  created_at: string;
}

export interface CreationImage {
  title: string;
  description?: string;
  image: File;
}
