import * as env from 'env-var';
import type * as DataModel from '@prisma/client';
import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var db: PrismaClient | undefined;
}

export const db =
  global.db ||
  new PrismaClient({
    log:
      env.get('NODE_ENV').default('development').asString() === 'development'
        ? ['query', 'error', 'warn']
        : ['error']
  });

if (env.get('NODE_ENV').default('development').asString() !== 'production')
  global.db = db;

export { DataModel };