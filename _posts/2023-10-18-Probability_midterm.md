---
layout: post
title: "2024fall-信息学中的概率统计-期中复习"
date: 2024-10-18
categories: [Probability_for_Computing, 2024fall]
tags: [academic, blog]
---

<style>
    /* 在这里定义你的样式 */
    body {
        background-color: #f0f0f0;  /* 背景颜色 */
        color: dimgray;             /* 字体颜色 */
        font-family: 'Cayman', sans-serif; /* 字体样式 */
        margin: 0;                /* 页边距 */
    }
    @media (min-width: 1200px) {
        body {
            margin: 20%; /* 大屏幕 */
        }
    }
    @media (max-width: 1199px) {
        body {
            margin: 10%; /* 中屏幕 */
        }
    }
    h1 {
        font-size: 2em;            /* 标题字体大小 */
    }
    p {
        font-size: 1.2em;            /* 段落字体大小 */
    }

    code, pre { 
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 2; /* Adjust line height to avoid overlapping */
    white-space: pre-wrap; /* Wrap lines to avoid horizontal scrolling */
    word-wrap: break-word; /* Break long words to fit within the container */
    max-height: 600px;         /* 设置最大高度 */
    
    overflow: auto; /* Add scrollbars when needed */
    padding: 10px; /* Add padding for better readability */
    background-color: #f5f5f5; /* Light background color for contrast */
    
    border-radius: 5px; /* Rounded corners for aesthetics */
  }
</style>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['$$', '$$']],
      processEscapes: true
    }
  });
</script>
<script type="text/javascript" async 
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

# 期中复习
## Contents
- 课堂内容总结
- 作业题题解


### 1. 概率论的基本概念
作业证明题题解：

### 2. 古典概率模型
**球与桶模型**<br>
有 \\(n\\) 个球，每个球都等可能被放到 \\(m\\) 个桶中的任一个。求每个桶中至多有一个球的概率。
- 样本点数量： \\(m^n\\)
- 放法： \\(m(m-1)⋯(m-n+1)\\)

$$ 
    P_{n,m} = (1- \frac{1}{m})(1-\frac{2}{m})...(1-\frac{n-1}{m})
$$

$$
    \ln(P_{n,m}) = \ln(1-\frac{1}{m}) + \ln(1-\frac{2}{m})+...+\ln(1-\frac{n-1}{m})
$$

由 \\(\ln(1+x) \leq x\\) 得：

$$
    P_{n,m} \leq e^{-\frac{(n-1)n}{2m}}
$$

**作业一第三题**<br>
证明：
$$
    P_{n,m} \geq e^{-\frac{(n-1)n}{2m}}(1-\frac{8n^3}{m^2})
$$

- 提示： \\(x < \frac{1}{2}\\) 时，有 \\(\ln(1-x) \geq -x-x^2\\)

证明思路：因为提示中出现1/2，且待证式子中出现常数8，想到分 \\(m \leq 2n\\) 和 \\(m > 2n\\)两种情况。
- 第一种， \\(LHS \geq 0 \geq RHS\\) 
- 第二种，带入提示中不等式和平方求和公式
\\(\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}\\)进行方所即可。

### 3. 几何概率模型
\\(P(A) = \frac{m(A)}{m(S)}\\) ，其中 \\(S\\) 为样本空间， \\(m\\) 为度量

### 4. 概率的性质
- 非负性： \\(P(A) \in [0, 1]\\)
- 规范性： \\(P(S) = 1\\)
- 有限可加性：对互不相容事件\\(A_i\\)有
  \\(P(\bigcup_{i} A_i) = \sum_{i} P(A_i)\\)

### 4. 概率的公理化
- 非负性：\\(\forall A \in F, P(A) \geq 0\\)
- 规范性：\\(P(S) = 1\\)
- 可列可加性：对互不相容事件 \\(A_1, A_2, A_3, ...\\) 有
  \\(P(\bigcup_{i}^{+\infty}A_i) = \sum_{i=1}^{+\infty}P(A_i)\\)

**一般加法公式**
$$
    P(\bigcup_{i=1}^{n}A_i) = \sum_{i=1}^{n}P(A_i) - \sum_{1 \leq i < j \leq n}P(A_i A_j)+\sum_{1 \leq i < j < k \leq n}P(A_i A_j A_k) + ... +(-1)^{n-1}P(A_1 A_2...A_n)
$$
**例题：错排问题**<br>
有 \\(n\\) 个有编号的球，将他们随机打乱，使得每种排列均等概率出现。求随机打乱后，至少有一个球位置没有改变的概率。<br>
解：先求1个球位置没有改变的概率；再求2个球位置没有改变的概率...求 \\(n\\) 个球位置没有改变的概率；最后使用一般加法公式即可。

**Union Bound**<br>
$$
    P(\bigcup_{i=1}^{n}A_i) \leq \sum_{i=1}^{n}P(A_i)
$$
**例题：球与桶模型**<br>
有 \\(n\\) 个球，每个球都等可能被放到 \\(m\\) 个桶中的任一个。求每个桶中至多有一个球的概率。<br>
解：指定两个球被放入一个桶中的概率 \\(P = \frac{1}{m}\\) <br>
由Union Bound：存在两个球被放入一个桶中的概率 \\(P \leq \binom{n}{2} \cdot \frac{1}{m}\\) <br>
故 \\(P_{n,m} = 1 - P \geq 1 - \frac{(n-1)n}{2m}\\).

**有限可加性&可列可加性**

可列可加性 \\(\Rightarrow\\) 有限可加性

有限可加性 \\(\nRightarrow\\) 可列可加性

- 反例： \\(S=[0, \infty), P(A) = \lim_{k \to \infty}\frac{1}{k} \lambda(A \cap (0,k)), A_i = [i-1, i)\\) ，其中 \\(\lambda(A)\\) 为 \\(A\\) 的长度。满足有限可加性，不满足可列可加性。

### 5. 条件概率
$$
    P(A|B) = \frac{P(AB)}{P(B)}
$$
**乘法公式**<br>
$$
    P(A_1 A_2...A_n) = P(A_1)P(A_2 |A_1)...P(A_n |A_1 A_2...A_{n-1})
$$
**全概率公式**
