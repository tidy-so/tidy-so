import { createRouter } from '../create-router';
import { healthRouter } from './health';
import superjson from 'superjson';
// import { itemsForSaleRouter } from './items-for-sale';
// import { teamsRouter } from './teams';
// import { analyticsRouter } from '~server/routers/analytics';
// import { paymentsRouter } from '~server/routers/payments';
// import { imagesRouter } from '~server/routers/images';

/**
 * This file contains the root router of your tRPC-backend
 */

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  .transformer(superjson)
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge(healthRouter);
// .merge('teams~', teamsRouter);

export type AppRouter = typeof appRouter;
