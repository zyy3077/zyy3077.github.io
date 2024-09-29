---
title: Welcome to my blog
---


## About
- 你好，我叫赵圆圆，是一个喜欢猫和打球的学生。
- 目前就读于北京大学信息科学技术学院，计算机科学与技术专业。
- 最近忙于ics和练球。

## Education
### Peking University
- Computer Science
- September 2023 - Present
  
### No.2 High School of ECNU
- 2302
- September 2020 - June 2023

## Schedule
<!-- Posts Section -->
## Posts
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>
