export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  receiver: string | null;
  sender: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
