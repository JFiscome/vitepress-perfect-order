---
title: 客户退货处理
lang: en-US
pageClass: custom-page-class
---

# 退货上报

> 当配送员配送完货物以后，部分客户也会交接对应的退货回来！那么我们为了账单的自动生成，配送员需要对客户的退货进行上报登记操作！
> 其中上报登记分为两种不同的方式，具体要选择哪一个方式需要根据每个工厂根据自身的实际情况决定。

- <span class="highlight-text"> 尺码数据上报 </span>
- <span class="highlight-text red-text"> 仅上报商品数量 </span>

> 那么接下来我们来详细介绍一下两种不同退货的方式


## 操作视频教程

<video src="https://perfect.yanxi.site/md/cms-video/refund.mp4" controls/>


## 尺码数据上报 （📮 推荐）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾名思义，尺码数据上报就是处理客户退货的信息，需要把<span class="weight-text"> 商品类型、具体尺码数量 </span> 进行退货上报登记！这个有点类似顾客在下单时候使用的模式。那么这个上报的数据是比较明确清楚的，那么将来我们在处理这一条退货数据的时候，<span class="highlight-text"> 高级管理员 </span>需要对这一条退货订单进行核实，如果核实正确 ✅ 以后，系统会根据该退货订单， <span class="weight-text"> “ 自动生成退货账单 ” </span>，并且合并到该用户的每日账单中。那么因为这一笔订单带有详细的尺码数据信息。所以这个尺码信息会被<span class="underline-text"> 自动增加到库存中 </span>。以后这一笔退货就无需重新入库，直接放回仓库即可！

<div class="inline-container">
    <img src="/public/img/core/refund-4.png" alt="" class="fancybox" data-fancybox="gallery" width="49%">
    <img src="/public/img/core/refund-5.png" alt="" class="fancybox" data-fancybox="gallery" width="49%">
</div>

## 仅上报商品数量

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该模式下上报就会变的比较简单，上报的人员<span class="weight-text"> 只需要选择商品的数量 </span>，然后直接提交即可！这边<span class="underline-text"> “ 无需提交具体尺码和对应的数量 ” </span>。那么在这里我们可以看到是把步骤简化了~ 同样该方式在提交到高级管理审核之后我们会自动<span class="red-text"> “ 合并到当日的账单中！ ” </span>但是这里由于没有具体的尺码数据，仅只能做到账单功能，没有办法对库存的内容进行更新！那么这就需要后续在退货重新入库的时候，使用我们的 <a href="/src/document/core/stock">【 库存管理 】</a> 重新入库！

<div class="inline-container">
    <img src="/public/img/core/refund-1.png" alt="" class="fancybox" data-fancybox="gallery" width="49%">
    <img src="/public/img/core/refund-2.png" alt="" class="fancybox" data-fancybox="gallery" width="49%">
</div>

## 不同模式的对比

- <span class="highlight-text"> 尺码数据上报 </span>

基本上实现了一步到位的服务！然而，在处理退货流程时可能会遇到较高的工作量。这样的处理方式对于配送员而言，效率可能会有所降低。

- <span class="highlight-text red-text"> 仅上报商品数量 </span>

配送员当天处理退货的速度比较快！不会手忙脚乱。但是后面第二天回到仓库还是需要再上报库存入库信息，那么这样子之前的工作量减少了，但是在入库这里反而还需要再次入库。

## 模式相互切换

> 管理员可以<span class="weight-text"> “ 自由切换 ” </span>适合自己工厂的退货上报模式 ! 在

【我的】-【管理工具】-【更多工具】-【工厂设置】- 【退货仅上报数量】

> 这个开关就是用于控制我们这两种退货模式。如果这个按钮关闭，那么就会变成<span class="highlight-text"> 模式一：尺码数据上报 </span> ！反之则为
> <span class="highlight-text red-text"> 模式二：仅上报商品数量。 </span>

<div class="inline-container">
    <img src="/public/img/core/setting-1.png" alt="" class="fancybox" data-fancybox="gallery" width="49%">
    <img src="/public/img/core/setting-2.png" alt="" class="fancybox" data-fancybox="gallery" width="49%">
</div>

## 退货审核操作

> 当您完成退货操作后，相应的退货请求将进入我们的<span class="red-text"> “ 退货审核列表中！ ” </span>。在此阶段，退货信息将被详细记录，并等待高级管理员的审核。

`> 高级管理员在审核过程中需要关注以下关键信息：`

::: warning

- **客户信息**：确定是哪位客户的退货订单
- **商品数量**：确定商品的数量是否准确
- **尺码信息**：核实提交的尺码信息是否准确
  :::

如果在审核过程中发现任何问题或数据出错，高级管理员有权限取消这一笔退货订单。取消后，相关人员需要重新提交一个准确的退货申请。
对于那些审核中 <span class="green-text"> “ 正确 ✅ ” </span>的退货订单，管理员可以点击<span class="weight-text"> “ 核实正确 ” </span>按钮进行确认。一旦退货订单被核实为正确无误，系统将根据该笔退货记录和客户的价格自动计算，然后<span class="weight-text"> “ 自动生成或者合并到用户的每日账单 ” </span>中，确保账单的准确性和及时性。

<div class="inline-container">
    <img src="/public/img/core/refund-6.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/refund-7.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
    <img src="/public/img/core/refund-8.png" alt="" class="fancybox" data-fancybox="gallery" width="33%">
</div>

> 退货上报是工厂好管家系统中的一个关键环节，它对于提升我们日常账单管理的效率和精确度起着至关重要的作用。还能与库存管理紧密相连，确保每一个细节都得到妥善处理和完善。或许的 <a href="/src/document/core/statistics">【 数据统计 】</a> 也可以分析出不同商品的退货率，不同客户的退货率等！
