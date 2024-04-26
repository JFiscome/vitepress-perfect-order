---
title: 结算记录
lang: en-US
pageClass: custom-page-class
---

# 结算记录

> 结算表和账单虽然他们内容相似，但是他们完全独立的两块内容！账单我们上一篇文章已经介绍过了，那么关于结算表，他更多是辅助我们实际业务中金额<span class="green-text"> “ 结算登记，累加、扣减 ” </span>等一系列操作。<span class="underline-text"> “ 结算表类似一个辅助的记账本 ” </span>！




## 操作视频教程

<video src="https://perfect.yanxi.site/md/cms-video/reconciliaiton.mp4" controls/>

## 待结算列表

待结算列表默认按照客户<span class="highlight-text"> 待结算金额从高到低 </span>排序。我们也可以通过<span class="underline-text"> “ 搜索功能 ” </span> ，搜索指定的用户。 查询他的待结算金额！

结算表会把客户生成的<span class="highlight-text"> 每日账单自动累加 </span>到结算表中。

<div class="inline-container">
    <img src="/public/img/core/reconciliation-29.png" alt="" class="fancybox" data-fancybox="gallery" width="50%">
    <img src="/public/img/core/reconciliation-30.png" alt="" class="fancybox" data-fancybox="gallery" width="50%">
</div>

## 结算登记

> 那么假设说现在客户结账了，我们可以点击页面正下方 ：<span class="weight-text"> “ 结算登记 ” </span>，录入相关的结算信息。我们可以把这一笔账单信息上报到结算表中！用于辅助我们记账！

录入结算信息的时候需要注意的是选择<span class="highlight-text"> 结算的类型 </span> ！
::: info

```
- 1. 结账 ： 结账即客户排款过来！

- 2. 入账 ： 入账的使用场景基本上是给客户补差价用的
            比如今天客户多拿了一双鞋子，没有录入到程序中。我们可以采用入账的方式
```

:::

<div class="inline-container">
    <img src="/public/img/core/reconciliation-1.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/reconciliation-7.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/reconciliation-4.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
</div>

## 结算自动归档

可以看到，我们上面图片中刚刚自主上报的结算信息刚开始是支持编辑和删除的（这个操作<span class="underline-text"> “ 只允许记录者本身操作 ” </span>）！但是为了确保数据的安全，我们系统设定了一个默认归档的模式，即在一份数据上报之后，通常会在 3 天进行归档一次。归档后的数据将不可修改操作！

::: warning
归档就是把之前累加的数据全部归档成一个数据！被归档之前的数据也支持我们删除！
:::

程序归档的日期是每个月 1 号开始归档！然后每<span class="highlight-text"> 间隔三天归档 </span>一次。归档后的数据记录将会新增一条归档的统筹数据。
我们可以点击删除归档之前的数据。可以<span class="red-text"> 删除掉该归档前的所有记录 </span>！从而也不影响整体的使用。

<div class="inline-container">
    <img src="/public/img/core/reconciliation-3.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/reconciliation-8.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/reconciliation-9.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
</div>

## 截图分享功能

> 支持 <span class="weight-text"> “ 一键截图 ” </span> 功能把该结算表分享给客户！ 由于手机端生成图片存在部分硬件限制，所以我们生成的结算表图片<span class="highlight-text"> 包含最近三条数据 </span>。

<div class="inline-container">
    <img src="/public/img/core/reconciliation-6.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/reconciliation-5.png" alt="" class="fancybox" data-fancybox="gallery" width="48%">
</div>
