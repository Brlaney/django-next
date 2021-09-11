export interface Order {
  id: number;
  date: string;
  first_name: string;
  last_name: string;
  city: string;
  state: string;
  card: string;
  company: string;
  cost: string;
  status?: string;
};
