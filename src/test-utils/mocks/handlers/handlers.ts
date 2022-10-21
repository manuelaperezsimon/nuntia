import { rest } from "msw";
import fakeListPosts from "../posts/postsMocks";

const allPostsURL = "https://jsonplaceholder.typicode.com/posts";

export const handlers = [
  rest.get(allPostsURL, async (req, res, ctx) => {
    const headerTestError = req.headers.get("IsTestError");

    if (headerTestError) {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Something went wrong",
        })
      );
    }
    return res(ctx.status(200), ctx.json(fakeListPosts));
  }),
];
