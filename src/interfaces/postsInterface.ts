export interface Post {
  userId: number;
  title: string;
  body: string;
  userName?: string;
}

export type Posts = Post[];
