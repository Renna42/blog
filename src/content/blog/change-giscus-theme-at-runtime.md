---
title: 运行时修改 giscus 主题
pubDatetime: 2024-01-16T03:10:00+08:00
slug: change-giscus-theme-at-runtime
tags:
  - giscus
description: 在不重新加载整个 giscus 的 iframe 的情况下修改主题
---

giscus 在这个网站上看起来运作的很好, 直到点了下右上角切换到了深色模式…

它依旧还是原先的明亮主题

于是翻了半天代码之后，发现可以通过 `postMessage()` 的方式在不重载 iframe 的情况下修改配置

```javascript
document.querySelectorAll("iframe.giscus-frame")?.forEach(frame => {
  frame.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: "dark",
        },
      },
    },
    "https://giscus.app"
  );
});
```

通过上面这段代码，就可以优雅的在运行时修改 giscus 的主题了/

其实不止可以改主题，但更具体的就看[源码](https://github.com/giscus/giscus/blob/main/lib/types/giscus.ts#L59)了
