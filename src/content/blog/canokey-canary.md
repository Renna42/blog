---
title: CanoKey Canary 上手体验
pubDatetime: 2025-01-28T23:55:43+08:00
slug: canokey-canary
description: 139 元, 要啥自行车
---

其实去年就已经买了这个 CanoKey Canary 了, 但一直不知道咋用好就丢在旁边闲置了许久

正好最近日用系统换到了 Linux, 就研究了下它的一些功能

## Basic

购买的是 "尝鲜版" 价格是 139 人民币

到手的固件版本是 3.0.0, 但似乎这个版本的固件有些 Bug 于是卖的便宜些

官方说 iOS 上无法通过 Type-C 口连接使用, 但我在一台 iPhone 15 上尝试使用它登录 Github 的时候居然是能用的, 也没去细究原因了

## PAM

我使用了 Yubico 提供的 [pam-u2f](https://developers.yubico.com/pam-u2f) 来作为 PAM 认证模块

安装完成后, 使用 `pamu2fcfg` 进行 U2F 注册, 将输出的内容写入到 `~/.config/Yubico/u2f_keys` 完成注册

因为图省事, 所以直接在 `/etc/pam.d/system-auth` 中写了条 `auth sufficient pam_u2f.so cue`

日常的话, sddm 在密码输入框直接回车并触摸一下密钥即可完成认证, PolicyKit 和 KDE 锁屏都是可以调用安全密钥的

## OpenPGP

*WIP*

## 总结

虽然 Bug 还是有一些的, 但正常使用环境下基本碰不到, 功能在同价格中也差不多是最全的了

但文档并不是很清晰, 很多功能的使用方式都没有罗列出来

控制台用起来并不是很舒适, 并且有部分功能只有在旧版的控制台中可用, 不清楚是因为弃用了还是 WIP

总之, 139 元, 要啥自行车
