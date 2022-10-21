import { rest } from "msw";
import fakeListPosts from "../posts/postsMocks";

const allPostsURL = "https://jsonplaceholder.typicode.com/posts";

export const handlers = [
  rest.get(allPostsURL, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeListPosts));
  }),
];
