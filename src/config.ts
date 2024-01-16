import type { Site, SocialObject, FriendObject } from "./types";

export const SITE: Site = {
  website: "https://blog.jvav.me/", // replace this with your deployed domain
  author: "Nek0U",
  desc: "一个奇怪的小屋",
  title: "Code & Tea",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
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

export const SOCIALS: SocialObject[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/HMur233",
    linkTitle: "Twitter",
  },
  {
    name: "Github",
    href: "https://github.com/HuajiMUR233",
    linkTitle: "GitHub",
  },
  {
    name: "Mail",
    href: "mailto:neko@jvav.me",
    linkTitle: "电子邮件",
  },
];

export const FRIENDS: FriendObject[] = [
  {
    name: "阿龙的笔记",
    description: "阿巴阿巴…",
    icon_file: "alongw.jpg",
    socials: [
      {
        name: "Github",
        href: "https://github.com/alongw",
        linkTitle: "GitHub",
      },
      {
        name: "Telegram",
        href: "https://t.me/alongw",
        linkTitle: "Telegram",
      },
      {
        name: "Mail",
        href: "mailto:alongw@alongw.cn",
        linkTitle: "电子邮件",
      },
    ],
    link: "https://www.alongw.cn/",
  },
  {
    name: "陌漓的小窝",
    description: "一只可爱的小陌漓~",
    icon_file: "molly.jpg",
    socials: [
      {
        name: "Twitter",
        href: "https://twitter.com/xynmolly",
        linkTitle: "Twitter",
      },
    ],
    link: "https://cwcu.com.cn",
  },
  {
    name: "Empty SEKAI",
    description: "一只游荡在无人 SEKAI 的小白葱",
    icon_file: "prprnya.jpg",
    socials: [
      {
        name: "Github",
        href: "https://github.com/prprnya",
        linkTitle: "GitHub",
      },
      {
        name: "Mastodon",
        href: "https://nightcord.de/@miku",
        linkTitle: "Mastodon",
      },
    ],
    link: "https://prpr.rip",
  },
];

export const GRAY_MODE: boolean = false;
