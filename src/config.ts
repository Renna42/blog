import type { Site, SocialObject, FriendObject } from "./types";

export const SITE: Site = {
  website: "https://renna.dev/", // replace this with your deployed domain
  author: "Renna",
  title: "Renna's Blog",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS: SocialObject[] = [
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/Renna42",
    linkTitle: "GitHub",
  },
  {
    icon: "fa-regular fa-envelope",
    href: "mailto:is@renna.dev",
    linkTitle: "E-Mail",
  },
];

export const FRIENDS: FriendObject[] = [
  {
    name: "/mnt/anyneko",
    description: "待到重逢之时，我们一定要无话不谈",
    link: "https://aneko.moe"
  },
  {
    name: "雨山秋",
    description: "僕を連れてって浸み込んでしまう前に",
    link: "https://aki.cat",
  },
  {
    name: "Rikkaの小小窝",
    description: "早上好哦(つω`*)～☆",
    link: " https://rikka.im",
  },
  {
    name: "MBRjun-Blog",
    description: "我们生活在大地上，但我们的梦想超越天空",
    link: "https://www.mbrjun.cn/",
  },
];

export const GRAY_MODE: boolean = false;
