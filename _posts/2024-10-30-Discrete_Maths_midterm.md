---
layout: post
title: "2024fall-离散数学基础-期中复习"
date: 2024-10-30
categories: [DIscrete_Maths, 2024fall]
tags: [academic, blog]
---

<link rel="stylesheet" type="text/css" href="/assets/css/styles.css">
<script type="text/javascript" src="/assets/js/scripts.js"></script>
<script type="text/javascript" async 
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

# 期中复习
*第一至九章，除对偶图与着色*

## 第一章 集合
### 1. 基本概念
- 幂集\\(P(A), 2^A\\)
  - **设\\(A\\)为集合，称\\(A\\)的全体子集构成的集合为\\(A\\)的幂集**
  - \\(P(A)=\lbrace X \mid X \\subseteq A \rbrace \\)
  - 如果\\(A\\)是\\(n\\)元集，\\(P(A)\\)有\\(2^n\\)个元素
- 对称差\\(A \oplus B\\)
  - **\\(A \oplus B = (A-B)\cup (B-A)\\)**
- 广义并\\(\cup \mathcal{A} \\)
  - **设\\(\mathcal{A} \\)为一个集族，\\(\mathcal{A} \\)中全体元素的元素组成的集合称为\\(\mathcal{A} \\)的广义并**
  - \\(\mathcal{A} = \lbrace x \mid \exists A \in \mathcal{A}\ s.t.\ x \in A \rbrace \\)
  - \\(\cup \varnothing  = \varnothing \\)
- 广义交\\(\cap \mathcal{A}\\)
  - **设\\(\mathcal{A} \\)为一个集族，\\(\mathcal{A} \\)中全体元素的公共元素组成的集合称为\\(\mathcal{A} \\)的广义交**
  - \\(\cap \mathcal{A} = \lbrace x\mid \forall A \in \mathcal{A}, x\in A\rbrace\\)
  - \\(\cap \varnothing  = E\\)

### 2. 运算性质
- *一般都可以画图得出，略*

### 3. 有穷集的计数
- 包含排斥原理：

$$
\vert A_1 \cup A_2 \cup ... \cup A_n \vert = \sum_{i=1}^{n}\vert A_i\vert - \sum_{1\leq i <j \leq n}\vert A_i \cap A_j \vert +\sum_{1\leq i < j < k \leq n}\vert A_i \cap A_j \cap A_k \vert +... + (-1)^{n-1}\vert A_1 \cap A_2 \cap ...\cap A_n\vert
$$

  - 例题：错排问题
    - *在概统复习里写过了*

## 第二章 二元关系
### 1. 基本概念
- 有序对\\(\langle x,y\rangle \\)
  - **\\(\langle x,y\rangle  \neq \langle y,x\rangle \\)**
- 笛卡尔积\\(A \times B\\)
  - **\\(A \times B = \lbrace \langle x,y\rangle \mid x \in A \wedge y \in B \rbrace\\)**
  - 不满足交换律与结合律；对并与交满足分配律
- 二元关系\\(R\\)
  - 如果一个集合满足以下条件之一，称为二元关系
    - 集合非空，元素都是有序对
    - 集合为空
  - 若\\(\langle x,y\rangle  \in R\\)，记作\\(xRy\\)，其中\\(R\\)为从\\(A\\)到\\(B\\)的二元关系；若\\(A=B\\)，称为\\(A\\)上的二元关系
  - 特殊的二元关系
    - 全域关系\\(E_A = A\times A\\)
    - 恒等关系\\(I_A = \lbrace \langle x,x\rangle \mid x \in A\rbrace\\)
    - 包含关系、小于等于关系、整除关系...
  - 关系矩阵\\(\mathbf{M}_R\\)
    - \\(r_{ij} = 1\\)，若\\(x_i R y_j\\)
    - \\(r_{ij} = 1\\)，否则
  - 关系图\\(G_R\\)：每一对有序对对应一条有向边

### 2. 关系的运算
- 定义域\\(domR\\)
  - **\\(R\\)中所有第一元素构成的集合**
- 值域\\(ranR\\)
  - **\\(R\\)中所有第二元素构成的集合**
- 域\\(fldR\\)
  - **\\(fldR = domR \cup ranR\\)**
- 逆关系\\(R^{-1}\\)
  - **\\(R^{-1} = \lbrace \langle x,y\rangle \mid <y,x>\in R \rbrace\\)**
  - \\((F^{-1})^{-1} = F\\)
  - \\(domF^{-1} = ranF, ranF^{-1} = domF\\)
- \\(F\\)和\\(G\\)的复合\\(F\circ G \\)
  - **\\(F\circ G = \lbrace <x,z>\mid \exists y\ s.t.\ \langle x,y\rangle \in F, \langle y,z\rangle \in G\rbrace \\)**
  - \\((F\circ G)\circ H = F\circ (G\circ H)\\)
  - \\((F\circ G)^{-1} = G^{-1} \circ H^{-1}\\)
  - \\(F\circ (G\cup H) = F\circ G \cup F\circ H\\)
  - \\((G\cup H) \circ F = G\circ F \cup H\circ F\\)
  - \\(F\circ (G\cap H) \subseteq F\circ G \cap F\circ H\\) *（试想\\(G\cap H\\)为空集的情形）*
  - \\((G\cap H) \circ F \subseteq G\circ F \cap H\circ F\\)
- \\(R\\)在\\(A\\)上的限制\\(R\upharpoonright A\\)
  - **\\(R\upharpoonright A = \lbrace \langle x,y\rangle \mid \langle x,y\rangle \in R, x \in A \rbrace\\)**
  - \\(F\upharpoonright (A\cup B) = F\upharpoonright A \cup F\upharpoonright B\\)
  - \\(F\upharpoonright (A\cap B) = F\upharpoonright A \cap F\upharpoonright B\\)
- \\(A\\)在\\(R\\)上的像\\(R[A]\\)
  - **\\(R[A] = ran(R\upharpoonright A)\\)**
  - \\(F[A\cup B] = F[A] \cup F[B]\\)
  - \\(F[A\cap B] = F[A] \cap F[B]\\)
- \\(R\\)的\\(n\\)次幂\\(R^n\\)
  - **\\(R^n = R^{n-1}\circ R,R^0 = I_A\\)**
  - \\(R^n\\)的关系矩阵是\\(\mathbf{M} ^n\\)，其中的相加是逻辑加
  - 设\\(A\\)为\\(n\\)元集，\\(R\\)是\\(A\\)上的关系，则存在不相等的自然数\\(s,t\ s.t.\ R^s = R^t\\)
    - 证明：\\(A\\)上关系的总数\\(\vert P(A\times A)\vert = 2^{n^2}\\)是有限的，由抽屉原理存在相等
    - \\(R^s = R^t\\)，则：
      - \\(\forall k \in \mathbb{N} , R^{s+k} = R^{t+k}\\)
      - \\(\forall k,i \in \mathbb{N} , R^{s+kp+i} = R^{s+i},p = t -s\\)
      - 令\\(S=\lbrace R^0,R^1,...,R^{t-1}\rbrace\\)，则\\(\forall q \in \mathbb{N}, R^q \in S\\)
  - \\(R^m\circ R^n = R^{m+n}\\)
    - 对\\(n\\)归纳证明
  - \\((R^m)^n = R^{mn}\\)
    - 由上一条性质归纳导出

### 3. 关系的性质
- 自反关系：\\(\forall x \in A\rightarrow \langle x,x\rangle \in R\\)
  - 当且仅当\\(I_A \subseteq R\\)
  - 关系矩阵：主对角元全为\\(1\\)
  - 关系图：每个顶点都有环
- 反自反关系：\\(\forall x \in A\rightarrow  \langle x,x\rangle \notin R\\)
  - 当且仅当\\(R\cap I_A = \\varnothing \\)
  - 关系矩阵：主对角元全为\\(0\\)
  - 关系图：每个顶点都无环
- 对称关系：\\(\forall \langle x,y\rangle \in R\rightarrow  \langle y,x\rangle \in R\\)
  - 当且仅当\\(R = R^{-1}\\)
  - 关系矩阵：对称矩阵
  - 关系图：无单边
- 反对称关系：\\(\langle x,y\rangle \in R\wedge  \langle y,x\rangle \in R \rightarrow  x=y\\)
  - 当且仅当\\(R\cap R^{-1} \subseteq I_A\\)
  - \\(r_{ij} = 1 \wedge i\neq j \rightarrow r_{ji}=0\\)
  - 关系图：无双向边
- 传递关系：\\(\forall \langle x,y\rangle \in R\wedge \langle y,z\rangle \in R\rightarrow \langle x,z\rangle \in R\\)
  - 当且仅当\\(R \circ R \subseteq R\\)
  - \\(\mathbf{M} ^2\\)中\\(1\\)所在的位置，\\(\mathbf{M} \\)中都是\\(1\\)
  - 关系图：若\\(x_i\\)到\\(x_j\\)有边且\\(x_j\\)到\\(x_k\\)有边，则\\(x_i\\)到\\(x_k\\)有边

### 4. 关系的闭包
- 自反（对称/传递）闭包\\(R'\\)满足以下条件：
  - \\(R'\\)是自反（对称/传递）的
  - \\(R\subseteq R'\\)
  - 对\\(A\\)上任何自反（对称/传递）关系\\(R''\\)，均有\\(R'\subseteq R''\\)
- 自反闭包
  - \\(r(R) = R \cup R^0\\)
  - \\(\mathbf{M}_r  = \mathbf{M} + E\\)
- 对称闭包
  - \\(s(R) = R \cup R^{-1}\\)
  - \\(\mathbf{M}_s  = \mathbf{M} + \mathbf{M}' \\)
- 传递闭包
  - \\(t(R) = R \cup R^2 \cup R^3 \cup ...\\)
  - \\(\mathbf{M}_t  = \mathbf{M} + \mathbf{M}^2 + \mathbf{M}^3 + ...\\)
  - 设\\(R\\)为有穷集\\(A\\)上的关系，则存在正整数\\(r\\)使得\\(t(R) = R \cup R^2 \cup ... \cup R^r\\)
  - 沃舍尔算法
    - 暂略
- 关系性质与闭包运算的关系
  - \\(s,t\\)保持自反性
  - \\(r,t\\)保持对称性
  - \\(r\\)保持传递性，\\(s\\)不保持传递性
    - 考虑只有一条边的关系图，其对称闭包为双向边，无环，无传递性
- \\(tsr(R) = t(s(r(R)))\\)
  - 计算自反、对称、传递闭包时，为了不失去传递性，\\(t\\)应当在\\(s\\)后

### 5. 等价关系与划分
- **等价关系：自反、对称、传递的关系**
  - \\(R\\)是一个等价关系，若\\(\langle x,y\rangle \in R\\)，则称\\(x\\)等价于\\(y\\)，记作\\(x\sim y\\)
  - 常见的等价关系：模运算
  - *以等价关系的视角看哈希算法，在做ics题的时候很方便*
- **关于\\(R\\)的等价类**\\([x]_R,[x],\overline{x} \\)
  - 设\\(R\\)为\\(A\\)上的等价关系，\\(\forall x \in A\\)，令

$$
    [x]_R = \lbrace y \mid y \in A, \langle x,y\rangle \in R \rbrace
$$

- 商集\\(A/R\\)
  - **以\\(R\\)的所有等价类作为元素的集合称为\\(A\\)对\\(R\\)的商集**

$$
    A/R = \lbrace [x]_R \mid x \in A \rbrace
$$

- 划分\\(\pi \\)
  - 设\\(A\\)为非空集合，若\\(A\\)的子集族\\(\pi \subseteq P(A)\\)满足以下条件，则称为\\(A\\)的一个划分
    - \\(\varnothing \notin \pi\\)
    - \\(\forall X,Y \in \pi, X \neq Y \rightarrow X\cap Y = \varnothing\\)
    - \\(\cup \pi = A\\)
  - 即元素集合无公共元素且包含所有元素的子集族
  - **商集就是\\(A\\)的一个划分，等价关系与商集一一对应，故等价关系与划分一一对应**

### 6. 偏序关系
- **偏序关系：自反、反对称、传递的关系**
- 设\\(\leqslant\\)为偏序关系，若\\(\langle x,y\rangle \in \leqslant\\)，则记作\\(x \leqslant y\\)，读作\\(x\\)小于等于\\(y\\)，这里的小于是指在偏序中\\(x\\)在\\(y\\)的前面
- 在偏序关系\\(\leqslant\\)的集合\\(A\\)中任取两个元素\\(x,y\\)，有下列情况：
  - \\(x < y \Vert y < x\\)
  - \\(x = y\\)
  - \\(x\\)与\\(y\\)不可比
- \\(A\\)和\\(A\\)上的偏序关系\\(\leqslant\\)一起称作偏序集\\(\langle A,\leqslant\rangle\\)
- \\(y\\)覆盖\\(x\\)：\\(x < y\\)且不存在\\(z\\)使得\\(x < z < y\\)
- 哈斯图：若\\(x< y \\)，将\\(x\\)画在\\(y\\)下方；若\\(y\\)覆盖\\(x\\)，连接\\(x,y\\)
- 最小元、最大元、极小元、极大元
  - 设\\(\langle A,\leqslant\rangle\\)为偏序集，\\(B\subseteq A, y \in B\\)
    - 若\\(\forall x \in B, y \leqslant x\\)，则称\\(y\\)是\\(B\\)的最小元
    - 若\\(\forall x \in B, x \leqslant y\\)，则称\\(y\\)是\\(B\\)的最大元
    - 若\\(\forall x \in B, x \leqslant y \rightarrow x = y\\)，则称\\(y\\)是\\(B\\)的极大元
    - 若\\(\forall x \in B, y \leqslant x \rightarrow x = y\\)，则称\\(y\\)是\\(B\\)的极小元
  - 最小元与其他元素都可比；而极小元与其他元素不一定可比，只要没有比它小的元素，就是极小元
  - 极小元一定存在；最小元不一定存在
  - 极小元可能有多个；最小元若存在则唯一
  - 如果极小元唯一，则为最小元
  - 哈斯图中的孤立点既是极小元也是极大元
- 上界、下界、最小上界、最大下界
  - 设\\(\langle A,\leqslant\rangle\\)为偏序集，\\(B\subseteq A, y \in A\\)
    - *\\(y \in A\\)不一定\\(y \in B\\)，这与最大最小元不同*
    - 若\\(\forall x \in B, x \leqslant y\\)，则称\\(y\\)是\\(B\\)的上界
    - 若\\(\forall x \in B, y \leqslant x\\)，则称\\(y\\)是\\(B\\)的下界
    - 令\\(C = \lbrace y \mid y\text{为}B\text{的上界}\rbrace\\)，则称\\(C\\)中最小元为\\(B\\)的最小上界
    - 令\\(C = \lbrace y \mid y\text{为}B\text{的下界}\rbrace\\)，则称\\(C\\)中最大元为\\(B\\)的最大下界
  - \\(B\\)的上界、下界、最小上界、最大下界都可能不存在；如果存在，最小上界和最大下界是唯一的

## 第三章 函数
### 1. 函数的定义与性质
- **函数是一种特殊的二元关系**
  - 设\\(F\\)为二元关系，若\\(\forall x \in domF\\)都存在唯一的\\(y\in ranF\\)使\\(xFy\\)成立，则称\\(F\\)为函数，若有\\(xFy\\)，则记作\\(y=F(x)\\)
    - *\\(\langle 1, 2\rangle \langle 1,3\rangle\\)不是函数，没有单值性*
  - 用集合相等来定义函数相等；若两个函数\\(F\\)和\\(G\\)相等，则满足
    - \\(domF = domG\\)
    - \\(\forall x \in domF = domG, F(x) = G(x)\\)
- 所有从\\(A\\)到\\(B\\)的函数的集合记作\\(B^A\\)
  - \\(\vert B^A \vert = \vert B \vert ^ {\vert A \vert}\\)
  - \\(\varnothing ^\varnothing = \lbrace \varnothing \rbrace \\) *（这里\\(\varnothing:\varnothing \rightarrow \varnothing\\)）*
  - \\(B ^\varnothing = \lbrace \varnothing \rbrace \\) *（这里\\(\varnothing:\varnothing \rightarrow B\\)）*
  - \\(\varnothing ^A = \varnothing\\) *（这里\\(\varnothing\\)表示不存在这样的函数）*

$$
    B^A = \lbrace f \mid f:A \rightarrow B \rbrace
$$

- 设函数\\(f:A\rightarrow B,A_1\subseteq A, B_1 \subseteq B\\)
  - \\(A_1\\)在\\(f\\)下的**像**\\(f(A_1) = \lbrace f(x)\mid x \in A_1\rbrace\\)
  - \\(B_1\\)在\\(f\\)下的**原像**\\(f^{-1}(B_1) = \lbrace x \in A \mid f(x) \in B_1\rbrace\\)
  - \\(A_1 \subseteq f^{-1}(f(A_1))\\) *可能有多个\\(x\\)对应一个\\(y\\)*
- 设\\(f:A \rightarrow B\\)
  - 若\\(ranf = B\\)，则称\\(f:A\rightarrow B\\)是**满射**
  - 若\\(\forall y \in ranf \\)都存在唯一的\\(x \in A\\)使得\\(f(x) = y\\)，则称\\(f:A\rightarrow B\\)是**单射**
  - 若\\(f:A\rightarrow B\\)既是满射又是单射，则称\\(f:A\rightarrow B\\)是**双射**
    - \\(P(A)\\)和\\(\lbrace 0, 1\rbrace^A\\)存在双射，用\\(0,1\\)来表示是否选择该元素作为元素子集的元素
    - \\(\mathbb{Z} \rightarrow \mathbb{N} \\)的双射：负数对应奇数，正数对应偶数，零对应零
      - \\(f(x) = 2x, x \geq 0\\)
      - \\(f(x) = -2x-1, x < 0\\)
- 常用函数
  - 常函数、恒等函数、单调递增（减）函数（定义于一般的偏序集上）、特征函数\\(\chi_{A'}:A\rightarrow \lbrace 0,1\rbrace\\\)（用\\(0,1\\)表示\\(A\\)中元素是否在子集\\(A'\\)中）
  - 自然映射\\(g:A\rightarrow A/R,g(a)=[a],\forall a \in A\\)
    - 即映到等价类 
  - 阶
    - 暂略，见书p50

### 2. 函数的复合与反函数
- **函数的复合是关系的右复合**

$$
    F\circ G(x) = G(F(x))
$$

- 两个函数都为满射/单射/双射时，复合保持满射/单射/双射；逆命题不为真
  - 考虑单射\\(f:A\rightarrow B\\)和单射\\(f\circ g:A \rightarrow C\\)，\\(g:B \rightarrow C\\)不为单射
  
$$ 
\begin{align*}
  f &= \lbrace \langle a_1,b_1\rangle,\langle a_2,b_2\rangle,\langle a_3,b_3\rangle\rbrace \\
  g &= \lbrace \langle b_1,c_1\rangle,\langle b_2,c_2\rangle,\langle b_3,c_3\rangle,\langle b_4,c_3\rangle\rbrace \\
  f \circ g &= \lbrace \langle a_1,c_1\rangle,\langle a_2,c_2\rangle,\langle a_3,c_3\rangle\rbrace
\end{align*}
$$

- 设\\(f:A\rightarrow B\\)是双射，则\\(f^{-1}:B\rightarrow A\\)也是双射，称其为\\(f\\)的反函数
  - \\(f^{-1}\circ f = I_B, f\circ f^{-1} = I_A\\)

### 3. 双射函数与集合的基数
- **集合的势：度量集合所含元素多少的量**
- **等势：如果存在从集合\\(A\\)到集合\\(B\\)的双射函数，则称\\(A\\)和\\(B\\)是等势的，记作\\(A\approx B\\)**
  - \\(\mathbb{Z} \approx \mathbb{N}\\)
  - \\(\mathbb{N}\times \mathbb{N} \approx \mathbb{N}\\)
    - 找到能“数遍”第一象限整数坐标点的方法
    - \\(f(\langle m,n\rangle) = \frac{(m+n+1)(m+n)}{2} + m\\)
    - *\\(x+y = m+n\\)斜线下方点的个数\\(+\\)横坐标\\(m\\)*
  - \\(\mathbb{N} \approx \mathbb{Q}\\)
    - “数遍”有理数表的方法
  - \\((0,1) \approx \mathbb{R}\\)
    - \\(f:(0,1)\rightarrow \mathbb{R}, f(x) = tan\frac{2x-1}{2}\pi\\)
  - \\([0,1] \approx (0,1)\\)
    - 解决端点\\(0,1\\)的对应问题
    - 选择一个无限序列向后平移\\(2\\)个单位，最前两个元素空出来对应\\(0,1\\)，其余对应自身
    - \\(\frac{1}{2^n}\\)
  - \\(\forall a, b \in \mathbb{R}, a < b, [0,1] \approx [a,b]\\)
    - 一次函数即可
  - \\(P(A) \approx \lbrace 0, 1\rbrace ^A\\)
- 一般来说，等势具有自反性、对称性、传递性
  - \\(\mathbb{N} \approx \mathbb{Z} \approx \mathbb{Q} \approx \mathbb{N}\times \mathbb{N}\\)
  - \\(\mathbb{R} \approx [0,1] \approx (0,1)\\)
- **康托定理**