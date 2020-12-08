export interface Post {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  claps?: number;
  createdAt: Date;
  updatedAt: Date;
  readTime?: number;
  author: string;
  imageUrl: string;
}
