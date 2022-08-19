import { createRouter } from '../create-router';

export const healthRouter = createRouter().query('health', {
  async resolve() {
    return { success: true };
  },
});
