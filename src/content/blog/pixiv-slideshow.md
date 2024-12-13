---
title: Pixiv 的随机背景
pubDatetime: 2024-12-14T02:12:50+08:00
slug: pixiv-slideshow
description: 对 Pixiv 未登录页面的背景幻灯片的分析
---

在桌面端的 Pixiv 上, 未登录时页面背景会有一个循环播放的幻灯片, 但是从 DevTools 中查看是看不到有一个专门的用于获取这些图片数据的接口

我们注意到，一个名为 bundle.js 的脚本文件的路径中包含着 `background-slideshow`

这个脚本会从一个 id 为 `init-config` 的 元素中获取幻灯片信息

但直接搜索的话是搜不到这个元素的，细看之后会发现这个脚本还会在加载完毕之后将 `init-config` 从 DOM 中移除出去

简单写一个脚本:

```python
from html.parser import HTMLParser
import json

import requests


class PixivHTMLParser(HTMLParser):
    def __init__(self, *, convert_charrefs=True):
        super().__init__(convert_charrefs=convert_charrefs)
        self.pixiv_init_config = None

    def handle_starttag(self, tag, attrs):
        if ("id", "init-config") in attrs:
            for k, v in attrs:
                if k == "value":
                    self.pixiv_init_config = json.loads(v)


parser = PixivHTMLParser()

r = requests.get("https://www.pixiv.net")
parser.feed(r.text)
print(json.dumps(parser.pixiv_init_config, ensure_ascii=False, indent=2))
```
