// Ensure defaults for environment variables: create a config file in your
// project where you export an object containing all configuration values.
// There, you can set default values for variables coming from the environment.
// In this way, you guarantee a value will be present for your program.
// Note: Nullish coalescing: the `??` operator is a way to “fall back” to
// a default value when dealing with `null` or `undefined`.

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var for OpenAI");
}

export const config = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  openAIKey: process.env.OPENAI_API_KEY ?? "",
  statusPage: process.env.STATUS_PAGE_ID ?? "",
};

// Our SEO data
export const meta = {
  URL: "https://www.dreamaweso.me",
  siteName: "DreamAwesome",
  title: "Analyze your dreams using AI",
  description:
    "DreamAwesome is where you can analyze your dreams to get insight into the their meaning and relevance for your future.",
  themeColor: "#000000",
  backgroundColor: "#000000",
  og: {
    locale: "en-US",
    type: "website",
    ogImage: "https://nextjs.org/og.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dreamawesome",
  },
};

export const menuItems = [{ path: "/", name: "Home", new: false }];

export const footerItems = {
  legal: [
    { path: "/privacy", name: "Privacy Policy", internal: true },
    { path: "/terms", name: "Terms of Service", internal: true },
    { path: "/cookies", name: "Cookies", internal: true },
  ],
};
