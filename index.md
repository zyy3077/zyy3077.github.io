---
title: Welcome to my blog
---

## About
- 你好，我叫赵媛媛，是一个喜欢猫的学生。
- 目前就读于北京大学信息科学技术学院，计算机科学与技术专业。
- 好像放假了！

## Education
### Peking University
- Computer Science
- September 2023 - Present

### No.2 High School of ECNU
- 2302
- September 2020 - June 2023
  
## Weekday Schedule

|             | 周一             | 周二               | 周三                 | 周四               | 周五               |
|-------------|-----------------|-------------------|----------------------|--------------------|--------------------|
| 08:00-09:50 |                 | -                 | 计算机网络            |                    |                    |
| 10:10-12:00 | 计算机网络       |                   | 操作系统（实验班）    |                     |                    |
| 13:00-14:50 | 操作系统（实验班）|                   |                     | 连接世界的通信       |                    |
| 15:10-17:00 |                 |                   |                     | 计算机组织与体系结构  |                    |
| 17:10-18:00 |                 |                   |                     | 计算机组织与体系结构  |                    |
| 18:40-20:30 | 认识中国的方法    | 习概              | 人类学导论           |                     |                    |



<!-- Posts Section -->
## Posts
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>
