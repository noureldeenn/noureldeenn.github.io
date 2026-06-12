import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/meta";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/tools/" },
    sitemap: `${siteMeta.url}/sitemap.xml`,
  };
}