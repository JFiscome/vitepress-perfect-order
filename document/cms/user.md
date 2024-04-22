---
title: 用户管理
lang: en-US
pageClass: custom-page-class
---

## 前言

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户角色与权限管理是工厂好管家系统中的核心功能，它确保了不同用户根据其角色拥有不同的访问权限，从而保障了系统的安全性和高效性，用户管理功能是高级管理员具备的管理能力。具体关于用户权限角色可以点击查看上面的<a href="/src/document/core/express">《权限角色》。</a>


## 新用户邀请
> 使用 “ 新用户邀请 ” 功能路径：<span class="underline-text"> 【我的】-【管理工具】-【更多】-【新用户邀请】 </span>


工厂好管家提供了三种生成/邀请用户的方式，以适应不同的使用场景：

::: warning 三种模式
`首先生成或者邀请新用户需要分为以下两种情况！就是用户为机器人或者真人`

<span class="underline-text"> 机器人 </span>
>用于代替真人的虚拟用户，不关联真实用户，管理员填写相关信息直接录入系统。

<span class="underline-text"> 真人 </span>

>关联真实用户，需要用户配合操作，以下两种方式均可！

- 二维码邀请：管理员预先填写好邀请信息，客户直接扫码加入!<span class="weight-text"> 推荐使用该方式邀请新客户 </span>

- 邀请码邀请：用户通过填写报货名、邀请码等信息自主注册，管理员后台审核通过后加入系统。

:::


<div class="inline-container">
    <img src="/public/img/cms/user/robot-6.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/cms/user/robot-5.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/cms/user/robot-7.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
</div>


> 无论是机器人生成或者是二维码邀请新用户，管理员都需要编辑几个基本数据信息。接下来我们来详细介绍一下
::: tip 操作信息

- 报货名称：客户报货名，用户识别不同客户
- 用户角色：默认是 <span class="highlight-text"> “优质会员” </span> 。配货员和高级管理属于内部人员，需要点击设置！
- 联系电话（可选）：用户方便联系客户
- 接货电话（可选）：客户接货的时候的电话
- 限制天数：客户自主使用软件系统，可以查询自己数据的限制天数！例如限制7天，那么该客户只能查看近7天的相关数据信息！
- 自定义价格（可选）：为客户设置的单独自定义价格！具体价格设置可以参考下一篇文章<a href="/document/cms/price">《 价格管理》</a>

:::



- **禁用用户**  
  只有被禁用的用户才能被删除。一旦用户被删除，将无法访问本工厂系统。


## 用户管理

> 使用 “ 用户管理 ” 功能路径：<span class="underline-text"> 【我的】-【管理工具】-【更多】-【 用户管理 】 </span>

管理员拥有编辑用户信息和配置用户角色的权限，能够对用户的操作范围进行精细控制。具体来说，管理员可以限制用户查询订单和账单的时间范围，确保信息的安全性和隐私性。还可以自定义商品的价格设置，实现差异化定价策略
<div class="inline-container">
    <img src="/public/img/cms/user/user-1.png" alt="" class="fancybox" data-fancybox="gallery" width="50%">
    <img src="/public/img/cms/user/user-2.png" alt="" class="fancybox" data-fancybox="gallery" width="50%">
</div>

## 禁用/删除用户

>部分客户可能没有合作了，我们可以使用禁用或删除用户来帮我们优化工厂的人员！

### 禁用用户

在编辑用户信息界面，<span class="weight-text"> “ 将使用权限设置为禁用 ” </span>！点击保存。那么该客户的权限就将被禁用！禁用还是会保留用户的数据信息，后续我们修改使用权限，那么该用户还可以恢复使用！

### 删除用户

用户在被禁用之后，我们在用户列表中点击未通过的列表！然后可以看到所有被禁用的用户！找到我们想删除的用户，点击删除即可、<span class="red-text">如果想要删除用户，那么一定要先禁用该用户！</span>

>用户删除后也会<span class="highlight-text"> 同步删除该用户的所有数据 </span>。并且被删除的数据将不可恢复！所以我们在删除用户的时候一定要慎重，确保这个用户确实不需要了，才将用户进行删除！

<div class="inline-container">
    <img src="/public/img/cms/user/user-3.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/cms/user/user-4.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/cms/user/user-5.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
</div>


## 真实用户绑定原始机器人
真实用户可以通过扫码绑定原先已有的机器人，每个用户只能绑定一个机器人。绑定后，机器人转变为真实用户。