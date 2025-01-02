---
layout: post
title: "2024fall-信息学中的概率统计-期末cheatsheet"
date: 2025-01-02
categories: [Probability_for_Computing, 2024fall]
tags: [academic, blog]
---
<link rel="stylesheet" type="text/css" href="/assets/css/styles.css">
<script type="text/javascript" src="/assets/js/scripts.js"></script>
<script type="text/javascript" async 
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

### 尾不等式
- **Chernoff Bound**：对\\(e^{tX}\\)使用马尔可夫不等式，\\(M_{X}(t) = E(e^{tX})\\)
  - \\(\forall t > 0, P(X\geq k) = P(e^{tX}\geq e^{tk}) \leq P(e^{tX}\geq \frac{e^{tk}}{E(e^{tX})}\cdot E(e^{tX}))\leq M_{X}(t)\cdot e^{-tk}\\)
  - 同理：\\(\forall t < 0, P(X\leq k) \leq M_{X}(t)\cdot e^{-tk}\\)
  - 不等式中\\(t\\)可以取任意值，使用时选取使得上界最小的最优\\(t\\)
  
  - \\(X\sim \pi(\lambda), M_X(t) = e^{\lambda(e^t-1)}\\)
  - \\(X\sim N(\mu, \sigma^2), M_X(t) = e^{\mu t + \frac{\sigma^2 t^2}{2}}\\)
  - \\(X\sim B(n,p), M_X(t) = (1-p+pe^t)^n\\)
  
- **Chernoff-Hoeffding不等式**：若\\(X=\sum_{i=1}^{n}X_i\\)，\\(X_i\\)相互独立且\\(a\leq X_i \leq b\\)
  - \\(P(X\geq E(X)+k)\leq e^{-\frac{2k^2}{n(b-a)^2}}\\)
  - \\(P(X\leq E(X)-k)\leq e^{-\frac{2k^2}{n(b-a)^2}}\\)
  - 若\\(X\sim B(n,p)\\)，则有
    - \\(P(X\geq n(p+\epsilon))\leq e^{-2n\epsilon^2}\\)
    - \\(P(X\leq n(p-\epsilon))\leq e^{-2n\epsilon^2}\\)
    - \\(P(\vert X - np\vert \geq n\epsilon)\leq 2e^{-2n\epsilon^2}\\)
  
- **马尔可夫不等式**：若\\(X\\)为非负随机变量，对于\\(a > 0\\)，有\\(P(X\geq a\cdot E(X)) \leq \frac{1}{a}\\)
- **切比雪夫不等式**：若\\(\sigma(X) > 0 \\)，对于任意\\(c > 0\\)，\\(P(\vert X - E(X) \vert \geq c \cdot \sigma(X)) \leq \frac{1}{c^2}\\)

### 大数定律
- **一般形式**：对于随机变量\\({X_n}\\)，\\(\forall \epsilon > 0\\) 
$$
  \lim_{n\to \infty}P(\vert \frac{1}{n}\sum_{i=1}^{n}X_i - \frac{1}{n}\sum_{i=1}^{n}E(X_i)\vert < \epsilon ) = 1
$$
- **伯努利大数定律**：在\\(n\\)重伯努利试验中，\\(n_A\\)为事件\\(A\\)发生的次数，\\(P(A) = p\\)，\\(\forall \epsilon > 0, \lim_{n\to \infty}P(\vert \frac{n_A}{n} - p\vert < \epsilon) = 1\\)
- **马尔可夫大数定律**：若\\(\frac{1}{n^2}Var(\sum_{i=1}^{n}X_i) \to 0\\)，则\\({X_i}\\)服从大数定律（一般形式）
- **辛钦大数定律**：\\({X_n}\\)**独立同分布**，且**数学期望\\(\mu = E(X_i)\\)存在**，则\\({X_n}\\)服从大数定律
  - 即\\(\forall \epsilon > 0, \lim_{n\to \infty}P(\vert \frac{1}{n}\sum_{i=1}^{n}X_i - \mu\vert < \epsilon) = 1\\)
  - 对比马尔可夫大数定律，需要独立同分布的假设，不需要对方差进行假设

### 随机变量序列的收敛性
- **依概率收敛\\(Y_n \overset{P}{\rightarrow} Y\\)**：令\\({Y_n}\\)为一列随机变量，\\(Y\\)为随机变量。若\\(\forall \epsilon >0, \lim_{n\to \infty}P(\vert Y_n - Y\vert < \epsilon)=1\\)，则称\\({Y_n}\\)依概率收敛于\\(Y\\)
  - 这是期望意义上的收敛，收敛值和集中不等式中期望的形式类似
- **依分布收敛\\(Y_n \overset{d}{\rightarrow} Y\\)**：\\(\forall F(x)\text{的连续点}x, F_n(x)\to F(x)\\)
  - 即\\(n\\)无穷大时，\\(X_n\\)和\\(X\\)的分布函数在任意连续点相同
- \\(Y_n \overset{P}{\rightarrow} Y \Rightarrow Y_n \overset{d}{\rightarrow} Y\\)
- 反之不成立
- \\(X\\)服从单点分布，则\\(Y_n \overset{P}{\rightarrow} Y \Leftrightarrow Y_n \overset{d}{\rightarrow} Y\\)

### 点估计
- **偏差\\(Bias(\hat{\theta})\\)**：\\(Bias(\hat{\theta})=E(\hat{\theta} - \theta)\\)
  - **无偏**：\\(Bias(\hat{\theta}) = 0\\)
  - **渐近无偏**：\\(\lim_{n\to \infty}Bias(\hat{\theta}) = 0\\)
- **均方误差\\(MSE(\hat{\theta})\\)**：\\(MSE(\hat{\theta}) = E((\hat{\theta} - \theta)^2)\\)
  - 若\\(\hat{\theta}\\)无偏，则\\(Bias(\hat{\theta}) = Var(\hat{\theta})\\)
- **一致估计量**：若有\\(\hat{\theta} \overset{P}{\rightarrow} \theta\\)，即\\(\forall \epsilon >0, \lim_{n\to \infty}P(\vert\hat{\theta}  - \theta\vert \geq \epsilon)=0\\)，则称\\(\hat{\theta}\\)为一致估计量
- **若\\(\lim_{n\to \infty} MSE(\hat{\theta}) = 0\\)，则\\(\hat{\theta}\\)为一致估计量**
- **矩法设计估计量**
  - (1)将位置参数表示为总体前\\(k\\)阶矩的函数
    - 一般有几个参数需要估计就用几个总体矩，然后解方程
  - (2)用样本矩或中心距替换总体矩，有多种方法
    - 也可用样本方差\\(S^2\\)替换\\(Var(X)\\)
  - 随机样本不独立，不符合简单随机样本的情况也可以直接用矩法估计

### 区间估计
**例题：Chernoff Bound和二项分布**

- 总体\\(X\sim B(1,p)\\)。设计\\(p\\)的置信水平为\\(1-\alpha\\)的置信区间。
  - 自然地想到设计枢轴量\\(\bar{X}-p\\)，由中心极限定理可知\\(\frac{\sum_{i=1}^{n}X_i-np}{\sqrt{np(1-p)}}\\)近似服从\\(N(0,1)\\)，接着按照标准正态分布设计区间
  - 不使用中心极限定理，可以用Chernoff Bound给出枢轴量\\(\bar{X}-p\\)位于给定区间的概率上界
    - recap:\\(X\sim B(n,p), P(\vert X - np\vert \geq n\epsilon)\leq 2e^{-2n\epsilon^2}\\)
    - \\(2e^{-2n\epsilon^2} = \alpha \Rightarrow \epsilon = \sqrt{\frac{\ln(2/a)}{2n}}\\)
    - \\(P(\bar{X} - \sqrt{\frac{\ln(2/a)}{2n}}\leq p \leq \bar{X} + \sqrt{\frac{\ln(2/a)}{2n}}) \geq 1- \alpha\\)

### 最小二乘估计
- 求偏导列出正规方程
- \\(\hat{\beta} = \beta + \sum \epsilon_i \cdot \frac{x_i-\bar{x}}{s_xx}\\)
- \\(\hat{\alpha} = \alpha + \sum \epsilon_i \cdot (\frac{1}{n}-\frac{x_i - \bar{x}}{s_{xx}}\cdot \bar{x})\\)
- \\(s^2 = \frac{1}{n-2}\sum (\hat{y_i}-y_i)^2\\)是\\(\sigma^2\\)的**无偏估计量**


### 假设检验
1. 建立假设
2. 选择统计量，给出拒绝域形式
3. 选择显著性水平\\(\alpha\\)，给出拒绝域
- **显著性水平**：\\(\alpha = \max_{\theta \in \Theta_0} \alpha(\theta)\\)
  - \\(\alpha\\)是一个错误拒绝原假设的概率最小上界，也即能达到的犯第一类错误的最大概率
- 根据\\(\alpha\\)反解出拒绝域中参数
- **\\(p\\)值**：给定样本取值，能够做出拒绝原假设的最小显著性水平称为检验的\\(p\\)值
  - 如果\\(\alpha \geq p\\)，说明错误拒绝原假设的概率较高，即更容易拒绝原假设，于是拒绝原假设
  - 反之如果\\(\alpha < p\\)，接受原假设

**例题：假设检验框架**

- 令总体服从\\(Exp(\frac{1}{\theta})\\)。\\(H_0:\theta \leq \theta_0, H_1:\theta > \theta_0\\)，拒绝域为\\(W=\lbrace(x_1,x_2,...,x_n) \vert \bar{x}\geq c\rbrace\\)，\\(c\\)为待定值，\\(x_i\sim \Gamma(1,\frac{1}{\theta})\\)
  - 考虑\\(\bar{x}\\)服从什么分布，由Gamma分布的可加性：\\(n\bar{x}\sim \Gamma(n,\frac{1}{\theta})\\)
  - 再想着去标准化，构造出一个于\\(\theta\\)无关的枢轴量：\\(\frac{2n\bar{x}}{\theta}\sim Gamma(n,\frac{1}{2}=\chi^2(2n))\\)
  - 于是有了置信区间：\\(P(\bar{x}\geq c)= P(\frac{2n\bar{x}}{\theta}\geq \frac{2nc}{\theta}) = 1-\Phi(\frac{2nc}{\theta})\\)
  - \\(\forall \theta \leq \theta_0\\)，上式最大值不超过显著性水平\\(\alpha\\)，解得\\(c = \frac{\Phi^{-1}(1-\alpha)\theta_0}{2n}\\)
  - \\(p = 1 - \Phi(\frac{2n\bar{x}}{\theta_0})\\)

### 常用分布
- **二项分布\\(B(n,p)\\)**
  - \\(P(X=k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{1-k}\\)
  - \\(E(X) = np\\)
  - \\(Var(X) = E(X^2) - (E(X))^2 = np(1-p) \\)
- **泊松分布\\(\pi(\lambda)\\)**
  - \\(P(X=k) = \frac{1}{k!} \cdot \lambda ^k \cdot e^{-\lambda}\\)，其中\\(\lambda > 0\\)
  - \\(E(X) = \lambda \\)
  - \\(Var(X) = \lambda\\)
- **几何分布\\(G(p)\\)**
  - \\(k\geq 1, P(X=k) = p(1-p)^{k-1}\\)
  - \\(E(X) = \frac{1}{p}\\)
  - \\(Var(X) = \frac{1-p}{p^2}\\)
- **负二项分布\\(NB(r,p)\\)**
  - \\(k\geq r, P(X=k) = \binom{k-1}{r-1}p^r (1-p)^{k-r}\\)
- **均匀分布\\(U(a,b)\\)**
  - \\(x \in (a, b),f(x) = \frac{1}{b-a}\\)
  - \\(E(X) = \frac{b-a}{2}\\)
  - \\(Var(X) = \frac{(b-a)^2}{12}\\) 
- **正态分布\\(N(\mu , \sigma^2)\\)**
  - \\(f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\\)
  - \\(X_i \sim N(\mu_i, \sigma_i^2), \sum_{i=1}^{n}a_i X_i \sim N(\sum_{i=1}^{n}a_i \mu_i, \sum_{i=1}^{n}a_i^2 \sigma_i^2)\\)，即服从正态分布的变量的和依旧服从正态分布，期望为原期望的和，方差为原标准差的平方和
- **指数分布\\(Exp(\lambda)\\)**
  - \\(x>0, f(x)=\lambda e^{-\lambda x}\\)
  - \\(x \geq 0, F(x) = 1 - e^{-\lambda x}\\)
  - \\(E(X) = \frac{1}{\lambda}\\)
  - \\(Var(X) = \frac{1}{\lambda^2}\\)
- **伽玛分布\\(\Gamma (\alpha, \lambda)\\)**
  - \\(x \geq 0, f(x) = \frac{\lambda^{\alpha}}{\Gamma(\alpha)}x^{\alpha - 1}e^{-\lambda x} \\)
  - \\(n \in \mathbb{N} ,\Gamma (n+1) = n! \\)
  - \\(E(X) = \frac{\alpha}{\lambda}\\)
  - \\(Var(X) = \frac{\alpha}{\lambda^2}\\)
  - \\(\Gamma(\frac{n}{2}, \frac{1}{2}) = \chi^2(n)\\)
  - \\(\alpha = 1\\)时为指数分布
  - \\(X\sim \Gamma(\alpha_1, \lambda), Y \sim \Gamma(\alpha_2, \lambda)\\)，\\(X,Y\\)相互独立，则\\(X+Y\sim \Gamma(\alpha_1+\alpha_2, \lambda), kX \sim \Gamma(\alpha_1, \frac{\lambda}{k})\\)
  - 若\\(Z_1,Z_2,...,Z_n\\)独立同分布且\\(Z_i\sim N(0,1)\\)，则\\(Z_i^2 \sim \chi^(1) = \Gamma(\frac{1}{2},\frac{1}{2})\Rightarrow \sum_{i=1}^{n}Z_i^2 \sim \chi^2(n) = \Gamma(\frac{n}{2}, \frac{1}{2})\\)
- **\\(t\\)分布**
  - \\(T=\frac{X_1}{\sqrt{X_2/n}} \sim t(n)\\)，即自由度为\\(n\\)的\\(t\\)分布，其中\\(X_1,X_2\\)相互独立且\\(X_1\sim N(0,1), X_2\sim \chi^2(n)\\)

### 多维连续随机变量
- **协方差**同离散随机变量
  - \\(Cov(X,Y) = E((X-E(X))(Y-E(Y))) = E(XY) - E(X)E(Y)\\)
  - 二维正态分布换元可得：\\(Cov(X,Y) = \rho \sigma_1 \sigma_2\\)
- **相关系数**\\(Corr(X,Y) = \frac{Cov(X,Y)}{\sigma(X)\sigma(Y)}\\)
  - 由\\(Corr(X,Y)\\)的正负性可得\\(X,Y\\)正相关/负相关/不相关
  - \\(Corr(X,Y) = \pm 1 \Leftrightarrow \exists a \neq 0,b s.t. P(Y = aX+b) = 1\\)
- **卷积公式**：若\\(X,Y\\)相互独立，\\(Z=X+Y\\)，则\\(f_{Z}(z) = \int_{-\infty}^{+\infty} f_{X}(z-y)f_{Y}(y)dy\\)

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