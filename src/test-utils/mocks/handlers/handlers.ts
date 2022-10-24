import { rest } from "msw";
import { fakeListPosts } from "../posts/postsMocks";

const allPostsURL = "https://jsonplaceholder.typicode.com/posts";
const user = "https://jsonplaceholder.typicode.com/users/";

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

  rest.get(`${user}1`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Leanne Graham",
      })
    );
  }),
];
