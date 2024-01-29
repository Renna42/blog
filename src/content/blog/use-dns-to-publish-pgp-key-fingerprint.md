---
title: 使用 DNS 来传播自己的 PGP 证书指纹
pubDatetime: 2024-01-30T02:13:39+08:00
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
