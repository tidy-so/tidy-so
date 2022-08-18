import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
// import type { DataModel } from '@tidy-so/db';
import { db } from '@tidy-so/db';
// import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

type NextContext = {
  db: typeof db;
  // user: DataModel.User | null;
  request: NextApiRequest;
  reply: NextApiResponse;
};

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  // for API-response caching see https://trpc.io/docs/caching
  const nextContext: NextContext = {
    request: req,
    reply: res,
    // user: null,
    db,
  };

  // const session = await getSession({ req });

  // if (
  //   session !== null &&
  //   typeof session.user !== 'undefined' &&
  //   session.user.email !== null
  // ) {
  //   nextContext.user = await db.user.findUnique({
  //     where: { email: session.user.email }
  //   });
  // }

  return nextContext;
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
