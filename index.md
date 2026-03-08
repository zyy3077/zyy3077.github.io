---
title: Welcome to my blog
---

## About
- 你好，我叫赵媛媛，是一个喜欢猫的学生。
- 目前就读于北京大学信息科学技术学院，计算机科学与技术专业。

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
| 08:00-09:50 |                 | -                 | 并行与分布式计算导论            |                    |                    |
| 10:10-12:00 |       |                   | 羽毛球提高班    |        软件工程（实验班）             |    并行与分布式计算导论                |
| 13:00-14:50 | 人类的性、生育与健康|    博物学导论               |    编译原理（实验班）| 连接世界的通信       |   编译原理（实验班）                 |
| 15:10-17:00 |                 |                   |                     | 计算机组织与体系结构  |                    |
| 18:40-20:30 | 软件工程（实验班）    | 运动损伤预防与处理               |         |    文学中的爱情                 |                    |



<!-- Posts Section -->
## Posts
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>
