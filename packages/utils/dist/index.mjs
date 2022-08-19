// src/regexes.ts
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var usernameRegex = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
var inviteCodeRegex = /^[a-zA-Z]+-[0-9]+$/;

// src/base-url.ts
import * as env from "env-var";
function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }
  const vercelUrl = env.get("VERCEL_URL").asString();
  if (typeof vercelUrl !== "undefined") {
    return `https://${vercelUrl}`;
  }
  return `http://localhost:${env.get("PORT").default(3e3).asPortNumber()}`;
}
export {
  emailRegex,
  getBaseUrl,
  inviteCodeRegex,
  usernameRegex
};
