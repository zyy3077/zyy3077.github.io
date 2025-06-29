---
title: Welcome to my blog
---

## About
- 你好，我叫赵圆圆，是一个喜欢猫的学生。
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

|             | 周一          | 周二               | 周三                 | 周四               | 周五                |
|-------------|---------------|-------------------|----------------------|--------------------|--------------------|
| 08:00-09:50 |               | -                 |                      |                    | 生物标本制作与艺术   |
| 10:10-12:00 | 算法设计与分析 |                   | 数字图像处理          | -                  | 生物标本制作与艺术   |
| 13:00-14:50 | -             |                   | 算法设计与分析        |                    | 算分小班            |
| 15:10-17:00 |               | 篮球              | 代数结构与组合数学    | 认知科学            |  数字图像处理（单）  |
| 17:10-18:00 |               |                   | 代数结构与组合数学    |                    |                    |
| 18:40-20:30 |               |                   | -                   | 中国古典园林赏析     |                    |



<!-- Posts Section -->
## Posts
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>
