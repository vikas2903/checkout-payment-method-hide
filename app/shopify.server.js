import "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";

// import fs from "fs";
// import axios from "axios";
import dotenv from "dotenv";
// import { fileURLToPath } from "url";
// import path from "path";

import moongose from 'mongoose'
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

dotenv.config();

// const SHOP_DOMAIN = 'd2c-apps.myshopify.com';
// const ACCESS_TOKEN = process.env.ACCESS_TOKEN_D2C_APPS || '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';
// const FILE_PATH = path.join(__dirname, "liquid", "./app/sections/hero-section");
// const API_VERSION = "2024-01";

// if (!SHOP_DOMAIN || !ACCESS_TOKEN) {
//   throw new Error("Missing SHOP_DOMAIN or ACCESS_TOKEN in .env vs");
// }

// async function getMainThemeId() {
//   const url = `https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/themes.json`;
//   const response = await axios.get(url, {
//     headers: {
//       "X-Shopify-Access-Token": ACCESS_TOKEN,
//     },
//   });

//   const themes = response.data.themes;
//   const mainTheme = themes.find((theme) => theme.role === "main");

//   if (!mainTheme) throw new Error("Main theme not found.");
//   return mainTheme.id;
// }

// async function uploadSection(themeId, content) {
//   const url = `https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/themes/${themeId}/assets.json`;

//   const response = await axios.put(
//     url,
//     {
//       asset: {
//         key: "sections/my-app-section.liquid",
//         value: content,
//       },
//     },
//     {
//       headers: {
//         "X-Shopify-Access-Token": ACCESS_TOKEN,
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   console.log("✅ Section uploaded:", response.data.asset.key);
// }

// async function run() {
//   try {
//     if (!fs.existsSync(FILE_PATH)) {
//       throw new Error(`File not found at path: ${FILE_PATH}`);
//     }

//     const sectionContent = fs.readFileSync(FILE_PATH, "utf-8");
//     const themeId = await getMainThemeId();
//     await uploadSection(themeId, sectionContent);

//     console.log("✅ Section upload complete.");
//   } catch (error) {
//     if (error.response) {
//       console.error("❌ API Error:", error.response.data);
//     } else {
//       console.error("❌ Upload Error:", error.message);
//     }
//   }
// }

// run();


// Database Connection 

moongose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  });
 
const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.January25,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL,
  authPathPrefix: "/auth",
  sessionStorage: new PrismaSessionStorage(prisma),
  distribution: AppDistribution.AppStore,
  future: {
    unstable_newEmbeddedAuthStrategy: true,
    removeRest: true,
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

export default shopify;
export const apiVersion = ApiVersion.January25;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
