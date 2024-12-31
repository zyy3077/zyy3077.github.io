---
layout: post
title: "2024fall-信息学中的概率统计-期末复习"
date: 2024-12-31
categories: [Probability_for_Computing, 2024fall]
tags: [academic, blog]
---
<link rel="stylesheet" type="text/css" href="/assets/css/styles.css">
<script type="text/javascript" src="/assets/js/scripts.js"></script>
<script type="text/javascript" async 
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

# 期末复习

*全部内容，后半学期内容（从多维连续随变量开始）为主。不包含：特征函数、中心极限定理、交叉熵损失函数、多元线性回归及其扩展。由中心极限定理给出的“近似”结果，包括wald测试（大样本假设检验）和二项分布的近似置信区间，都不考。由chernoff bound给出的二项分布的置信区间在考试范围内。*

*拖到这么晚才开始复习，希望这两天能复习完。不管期末怎样，我认为这是一门难得的逻辑清楚内容连贯的很好的课。*

## Contents
- 课堂内容总结
- 作业题题解
- 期中考题题解

## 一、多维连续随机变量
### 1. 分布函数和密度函数
- 对于区域\\(G\\)，\\(P((X,Y) \in G) = \iint_{G}f(x,y) dxdy \\)
- \\(X\\)的边际分布函数\\(F_{X}(x) = F(x, +\infty) = \lim_{y \to +\infty}F(x,y)\\)
- \\(X\\)的边际密度函数\\(f_{X}(x)=\int_{-\infty}^{+\infty}f(x,y)dy\\)
- 当密度函数连续，给定\\(Y=y\\)条件下\\(X\\)的条件密度函数\\(f(x\vert y) = \frac{f(x,y)}{f_{Y}(y)}\\)

### 2. 多维连续随机变量的独立性
- recap:对于离散随机变量，相互独立等价于\\(\forall x, y, P(X=x,Y=y)=P(X=x)\cdot P(Y=y)\\)
- 对于连续随机变量，相互独立等价于\\(\forall x, y, f(X=x,Y=y)=f_{X}(x)\cdot f_{Y}(y)\\)

**二维正态（高斯）分布\\(N(\mu_{1},\mu_{2},\sigma_{1}^2,\sigma_{2}^2,\rho)\\)**

$$
f(x,y) = \frac{1}{2\pi \sigma_{1} \sigma_{2} \sqrt{1-\rho^2}}\cdot e^{-\frac{1}{2(1-\rho^2)}\cdot (\frac{(x-\mu_{1})^2}{\sigma_{1}^2} + \frac{(y-\mu_{2})^2}{\sigma_{2}^2} - \frac{2\rho(x-\mu_{1})(y-\mu_2)}{\sigma_{1}\sigma_{2}})}
$$

- 若\\(X,Y~N(\mu_{1},\mu_{2},\sigma_{1}^2,\sigma_{2}^2,\rho)\\)，则\\(X~N(\mu_{1},\sigma_{1}^2), Y~N(\mu_{2},\sigma_{2}^2)\\)，与参数\\(\rho\\)无关
- 给定\\(Y = y\\)条件下，\\(X\\)的条件分布服从\\(N(\mu_{1} + \rho \cdot \frac{\sigma_{1}}{\sigma_{2}} \cdot (y-\mu_{2}, \sigma_{1}^2(1-\rho^2)))\\)
  - \\(X,Y\\)相互独立等价于\\(\rho = 0\\)
- 计算时通常换元
  - \\(u = \frac{\frac{x-\mu_1}{\sigma_1} - \rho \cdot \frac{y-\mu_2}{\sigma_2}}{\sqrt{1-\rho^2}}, v=\frac{y-\mu_2}{\sigma_2}, \vert \frac{\partial (x,y)}{\partial(u,v)} \vert = \sigma_1 \sigma_2 \sqrt{1-\rho^2}\\)

### 3. 多维连续随机变量的特征数
- recap:对于离散随机变量\\(X,Y,Z=g(X,Y)\\)，\\(E(Z) = \sum_{i}\sum_{j}P(X=x_{i},Y=y_{j}) \cdot g(x_{i}, y_{j})\\)
- 对于连续随机变量\\(X,Y,Z=g(X,Y)\\)，\\(E(Z) = \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} f(x,y)\cdot g(x,y)dxdy\\)
- **数学期望的线性性**同离散随机变量    
  - \\(E(X_1 + X_2 + ...+ X_n) = E(X_1) + E(X_2) + ... +E(X_n)\\)
- **若连续随机变量\\(X,Y\\)相互独立，则有\\(E(XY) = E(X) \cdot E(Y)\\)**
  - 推广：若连续随机变量\\(X_1,X_2,...,X_n\\)相互独立，则有\\(E(X_1 X_2 ... X_n) = E(X_1)\cdot E(X_2)... E(X_n)\\)
  - 推论：若离散随机变量\\(X_1,X_2,...,X_n\\)相互独立，则有\\(Var(X_1 \pm X_2 \pm ... \pm X_n) = Var(X_1)+Var(X_2) + ...+Var(X_n)\\)

**Lecture5 Page27 & 作业五第三题**

- **重期望公式**
  - \\(E(X \vert Y=y) = \int_{-\infty}^{+\infty}f(x\vert y)\cdot x \cdot dx\\)
  - \\(E(E(X\vert Y)) = E(X)\\)
- **协方差**同离散随机变量
  - \\(Cov(X,Y) = E((X-E(X))(Y-E(Y))) = E(XY) - E(X)E(Y)\\)
  - 二维正态分布换元可得：\\(Cov(X,Y) = \rho \sigma_1 \sigma_2\\)
- **相关系数**\\(Corr(X,Y) = \frac{Cov(X,Y)}{\sigma(X)\sigma(Y)}\\)
  - 由\\(Corr(X,Y)\\)的正负性可得\\(X,Y\\)正相关/负相关/不相关
  - \\(\vert Corr(X,Y)\vert \leq 1\\)
    - 证明考虑\\(g(t) = E((t(X-E(X)) + (Y-E(Y)))^2), \Delta \leq 0\\)
    - \\(Corr(X,Y) = \pm 1 \Leftrightarrow \exists a \neq 0,b s.t. P(Y = aX+b) = 1\\)**（作业五第一题）**

### 4. 多维连续随机变量函数的分布
- **卷积公式**：若\\(X,Y\\)相互独立，\\(Z=X+Y\\)，则\\(f_{Z}(z) = \int_{-\infty}^{+\infty} f_{X}(z-y)f_{Y}(y)dy\\)
  - 由此可计算得出：
  - (1)正态分布的可加性
    - 若\\(X\sim N(0,\sigma_1^2),Y\sim N(0,\sigma_2^2)\\)，则\\(Z=X \pm Y\sim  N(0,\sigma_1^2 + \sigma_2^2)\\)
    - 推广：\\(X_i \sim N(\mu_i, \sigma_i^2), \sum_{i=1}^{n}a_i X_i \sim N(\sum_{i=1}^{n}a_i \mu_i, \sum_{i=1}^{n}a_i^2 \sigma_i^2)\\)，即服从正态分布的变量的和依旧服从正态分布，期望为原期望的和，方差为原标准差的平方和
  - (2)指数分布与Gamma分布和Gamma分布的可加性
- 若\\(X,Y\\)的联合密度函数为\\(f(x,y)\\)，函数\\(u=u(x,y),v=v(x,y)\\)有连续偏导数和唯一反函数\\(x=x(u,v),y=y(u,v)\\)，则\\(U=u(X,Y),V=v(X,Y)\\)的联合密度函数为

$$
\begin{align*}
    f_{U,V}(u,v) &= f(x(u,v),y(u,v))\cdot \vert J\vert \\
    \text{其中}J &= \vert \frac{\partial (x,y)}{\partial (u,v)}\vert
    = \begin{vmatrix}
    \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\
    \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \\
    \end{vmatrix}
\end{align*}
$$

**例题：构造另一个变量**
若连续随机变量\\(X,Y\\)相互独立，计算\\(U=XY\\)的概率密度函数。
- \\(u = xy, v = y \Rightarrow x = \frac{u}{v}, y = v\\)
- \\(J = vert \frac{\partial (x,y)}{\partial (u,v)}\vert = \frac{1}{v}\\)
- \\(f_{U,V} (u,v) = f_{X,Y}(x(u,v), y(u,v)) \cdot \vert J \vert = f_{X}(\frac{u}{v})\cdot f_{Y}(v) \cdot \frac{1}{\vert v} \\)
- \\(U\\)的边际密度函数为\\(f_{U}(u) = \int_{-\infty}^{+\infty} f_{U,V}(u,v)dv = \int_{-\infty}^{+\infty} f_{X}(\frac{u}{v})\cdot f_{Y}(v)\cdot dv\\)
- 可求出\\(U\\)的分布函数后求导验证

### 5. 多维高斯分布
- 随机向量\\(X=(X_1, X_2,...,X_n)\\)
- 数学期望向量\\(E(X) = (E(X_1), E(X_2), ... , E(X_n))\\)
- 协方差矩阵
  - \\(\alpha^T Cov(X) \alpha = E((\alpha^T(X-E(X)))^2) \geq 0\\)
  
$$
Cov(X) = \begin{vmatrix}
Var(X_1) & Cov(X_1,X_2) & ... & Cov(X_1, X_n) \\
Cov(X_2,X_1) & Var(X_2) & ... & Cov(X_2, X_n)\\
... & ... & ... & ...\\
Cov(X_n, X_1) & Cov(X_n, X_2) & ... & Var(X_n) \\
\end{vmatrix}
$$

- \\(n\\)维高斯分布即\\(X\sim N(\mu, B), x,\mu \in \mathbb{R}^n, B\in \mathbb{R}^{n\times n}\\)的联合密度函数为

$$
    f(x) = \frac{1}{(2\pi)^{\frac{n}{2}}\cdot (det(B))^{\frac{1}{2}}}e^{-\frac{1}{2}\cdot (x-\mu)^T B^{-1} (x-\mu)}
$$

- 性质：
  - 边际分布\\(X_i \sim N(\mu_i, B_{i,i})\\)
  - \\(X_i\text{相互独立}\Leftrightarrow X_i\text{两两不相关}\Leftrightarrow B \text{为对角矩阵}\\)
  - \\(X\sim N(\mu, B) \Rightarrow AX+b \sim N(A\mu + b, ABA^T)\\)*（这一条的证明将\\(Y=AX+b\\)代入概率密度函数，结合雅各比矩阵计算，Lecture5 Page53，后两条性质由此条导出）*
  - \\(X\sim N(0, I_n), U\\)为正交矩阵，则\\(UX \sim N(0, I_n)\\)
  - \\(X\sim N(\mu, B) \Rightarrow B^{-\frac{1}{2}}(X-\mu)\sim N(0, I_n)\\)