export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      }
    ],
    sitemap: "https://matter.vision/sitemap.xml"
  };
}