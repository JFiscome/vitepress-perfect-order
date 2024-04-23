<template>
  <div class="back-container">
    <div class="item-box">
      <div class="rect-box">
        <div class="rect"></div>
        <div class="rect-title">二维码</div>
        <div class="rect"></div>
      </div>

      <div class="top-line">
        <div class="qrcode-box">
          <img src="./img/mini-app.jpg" class="qr-code" alt="" />
          <span>工厂好管家小程序</span>
        </div>

        <div class="qrcode-box">
          <img src="./img/wx-code.jpg" class="qr-code" alt="" />
          <span>微信二维码</span>
        </div>

        <div class="qrcode-box">
          <img src="./img/qq-code.jpg" class="qr-code" alt="" />
          <span>QQ二维码</span>
        </div>
      </div>
    </div>

    <div class="item-box">
      <div class="rect-box">
        <div class="rect"></div>
        <div class="rect-title">联系方式</div>
        <div class="rect"></div>
      </div>

      <div class="top-line">
        <div class="info-line">
          <div class="info-title">微信号</div>
          <div class="info-text">Fsinging</div>
        </div>

        <div class="info-line">
          <div class="info-title">手机号</div>
          <div class="info-text">13515924007</div>
        </div>

        <div class="info-line">
          <div class="info-title">QQ号</div>
          <div class="info-text">18373250</div>
        </div>
      </div>
    </div>

    <div class="item-box">
      <div class="rect-box">
        <div class="rect"></div>
        <div class="rect-title">联系地址</div>
        <div class="rect"></div>
      </div>
      <div class="introduce-content company-text">
        有条（莆田）网络科技有限公司
      </div>
      <div class="introduce-content address-text">
        福建省莆田市荔城区黄石镇万好街1089号艺境天下30号楼909室
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackGround",
  data() {
    return {};
  },
};
</script>
<style scoped>
.back-container {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-line {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
}

.qrcode-box {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 176px;
  height: 176px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  margin: 10px 20px;
}

.qrcode-box > span {
  color: #111;
  font-weight: 300;
  font-size: 14px;
}

.qr-code {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  color: 000;
}

.phone-call {
  width: 300px;
  height: 100px;
  background-color: antiquewhite;
}

.item-box {
  width: 100%;
  padding: 10px 30px;
  background-color: #f4f5f9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
  transition: all 0.5s;
}

.item-box:hover {
  transform: scale(1.02) translateY(-10px);
  background: #fff;
  transition: all 0.5s;
  border: 1px solid #ddd;
}

.item-box:hover .rect-title {
  color: darkblue;
}

.item-box:hover .rect {
  background-color: darkblue;
}

.rect-box {
  width: 100%;
  padding: 20px 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.rect-title {
  width: 320px;
  font-size: 16px;
  letter-spacing: 4px;
  font-weight: 800;
  color: #000;
  text-align: center;
}

.rect {
  width: 6px;
  height: 16px;
  background-color: #333;
}

.info-line {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 40px;
}

.info-title {
  color: #111;
  font-size: 14px;
  text-align: center;
  margin-bottom: 12px;
}

.info-text {
  padding-bottom: 4px;
  font-size: 18px;
  font-weight: 900;
  color: #333;
}

.introduce-content {
  width: 100%;
  text-indent: 1.6rem;
  text-align: center;
}

.company-text {
  font-weight: 800;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  color: #000;
}

.address-text {
  padding-bottom: 8px;
  letter-spacing: 2px;
  text-indent: 0;
  color: #333;
}
</style>
