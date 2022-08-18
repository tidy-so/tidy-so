import * as env from 'env-var';

export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }

  // reference for vercel.com
  const vercelUrl = env.get('VERCEL_URL').asString();

  if (typeof vercelUrl !== 'undefined') {
    return `https://${vercelUrl}`;
  }

  // If Vercel URL is not defined, assume localhost
  return `http://localhost:${env.get('PORT').default(3000).asPortNumber()}`;
}
