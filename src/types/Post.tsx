export interface Post {
  title: string;
  subtitle: string;
  body: string;
  claps?: number;
  dateCreated: Date;
  lastEdited: Date;
  readTime?: number;
  author: string;
}
