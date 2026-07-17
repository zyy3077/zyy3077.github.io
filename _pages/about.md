---
layout: about
title: about
permalink: /
nav: false
subtitle:

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<canvas id="leo-constellation-bg" aria-hidden="true"></canvas>
<script defer src="{{ '/assets/js/leo-constellation.js' | relative_url | bust_file_cache }}"></script>

<style>
  #leo-constellation-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    display: block;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }

  html {
    min-height: 100%;
    background: var(--global-bg-color);
  }

  body.leo-constellation-page {
    background: transparent;
    isolation: isolate;
  }

  body.leo-constellation-page header,
  body.leo-constellation-page main,
  body.leo-constellation-page footer {
    position: relative;
    z-index: 1;
  }

  body.leo-constellation-page .post {
    position: relative;
  }

  .contact-icons {
    overflow: visible;
  }

  .contact-icons a[title="WeChat"] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .contact-icons a[title="WeChat"]::before {
    content: "";
    position: absolute;
    bottom: calc(100% + 0.85rem);
    left: 50%;
    z-index: 20;
    width: 11rem;
    height: 14rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    background: var(--global-bg-color) url("{{ '/assets/img/wechat-qr.jpg' | relative_url }}") center / contain no-repeat;
    box-shadow: 0 0.75rem 2rem rgb(0 0 0 / 18%);
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%) translateY(0.25rem);
    transition:
      opacity 160ms ease,
      transform 160ms ease;
  }

  .contact-icons a[title="WeChat"]::after {
    content: "";
    position: absolute;
    bottom: calc(100% + 0.45rem);
    left: 50%;
    z-index: 21;
    width: 0.75rem;
    height: 0.75rem;
    border-right: 1px solid var(--global-divider-color);
    border-bottom: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%) rotate(45deg);
    transition: opacity 160ms ease;
  }

  .contact-icons a[title="WeChat"]:hover::before,
  .contact-icons a[title="WeChat"]:focus-visible::before {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .contact-icons a[title="WeChat"]:hover::after,
  .contact-icons a[title="WeChat"]:focus-visible::after {
    opacity: 1;
  }

  @media (max-width: 576px) {
    .contact-icons a[title="WeChat"]::before {
      width: 9rem;
      height: 11.5rem;
    }
  }
</style>

👋 Hi! I'm **Yuanyuan Zhao (赵媛媛)**, a third-year undergraduate student majoring in Computer Science at the School of Electronics Engineering and Computer Science ([EECS](https://eecs.pku.edu.cn/)), Peking University. I'm fortunate to be advised by Prof. [Zhi Yang](https://yangzhihome.github.io/).

🌱 I'm passionate about machine learning systems and am currently exploring:

- 🤖 Machine Learning Systems & Distributed Systems
- ⚡ GPU Kernel Optimization & Performance Profiling
- 🛠️ AI Compilers & Domain-Specific Languages (DSLs)

🚀 I'm currently contributing to [**TileLang**](https://github.com/tile-ai/tilelang), a domain-specific language for developing high-performance GPU kernels, as well as its distributed extension [**TileScale**](https://github.com/tile-ai/tilescale).
