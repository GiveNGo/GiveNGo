export type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  category: 'grocery' | 'pharmacy' | 'clothing' | 'pet' | 'household' | 'other';
  requester: string;
  assignee: string;
  detailNav: () => void;
};

export type RequestCardProps = {
  _id: number;
  title: string;
  description: string;
  category: 'grocery' | 'pharmacy' | 'clothing' | 'pet' | 'household' | 'other';
  requester: string;
  assignee: string;
};
