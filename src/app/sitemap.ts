import { MetadataRoute } from "next";

const VERCEL_PROJECT_SLUG = "adubs-me";
const VERCEL_ORG_NAME = "buildleansaas";

export const DOMAIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.VERCEL_ENV === "preview" && typeof process.env.VERCEL_GIT_COMMIT_REF === "string"
    ? `https://${VERCEL_PROJECT_SLUG}-git-${process.env.VERCEL_GIT_COMMIT_REF}-${VERCEL_ORG_NAME}.vercel.app`
    : "https://adubs.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
    },
    {
      url: `${DOMAIN}/guides`,
      lastModified: new Date(),
    },
  ];
}
