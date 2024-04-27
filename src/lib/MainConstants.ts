const webProtocol = "https://";
const domain = "walujan.com";

export const WebsiteInfo = {
  NAME: "Leonard Walujan",
  FULL_NAME: "Leonard Natanael Walujan",
  ABBR: "LW",
  DOMAIN: domain,
  BASE_URL: webProtocol + domain,
  LOCATION: "Manado, Indonesia",
  KEYWORDS:
    "leonard walujan, leonard natanael walujan, manado, sulawesi utara, indonesia",
  LOCALE: "id_ID",
};

export const WebsiteContact = {
  EMAIL: "leonard" + "@" + "mail" + "." + domain,
};

export const WebsitePersonalisation = {
  mainThemeColor: "#f0ebdf",
};

export const WebsiteStorage = {
  certificates: webProtocol + "certificates" + "." + domain,
  images: webProtocol + "images" + "." + domain,
  videos: webProtocol + "videos" + "." + domain,
};

export const WebsiteLogo = {
  LOGO_URL: WebsiteInfo.BASE_URL + "/logo/lw-logo-main-2048p.webp",
  LOGO_URL_ALT: "/logo/lw-logo-main-2048p.webp",
};

export const WebsiteCoverPhoto = {
  COVER_URL: WebsiteInfo.BASE_URL + "/img/lw-logo-cover-photo.webp",
};

export const WebsitePage = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Lists", path: "/lists" },
  { title: "About", path: "/about" },
];

export const OtherPage = [
  {
    title: "Analytics",
    url: "https://umami.walujan.my.id/share/wfeaUbGEg4P2i4RT/walujan.com",
  },
  {
    title: "Web Status",
    url: "https://walujan.statuspage.io/",
  },
];

export const Analytics = {
  GOOGLE_ANALYTICS_ID: "G-FLL34SV9E8",
  UMAMI: {
    SELF_HOST_URL: webProtocol + "umami.walujan.my.id",
    WEBSITE_ID: "2bf6e3c2-3da0-4cf1-a828-81692f1b6d8a",
  },
};
