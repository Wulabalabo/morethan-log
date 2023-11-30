const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Wulabalabo",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo2LCJub3NlIjoxMiwibW91dGgiOjEzLCJleWVzIjo3LCJleWVicm93cyI6NywiZ2xhc3NlcyI6MCwiaGFpciI6NCwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjoyLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Developer",
    bio: "I WILL TRY ANYTHING ONCE",
    email: "cyberchenjw@gmail.com",
    linkedin: "Wulabalabo",
    github: "Wulabalabo",
    instagram: "",
  },
  projects: [
    {
      name: `Wulabalabo-log`,
      href: "https://github.com/Wulabalabo/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Wulabalabo-blog",
    description: "welcome to Wulabalabo-log!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
