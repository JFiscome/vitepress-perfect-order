---
title: 全自动化账单
lang: en-US
pageClass: custom-page-class
---

# 全自动化账单

## 账单的生成！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据 <a href="/src/document/core/express">【 配送列表信息 】</a> 中的 <span class="highlight-text"> “ 确认送达” </span> 和 <a href="/src/document/core/refund">【 客户退货处理 】</a> 中的 <span class="highlight-text"> “ 退货核实正确 ” </span>

会自动生成对应客户的账单！账单列表分为 <span class="weight-text"> “ 每日账单、历史账单 ” </span> 两种 。

::: tip

- **每日账单：** 当天生成的所有账单

- **历史账单：** 之前日期的账单，账单的排序根据账单生成的时间
  :::

> 这里需要注意的是，<span class="underline-text"> 单个用户 </span>来说无论他当日有多少的配送订单或者多少的退货审核。都会合并到一起，根据日期只会<span class="red-text"> 生成一个账单卡片 。</span>

::: info
一个账单卡片展示的信息为 ：

```
- 1.客户名称、
- 2.客户报货的合计价格 (价格和数量)
- 3.退货的合计价格 (价格和数量)
- 4.账单生成时间
```

标签的含义是<span class="green-text"> “ 价格 X 数量 ” </span>，系统会自动统计相同价格的商品的数量自动累加。

提示：每个用户每个商品的价格都可以设置的不一样，这个具体的设置在 <a href="/src/document/cms/diy-price">【 自定义价格 】</a>中完成
:::

<div class="fan-tips"> · 通常情况下，我们的账单卡片非常的简洁明了，分享给客户也基本上可以核对清楚今日的基本明细！如果当日确实存在数据出入，那么我们可以点击<span class="highlight-text">  </span>。 <strong style="color:red;">“ 账单详情 ”</strong> 💪💪账单详情中会体现出所有的商品详情信息！这时候可以再和客户进行二次详细的校对！</div>
<div class="inline-container">
    <img src="/public/img/core/bill-1.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/bill-2.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/bill-3.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
</div>

## 查询和分享

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果用户有使用我们的软件，那么他可以通过<span class="weight-text"> “ 【用户工具】-【每日账单】 ” </span>功能自助查看自己的每日账单！

包括这一笔账单对应的订单详情和退货详情。当然这个就是有一个前提条件：该客户已经通过我们的邀请成为我们的优质客户，并且他也很享受科技化带来的便利性！

部分客户可能是我们使用机器人代替报单的！那么他就没办法自主进入到软件系统中查询今日的账单！这就需要我们管理员截图分享账单，然后通过其他通讯方式分享给客户！为此我们软件利用 Canvas 绘图技术设计了 <span class="weight-text"> “一键生成截图” </span> 的功能！管理员只需要在想生成的账单卡片点击截图，即可绘制当前账单的明细，然后保存到我们的手机上！

<div class="inline-container">
    <img src="/public/img/core/bill-4.png" alt="" class="fancybox" data-fancybox="gallery" width="63%">
</div>

## 账单统计（例：月账单）

> 除了上述的功能以外，好管家账单还支持统计 月账单，周账单等！这个<span class="highlight-text"> 日期区间可以自定义 </span>的。然后选择想要被统计的客户！系统会自动累计出该客户在指定时间内的所有账单信息。

<div class="fan-tips green-text">将原本繁琐的账单统计工作给“好管家”，不仅大幅提升效率，确保数据的准确性，节省了宝贵的时间。这样，您就可以将注意力转移到其他重要事务上，从而优化工作和生活的质量。</div>

<div class="inline-container">
    <img src="/public/img/core/bill-6.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/bill-7.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/bill-8.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
</div>

###
::: info
统计账单支持屏幕长截图，长按黑色无关区域，系统会弹出<span class="highlight-text"> “ 长截图模式 ” </span>！即可使用相对手机进行长截图（目前长截图仅部分安卓手机）可以适配 。具体操作可以联系站长
:::