"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  emailRegex: () => emailRegex,
  getBaseUrl: () => getBaseUrl,
  inviteCodeRegex: () => inviteCodeRegex,
  usernameRegex: () => usernameRegex
});
module.exports = __toCommonJS(src_exports);

// src/regexes.ts
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var usernameRegex = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
var inviteCodeRegex = /^[a-zA-Z]+-[0-9]+$/;

// src/base-url.ts
var env = __toESM(require("env-var"));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  emailRegex,
  getBaseUrl,
  inviteCodeRegex,
  usernameRegex
});
