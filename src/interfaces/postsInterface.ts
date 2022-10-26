export interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
  userName?: string;
}

export interface PostWithoutId {
  title: string;
  body: string;
  userName?: string;
}

export type Posts = Post[];
