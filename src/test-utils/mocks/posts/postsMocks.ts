import { Post, Posts } from "../../../interfaces/postsInterface";

export const fakeListPosts: Posts = [
  {
    userId: 1,
    id: 1,
    title: "Travel",
    body: "The best beach is un Santa Teresa, Costa Rica",
  },
  {
    userId: 1,
    id: 2,
    title: "Skydiving",
    body: "The best experience in the world",
  },
];

export const fakeListPostsWithUserName: Posts = [
  {
    userId: 1,
    id: 1,
    title: "Travel",
    body: "The best beach is un Santa Teresa, Costa Rica",
    userName: "Leanne Graham",
  },
  {
    userId: 1,
    id: 2,
    title: "Skydiving",
    body: "The best experience in the world",
    userName: "Leanne Graham",
  },
];

export const fakePost: Post = fakeListPostsWithUserName[1];
