export interface CreateStory {
  title: string;
  active?: boolean;
  position?: string;
  description: string;
  image?: any;
}

export interface EditStory {
  id: string | number;
  title: string;
  active?: boolean;
  position?: string;
  description: string;
  image?: any;
  nonProfitId: number;
}
