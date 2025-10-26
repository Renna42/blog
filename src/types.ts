export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialObject = {
  icon: string;
  href: string;
  linkTitle: string;
  active?: boolean;
};

export type FriendObject = {
  name: string;
  description: string;
  link: string;
};
