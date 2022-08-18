import { createRouter } from '../create-router';

export const healthRouter = createRouter().query('health', {
  resolve() {
    return { success: true };
  },
});
