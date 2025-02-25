---
title: FVM 配置使用镜像
pubDatetime: 2025-02-24T09:53:38+08:00
slug: fvm-use-mirror
description: 为 FVM 配置 Flutter SDK 镜像
---

FVM 是一个 Flutter SDK 的版本管理工具, 但它下载 Flutter SDK 时会直接从 Github 克隆整个 repo

翻了下 FVM 的文档，发现可以用 `FVM_FLUTTER_URL` 环境变量来配置 Flutter SDK 的 Git repo URL

这里使用 TUNA 的镜像仓库

```bash
export FVM_FLUTTER_URL="https://mirrors.tuna.tsinghua.edu.cn/git/flutter-sdk.git"
```
