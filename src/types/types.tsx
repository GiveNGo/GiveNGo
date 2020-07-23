export type TaskCardProps = {
  _id: number;
  title: string;
  description: string;
  category: 'clothing' | 'groceries' | 'pharmacy' | 'other';
  requester: string;
  assignee: string;
};
