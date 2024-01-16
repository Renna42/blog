import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialObject = {
  name: keyof typeof socialIcons;
  href: string;
  linkTitle: string;
  active?: boolean;
};

export type FriendObject = {
  name: string;
  description: string;
  icon_file: string;
  socials?: SocialObject[];
  link: string;
  active?: boolean;
};
