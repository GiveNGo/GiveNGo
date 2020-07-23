export type TaskCardProps = {
  _id: number;
  title: string;
  description: string;
  category: 'grocery' | 'pharmacy' | 'clothing' | 'pet' | 'household' | 'other';
  requester: string;
  assignee: string;
};
