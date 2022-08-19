// src/create-router.ts
import * as trpc from "@trpc/server";
function createRouter() {
  return trpc.router();
}
function createProtectedRouter() {
  return trpc.router().middleware(({ ctx, next }) => {
    return next({
      ctx: {
        ...ctx
      }
    });
  });
}

// src/services/db.ts
import * as env from "env-var";
import { PrismaClient } from "@tidy-so/db";
var db = new PrismaClient({
  log: env.get("NODE_ENV").default("development").asString() === "development" ? ["query", "error", "warn"] : ["error"]
});

// src/context.ts
var createContext = async ({
  req,
  res
}) => {
  const nextContext = {
    request: req,
    reply: res,
    db
  };
  return nextContext;
};

// src/routers/health.ts
var healthRouter = createRouter().query("health", {
  async resolve() {
    return { success: true };
  }
});

// src/routers/_app.ts
import superjson from "superjson";
var appRouter = createRouter().transformer(superjson).merge(healthRouter);

// src/index.ts
import * as trpcNext from "@trpc/server/adapters/next";
export {
  appRouter,
  createContext,
  createProtectedRouter,
  createRouter,
  trpcNext
};
