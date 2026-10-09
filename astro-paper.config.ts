import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://xanthidcrab.github.io/",
    title: "Harun Sarıpınar",
    description: "Yazılım, otomasyon ve mühendislik projeleri üzerine kişisel blog ve teknik notlar.",
    author: "Harun Sarıpınar",
    profile: "https://github.com/xanthidcrab",
    ogImage: "default-og.jpg",
    lang: "tr",
    timezone: "Europe/Istanbul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/xanthidcrab" },
    { name: "linkedin", url: "https://www.linkedin.com/in/harun-sar%C4%B1p%C4%B1nar-791390225/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});