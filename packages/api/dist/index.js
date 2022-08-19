"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  appRouter: () => appRouter,
  createContext: () => createContext,
  createProtectedRouter: () => createProtectedRouter,
  createRouter: () => createRouter,
  trpcNext: () => trpcNext
});
module.exports = __toCommonJS(src_exports);

// src/create-router.ts
var trpc = __toESM(require("@trpc/server"));
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
var env = __toESM(require("env-var"));
var import_db = require("@tidy-so/db");
var db = new import_db.PrismaClient({
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
var import_superjson = __toESM(require("superjson"));
var appRouter = createRouter().transformer(import_superjson.default).merge(healthRouter);

// src/index.ts
var trpcNext = __toESM(require("@trpc/server/adapters/next"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  appRouter,
  createContext,
  createProtectedRouter,
  createRouter,
  trpcNext
});
