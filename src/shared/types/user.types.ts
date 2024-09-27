export interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'VIEWER_USER' | 'OWNER_USER' | 'MANAGEMENT_USER' | 'EDITOR_USER';
  createdAt: string;
  updatedAt: string;
}
