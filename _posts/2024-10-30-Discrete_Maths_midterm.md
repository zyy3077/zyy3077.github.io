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
  - \\(P(A)={X \mid X \\subseteq A}\\)
  - 如果\\(A\\)是\\(n\\)元集，\\(P(A)\\)有\\(2^n\\)个元素
- 对称差\\(A \oplus B\\)
  - **\\(A \oplus B = (A-B)\cup (B-A)\\)**
- 广义并\\(\bigcup \mathcal{A} \\)
  - **设\\(\mathcal{A} \\)为一个集族，\\(\mathcal{A} \\)中全体元素的元素组成的集合称为\\(\mathcal{A} \\)的广义并**
  - \\(\mathcal{A} = {x \mid \exists A in \mathcal{A} s.t. x in A}\\)
  - \\(\bigcup \varnothing  = \varnothing \\)
- 广义交\\(\bigcap \mathcal{A}\\)
  - **设\\(\mathcal{A} \\)为一个集族，\\(\mathcal{A} \\)中全体元素的公共元素组成的集合称为\\(\mathcal{A} \\)的广义交**
  - \\(\bigcap \mathcal{A} = \{x\mid \forall A in \mathcal{A}, x\in A\}\\)
  - \\(\bigcap \varnothing  = E\\)

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
  - **\\(A \times B = \{\langle x,y\rangle \mid x \in A \wedge y \in B\}\\)**
  - 不满足交换律与结合律；对并与交满足分配律
- 二元关系
  - 如果一个集合满足以下条件之一，称为二元关系
    - 集合非空，元素都是有序对
    - 集合为空
  - 若\\(\langle x,y\rangle  in R\\)，记作\\(xRy\\)，其中\\(R\\)为从\\(A\\)到\\(B\\)的二元关系；若\\(A=B\\)，称为\\(A\\)上的二元关系
  - 特殊的二元关系
    - 全域关系\\(E_A = A\times A\\)
    - 恒等关系\\(I_A = \{\langle x,x\rangle \mid x \in A\}\\)
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
  - **\\(R^{-1} = \{\langle x,y\rangle \mid <y,x>\in R\}\\)**
  - \\((F^{-1})^{-1} = F\\)
  - \\(domF^{-1} = ranF, ranF^{-1} = domF\\)
- \\(F\\)和\\(G\\)的复合\\(F\circ G \\)
  - **\\(F\circ G = \{<x,z>\mid \exists y s.t. \langle x,y\rangle \in F, \langle y,z\rangle \in G\})**
  - \\((F\circ G)\circ H = F\circ (G\circ H)\\)
  - \\((F\circ G)^{-1} = G^{-1} \circ H^{-1}\\)
  - \\(F\circ (G\cup H) = F\circ G \cup F\circ H\\)
  - \\((G\cup H) \circ F = G\circ F \cup H\circ F\\)
  - \\(F\circ (G\cap H) \subseteq F\circ G \cap F\circ H\\) 试想\\(G\cap H\\)为空集的情形
  - \\((G\cap H) \circ F \subseteq G\circ F \cap H\circ F\\)
- \\(R\\)在\\(A\\)上的限制\\(R\upharpoonright A\\)
  - **\\(R\upharpoonright A = \{\langle x,y\rangle \mid \langle x,y\rangle \in R, x \in A\}\\)**
  - \\(F\upharpoonright (A\cup B) = F\upharpoonright A \cup F\upharpoonright B\\)
  - \\(F\upharpoonright (A\cap B) = F\upharpoonright A \cap F\upharpoonright B\\)
- \\(A\\)在\\(R\\)上的像\\(R[A]\\)
  - **\\(R[A] = ran(R\upharpoonright A)\\)**
  - \\(F[A\cup B] = F[A] \cup F[B]\\)
  - \\(F[A\cap B] = F[A] \cap F[B]\\)
- \\(R\\)的\\(n\\)次幂\\(R^n\\)
  - **\\(R^n = R^{n-1}\circ R,R^0 = I_A\\)**
  - \\(R^n\\)的关系矩阵是\\(\mathbf{M} ^n\\)，其中的相加是逻辑加
  - 设\\(A\\)为\\(n\\)元集，\\(R\\)是\\(A\\)上的关系，则存在不相等的自然数\\(s,t s.t. R^s = R^t\\)
    - 证明：\\(A\\)上关系的总数\\(\vert P(A\times A)\vert = 2^{n^2}\\)是有限的，由抽屉原理存在相等
  - \\(R^m\circ R^n = R^{m+n}\\)
    - 对\\(n\\)归纳证明
  - \\((R^m)^n = R^{mn}\\)
    - 由上一条性质归纳导出
  -  
