---
title: 使用 DNS 来传播自己的 PGP 证书指纹
pubDatetime: 2024-01-30T02:13:39+08:00
modDatetime: 2024-01-30T10:26:00+08:00
slug: use-dns-to-publish-pgp-public-key
tags:
  - openpgp
  - dns
  - 整活
description: 使用 DNS 来传播自己的 PGP 证书指纹
---

半夜的突然想法，于是我看到了[这篇文章](https://www.gushi.org/make-dns-cert/howto.html)

所以我就搞了一个小的TXT记录和一个大的CERT记录上去

现在 `neko._pka.jvav.me` 里有一个记录了 PGP 证书 ID 和证书 URI 的 TXT 记录

`jvav.me` 里有一个记录了完整 PGP 证书信息和签名的 CERT 记录

你现在也可以从 https://blog.jvav.me/pubkey.txt 下载到我的 PGP 证书

使用 `gpg --auto-key-locate cert --locate-keys neko@jvav.me` 指令就会尝试从 CERT 记录中获取证书

使用 `gpg --auto-key-locate wkd --locate-keys neko@jvav.me` 指令就会尝试从 TXT 记录中获取证书信息

后面发现还有一个 `OPENPGPKEY` 记录, 不过看了一眼 Cloudflare 不支持这个记录, 不管了

顺便还看到一篇文章，懒得细说了就贴在这了: https://gnupg.org/blog/20161027-hosting-a-web-key-directory.html
