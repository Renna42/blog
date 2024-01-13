import type { Site, SocialObjects, FriendObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.jvav.me/", // replace this with your deployed domain
  author: "Nek0U",
  desc: "一个奇怪的小屋",
  title: "Code & Tea",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/HMur233",
    linkTitle: "Twitter",
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/HuajiMUR233",
    linkTitle: "GitHub",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:neko@jvav.me",
    linkTitle: "电子邮件",
    active: true,
  },
];

export const FRIENDS: FriendObjects = [
  {
    name: "阿龙的笔记",
    description: "阿巴阿巴…",
    iconUrl: "/assets/friends/alongw.png",
    socials: [
      {
        name: "Github",
        href: "https://github.com/alongw",
        linkTitle: "GitHub",
        active: true,
      },
      {
        name: "Telegram",
        href: "https://t.me/alongw",
        linkTitle: "Telegram",
        active: true,
      },
      {
        name: "Mail",
        href: "mailto:alongw@alongw.cn",
        linkTitle: "电子邮件",
        active: true,
      },
    ],
    link: "https://www.alongw.cn/",
    active: true,
  },
];
