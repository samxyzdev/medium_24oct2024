import { Hono } from "hono";
import { userRouter } from "./router/userRouter";
import { blogRouter } from "./router/blogRouter";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;