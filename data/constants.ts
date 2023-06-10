type Locale = string;

interface Meta {
  URL: string | URL;
  email: string;
  siteName: string;
  title?: string;
  description?: string;
  themeColor?: string;
  backgroundColor?: string;
  og: {
    locale?: Locale;
    type?: "website";
    ogImage: string | URL;
    width?: number;
    height?: number;
  };
  twitter: {
    card?: string;
    site?: string;
  };
}

// Ensure defaults for environment variables: create a config file in your
// project where you export an object containing all configuration values.
// There, you can set default values for variables coming from the environment.
// In this way, you guarantee a value will be present for your program.
// Note: Nullish coalescing: the `??` operator is a way to “fall back” to
// a default value when dealing with `null` or `undefined`.

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing environment variables for OpenAI");
}

export const config = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  openAIKey: process.env.OPENAI_API_KEY ?? "",
};

// Our basic SEO data
export const meta: Meta = {
  URL: "https://www.dreamaweso.me",
  email: "test@dreamaweso.me",
  siteName: "DreamAwesome",
  title: "Unlock the potential of your dreams using AI",
  description:
    "DreamAwesome helps you analyze your dreams to gain insight into the their meaning to achieve personal growth",
  themeColor: "##F5E1E6",
  backgroundColor: "#F5E1E6",
  og: {
    locale: "en-US",
    type: "website",
    ogImage: "/ogimage.jpg",
    width: 1200,
    height: 630,
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
  ],
};
