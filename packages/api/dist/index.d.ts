import * as _trpc_server_dist_declarations_src_router from '@trpc/server/dist/declarations/src/router';
import * as next from 'next';
import { NextApiRequest, NextApiResponse } from 'next';
import * as _tidy_so_db from '@tidy-so/db';
import { PrismaClient } from '@tidy-so/db';
import * as trpc from '@trpc/server';
import { inferProcedureOutput, inferProcedureInput, inferSubscriptionOutput } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
export { trpcNext };
import * as _trpc_server_dist_declarations_src_internals_procedure from '@trpc/server/dist/declarations/src/internals/procedure';

/**
 * Helper function to create a router with context
 */
declare function createRouter(): _trpc_server_dist_declarations_src_router.Router<{
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {}, {}, {}, {}, trpc.DefaultErrorShape>;
declare function createProtectedRouter(): _trpc_server_dist_declarations_src_router.Router<{
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {}, {}, {}, {}, trpc.DefaultErrorShape>;

declare const db: PrismaClient<{
    log: ("query" | "warn" | "error")[];
}, never, false>;

declare type NextContext = {
    db: typeof db;
    request: NextApiRequest;
    reply: NextApiResponse;
};
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
declare const createContext: ({ req, res, }: trpcNext.CreateNextContextOptions) => Promise<NextContext>;
declare type Context = trpc.inferAsyncReturnType<typeof createContext>;

/**
 * This file contains the root router of your tRPC-backend
 */
/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
declare const appRouter: _trpc_server_dist_declarations_src_router.Router<{
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {}, Record<"health", _trpc_server_dist_declarations_src_internals_procedure.Procedure<{
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {
    db: _tidy_so_db.PrismaClient<{
        log: ("query" | "warn" | "error")[];
    }, never, false>;
    request: next.NextApiRequest;
    reply: next.NextApiResponse<any>;
}, {}, undefined, undefined, {
    success: boolean;
}, unknown, {
    success: boolean;
}>>, {}, {}, trpc.DefaultErrorShape>;
declare type AppRouter = typeof appRouter;

/**
 * Enum containing all api query paths
 */
declare type TQuery = keyof AppRouter['_def']['queries'];
/**
 * Enum containing all api mutation paths
 */
declare type TMutation = keyof AppRouter['_def']['mutations'];
/**
 * Enum containing all api subscription paths
 */
declare type TSubscription = keyof AppRouter['_def']['subscriptions'];
/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = InferQueryOutput<'hello'>
 */
declare type InferQueryOutput<TRouteKey extends TQuery> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;
/**
 * This is a helper method to infer the input of a query resolver
 * @example type HelloInput = InferQueryInput<'hello'>
 */
declare type InferQueryInput<TRouteKey extends TQuery> = inferProcedureInput<AppRouter['_def']['queries'][TRouteKey]>;
/**
 * This is a helper method to infer the output of a mutation resolver
 * @example type HelloOutput = InferMutationOutput<'hello'>
 */
declare type InferMutationOutput<TRouteKey extends TMutation> = inferProcedureOutput<AppRouter['_def']['mutations'][TRouteKey]>;
/**
 * This is a helper method to infer the input of a mutation resolver
 * @example type HelloInput = InferMutationInput<'hello'>
 */
declare type InferMutationInput<TRouteKey extends TMutation> = inferProcedureInput<AppRouter['_def']['mutations'][TRouteKey]>;
/**
 * This is a helper method to infer the output of a subscription resolver
 * @example type HelloOutput = InferSubscriptionOutput<'hello'>
 */
declare type InferSubscriptionOutput<TRouteKey extends TSubscription> = inferProcedureOutput<AppRouter['_def']['subscriptions'][TRouteKey]>;
/**
 * This is a helper method to infer the asynchronous output of a subscription resolver
 * @example type HelloAsyncOutput = InferAsyncSubscriptionOutput<'hello'>
 */
declare type InferAsyncSubscriptionOutput<TRouteKey extends TSubscription> = inferSubscriptionOutput<AppRouter, TRouteKey>;
/**
 * This is a helper method to infer the input of a subscription resolver
 * @example type HelloInput = InferSubscriptionInput<'hello'>
 */
declare type InferSubscriptionInput<TRouteKey extends TSubscription> = inferProcedureInput<AppRouter['_def']['subscriptions'][TRouteKey]>;

export { AppRouter, Context, InferAsyncSubscriptionOutput, InferMutationInput, InferMutationOutput, InferQueryInput, InferQueryOutput, InferSubscriptionInput, InferSubscriptionOutput, appRouter, createContext, createProtectedRouter, createRouter };
