export interface CreateStory {
  title: string;
  description: string;
  active?: boolean;
  position?: string;
  image?: any;
  nonProfitId: number;
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
