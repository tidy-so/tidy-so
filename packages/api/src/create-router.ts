import * as trpc from '@trpc/server';
import { Context } from './context';

/**
 * Helper function to create a router with context
 */
export function createRouter() {
  return trpc.router<Context>();
}

export function createProtectedRouter() {
  return trpc.router<Context>().middleware(({ ctx, next }) => {
    // if (ctx.user === null) {
    //   throw new trpc.TRPCError({ code: 'UNAUTHORIZED' });
    // }
    //
    return next({
      ctx: {
        ...ctx,
        // user: ctx.user
      },
    });
  });
}
