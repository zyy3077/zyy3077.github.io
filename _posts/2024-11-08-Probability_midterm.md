---
layout: post
title: "2024fall-信息学中的概率统计-期中复习"
date: 2024-11-8
categories: [Probability_for_Computing, 2024fall]
tags: [academic, blog]
---
<link rel="stylesheet" type="text/css" href="/assets/css/styles.css">
<script type="text/javascript" src="/assets/js/scripts.js"></script>
<script type="text/javascript" async 
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

# 期中复习
*前八周内容（到多维离散随机变量）*

*这次期中偏重基础，题目风格与作业题类似，题量较大，如果很顺地做下来是来得及的。但显然我没有。*


## Contents
- 课堂内容总结
- 作业题题解

---

## 一、概率论的基本概念与模型

### 1. 古典概率模型
**球与桶模型**

有 $n$ 个球，每个球都等可能被放到 $m$ 个桶中的任一个。求每个桶中至多有一个球的概率。
- 样本点数量： $m^n$
- 放法： $m(m-1)⋯(m-n+1)$

$$ 
    P_{n,m} = (1- \frac{1}{m})(1-\frac{2}{m})...(1-\frac{n-1}{m})
$$

$$
    \ln(P_{n,m}) = \ln(1-\frac{1}{m}) + \ln(1-\frac{2}{m})+...+\ln(1-\frac{n-1}{m})
$$

- 由 $\ln(1+x) \leq x$ 得：

$$
    P_{n,m} \leq e^{-\frac{(n-1)n}{2m}}
$$

**作业一第三题**

证明：
$$
    P_{n,m} \geq e^{-\frac{(n-1)n}{2m}}(1-\frac{8n^3}{m^2})
$$

- 提示： $x < \frac{1}{2}$ 时，有 $\ln(1-x) \geq -x-x^2$

证明思路：因为提示中出现$\frac{1}{2}$，且待证式子中出现常数$8$，想到分 $m \leq 2n$ 和 $m > 2n$两种情况。
- 第一种， $LHS \geq 0 \geq RHS$ 
- 第二种，带入提示中不等式和平方求和公式
$\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$进行方所即可。

### 2. 几何概率模型
$P(A) = \frac{m(A)}{m(S)}$ ，其中 $S$ 为样本空间， $m$ 为度量

### 3. 概率的性质
- 非负性： $P(A) \in [0, 1]$
- 规范性： $P(S) = 1$
- 有限可加性：对互不相容事件$A_i$有
  $P(\bigcup_{i} A_i) = \sum_{i} P(A_i)$

### 4. 概率的公理化
- 非负性：$\forall A \in F, P(A) \geq 0$
- 规范性：$P(S) = 1$
- 可列可加性：对互不相容事件 $A_1, A_2, A_3, ...$ 有
  $P(\bigcup_{i}^{+\infty}A_i) = \sum_{i=1}^{+\infty}P(A_i)$

**有限可加性&可列可加性**

可列可加性 $\Rightarrow$ 有限可加性

有限可加性 $\nRightarrow$ 可列可加性

- 反例： $S=[0, \infty), P(A) = \lim_{k \to \infty}\frac{1}{k} \lambda(A \cap (0,k)), A_i = [i-1, i)$ ，其中 $\lambda(A)$ 为 $A$ 的长度。满足有限可加性，不满足可列可加性。

**一般加法公式**

$$
    P(\bigcup_{i=1}^{n}A_i) = \sum_{i=1}^{n}P(A_i) - \sum_{1 \leq i < j \leq n}P(A_i A_j)+\sum_{1 \leq i < j < k \leq n}P(A_i A_j A_k) + ... +(-1)^{n-1}P(A_1 A_2...A_n)
$$

**例题1：错排问题**

有 $n$ 个有编号的球，将他们随机打乱，使得每种排列均等概率出现。求随机打乱后，至少有一个球位置没有改变的概率。
- 先求1个球位置没有改变的概率
- 再求2个球位置没有改变的概率
- ...
- 求 $n$ 个球位置没有改变的概率
- 最后使用一般加法公式即可

**例题2：所有点数**

掷骰子$n$次，求所有点数均出现过的概率。
- 计算1个点数$i$没有出现过的概率$P(A_i)$
- 计算2个点数$i, j$没有出现过的概率$P(A_i A_j)$
- ...
- 用一般加法公式计算存在点数没有出现过的概率$P(\bigcup_{i=1}^{6} P(A_i))$
- $\bar{P} = 1 - P$

**Union Bound**

$$
    P(\bigcup_{i=1}^{n}A_i) \leq \sum_{i=1}^{n}P(A_i)
$$

**例题：球与桶模型**

有 $n$ 个球，每个球都等可能被放到 $m$ 个桶中的任一个。求每个桶中至多有一个球的概率。
- 指定两个球被放入一个桶中的概率 $P = \frac{1}{m}$ 
- 由Union Bound：存在两个球被放入一个桶中的概率 $P \leq \binom{n}{2} \cdot \frac{1}{m}$
- 故 $P_{n,m} = 1 - P \geq 1 - \frac{(n-1)n}{2m}$.

### 5. 条件概率

$$
    P(A\mid B) = \frac{P(AB)}{P(B)}
$$

**乘法公式**

$$
    P(A_1 A_2...A_n) = P(A_1)P(A_2 \mid A_1)...P(A_n \mid A_1 A_2...A_{n-1})
$$

**全概率公式**
- 划分：互不相容且并集为全集
- 事件$B_1, B_2, ..., B_n$为$S$的划分

$$
    P(A) = \sum_{i=1}^{n}P(B_i)\cdot P(A\mid B_i)
$$

**贝叶斯公式**

$$
    P(A\mid B) = P(B\mid A) \cdot \frac{P(A)}{P(B)}
$$

### 6. 事件的独立性
- 事件$A$与$B \text{相互独立} \Leftrightarrow P(AB) = P(A)P(B)$，即当$P(B) > 0 $时，$ P(A\mid B) = P(A)$
- 对于$n$个事件$A_1, A_2, ..., A_n$，如果对于${1, 2, ..., n}$的任意子集$I$，都有$P(\bigcap_{i \in I} A_i) = \prod_{i \in I} P(A_i)$，则称$A_1, A_2, ..., A_n$相互独立
- $n$重伯努利试验：独立进行$n$次某个只有两个可能结果的随机试验
- 两两独立/相互独立

**例题：两两认识**

在随机图模型中，事件$E_{ijk}$表示$i, j, k$三人两两认识。何时有$E_{abc}$与$E_{def}$独立？
- $P(E_{abc}) = P(E_{def}) = (\frac{1}{2})^3$
- 由独立性：$P(E_{abc} E_{def}) = (\frac{1}{2})^6$
- 即图中$a, b, c$和$d, e, f$生成子图（均为完全图$K_3$）中边数和为$6$
- 即这六个点有至少五个不重复的点，即至多两个点相同
  
---

## 二、离散随机变量
- 随机变量$X: S \rightarrow \mathbb{R}$为定义在样本空间$S$上的实值函数，提供了样本空间$S$的一个划分
- 概率分布列$P(X = k)$
  
### 1. 离散随机变量的数学期望
- 对于离散随机变量$X$，若$ \sum_{i} \vert  x_i p_i\vert   < \infty $，即绝对收敛，则$X$的数学期望$E(X) = \sum_{i}x_i p_i$
  - 如果不满足绝对收敛，那么将“由于更改求和次序从而收敛到任何实数”，数学期望不存在
- $E(g(X)) = \sum_{i}p_i g(x_i)$
- $P(X \geq E(X)) > 0$
- $P(X \leq E(X)) > 0$ 

**例题**

有$n$个人，其中有$m$对人认识，证明：总可以将$n$个人分为两组，且有至少$\frac{m}{2}$对属于不同组的人认识。
- 将每个人等概率地加入第一组和第二组， 用随机变量$X$表示属于不同组且认识的人的对数。
- $E(X) = \sum_{e \in S} \frac{X(e)}{2^n}$
- 对于每一对认识的人，有多少个样本点（分组方式）满足两个人属于不同组：$2^{n-1}$
- $\sum_{e \in S} X(e) = m \cdot 2^{n-1}$
- $E(X) = \frac{m}{2}$
- $P(X \geq \frac{m}{2}) > 0 $，即存在分组方式满足题意

**马尔可夫不等式**

若$X$为非负随机变量，对于$a > 0$，有

$$
    P(X\geq a\cdot E(X)) \leq \frac{1}{a}
$$

- 证明：

$$
\begin{align*}
    E(X) &= \sum_{i} x_i \cdot p_i \\ 
    &\geq \sum_{x_i \geq a \cdot E(X)} x_i \cdot p_i  \\ 
    &\geq \sum_{x_i \geq a \cdot E(X)} a\cdot E(X)\cdot p_i  \\ 
    &= a\cdot E(X) \cdot P(X \geq a \cdot E(X))
\end{align*}
$$

- 不等式成立条件：$E(X) > 0 $



**作业二第一题**
- 构造出取等条件，说明不存在更强的不等式

**作业二第五题**

**作业二第六题**

### 2. 离散随机变量的方差
- 给定随机变量$X$，若$E[(X-E(X))^2]$存在，定义$Var(X) = E[(X-E(X))^2]$为$X$的方差
- 定义$\sigma (X) = \sqrt{Var(X)}$

$$
    Var(X) = E(X^2) - (E(X))^2
$$

**切比雪夫不等式**

若$\sigma(X) > 0 $，对于任意$c > 0$，

$$
    P(\vert X - E(X) \vert \geq c \cdot \sigma(X)) \leq \frac{1}{c^2}
$$

- 证明：对于随机变量$Y=(X-E(X))^2$使用马尔可夫不等式即可得证

**例题：优秀率**

随机变量$X$表示一名随机的学生的成绩，$E(X) = 70, \sigma(X) = 5$，$90$分及以上为优秀，利用马尔可夫不等式和切比雪夫不等式给出优秀率的上界。
- 马尔可夫不等式：$P(X \geq 90) = P(X \geq \frac{9}{7} \cdot E(X)) \leq \frac{7}{9}$
- 切比雪夫不等式：$P(X \geq 90) \leq P(\vert X - E(X) \vert \geq 4 \cdot \sigma(X)) \leq \frac{1}{16}$
- 上式中第一个等号是因为绝对值导致不仅有$90$分及以上，还有$50$分及以下，后者的概率非负

**作业二第五题**

给定离散随机变量$X$，假设其期望$E(X)$和标准差$\sigma (X)$均存在。对于任意实数$m$，若满足$P(X\geq m)\geq \frac{1}{2}$
且$P(X \leq m)\geq \frac{1}{2}$，证明$\vert E(X)- m \vert \leq \sqrt{2} \sigma$。
- 结合切比雪夫不等式反证
- 特殊考虑$\sigma (X) = 0$的情况


    
### 3. 常用离散分布

**二项分布$B(n,p)$**
- $n$重伯努利试验中$A$发生的次数，取非负整数
- $P(X=k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{1-k}$

$$
\begin{align*}
    E(X) &= \sum_{k=0}^{n} \binom{n}{k} \cdot p^k \cdot (1-p)^k \cdot k \\
    \text{由组合数性质：}\binom{n}{k} k &= \binom{n-1}{k-1} n \\
    E(X) &= np \\
    E(X^2) &= \sum_{k=0}^{n} \binom{n}{k} \cdot p^k \cdot (1-p)^k \cdot k^2 \\
    \text{拆项：}k^2 &= k(k-1) + k \\
    \text{由组合数性质：}\binom{n}{k} k(k-1) &= \binom{n-2}{k-2} n(n-1) \\
    E(X^2) &= n(n-1)p^2 + np \\
    Var(X) &= E(X^2) - (E(X))^2 = np(1-p) \\ 
    \sigma (X) &= \sqrt{np(1-p)}
\end{align*}
$$

- 球与桶模型中特定桶中球的数量，即球被放入这个桶这一事件发生的次数$X_i \sim  B(n, \frac{1}{m})$
- 考虑$n=\lambda m$，$\lambda$为常数，即期望为定值，且$m \to \infty$的情况
  
$$
\begin{align*}
    P(X_i = k) &= \binom{n}{k} \cdot (\frac{1}{m})^k \cdot (1-\frac{1}{m})^{n-k}\\ 
    &= \frac{n(n-1)...(n-k+1)}{k!}\cdot (\frac{1}{m})^k\cdot (1-\frac{1}{m})^{n-k}\\ 
    &= \frac{1}{k!} \cdot \frac{n}{m} \cdot \frac{n-1}{m} \cdot ... \cdot \frac{n-k+1}{m} \cdot (1-\frac{1}{m})^{n-k}\\ 
    \text{最后一项化为}e^{-\lambda}\text{可得：}
    &\approx \frac{1}{k!} \cdot \lambda ^k \cdot e^{-\lambda}
\end{align*}
$$

**泊松分布$\pi(\lambda)$**
- 二项分布的极限
- 随机变量$X$取非负整数
- $P(X=k) = \frac{1}{k!} \cdot \lambda ^k \cdot e^{-\lambda}$，其中$\lambda > 0$
- 即当$n \to \infty$时$E(X) = np_n = \frac{n}{m}$为常数$\lambda$的二项分布
- 泊松分布的现实意义见：[zhihu-泊松分布的现实意义是什么，为什么现实生活多数服从于泊松分布？](https://www.zhihu.com/question/26441147/answer/429569625)
- **二项分布与泊松分布**
  - *二项分布是说，已知某件事情发生的概率是$p$，那么做$n$次试验，事情发生的次数就服从于二项分布。*
  - *泊松分布是指某段连续的时间内某件事情发生的次数，而且“某件事情”发生所用的时间是可以忽略的。*
  - *例如，在五分钟内，电子元件遭受脉冲的次数，就服从于泊松分布。假如你把“连续的时间”分割成无数小份，那么每个小份之间都是相互独立的。在每个很小的时间区间内，电子元件都有可能“遭受到脉冲”或者“没有遭受到脉冲”，这就可以被认为是一个$p$很小的二项分布。而因为“连续的时间”被分割成无穷多份，因此$n$(试验次数)很大。所以，泊松分布可以认为是二项分布的一种极限形式。因为二项分布其实就是一个最最简单的“发生”与“不发生”的分布，它可以描述非常多的随机的自然界现象，因此其极限形式泊松分布自然也是非常有用的。*


$$
\begin{align*}
    E(X) &= \sum_{k\geq 0} \frac{1}{k!}\cdot e^{-\lambda}\cdot k\\ 
    &= e^{-\lambda} \cdot \sum_{k\geq 1} \frac{1}{(k-1)!}\cdot \lambda^{k}\\ 
    &= e^{-\lambda} \cdot \lambda \sum_{k\geq 1} \frac{1}{(k-1)!}\cdot \lambda^{k-1}\\ 
    &= \lambda \ \ \text{与泊松分布的条件一致}\\ 
    E(X^2) &= \sum_{k \geq 0} \frac{1}{k!}\cdot \lambda^k \cdot e^{-\lambda}\cdot k^2 \\ 
    \text{拆项：}k^2 &= k(k-1) + k \\
    E(X^2) - E(X) &= \lambda^2\\ 
    E(X^2) &= \lambda^2 + \lambda \\
    Var(X) &= E(X^2) - (E(X))^2 \\
    &= \lambda^2 + \lambda - \lambda^2 \\
    &= \lambda  \ \ \text{即趋于无穷时的二项分布方差}
\end{align*}
$$

**几何分布$G(p)$**
- 伯努利试验中首次发生结果$A$时的重复次数
- $k\geq 1, P(X=k) = p(1-p)^{k-1}$
- 无记忆性：$P(X > m+n \mid X > m) = P(X > n)$
- 构造函数$f$，通过求导求期望，求二阶导求方差
    - 作业二第二题

$$
\begin{align*}
    E(X) &= \sum_{k\geq 1} p(1-p)^{k-1}\cdot k\\
    \text{令}f(p) = \sum_{k\geq 1}(1-p)^k \text{，则}E(X) &= -p\cdot f'(p) \\ 
    \text{而}f(p) = \frac{1}{p}\text{，故}E(X) &= \frac{1}{p}\\ 
    E(X^2) &=  \sum_{k\geq 1} p(1-p)^{k-1}\cdot k^2 \\
    \text{拆项：}k^2 &= k(k-1) + k \\
    E(X^2) - E(X) &= p(p-1)\cdot \sum_{k\geq 1} k(k-1)(1-p)^{k-2} \\
    \text{则}E(X^2) &= p(1-p)f''(p) + \frac{1}{p} = \frac{2(1-p)}{p^2} + \frac{1}{p}\\
    Var(X) &= E(X^2) - (E(X))^2 = \frac{1-p}{p^2}  
\end{align*}
$$

**负二项分布$NB(r,p)$**
- 伯努利试验中结果$A$发生$r$次时的重复次数
- $k\geq r, P(X=k) = \binom{k-1}{r-1}p^r (1-p)^{k-r}$
- $r=1$时为几何分布
- 验证分布列和为$1$时，将$p^{-r}$二项式展开为$1-(1-p)$的形式
- 若$X \sim NB(r,p)$，则$X$可表示成$r$个服从$G(p)$的随机变量之和，即第一次出现时的重复次数、第二次出现时的重复次数（从第一次出现之后算起）...

---

## 三、连续随机变量
### 1. 分布函数
- 给定随机变量$X$和实数$x$，随机变量$X$的分布函数定义为$F(x) = P(X \leq x)$
- 有界性：$0 \leq F(x) \leq 1, \lim_{x \to -\infty}F(x) = 0, lim_{x\to +\infty}F(x) = 1$
- 单调性：单调不减
- 右连续：$\forall x_0, F(x_0 + 0) = F(x_0)$，即从右侧接近任何点均不间断
    - 考虑单点分布$P(X=0) = 1$的分布函数，右连续却不左连续
    - $P(X=a) = F(a)-F(a-0)$
    - $P(a < X \leq b) = F(b) - F(a)$
    - $P(a \leq X \leq b) = F(b) - F(a-0)$
    - $P(X\geq a) = 1-F(a-0)$

### 2. 概率密度函数
- 对于随机变量$X$，若存在$f(x)$使得$F(x) = \int_{-\infty}^{x} f(t)dt $，则$X$为连续随机变量，$f(x)$为概率密度函数
- 非负性：$f(x)\geq 0$，由分布函数的单调性得出
- 正则性：$\int_{-\infty}^{+\infty}f(t)dt = 1$，由分布函数右极限得出
- 在$F(x)$导数存在的点，有$F'(x)=f(x)$
- 连续随机变量的分布函数$F(X)$一定是连续函数，$X$取任一点的概率均为$0$
  - $P(a < X \leq b) = P(a \leq X \leq b) = P(a < X < b) = P(a \leq X < b) = \int_{a}^{b}f(t)dt$ 
- $f(x)$和$F(x)$不一一对应，改变$f(x)$中有限个点不影响积分结果$F(x)$

### 3. 连续随机变量的数学期望
- 对于连续随机变量$X$，若$\int_{-\infty}^{+\infty}f(x)\vert x \vert dx < +\infty$，则数学期望为$\int_{-\infty}^{+\infty}f(x)\cdot x\cdot dx$
  - 如果不满足绝对可积，则以不同速率逼近正负无穷，得到的数学期望不同
  - 例题：$f(x) = \frac{1}{\pi}\cdot \frac{1}{1+x^2}$，求数学期望
- $E(g(x)) = \int_{-\infty}^{+\infty}f(x)\cdot g(x)\cdot dx$
- 与离散随机变量对比，对于连续随机变量$X$，$P(X\leq E(X))>0$是否依旧成立？
  - 成立，尽管$P(X< E(X)) = P(X \leq E(X))$，但连续随机变量不能取单点分布$P(X=E(X)) = 1$

**马尔可夫不等式**

若$X$为非负随机变量，对于$a > 0$，有

$$
    P(X\geq a\cdot E(X)) \leq \frac{1}{a}
$$

- 连续随机变量的证明与离散的情形类似，只需把求和号换成积分号即可，略
- 条件依旧是$X \geq 0,E(X) > 0$

### 4. 连续随机变量的方差
- 方差和标准差的定义与离散的情形相同

**切比雪夫不等式**

若$\sigma(X) > 0 $，对于任意$c > 0$，

$$
    P(\vert X - E(X) \vert \geq c \cdot \sigma(X)) \leq \frac{1}{c^2}
$$

- 与离散的情形相同

### 5. 常用连续分布

**均匀分布$U(a,b)$**
- 令随机变量$X$的取值范围为$(a,b)$，且当$x \in (a, b),f(x) = \frac{1}{b-a}$
  
$$
\begin{align*}
    E(X) &= \int_{a}^{b}t\cdot \frac{1}{b-a}dt = \frac{b-a}{2}\\
    E(X^2) &= \int_{b}^{a}t^2\cdot \frac{1}{b-a}dt = \frac{b^3-a^3}{2(b-a)}\\
    Var(X) &= E(X^2) - (E(X))^2 = \frac{(b-a)^2}{12}
\end{align*}
$$

**正态分布$N(\mu , \sigma^2)$**
- $\mu > 0, \sigma > 0$
- $f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
  - 对称性：关于$x=\mu$对称
  - 最大值：$f(\mu)$
  - 正则性：$y = \frac{x-\mu}{\sigma}, \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} e^{-\frac{y^2}{2}}\cdot dy = 1$
- 一般正态分布与标准正态（高斯）分布的联系
  - 若$X \sim N(\mu, \sigma^2)$，则$X$的标准化随机变量$U = \frac{X-\mu}{\sigma} \sim N(0,1)$
  - 数学期望和方差可由此导出：$E(X) = \mu, Var(X) = \sigma^2$
- 标准化随机变量：对于任意分布，随机变量$X$的标准化随机变量为$Y=\frac{X-\mu}{\sigma}$
  - 例题：$X$服从参数为$\frac{1}{2}$的伯努利分布，求标准化随机变量
 
$$
\begin{align*}
    \text{对于标准正态分布：}\\
    E(X) &= \int_{-\infty}^{+\infty}f(t)\cdot t\cdot dt = 0\\
    Var(X) &= E(X^2) \\
    &= \int_{-\infty}^{+\infty}f(t)\cdot t^2\cdot dt \\
    \text{分部积分：}&= 1
\end{align*}
$$

**指数分布$Exp(\lambda)$**
- 对于$\lambda > 0$
- $x>0, f(x)=\lambda e^{-\lambda x}$
- $x\leq 0, f(x)=0$
- $x \geq 0, F(x) = 1 - e^{-\lambda x}$
- $x < 0, F(x) = 0$
- 类似几何分布，无记忆性：$P(X > s+t \mid X > s) = P(X > t)$
- 用$N(t)$表示$t$时间内设备故障次数，假设$N(t)$服从参数为$\lambda t$的泊松分布，即$P(N(t)=k)=\frac{(\lambda t)^k}{k!}e^{-\lambda t}$，则第一次发生故障的时间$X$有：
  - $P(X\leq t) = 1 - P(X > t) = 1 - P(N(t) = 0) = 1 - e^{-\lambda t}$
  - 即为指数分布
  
$$
\begin{align*}
    E(X) &= \int_{0}^{\infty}f(t)\cdot t\cdot dt = \frac{1}{\lambda}\\
    E(X^2) &= \int_{0}^{\infty}f(t)\cdot t^2\cdot dt = \frac{2}{\lambda^2}\\
    Var(X) &= E(X^2) - (E(X))^2 = \frac{1}{\lambda^2}
\end{align*}
$$

- 用$N(t)$表示$t$时间内设备故障次数，假设$N(t)$服从参数为$\lambda t$的泊松分布，即$P(N(t)=k)=\frac{(\lambda t)^k}{k!}e^{-\lambda t}$，则第$n$次发生故障的时间$X$服从何种分布？
- $P(X \leq t) = 1 - P(X > t) = 1 - P(N(t) < n) = 1 - \sum_{k=0}^{n-1}\frac{e^{-\lambda t}(\lambda t)^k}{k!}$
- $F(X) = 1 - \sum_{k=0}^{n-1}\frac{e^{-\lambda t}(\lambda t)^k}{k!}$
- $f(x) = \frac{x^{n-1}\lambda^n e^{-\lambda x}}{(n-1)!}$

**伽玛分布$\Gamma (\alpha, \lambda)$**
- 对于$\alpha > 0$，伽玛函数$\Gamma(\alpha) = \int_{0}^{+\infty} x^{\alpha - 1}e^{-x}dx$
  - $\Gamma(1)=1, \Gamma(\frac{1}{2}) = \sqrt{\pi}, \Gamma(\alpha + 1) = \alpha \cdot \Gamma(\alpha)$ 
  - $n \in \mathbb{N} ,\Gamma (n+1) = n! $
  - $\Gamma(n+\frac{1}{2}) = \frac{(2n)!}{4^n \cdot n!}\cdot \sqrt{\pi}$
- 对于$\alpha, \lambda >0$，由上述第$n$次发生故障的时间$X$的概率密度函数定义伽玛分布$\Gamma(\alpha, \lambda)$

$$
f(x) = 
\begin{cases} 
\frac{\lambda^{\alpha}}{\Gamma(\alpha)}x^{\alpha - 1}e^{-\lambda x} &  x \geq 0 \\
0 &  x < 0
\end{cases}
$$

- 验证正则性略

$$
\begin{align*}
  E(X) &= \int_{-\infty}^{+\infty} x \cdot f(x)dx\\
  &= \int_{0}{+\infty} \frac{\lambda ^\alpha}{\Gamma (\alpha)}x^\alpha e^{-\lambda x} dx\\
  \text{令}y = \lambda x \text{可得：} &= \frac{1}{\lambda}\int_{0}^{+\infty} \frac{y^\alpha e^{-y}}{\Gamma(\alpha)}dy\\
  &= \frac{\Gamma (\alpha + 1)}{\Gamma(\alpha) \cdot \lambda} \\
  &= \frac{\alpha}{\lambda}\\
  \text{同理换元可得：}E(X^2) &= \frac{\alpha (\alpha + 1)}{\lambda^2}\\
  Var(X) &= \frac{\alpha (\alpha + 1)}{\lambda^2} - (\frac{\alpha}{\lambda})^2\\
  &= \frac{\alpha}{\lambda^2}
\end{align*}
$$

- 常用特例：
  - $\alpha = 1$
    - $f(x) = \lambda e^{-\lambda x},x \geq 0$
    - 指数分布，期望为$\frac{1}{\lambda}$，方差为$\frac{1}{\lambda^2}$
  - $\alpha = \frac{n}{2}, \lambda = \frac{1}{2}$
    
    - 自由度为$n$的$\chi ^2$分布，$\chi ^2 (n)$
    - 期望为$n$，方差为$2n$
    - $n = 1, f(x) = \sqrt{\frac{1}{2 \pi x}}\cdot e^{-\frac{x}{2}}$ 

### 6. 连续随机变量函数的分布
给定连续随机变量$X$和函数$g$，求$Y=g(X)$的概率分布函数和概率密度函数
- 概率可以相加，密度不能直接相加
- 即$f_Y (y) = \sum_{g(x) = y} f_X(x)$不成立
  - 反例均匀分布变成两倍长度
  - 想象拉伸的间隙？
  - 故转化为分布函数来计算概率密度函数
- 设$X$为连续随机变量，若函数$y=g(x)$严格单调，其反函数$h(y)$有连续导数，则$Y=g(X)$的概率密度函数的推导过程如下
  - 假设$g(x)$严格单调增，则$h(y)$也严格单调增
  - $Y = g(X)$值域为$(\alpha, \beta)$，也是$h(y)$的值域
  - $F_Y (y) = P(Y \leq y) = P(g(X) \leq y) = P(X \leq h(y)) = F_x (h(y))$
  - $f_Y (y) = f_X(h(y)) \cdot h'(y)$
  - $g(x)$严格单调减时同理，综上有：
  
$$
f_Y(x) = 
\begin{cases} 
f_X(h(y)) \cdot \vert h'(y)\vert  &  y \in (a,b) \\
0 &  otherwise
\end{cases}
$$

- 我觉得不用记公式，直接转化为分布函数后求导即可推出
  
**例题：正弦函数**
- $X$为连续随机变量，且其概率密度函数满足$f_X(x) = \frac{2x}{\pi ^2}, x \in (0,\pi)$，求$Y = sin(X)$的概率密度函数

## 四、多维离散随机变量
### 1. 基本概念
- 联合分布列
  - $p_{ij} = P(X = x_i, Y = y_i)$
- 边际分布列
  - $P(X = x_i) = \sum_j P(X = x_i, Y = y_j)$
  - $P(Y = y_j) = \sum_i P(X = x_i, Y = y_j)$
- 在给定$Y = y_j$条件下$X$的条件分布列
  - $p_{i \vert j} = P(X = x_i \vert Y = y_j) = \frac{P(X = x_i, Y = y_j)}{P(Y = y_j)}$

### 2. 多维随机变量的独立性

**相互独立的判定与性质**

- $X,Y$相互独立对于任意的$x,y$均有$P(X = x, Y = y) = P(X = x) \cdot P(Y = y)$
    - 例题1：随机变量$X$等概率取$\lbrace 1, 2, 3, 4 \rbrace$中的一个，随机变量$Y$等概率取$\lbrace 1, ...,X\rbrace $中的一个，判断$X,Y$是否相互独立
      - 举反例，取到$x,y$使得$P(X=x,Y=y) = P(X+x)\cdot P(Y=y)$不成立即可说明不独立
- $X_1, X_2, ..., X_n$相互独立
  - 对于任意的$x_1, x_2, ..., x_n$均有$P(X_1 = x_1, X_2 = x_2, ..., X_n = x_n) = P(X_1 = x_1)\cdot P(X_2 = x_2) \cdot ... \cdot P(X_n = x_n)$
  - $X_1, X_2, ..., X_n$相互独立是否蕴含两两独立？
  - $X_1, X_2, ..., X_n$两两独立是否蕴含相互独立？
    - 相互独立一定两两独立，反正不然
    - 考虑事件$A$：两枚骰子点数之和为$9$；$B$：第一枚为偶数；$C$：第二枚为奇数；则$A,B,C$两两独立却不相互独立

**独立同分布**

- 若$X_1, X_2, ..., X_n$相互独立且服从相同的分布，则称为独立同分布
- 经常将服从一个分布的随机变量拆分成多个服从独立同分布的随机变量的和的形式
  - $B(n,p),B(1,p)$
  - $NB(r,p),G(p)$

**例题：相互独立**

- 随机变量$X \sim \pi (\lambda)$表示一段时间内进入商店顾客数量。每个顾客购买某商品的概率为$p$，且不同顾客是否购买均独立。
- 随机变量$Y$表示进入商店且购买商品的顾客数量，随机变量$Z$表示进入商店且没有购买商品的顾客数量。
- 判断$Y$与$Z$是否相互独立

### 3. 多维随机变量的特征数
- **数学期望的线性性**
  - $E(X_1 + X_2 + ...+ X_n) = E(X_1) + E(X_2) + ... +E(X_n)$
  - *多附了几道题便于理解运用*
  - 例题1：$Y \sim B(n, p)$，求$E(Y), E(Y^2)$
    - **拆分为独立同分布**
    - $Y = X_1 + X_2 + ... + X_n, X_i \sim B(1, p)$
    - $E(X_i) = p \Rightarrow E(Y) = np$
    - $E(Y^2) = E((X_1 + X_2 + ... + X_n)^2) = \sum_i \sum_j E(X_i X_j)$
    - $E(X_i ^2) = p$
    - $i \neq j, E(X_i X_j) = E(X_i)E(X_j) = p^2$
    - $E(Y^2) = nE(X_i) + n(n-1)E(X_i X_j) = np + n(n-1)p^2$
  - 例题2：$Y \sim NB(r,p)$，求$E(Y)$
    - recap负二项分布$NB(r,p)$：伯努利试验中$A$发生$r$次时的重复次数，之前略过了负二项分布的期望与方差计算
    - $Y = X_1 + X_2 + ... + X_r, X_i \sim G(p)$
    - $X_1$表示发生第一次时的重复次数
    - $X_2$表示发生第一次后开始算，发生第二次时的重复次数
    - ...
    - $E(X_i) = \frac{1}{p} \Rightarrow E(Y) = \frac{r}{p}$
  - 例题3：有$n$个人，其中有$m$对人认识。将每个人等概率地加入第一组或第二组，用随机变量$X$表示属于不同组且认识的人的对数，求$E(X)$
    - *在二、1中做过这道题，当时是用考虑样本点数量的方式*
    - $X = \sum_{i=1}^m 1_{A_i}$，事件$A_i$表示第$i$对认识的人被分在不同组
    - recap随机变量$1_A$：$A$发生时取$1$，否则取$0$
    - $P(A_i) = \frac{1}{2} \Rightarrow E(1_{A_i}) = \frac{1}{2} \Rightarrow E(X) = \frac{m}{2}$
    - **用示性函数将一个随机变量拆成多个事件的概率，分解事件**
  - 例题4：有$n$个有编号的球，将它们随机打乱，使得每种排列均等概率出现。令随机变量$X$表示位置没有改变的球的数量，球$E(X)$
    - 如果直接算期望，要用错排公式
    - $X = \sum_{i=1}^{n} 1_{A_i}$，事件$A_i$表示第$i$个球的位置没有改变
    - $P(A_i) = \frac{1}{n} \Rightarrow E(X) = n \cdot P(A_i) = 1$
  - 例题5：有$n$个有编号的球，有放回地取$m$次。令随机变量$X$表示取到的球中不同编号的数量，求$E(X)$
    - $X = \sum_{i=1}^{n} 1_{A_i}$，事件$A_i$表示编号为$i$的球被取到
    - $P(A_i) = 1 - (\frac{n-1}{n})^m \Rightarrow E(X) = n(1 - (1 - \frac{1}{n})^m)$
  - 例题6：有$n$个有编号的球，每次等概率随机取一个，直到所有的球至少被取到过一次。令随机变量$X$表示取球的总次数，求$E(X)$
    - 随机变量$X_i$表示取到了$i-1$个不同球后开始计，第一次取到第$i$个球的次数，服从几何分布，参数$p_i = \frac{n - (i - 1)}{n}$
    - $X = X_1 + X_2 + ... + X_n$
    - $E(X_i) = \frac{1}{p_i} = \frac{n}{n - i + 1}$
    - $E(X) = n(\frac{1}{n} + \frac{1}{n-1} + ... + 1) = \Theta (n \log{n})$
  
**独立变量的期望与方差性质**
- 既然有$E(X+Y) = E(X) + E(Y)$，是否有$E(XY) = E(X) \cdot E(Y)$？
- **若离散随机变量$X,Y$相互独立，则有$E(XY) = E(X) \cdot E(Y)$**
  - 根据独立性$P(X=x_i,Y=y_j) = P(X=x_i)P(Y=y_j)$可证
  - 逆命题是否成立？不成立
  - 推广：若离散随机变量$X_1,X_2,...,X_n$相互独立，则有$E(X_1 X_2 ... X_n) = E(X_1)\cdot E(X_2)... E(X_n)$
  - 例题：$Y \sim NB(r,p)$，求$E(Y^2),Var(Y)$

$$
\begin{align*}
    Y &= X_1 + X_2 +... + X_r, X_i \sim G(p)\\
    E(Y^2) &= E((X_1 + X_2 + ... + X_r)^2) = \sum_i \sum_j E(X_i X_j)\\
    i=j, E((X_i)^2) &= \frac{2-p}{p^2}\text{见之前几何分布中的推导（构造求导）}\\
    i \neq j, E(X_i X_j) &= E(X_i)E(X_j) = \frac{1}{p^2}\\
    E(Y^2) &= r \cdot \frac{2-p}{p^2} + r(r-1) \cdot \frac{1}{p^2} \\
    &= \frac{r^2 + r - pr}{p^2}\\
    Var(Y) &= \frac{r(1-p)}{p^2}
\end{align*}    
$$

- 推论：**若离散随机变量$X,Y$相互独立，则有$Var(X \pm Y) = Var(X)+Var(Y)$**
  - 推广：若离散随机变量$X_1,X_2,...,X_n$相互独立，则有$Var(X_1 \pm X_2 \pm ... \pm X_n) = Var(X_1)+Var(X_2) + ...+Var(X_n)$
  - 例题1：$Y \sim B(n,p)$，求$Var(Y)$
    - $Y = X_1 + X_2 + ... + X_n, X_i \sim B(1,p)$
    - $Var(x) = p(1-p) \Rightarrow Var(Y) = np(1-p)$
  - 例题2：$Y \sim NB(r,p)$，求$Var(Y)$
    - $Y = X_1 + X_2 + ... + X_r, X_i \sim G(p)$
    - $Var(X_i) = \frac{1-p}{p^2} \Rightarrow Var(Y) = \frac{r(1-p)}{p^2}$

$$
\begin{align*}
  Var(X_1 + X_2 +...+X_n) &= E((X_1 + X_2 + ... + X_n)^2) - (E(X_1 + X_2 + ... + X_n))^2\\
&= E(\sum_i \sum_j X_i  X_j) - \sum_i \sum_j E(X_i)E(X_j)\\
&= \sum_i E(X_i^2) + \sum_i \sum_{j\neq i}E(X_i X_j) - \sum_i (E(X_i))^2 - \sum_i \sum_{j\neq i}E(X_i)E(X_j)\\
&= \sum_i Var(X_i) + \sum_i \sum_{j\neq i}(E(X_i X_j) - E(X_i)E(X_j)) 
\end{align*}
$$

- 显然相互独立时，第二项为$0$
- 考虑不相互独立时，定义**协方差**

$$
  Cov(X_i, X_j) = E((X_i - E(X_i))(X_j - E(X_j))) = E(X_i X_j) - E(X_i)E(X_j)
$$

*协方差基本就用上式计算*

**协方差的性质**

- $X_i = X_j$时，$Cov(X_i , X_i) = Var(X_i)$
- $X_i,X_j$相互独立时，协方差为$0$
- $Cov(X, Y) = Cov(Y,X)$
- $Cov(aX, bY) = ab \cdot Cov(X, Y)$
- $Cov(X_1 + X_2, Y) = Cov(X_1,Y) + Cov(X_2, Y)$
  - $X=Y+Z$，$Y,Z$相互独立时，$Cov(X,Y) = Var(Y) + Cov(Y,Z) = Var(Y)$

**例题：随机图中的协方差**

随机图模型中，随机变量$X_i$表示第$i$个人认识的人数，求$Cov(X_i,X_j)$
  - 转化成求$E(X_i X_j)$和$E(X_i)$
  - 将$X_i$拆成事件$A_{ik}$的示性函数，表示$i,k$是否认识

**条件数学期望**
- $E(X\vert Y=y_j) = \sum_i x_i \cdot P(X=x_i \vert Y=y_j)$
- $E(X\vert Y = y)$是关于$y$的函数
  - 将$E(X\vert Y = y)$记为$g(y)$，则$E(X \vert Y) = g(Y)$是一个随机变量，含义为根据$Y$的概率分布，把$E(X\vert Y = y)$作为值
- 重期望公式：$E(E(X\vert Y)) = E(X)$

$$
\begin{align*}
  E(E(X\vert Y)) &= \sum_j P(Y = y_j)\cdot E(X\vert Y = y_j)\\
  E(X\vert Y = y_j) &= \sum_i x_i \cdot P(X = x_i \vert Y = y_j) \\
  E(E(X \vert Y)) &= \sum_j \sum_i x_i \cdot P(X = x_i \vert Y = y_j) \cdot P(Y = y_j)\\
  & = \sum_j \sum_i x_i \cdot P(X = x_i, Y = y_j)\\
  &= \sum_i x_i \cdot P(X = x_i)\\
  &= E(X)
\end{align*}
$$

**例题：商店**

随机变量$X \sim \pi (\lambda)$表示一段时间内进入商店的顾客数量。每个顾客购买某商品的概率为$p$，且不同顾客是否购买均独立。随机变量$Y$表示进入商店且购买商品的顾客数量，求$E(Y)$
- $E(Y) = E(E(Y \vert X))$
- $E(Y\vert X = x) = px$
- $E(Y) = E(pX) = p E(X) = \lambda p$

**例题：几何分布**

随机变量$X \sim G(p)$，证明：$E(X) = p + (1-p)(E(X) + 1)$
- 待证结论很好理解，分为第一次发生了$A$和第一次没有发生$A$
- 利用几何分布的无记忆性来证明
- 令随机变量$Y = 1_{X=1}$，即第一次发生$A$
- $E(X \vert Y = 1) = 1$
- $E(X \vert Y = 0) = E(X \vert X > 1)$
- 无记忆性：$P(X > x+1 \vert X > 1) = P(X > x)$
- $E(X\vert X > 1) = \sum_{k \geq 0}  P(X > k \vert X > 1)= \sum_{k \geq 0} P(X > k-1) =  \sum_{k \geq 0} P(X + 1 > k) = E(X+1) = E(X)+1$
- 重期望公式：$E(X) = E(E(X\vert Y)) = P(Y = 1) \cdot 1 + P(Y = 1) \cdot ((E(X) + 1)) = p + (1-p)(E(X) + 1)$
  
这里用到了**作业三第一题**的结论：
- 对于离散非负整数随机变量$X$

$$
  E(X) = \sum_{x=0}^{+\infty} P(X > x)
$$

- 对于连续非负实数随机变量$X$

$$
  E(X) = \int_{0}^{+\infty} P(X > x)dx
$$

- 也是容易理解的：对于$P(X = k)$，它其实被累加了$k$次，分别在$x = 0,1,...,k-1$时被加，故与数学期望的定义相同

**例题：分布数量**

$X_1, X_2,...$为一列独立同分布的随机变量，随机变量$N$取正整数且与$\lbrace X_n \rbrace$独立，证明：$E(\sum_{i\leq N}X_i) = E(X_1)E(N)$
- 因为$X_i$累加的数目由$N$决定，很自然想到用$N$作条件

**二项分布与泊松分布的加法性质**

结论：
- $X \sim B(n,p), Y \sim B(m,p),X,Y$独立，则$X + Y \sim B(n+m, p)$
- $X \sim \pi(\lambda_1), Y \sim \pi(\lambda_2),X,Y$独立，则$X+Y \sim \pi(\lambda_1 + \lambda_2)$
  - 证明暂略
  - 可推广至$n$个随机变量