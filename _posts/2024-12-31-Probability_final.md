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

---

*01-03-update:期末出得什么非常规题，使我在考场直接红温，入学以来最挫败的一集。。看到尾不等式的大题是柯西分布矩不存在我也会两眼一黑。。我宣布这场考试你战胜了ics*

*但说真的就算挂了也不后悔选这门课，学到很多，除考试之外的体验都很好，年轻老师确实强。。可惜我是笨蛋本科生。。可能这考试也算一种trade-off。。*

- 第一题（35）
  - 多维变量积分写分布，求导求密度函数
  - 矩估计和最大似然估计分别算\\(Bias,MSE\\)，判断一致估计量
  - 利用估计量求置信区间
  - 假设检验求拒绝域参数
- 第二题（15）
  - 最小二乘估计\\(Q = (y_i - \alpha - \beta x_i)^2 + \lambda \beta^2\\)，加正则项后列正规方程求估计值
  - 判断是否无偏，算\\(MSE\\)
- 第三题（30）
  - 联合高斯分布求\\(U=e^X, V=e^Y\\)的期望方差、协方差（10）
  - 求\\(U,V\\)的联合密度函数和分别的边际密度函数（10）
  - 求\\(V=v\\)时\\(U\\)的条件密度函数和条件期望（10）
- 第四题（20）
  - \\(X_i\\)服从柯西分布，题目给出了\\(f(x)\\)，\\(Y_i=\vert X_i\vert\\)，写\\(Y_i\\)的概率密度函数（5）
  - 证明存在常数\\(c_1\\)使得\\(P(\sum Y_i \leq c_1 n^2) \geq 2/3\\)（5）
  - 证明存在常数\\(c_2\\)使得\\(P(\sum Y_i \geq c_2 n) \geq 2/3\\)（5）
  - 后面证明基于前几问更强的结论，题都没来得及看一眼（5）

---

## Contents
- 课堂内容总结
- 作业题题解
- 期末复习习题课内容
- 期中考题题解（还没写）

---

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
    - \\(Corr(X,Y) = \pm 1 \Leftrightarrow \exists a \neq 0,b, s.t. P(Y = aX+b) = 1\\)**（作业五第一题）**

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
- \\(J = \vert \frac{\partial (x,y)}{\partial (u,v)}\vert = \frac{1}{v}\vert \\)
- \\(f_{U,V} (u,v) = f_{X,Y}(x(u,v), y(u,v)) \cdot \vert J \vert = f_{X}(\frac{u}{v})\cdot f_{Y}(v) \cdot \frac{1}{\vert v} \\)
- \\(U\\)的边际密度函数为\\(f_{U}(u) = \int_{-\infty}^{+\infty} f_{U,V}(u,v)dv = \int_{-\infty}^{+\infty} f_{X}(\frac{u}{v})\cdot f_{Y}(v)\cdot dv\\)
- 可求出\\(U\\)的分布函数后求导验证

### 5. 多维高斯分布
- 随机向量\\(X=(X_1, X_2,...,X_n)\\)
- 数学期望向量\\(E(X) = (E(X_1), E(X_2), ... , E(X_n))\\)
- 协方差矩阵
  - 半正定性：\\(\alpha^T Cov(X) \alpha = E((\alpha^T(X-E(X)))^2) \geq 0\\)
  
$$
Cov(X) = \begin{pmatrix}
Var(X_1) & Cov(X_1,X_2) & ... & Cov(X_1, X_n) \\
Cov(X_2,X_1) & Var(X_2) & ... & Cov(X_2, X_n)\\
... & ... & ... & ...\\
Cov(X_n, X_1) & Cov(X_n, X_2) & ... & Var(X_n) \\
\end{pmatrix}
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

---

## 二、尾不等式、大数定律与中心极限定理（暂略）
- **尾不等式/集中不等式**：给出频率偏离特定值/数学期望的概率上界
  - 马尔可夫不等式：\\(P(X\geq a \cdot E(X))\leq \frac{1}{a}\\)
  - 切比雪夫不等式 ：\\(P(\vert X - E(X) \vert \geq c \cdot \sigma(X)) \leq \frac{1}{c^2}\\)
- **大数定律**：试验次数趋于无穷时，频率与数学期望的差值小于任意正数的概率趋于1

### 1. 尾不等式
马尔可夫不等式用一阶矩\\(E(X)\\)，切比雪夫不等式用中心二阶矩\\(Var(X)\\)，在计算过程中只用到了各个试验之间两两独立的信息，而实际上它们相互独立。为了给出更好的上界，应该利用相互独立的性质，于是考虑更高阶的偶阶矩（奇阶不能维持绝对值），再将关于\\(X\\)的概率转化为关于\\(X\\)的高阶矩的概率。
- **矩生成函数**：\\(M_{X}(t) = E(e^{tX})\\)
  - (作业二第二题)\\(M_{X}(t) = \sum_{i=0}^{+\infty}\frac{t^i}{i!}E(X^i)\\)
  - \\(E(X^k) = \frac{d^k M_{X}(t)}{dt^k}\vert_{t=0}\\)，即\\(k\\)阶矩为矩生成函数\\(k\\)阶导数在\\(t=0\\)处的取值
  - 要完全利用相互独立的条件，便要计算更高阶矩，计算量很大，于是有下述Chernoff Bound方法
- **Chernoff Bound**：对\\(e^{tX}\\)使用马尔可夫不等式，\\(M_{X}(t) = E(e^{tX})\\)
  - 用\\(e\\)指数避免了马尔可夫不等式对非负性的要求
  - \\(\forall t > 0, P(X\geq k) = P(e^{tX}\geq e^{tk}) \leq P(e^{tX}\geq \frac{e^{tk}}{E(e^{tX})}\cdot E(e^{tX}))\leq M_{X}(t)\cdot e^{-tk}\\)
  - 同理：\\(\forall t < 0, P(X\leq k) \leq M_{X}(t)\cdot e^{-tk}\\)
  - 不等式中\\(t\\)可以取任意值，使用时选取使得上界最小的最优\\(t\\)

**例题：泊松分布**

\\(X\sim \pi(\lambda)\\)，给出\\(P(X\geq x)\\)的上界。
- \\(M_{X}(t) = E(e^{tX}) = e^{\lambda(e^t-1)}\\)
- \\(\text{对于}t > 0, P(X\geq x) = P(e^{tX}\geq e^{tk}) \leq e^{\lambda(e^t-1)-tx}\\)
- 最小化\\(e^{\lambda(e^t-1)-tx}\\)，求导得到\\(t = \ln{\frac{x}{\lambda}}\\)
- \\(t > 0 \Rightarrow x > \lambda \text{时}, P(X\geq x) \leq \frac{e^{-\lambda}(e\lambda)^x}{x^x}\\)

- **Hoeffding引理**：若实数随机变量\\(a\leq X \leq b\\)，则\\(E(e^{t(X-E(X))})\leq e^{\frac{t^2(b-a)^2}{8}}\\)
- **Chernoff-Hoeffding不等式**：若\\(X=\sum_{i=1}^{n}X_i\\)，\\(X_i\\)相互独立且\\(a\leq X_i \leq b\\)
  - \\(P(X\geq E(X)+k)\leq e^{-\frac{2k^2}{n(b-a)^2}}\\)
  - \\(P(X\leq E(X)-k)\leq e^{-\frac{2k^2}{n(b-a)^2}}\\)
  - 证明：对\\(X-E(X)\\)使用Chernoff Bound，再结合Hoeffding引理后对\\(t\\)求导代入可得
  - 若\\(X\sim B(n,p)\\)，则有
    - \\(P(X\geq n(p+\epsilon))\leq e^{-2n\epsilon^2}\\)
    - \\(P(X\leq n(p-\epsilon))\leq e^{-2n\epsilon^2}\\)
    - \\(P(\vert X - np\vert \geq n\epsilon)\leq 2e^{-2n\epsilon^2}\\)
- **总结：尾不等式的三种证明**
  - 直接放缩，利用分布函数
  - 计算偶阶中心距（对矩生成函数求导），使用马尔可夫不等式
  - 对矩生成函数使用马尔可夫不等式，即Chernoff Bound；对矩生成函数求期望时可以结合Hoeffding引理，最后对\\(t\\)求导代回

**例题：正确结果**
- 某计算机程序有1/3的概率返回错误的结果，有2/3的概率返回正确的结果。假设只有一种正确的结果，错误的结果有多种。如何通过重复运行来提高得到正确结果的概率？
  - 返回错误结果的次数\\(X \sim B(T, \frac{1}{3})\\)
  - \\(E(X) = \frac{T}{3}\\)
  - Chernoff Bound:\\(P(X-E(X)\geq T\epsilon)\leq e^{-2T\epsilon^2}\\)
  - \\(\epsilon = \frac{1}{6}\Rightarrow P(X\geq \frac{T}{2})\leq e^{-\frac{T}{18}}\\)
  - \\(T = O(\ln{\frac{1}{\delta}})\\)时众数为正确的结果的概率至少为\\(1-\delta\\)

### 2. 大数定律
- **一般形式**：对于随机变量\\({X_n}\\)，\\(\forall \epsilon > 0\\) 
$$
  \lim_{n\to \infty}P(\vert \frac{1}{n}\sum_{i=1}^{n}X_i - \frac{1}{n}\sum_{i=1}^{n}E(X_i)\vert < \epsilon ) = 1
$$
- **伯努利大数定律**：在\\(n\\)重伯努利试验中，\\(n_A\\)为事件\\(A\\)发生的次数，\\(P(A) = p\\)，\\(\forall \epsilon > 0, \lim_{n\to \infty}P(\vert \frac{n_A}{n} - p\vert < \epsilon) = 1\\)
- **马尔可夫大数定律**：若\\(\frac{1}{n^2}Var(\sum_{i=1}^{n}X_i) \to 0\\)，则\\({X_i}\\)服从大数定律（一般形式）
  - 证明：对\\(\frac{1}{n}\sum_{i=1}^{n}X_i\\)使用切比雪夫不等式
  
**例题：利用相关系数**

\\({X_n}\\)为一列同分布且标准差\\(\sigma = \sigma(X_i)\\)存在的随机变量。\\(X_i\\)仅与\\(X_{i-1},X_{i+1}\\)相关，证明\\({X_n}\\)服从大数定律。
- \\(Corr(X_i,X_{i+1})\leq 1 \Rightarrow Cov(X_i,X_{i+1})\leq \sigma^2\\)
- \\(Var(\sum_{i=1}^{n}X_i) = \sum_{i=1}^{n}\sum_{j=1}^{n}Cov(X_i,X_j)\leq n\cdot \sigma^2 + 2(n-1)\sigma^2\\)
- *\\(2(n-1)\\)为每个\\(X_i\\)的前驱后继，头尾只有一个于是\\(-2\\)*
- \\(\frac{1}{n^2}Var(\sum_{i=1}^{n}X_i) \to 0\\)

- **辛钦大数定律**：\\({X_n}\\)**独立同分布**，且**数学期望\\(\mu = E(X_i)\\)存在**，则\\({X_n}\\)服从大数定律
  - 即\\(\forall \epsilon > 0, \lim_{n\to \infty}P(\vert \frac{1}{n}\sum_{i=1}^{n}X_i - \mu\vert < \epsilon) = 1\\)
  - 对比马尔可夫大数定律，需要独立同分布的假设，不需要对方差进行假设

- 随机变量序列的收敛性
  - **依概率收敛\\(Y_n \overset{P}{\rightarrow} Y\\)**：令\\({Y_n}\\)为一列随机变量，\\(Y\\)为随机变量。若\\(\forall \epsilon >0, \lim_{n\to \infty}P(\vert Y_n - Y\vert < \epsilon)=1\\)，则称\\({Y_n}\\)依概率收敛于\\(Y\\)
    - 这是期望意义上的收敛，收敛值和集中不等式中期望的形式类似
  - **依分布收敛\\(Y_n \overset{d}{\rightarrow} Y\\)**：\\(\forall F(x)\text{的连续点}x, F_n(x)\to F(x)\\)
    - 即\\(n\\)无穷大时，\\(X_n\\)和\\(X\\)的分布函数在任意连续点相同
  - \\(Y_n \overset{P}{\rightarrow} Y \Rightarrow Y_n \overset{d}{\rightarrow} Y\\)
  - 反之不成立
    - 考虑对称的分布\\(P(X=+1)=P(X=-1)=\frac{1}{2},Y=-X\\)
  - \\(X\\)服从单点分布，则\\(Y_n \overset{P}{\rightarrow} Y \Leftrightarrow Y_n \overset{d}{\rightarrow} Y\\)
  
- **特征函数**\\(\Phi_X(t) = E(e^{itx}) = M_X(it)\\)
  - *不考*
  - *并不是每一个分布都存在矩生成函数，期望可能不存在，而利用复变函数可得：每个分布都存在一个一一对应的特征函数。当\\(M_X(t)\\)存在时，可以代入\\(it\\)算出\\(\Phi_X(t)\\)*
  - \\(X\sim \pi(\lambda), M_X(t) = e^{\lambda(e^t-1)}\\)
  - \\(X\sim N(\mu, \sigma^2), M_X(t) = e^{\mu t + \frac{\sigma^2 t^2}{2}}\\)
  - \\(X\sim B(n,p), M_X(t) = (1-p+pe^t)^n\\)
  - \\(X\\)服从柯西分布，即\\(f(x) = \frac{1}{\pi(x^2+1)},M_X(t) \text{不存在},\Phi_X(t) = e^{-\vert t\vert}\\)
  - \\(\Phi_{aX+b}(t) = \Phi_X(at)\cdot e^{itb}\\)
  - \\(X,Y\\)相互独立，\\(\Phi_{X+Y}(t) = \Phi_X(t)\cdot \Phi_Y(t)\\)
  - 由特征函数计算可得：
    - 证明一些分布的可加性
      - 正态分布的可加性（期望和方差分别相加）
      - 柯西分布的可加性：\\(\sum_{i=1}^{n}a_i\cdot X_i \sim \vert a\vert_1 \cdot X\\)
    - 证明依分布收敛：\\(n\to \infty\\)时特征函数相同
    - 证明辛钦大数定律：计算\\(X_n\\)的特征函数
  
- **中心极限定理及其应用**（不考，暂略，Lecture6 Page34）

---

## 三、参数估计
*开始统计学了，我们要根据已有的数据样本去估计一个分布中的未知参数，并且由一系列的metric去评判估计的好坏*
*每一个简单随机样本和总体服从相同的分布，即下述\\(X_i\\)和\\(X\\)的分布相同*
### 1. 点估计
给定参数\\(\theta\\)的估计量\\(\hat{\theta}(X_1,X_2,...,X_n)\\)
- **偏差\\(Bias(\hat{\theta})\\)**：\\(Bias(\hat{\theta})=E(\hat{\theta} - \theta)\\)
  - **无偏**：\\(Bias(\hat{\theta}) = 0\\)
  - **渐近无偏**：\\(\lim_{n\to \infty}Bias(\hat{\theta}) = 0\\)
- **均方误差\\(MSE(\hat{\theta})\\)**：\\(MSE(\hat{\theta}) = E((\hat{\theta} - \theta)^2)\\)
  - 若\\(\hat{\theta}\\)无偏，则\\(Bias(\hat{\theta}) = Var(\hat{\theta})\\)
- **一致估计量**：若有\\(\hat{\theta} \overset{P}{\rightarrow} \theta\\)，即\\(\forall \epsilon >0, \lim_{n\to \infty}P(\vert\hat{\theta}  - \theta\vert \geq \epsilon)=0\\)，则称\\(\hat{\theta}\\)为一致估计量
- **若\\(\lim_{n\to \infty} MSE(\hat{\theta}) = 0\\)，则\\(\hat{\theta}\\)为一致估计量**
  - 证明：对\\((\hat{\theta} - \theta)^2\\)使用马尔可夫不等式
- **总结**
  - 判断无偏/渐近无偏：计算\\(Bias(\hat{\theta})=E(\hat{\theta} - \theta)\\)
  - 计算均方误差：\\(MSE(\hat{\theta}) = E((\hat{\theta} - \theta)^2)\\)，无偏时直接计算方差\\(Var(\hat{\theta})\\)
  - 判断一致估计量：计算均方误差，均方误差趋于0是一致的充分条件

**例题：Lecture7 Page13-16**（暂略）

**矩法估计**：用样本矩去替换总体矩

- \\(k\\)阶矩\\(A_k = \frac{1}{n}\sum_{i=1}^{n}X_i^k\\)是总体\\(k\\)次期望\\(E(X_k)\\)的无偏估计
- \\(2\\)阶中心矩\\(B_2 = \frac{1}{n}\sum_{i=1}^{n}(X_i-\bar{X})^2\\)是总体方差\\(Var(X)\\)的渐近无偏估计
  - \\(E(B_2) = \frac{n-1}{n}\cdot Var(X)\\)
  - 于是定义样本方差\\(S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar{X})^2\\)，是总体方差\\(Var(X)\\)的无偏估计
  
- 总体\\(X\sim N(\mu, \sigma^2)\\)，样本均值\\(\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i\\)和样本方差\\(S^2= \frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar{X})^2\\)相互独立，且\\(\bar{X}\sim N(\mu, \frac{\sigma^2}{n}), \frac{(n-1)S^2}{\sigma^2}\sim \chi^2(n-1)\\)
  - 考虑正交矩阵\\(U,u_1=(\frac{1}{\sqrt{n}}, \frac{1}{\sqrt{n}}, ... , \frac{1}{\sqrt{n}})\\)，其余行任取
  - 令\\(X=(X_1,X_2,...,X_n),Y=UX\\)
    - \\(Y\\)服从\\(n\\)维高斯分布
    - 由与\\(u_1\\)的正交性：\\(E(Y) = (\sqrt{n}\mu, 0, 0,...,0)\\)
    - 由随机样本之间的独立性：\\(Cov(Y) = \sigma^2 \cdot I\\)
    - 由正交矩阵的保距性：\\(\sum_{i=1}^{n}Y_i^2 = \sum_{i=1}^{n}X_i^2\\)
    - \\(\bar{X} = \frac{Y_1}{\sqrt{n}}\\)
    - \\((n-1)S^2 = \sum_{i=1}^{n}(X_i - \bar{X})^2 = (\sum_{i=1}^{n}X_i^2) - n\bar{X}^2 = (\sum_{i=1}^{n}Y_i^2) - Y_1^2 = \sum_{i=2}^{n}X_i^2\\)
    - 由此可知\\(\bar{X}\\)只与\\(Y_1\\)相关，而\\(S^2\\)只与\\(Y_1,Y_3,...,Y_n\\)相关；又因为\\(Y_i\\)两两独立，故\\(\bar{X}\\)与\\(S^2\\)相互独立
    - 再由正态分布和Gamma分布的可加性和相关性
      - 若\\(Z_1,Z_2,...,Z_n\\)独立同分布且\\(Z_i\sim N(0,1)\\)，则\\(Z_i^2 \sim \chi^(1) = \Gamma(\frac{1}{2},\frac{1}{2})\Rightarrow \sum_{i=1}^{n}Z_i^2 \sim \chi^2(n) = \Gamma(\frac{n}{2}, \frac{1}{2})\\)
      - \\(\frac{(n-1)S^2}{\sigma^2}\sim \chi^2(n-1)\\)
      - \\(\bar{X}\sim N(\mu, \frac{\sigma^2}{n})\\)

- **设计估计量**
  - (1)将位置参数表示为总体前\\(k\\)阶矩的函数
    - 一般有几个参数需要估计就用几个总体矩，然后解方程
  - (2)用样本矩或中心距替换总体矩，有多种方法
    - 也可用样本方差\\(S^2\\)替换\\(Var(X)\\)
  - 随机样本不独立，不符合简单随机样本的情况也可以直接用矩法估计

**例题：均匀分布**

已知总体\\(X\sim U(a,b)\\)。用矩法设计\\(a\\)和\\(b\\)的估计量。
- \\(E(X) = \frac{a+b}{2}, Var(X) = \frac{(b-a)^2}{12}\\)
- \\(a = E(X) - \sqrt{3\cdot Var(X)}, b = E(X) + \sqrt{3\cdot Var(X)}\\)
- \\(\hat{a} = \bar{X} - \sqrt{3\cdot S^2}, \hat{b} = \bar{X} + \sqrt{3\cdot S^2}\\)

**最大似然估计**：选择参数\\(\theta\\)使得样本点出现的概率最大

- 求最大似然估计的过程
  - 计算\\(P(X_1=x_1, X_2=x_2,...,X_n=x_n;\theta)\\)或\\(f(X_1=x_1, X_2=x_2,...,X_n=x_n;\theta)\\)
    - 要注意随机变量的取值范围，比如\\(x<0\\)时\\(f(x)=0\\)，此时用示性函数表示
    - 例题：总体\\(X\sim U(0,\theta)\\)，给定简单随机样本\\(x_1,x_2,...,x_n\\)，求未知参数\\(\theta\\)的最大似然估计。
      - \\(L(\theta) = \prod_{i=1}^{n} \frac{1 _{x_i \leq \theta}}{\theta} = \frac{1 _{x_1 \leq \theta,x_2 \leq \theta,...,x_n\leq \theta}} {\theta ^n} \\)
  - 求导或观察选择\\(\theta\\)最大化\\(P(X_1=x_1, X_2=x_2,...,X_n=x_n;\theta)\\)或\\(f(X_1=x_1, X_2=x_2,...,X_n=x_n;\theta)\\)
    
- 最大似然估计的不变性：对于双射equivirant
- 在分类问题中，最大似然估计等价于最小化交叉熵损失函数（暂略）

### 2. 区间估计
设计统计量**置信上限**\\(\hat{\theta}_L(X_1,X_2,...,X_n)\\)和**置信下限**\\(\hat{\theta}_U(X_1,X_2,...,X_n)\\)，使得\\(\theta\in [\hat{\theta}_L, \hat{\theta}_U]\\)的概率尽量大，满足\\(P(\theta\in [\hat{\theta}_L, \hat{\theta}_U]) \geq 1-\alpha\\)，则\\([\hat{\theta}_L, \hat{\theta}_U]\\)为\\(\theta\\)的**置信水平**为\\(1-\alpha\\)的**置信区间**

**枢轴量法**
- 设计枢轴量\\(G = G(x_1,x_2,...,x_n)\\)，使得\\(G\\)的分布与未知参数\\(\theta\\)无关
  - 通常从\\(\theta\\)的点估计出发，比如减去数学期望，除以标准差等
  - 主要目的是标准化，使得后续的区间与\\(\theta\\)无关
- 选择\\(c,d\\)，使得\\(P(c\leq G \leq d) = 1-\alpha\\)
    - 通常选择\\(P(G < c) = P(G > d) = \frac{\alpha}{2}\\)
    - 结合Chernoff Bound可以简便地给出不等式
- 变形为\\(P(\hat{theta}_L \leq \theta \leq \hat{\theta}_U) = 1-\alpha\\)

**例题：正态分布**

总体\\(X\sim N(\mu, \sigma^2)\\)\\(\mu,\sigma^2\\)均未知。设计\\(\mu\\)的置信水平为\\(1-\alpha\\)的置信区间。
- 当\\(\sigma^2\\)已知时，我们会设计枢轴量\\(G = \frac{\bar{X}-\mu}{\sigma^2} \sim N(0,1)\\)
- 而当\\(\sigma^2\\)未知时，考虑用\\(S^2\\)替换\\(\sigma^2\\)，从而\\(G = \frac{\bar{X}-\mu}{S^2}\\)服从什么分布？
- recap:\\( \bar{X}\sim N(\mu, \frac{\sigma^2}{n}),\frac{(n-1)S^2}{\sigma^2}\sim \chi^2(n-1)\\)
- **\\(t\\)分布**：\\(T=\frac{X_1}{\sqrt{X_2/n}} \sim t(n)\\)，即自由度为\\(n\\)的\\(t\\)分布，其中\\(X_1,X_2\\)相互独立且\\(X_1\sim N(0,1), X_2\sim \chi^2(n)\\)
  - \\(n=1, f(t)=\frac{1}{1+t^2}\cdot \frac{1}{\pi}\\)
  - 当自由度\\(n\\)较大，近似为标准正态分布
- \\(G = \frac{\bar{X}-\mu}{S^2} \sim t(n-1)\\)

**例题：Chernoff Bound和二项分布**

总体\\(X\sim B(1,p)\\)。设计\\(p\\)的置信水平为\\(1-\alpha\\)的置信区间。
- 自然地想到设计枢轴量\\(\bar{X}-p\\)，由中心极限定理可知\\(\frac{\sum_{i=1}^{n}X_i-np}{\sqrt{np(1-p)}}\\)近似服从\\(N(0,1)\\)，接着按照标准正态分布设计区间
- 不使用中心极限定理，可以用Chernoff Bound给出枢轴量\\(\bar{X}-p\\)位于给定区间的概率上界
  - recap:\\(X\sim B(n,p), P(\vert X - np\vert \geq n\epsilon)\leq 2e^{-2n\epsilon^2}\\)
  - \\(2e^{-2n\epsilon^2} = \alpha \Rightarrow \epsilon = \sqrt{\frac{\ln(2/a)}{2n}}\\)
  - \\(P(\bar{X} - \sqrt{\frac{\ln(2/a)}{2n}}\leq p \leq \bar{X} + \sqrt{\frac{\ln(2/a)}{2n}}) \geq 1- \alpha\\)

**例题：游戏机**

有\\(n\\)台游戏机，第\\(i\\)台游戏机的中奖概率为未知参数\\(p_i\\)，每轮可从\\(n\\)台游戏机中选择一台进行游戏。用最少的轮数，找到中奖概率最高的游戏机。
- 第\\(t\\)轮选择第\\(i\\)台游戏机，观测结果\\(X_t\sim B(1,p_i)\\)
- 均匀采样：对每一台游戏机采样\\(N\\)次，返回样本均值最大的游戏机
- 第\\(i\\)台游戏机中奖的样本均值\\(\bar{X} = \frac{\sum_{i=1}^{n}X_i}{N}, X_i\sim B(1,p_i)\\)，**由上述Chernoff Bound给出的二项分布的置信区间可知**：令\\(\epsilon = \sqrt{\frac{\ln(2/\alpha)}{2N}} \Rightarrow N = O(\frac{\ln(1/\alpha)}{\epsilon^2})\\)，有\\(P(\vert p_i - \bar{X_i}\vert \leq \epsilon)\geq 1-\alpha\\)
  - 即试验\\(N\\)次后，每台游戏机中奖的样本均值与其概率的误差超过\\(\epsilon\\)的概率不超过\\(\alpha\\)
- 至于\\(\alpha\\)怎么取，要看题目里要求的出错范围
  - 当要求\\(P(p_o\geq \max_{i}p_i -2\epsilon)\geq \frac{2}{3}\\)时，取\\(\alpha = \frac{1}{3} \cdot \frac{1}{n}\\)
    - 因为只要每一台出错的概率不超过\\(\frac{1}{3n}\\)，存在一台出错的概率由Union Bound不超过\\(\frac{1}{3}\\)
    - 至于为什么是\\(p_o\geq \max_{i}p_i -2\epsilon\\)，因为允许每一台存在\\(\epsilon\\)的误差，即我们对出错的定义是误差超过\\(\epsilon\\)，此时若将最大概率的游戏机估计偏小了\\(\epsilon\\)而将第二大的估计偏大了\\(\epsilon\\)，使得恰好选择了第二大的游戏机，那么选择的概率会比最大概率小\\(2\epsilon\\)
  - **当要求\\(P(p_o\geq \max_{i}p_i -2\epsilon)\geq 1-\delta\\)时，同理：取\\(\alpha = \frac{\delta}{n}\\)**
- 再由\\(N = O(\frac{\ln(1/\alpha)}{\epsilon^2}) \Rightarrow N = O(\frac{\ln(n/\delta)}{\epsilon^2})\\)

---

## 四、回归分析
*点估计和区间估计利用样本数据对分布中所含有的未知参数进行了估计，而回归分析利用样本数据对变量之间的关系进行估计，显然回归分析的样本数据中含有多个变量，考虑两个变量的情况*

给定数据\\((x_1,y_1),(x_2,y_2),...,(x_n,y_n)\\)，估计\\(y\\)与\\(x\\)的关系

### 1. 线性相关关系
- \\(y=\alpha +\beta x  + \epsilon\\)
- \\(\alpha ,\beta\\)为需要估计的未知参数
- \\(\epsilon\\)为误差，\\(E(\epsilon) = 0, Var(\epsilon) = \sigma^2\\)，\\(\sigma^2\\)为未知参数
- \\(x\\)可以精确测量或严格控制
- 目标：利用数据\\((x_1,y_1),(x_2,y_2),...,(x_n,y_n)\\)给出\\(\hat{\alpha},\hat{\beta}\\)
- 假设：\\(y_i=\alpha +\beta x_i + \epsilon_i,E(\epsilon_i) = 0,  Var(\epsilon_i) = \sigma^2\\)且\\(\epsilon_i\\)相互独立

### 2. 最小二乘估计
- 最小化\\(Q(\alpha, \beta) = \sum_{i=i}^{n}(y_i-\beta x_i -\alpha)^2\\)的\\(\hat{\alpha} , \hat{\beta}\\)为**最小二乘估计**
- 如何根据数据计算最小二乘估计？有哪些性质？如何预测？
- 计算：

$$
\begin{align*}
  \frac{\partial Q}{\partial \beta} &= -2\sum x_i\cdot (y_i - \beta x_i - \alpha) = 0\\
  \frac{\partial Q}{\partial \alpha} &= -2\sum (y_i - \beta x_i - \alpha) = 0\\
  \Rightarrow \hat{\beta} &= \frac{s_{xy}}{s_{xx}}\\
   \hat{\alpha} &= \bar{y} - \hat{\beta}\cdot \bar{x}\\
   \text{其中}\bar{x} &= \frac{1}{n} \sum x_i, \bar{y} = \frac{1}{n} \sum y_i\\
    s_{xx} &= \sum(x_i-\bar{x})(x_i-\bar{x}) = \sum x_i^2 - n\cdot (\bar{x})^2\\
    s_{xy} &= \sum(x_i-\bar{x})(y_i-\bar{y}) = \sum x_i y_i - n\cdot \bar{x} \cdot \bar{y}\\
    \text{由}\sum (x_i-\bar{x})=0, \text{可得：}\\
    \hat{\beta} &= \beta + \sum \epsilon_i \cdot \frac{x_i-\bar{x}}{s_{xx}}\\ 
    \hat{\alpha} &= \alpha + \sum \epsilon_i \cdot (\frac{1}{n}-\frac{x_i - \bar{x}}{s_{xx}}\cdot \bar{x})
\end{align*}
$$

- 可见\\(\hat{\alpha},\hat{\beta}\\)实际上都是随机变量，可以接着计算它们的\\(E,MSE,Cov\\)等，计算时结合\\(\epsilon_i\\)的独立性和\\(s_{xx}\\)变形等，比较复杂，这里只给出结果

$$
\begin{align*}
    E(\hat{\beta}) &= \beta , E(\hat{\alpha}) = \alpha \\
    MSE(\hat{\beta}) &= Var(\hat{\beta}) = \frac{\sigma^2}{s_{xx}}\\
    MSE(\hat{\alpha}) &= Var(\hat{\alpha}) = \sigma^2(\frac{1}{n} + \frac{\bar{x}^2}{s_{xx}})\\
    Cov(\hat{\beta}, \hat{\alpha}) &= -\sigma^2\cdot \frac{\bar{x}}{s_{xx}}
\end{align*}
$$

- 预测值\\(\hat{y_i} = \hat{\alpha} + \hat{\beta} x_i, \hat{y_i} - y_i\\)实际上也都是随机变量，也可以接着计算它的\\(E,Var\\)，因为\\(\hat{\alpha},\hat{\beta}\\)并不独立，计算方差时要结合上面求出的\\(Cov\\)，同样只给出结果

$$
\begin{align*}
    E(\hat{y_i}) &= \alpha + \beta x = E(y_i) \Rightarrow E(\hat{y_i}-y_i) = 0\\
    Var(\hat{y_i}) &= Var(\hat{\alpha}) + x_i^2\cdot Var(\hat{\beta}) + 2x_i\cdot Cov(\hat{\alpha}, \hat{\beta})\\
    &= \sigma^2(\frac{1}{n}+\frac{(\bar{x}-x_i)^2}{s_{xx}})\\
    Var(\hat{y_i}-y_i) &= Var(\hat{y_i}) + Var(y_i) -2Cov(\hat{y_i}, y_i)\\
    &= \frac{n-1}{n}\sigma^2 - \frac{(\bar{x}-x_i)^2}{s_{xx}}\sigma^2\\
    E(\sum (\hat{y_i}-y_i)^2) &= \sum Var(\hat{y_i}-y_i) = (n-2)\sigma^2\\
    E(s^2) &= E(\frac{1}{n-2}\sum (\hat{y_i}-y_i)^2) = \sigma^2
\end{align*}
$$

- 于是\\(s^2 = \frac{1}{n-2}\sum (\hat{y_i}-y_i)^2\\)是\\(\sigma^2\\)的**无偏估计量**
  - 到现在，我们已经给出了\\(\alpha, \beta, \sigma^2\\)的无偏估计，通过解正规方程（最小化\\(Q\\)）和类似矩法的估计量

- 更强的假设：\\(\epsilon_i \sim N(0, \sigma^2)\\)且相互独立
  - 如此一来，可以发现上文推导的估计量全都服从正态分布，因为都是\\(\epsilon_i\\)线性组合出来的（除了\\(s^2\\)这种二次的）
  - 试着给出\\(\alpha, \beta, \sigma^2\\)的最大似然估计

$$
    \ln{L(\alpha, \beta, \sigma^2)} = \sum_{i=1}^{n}-\frac{(y_i - \alpha - \beta x_i)^2}{2\sigma^2} - n\cdot \frac{\ln(2\pi)}{2} - n\cdot \frac{\ln{\sigma^2}}{2}
$$

- 发现对于固定的\\(\sigma^2\\)，最大化似然函数等价于最小二乘估计\\(\alpha ,\beta\\)
- 至于\\(\sigma^2\\)的最大似然估计
  - \\(\frac{\partial L}{\partial \sigma^2} = \frac{(y_i - \alpha - \beta x_i)^2}{2(\sigma^2)^2} - \frac{n}{2\sigma^2} = 0\\)
  - \\(\hat{\sigma^2}_{MLE} = \frac{1}{n}\sum (\hat{y_i} - y_i)^2\\)为有偏估计

- 由上述可知，\\(\hat{\alpha}, \hat{\beta}\\)服从二维高斯分布
  - **作业八第三题**：把数据\\(y\\)看作一个\\(n\\)维高斯分布，利用上述分析多维高斯分布类似的方法（正交变换）得出\\(\frac{(n-2)s^2}{\sigma^2}\sim \chi^2(n-2)\\)，且\\(s^2\\)与\\(\hat{\alpha}, \hat{\beta}\\)独立
    - 正交矩阵的第一行仍然是\\((\frac{1}{\sqrt{n}},\frac{1}{\sqrt{n}},...,\frac{1}{\sqrt{n}})\\)
    - 第二行为\\((\frac{x_1-\bar{x}}{\sqrt{s_{xx}}}, \frac{x_2-\bar{x}}{\sqrt{s_{xx}}},...,\frac{x_n-\bar{x}}{\sqrt{s_{xx}}})\\)
    - 这个方法感觉技巧性很高，主要是通过前两行将\\(y\\)各个分量线性组合成有关\(\hat{\alpha}, \hat{\beta}\\)的量，再用剩余的行表示出\\(s^2\\)
- 对于新数据\\(x_0\\)，\\(E(\hat{\alpha}+\hat{\beta}x_0) = \alpha + \beta x_0\\)，即\\(\hat{\alpha}+\hat{\beta}x_0\\)是\\(E(y_0)\\)的无偏估计，它服从正态分布；更进一步求置信区间只需标准化即可（(点估计-真值)/标准差），\\(\sigma^2\\)未知时标准化为\\(t\\)分布；对于\\(y_0\\)的点估计和区间估计也类似，用\\(y_0\\)替换\\(E(y_0)\\)即可

- **确定系数**：\\(r^2 = 1 - \frac{\sum (y_i - \hat{y_i})^2}{\sum (y_i - \bar{y})^2}\\)
  - 总平方和：\\(SST = \sum (y_i - \bar{y})^2\\)
  - 残差平方和：\\(SSE = \sum (y_i - \hat{y_i})^2\\)
  - 回归平方和：\\(SSR = \sum (\hat{y_i} - \bar{y})^2\\)
  - **作业八第二题**：\\(SST = SSE + SSR\\)
  - \\(r^2\\)描述了总平方和中回归平方和所占的比例
  
---

## 五、假设检验
*参数估计的目标是估计分布中的未知参数，而假设检验的目标是以一定的确定程度判断未知参数的取值情况*

### 1. 建立假设
- **原假设**\\(H_0\\)：不应轻易拒绝的假设，即比较容易发生的事
- **备择假设**\\(H_1\\)：与原假设对立的假设

### 2. 选择统计量，给出拒绝域形式
- **拒绝域**\\(W\\)：若\\((x_1,x_2,...,x_n)\in W\\)，拒绝原假设\\(H_0\\)
- **接受域**\\(\bar{W}\\)：若\\((x_1,x_2,...,x_n)\in \bar{W}\\)，接受原假设\\(H_0\\)
- **第一类错误**：样本点位于拒绝域，原假设被拒绝，但其为真
  - \\(\alpha\\)为犯第一类错误的概率，即原假设为真，样本在拒绝域的概率
  - 计算\\(\alpha(\theta)\\)，实际上是在定义在\\(\theta \in \Theta_0\\)上的函数，取值为\\(P((x_1,x_2,...,x_n)\in W)\\)
- **第二类错误**：样本点位于接受域，原假设被接受，但其为假
  - \\(\beta\\)为犯第二类错误的概率

### 3. 选择显著性水平\\(\alpha\\)，给出拒绝域
- **显著性水平**：\\(\alpha = \max_{\theta \in \Theta_0} \alpha(\theta)\\)
  - \\(\alpha\\)是一个错误拒绝原假设的概率最小上界，也即能达到的犯第一类错误的最大概率
- 根据\\(\alpha\\)反解出拒绝域中参数
- **\\(p\\)值**：给定样本取值，能够做出拒绝原假设的最小显著性水平称为检验的\\(p\\)值
  - 如果\\(\alpha \geq p\\)，说明错误拒绝原假设的概率较高，即更容易拒绝原假设，于是拒绝原假设
  - 反之如果\\(\alpha < p\\)，接受原假设

**例题：假设检验框架**

令总体服从\\(Exp(\frac{1}{\theta})\\)。\\(H_0:\theta \leq \theta_0, H_1:\theta > \theta_0\\)，拒绝域为\\(W=\lbrace(x_1,x_2,...,x_n) \vert \bar{x}\geq c\rbrace\\)，\\(c\\)为待定值，\\(x_i\sim \Gamma(1,\frac{1}{\theta})\\)
- 考虑\\(\bar{x}\\)服从什么分布，由Gamma分布的可加性：\\(n\bar{x}\sim \Gamma(n,\frac{1}{\theta})\\)
- 再想着去标准化，构造出一个于\\(\theta\\)无关的枢轴量：\\(\frac{2n\bar{x}}{\theta}\sim \Gamma(n,\frac{1}{2})=\chi^2(2n)\\)
- 于是有了置信区间：\\(P(\bar{x}\geq c)= P(\frac{2n\bar{x}}{\theta}\geq \frac{2nc}{\theta}) = 1-\Phi(\frac{2nc}{\theta})\\)
- \\(\forall \theta \leq \theta_0\\)，上式最大值不超过显著性水平\\(\alpha\\)，解得\\(c = \frac{\Phi^{-1}(1-\alpha)\theta_0}{2n}\\)
- \\(p = 1 - \Phi(\frac{2n\bar{x}}{\theta_0})\\)
  

---

## 习题课
- 多元随机变量min max连乘
- chernoff-hoeffding不等式 有界[a,b] 尾不等式比较重要
- 大数定律 马尔可夫大数定律（方差） 辛钦大数定律（独立同分布 数学期望）应用 不考证明 

重要性采样
求数学期望
证明依概率收敛
$$
Y_i ~ g \\
\frac{1}{n}\sum \frac{f(Y_i)}{g(Y_i)} h(Y_i)\rightarrow(P) E_f(h(X))
$$

- chernoff bound证明 第六次作业第五题
- 最大似然估计 矩估计 计算 反gamma分布
- 无偏 渐近无偏 一致估计 定义
- 假设检验 框架 求c(\alpha) 似然比
- 线性回归 变化更多
  - 期望方差/正态分布
  - LASSO: Q加上一个正则项 \lambda |\beta|
  - x_i = n_i + \delta_i, y_i = \alpha + \beta n_i + \epsilon_i
    - \delta, \epsilon ~ N(0,\sigma_i^2) 引入\lambda为方差比值
    - x_i, y_i也是正态分布
    - 最小化似然函数L(\alpha, \beta, \sigma_1^2, \sigma_2^2)
    - 观察到的只有x_i,y_i 要算出n_i应该是多少 求partial
  - MSE Cov 把\hat{\beta}的分布写成\beta \epsilon \delta的多项式
- 点估计+假设检验 c(\alpha) 均匀分布 矩估计和最大似然估计的区别
