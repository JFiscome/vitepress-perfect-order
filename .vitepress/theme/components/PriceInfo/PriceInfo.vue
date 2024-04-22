<template>
  <div class="container">
    <div class="price-back-container"></div>
    <div class="inner-container">
      <div class="top-line">
        <img src="/public/img/logo/logo-text.png" alt="" class="logo-img">
        <div class="content">
          <h1>产品价格</h1>
          <p style="color: #777; font-weight: 400;">好管家产品免费试用30天，帮助您节约财务人工成本、减少配货员人工成本！简单易上手 ~</p>
        </div>
      </div>

      <div class="line-container">
        <div class="price-card">
          <img src="./img/hot.png" class="hot-img" alt="">
          <img src="./../IndexItems/img/item-1.svg" alt="" class="small-price-card">
          <div class="card-title">全托管服务</div>
          <div class="card-info">
            <span>“好管家” 提供前后端一站式全服务</span>
            <span>8核16G服务器，高性能加持</span>
            <span>直接使用《工厂好管家》小程序</span>
            <span>方便快捷、开箱即用</span>
            <span>7 X 24小时稳定运行维护</span>
            <span>多重系统防护、安全有保障 💪🏻</span>
            <span>好管家式安心十分服务</span>
          </div>

          <div class="price-content">
            <div class="price-number">￥600 </div>
            <div class="price-line"></div>
            <div class="price-prefix">月</div>
          </div>
        </div>
        <div class="price-card">
          <img src="./../IndexItems/img/item-3.svg" alt="" class="small-price-card">
          <div class="card-title">独立部署</div>
          <div class="card-info">
            <span>客户自主提供服务器</span>
            <span>服务器独立部署、多样化选择</span>
            <span>私域部署、小程序！独立IP域名打造独立私域</span>
            <span>高用户粘性，数据服务高可控性</span>
            <span>7 X 24小时稳定运行维护</span>
            <span>多重系统防护、安全有保障 💪🏻</span>
            <span>好管家式安心十分服务、技术协助</span>
          </div>

          <div class="price-content">
            <div class="price-number">￥800 </div>
            <div class="price-line"></div>
            <div class="price-prefix">月</div>
          </div>
        </div>
        <div class="price-card">
          <img src="./../IndexItems/img/item-2.svg" alt="" class="small-price-card">
          <div class="card-title">自由技术合作</div>
          <div class="card-info">
            <span>超强定制服务、前后端代码可扩展分享</span>
            <span>UI、前端、后端、架构、运维一站式技术合作</span>
            <span>多平台开发部署、手机电脑多端适配</span>
            <span>高扩展、高可用、灵活开发</span>
            <span>7 X 24小时稳定运行维护</span>
            <span>多重系统防护、安全有保障 💪🏻</span>
            <span>好管家式安心十分服务、技术协助</span>
          </div>

          <div class="price-content">
            <div class="price-number">￥1200 </div>
            <div class="price-line"></div>
            <div class="price-prefix">月</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PriceInfo",
  data() {
    return {};
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  margin-bottom: -10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.price-back-container {
  width: 100vw;
  height: 50vh;
  background-image: url('./img/background.png');
  background-size: 100%;
  background-repeat: repeat-y;
  background-color: #f6f6f6;
}

.top-line {
  width: 84%;
  display: flex;
  align-items: flex-start;
}


.logo-img {
  width: 100px;
  border-radius: 10px;
  margin-right: 80px;
}

.line-container {
  width: 72vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  border-radius: 12px;
}

.inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40vh;
}

.price-card {
  width: 420px;
  margin: 10px 0;
  border: 1px solid #f4f4f4;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: relative;
}

.hot-img {
  width: 64px;
  height: 64px;
  position: absolute;
  left: -10px;
}

.price-card:hover {
  transform: translateY(-20px);
  transition: all .5s;
}

.price-card:hover .card-title {
  color: darkblue;
  border-bottom: 1px solid darkblue;
  transition: all .5s;
}

.small-price-card {
  width: 166px;
  height: 166px;
}

.card-title {
  font-size: 26px;
  font-weight: 800;
  border-bottom: 1px solid #333;
  padding: 10px 30px;
}

.card-info {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  margin-top: 30px;
  font-weight: 600;
  width: 90%;
  padding: 10px 0;
  text-align: center;
}

.card-info>span {
  font-size: 16px;
  color: #888;
  margin: 6px 0;
}

.price-content {
  display: flex;
  padding: 40px 0;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
}

.price-number {
  font-size: 32px;
  font-weight: 800;
  color: #25262A;
  letter-spacing: 2px;
}

.price-line {
  width: 2px;
  height: 30px;
  background-color: #555;
  transform: skew(-25deg);
  margin: 0px 12px;
}

.price-prefix {
  font-size: 24px;
  color: #777;
  margin-left: -4px;
}
</style>
