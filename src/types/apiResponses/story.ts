export interface CreateStory {
  id?: string | number;
  title: string;
  active?: boolean;
  position?: string;
  description: string;
  image?: any;
  imageDescription?: string;
}
