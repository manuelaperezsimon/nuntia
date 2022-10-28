import { rest } from "msw";
import { fakeListPosts, fakeListPostsWithUserName } from "../posts/postsMocks";
import fakeUser from "../users/users";

const allPostsURL = "https://jsonplaceholder.typicode.com/posts";
const user = "https://jsonplaceholder.typicode.com/users/";
const idPost: number = 1;

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

  rest.delete(`${allPostsURL}/${idPost}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ postDelete: { id: idPost } }));
  }),

  rest.delete(`${allPostsURL}/10`, async (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ error: "Post not found" }));
  }),

  rest.put(`${allPostsURL}/${idPost}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeListPostsWithUserName[0]));
  }),

  rest.put(`${allPostsURL}/10`, async (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ error: "Error to edit post" }));
  }),

  rest.get(`${user}`, async (req, res, ctx) => {
    const username = req.url.searchParams.get("username");

    if (username === "Bret") return res(ctx.status(200), ctx.json([fakeUser]));
    else return res(ctx.status(400), ctx.json([]));
  }),
];
