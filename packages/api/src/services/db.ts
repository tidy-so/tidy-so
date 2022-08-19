import * as env from 'env-var';
import { PrismaClient } from '@tidy-so/db';

// declare global {
//   var db: PrismaClient | undefined;
// }

export const db =
  // global.db ||
  new PrismaClient({
    log:
      env.get('NODE_ENV').default('development').asString() === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

// if (env.get('NODE_ENV').default('development').asString() !== 'production')
//   global.db = db;
