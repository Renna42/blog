import type { Site, SocialObject, FriendObject } from "./types";

export const SITE: Site = {
  website: "https://blog.izumino.cat/", // replace this with your deployed domain
  author: "泉野咲",
  desc: "这里是泉野",
  title: "Izumino's Blog",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS: SocialObject[] = [
  {
    icon: "fa-brands fa-twitter",
    href: "https://twitter.com/HMur233",
    linkTitle: "Twitter",
  },
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/HuajiMUR233",
    linkTitle: "GitHub",
  },
  {
    icon: "fa-regular fa-envelope",
    href: "mailto:saki@izumino.cat",
    linkTitle: "E-Mail",
  },
];

export const FRIENDS: FriendObject[] = [
  {
    name: "雨山秋",
    description: "僕を連れてって浸み込んでしまう前に",
    icon_file: "aki.jpg",
    socials: [
      {
        icon: "fa-brands fa-twitter",
        href: "https://twitter.com/Ameyama_aki",
        linkTitle: "Twitter"
      }
    ],
    link: "https://aki.cat",
  },
  {
    name: "雨落",
    description: "二分之一少女，乘着比特流环游世界~",
    icon_file: "qyl.png",
    socials: [
      {
        icon: "fa-brands fa-github",
        href: "https://github.com/qyl27",
        linkTitle: "Github",
      },
    ],
    link: "https://blog.rain.cx",
  },
  {
    name: "Rikka",
    description: "早上好哦(つω`*)～☆",
    icon_file: "rikka.webp",
    link: " https://rikka.im",
  },
  {
    name: "MBRjun",
    description: "我们生活在大地上，但我们的梦想超越天空",
    icon_file: "mbr.jpg",
    link: "https://www.mbrjun.cn/",
  },
  {
    name: "白雲",
    description: "no code no life",
    icon_file: "whitecloud.png",
    socials: [
      {
        icon: "fa-brands fa-twitter",
        href: "https://twitter.com/philly030",
        linkTitle: "Twitter"
      },
      {
        icon: "fa-brands fa-bluesky",
        href: "https://bsky.app/profile/whitecloud.life",
        linkTitle: "Bluesky"
      },
      {
        icon: "fa-brands fa-github",
        href: "https://github.com/phillychi3",
        linkTitle: "Github"
      }
    ],
    link: "https://bento.me/whitecloud",
  },
  {
    name: "Empty SEKAI",
    description: "一只游荡在无人 SEKAI 的小白葱",
    icon_file: "prprnya.jpg",
    socials: [
      {
        icon: "fa-brands fa-github",
        href: "https://github.com/prprnya",
        linkTitle: "Github",
      },
      {
        href: "https://nightcord.de/@miku",
        linkTitle: "Mastodon",
        icon: "fa-brands fa-mastodon",
      },
    ],
    link: "https://prpr.rip",
  },
];

export const GRAY_MODE: boolean = false;
