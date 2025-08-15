<template>
  <div class="price-container">
    <div class="inner-container">
      <div class="side-bar">
        <div class="title">
          <span class="title-suffix">专为工厂-放店-档口等商户</span>
          <span class="title-content">“ 量身定制 ”</span>
        </div>
        <img src="./img/item-1.svg" class="banner-img" alt="" />
      </div>
      <div class="left-box">
        <div class="main-content">
          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">快捷下单报货</div>
          </div>
          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">多仓库高效配货</div>
          </div>
          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">库存数据实时更新、全自动核减</div>
          </div>
          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">个性化自定义价格设置</div>
          </div>
          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">账单一键快捷生成、月账单统计</div>
          </div>
          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">可视化数据分析</div>
          </div>
          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">多身份权限认证</div>
          </div>

          <div class="line">
            <img src="./img/checked.png" class="my-icon" alt="" />
            <div class="line-text">多重防护保障数据安全</div>
          </div>

          <div class="line">
            <img src="./img/question.png" class="my-icon" alt="" />
            <div class="line-text">更多功能，等你来定</div>
          </div>
        </div>
      </div>
    </div>

    <div class="inner-container">
      <div class="side-bar">
        <div class="title">
          <span class="title-suffix">多样化</span>
          <span class="title-content">“ 系统部署方案 ”</span>
        </div>
        <img src="./img/item-2.svg" class="banner-img" alt="" />
      </div>
      <div class="left-box">
        <div class="inside-box">
          <div class="scheme-box">
            <img src="./img/featuere-img-1.svg" alt="" class="scheme-img" />
            <span class="scheme-title">托管部署</span>
            <span class="scheme-content">
              将您的服务器托管和部署方案全权委托给我们，享受我们提供的快速、便捷的一站式服务。我们承诺，您将体验到开箱即用的极致便利。
            </span>
          </div>

          <div class="scheme-box">
            <img src="./img/featuere-img-2.svg" alt="" class="scheme-img" />
            <span class="scheme-title">独立部署</span>
            <span class="scheme-content">
              选择在自己的服务器上进行部署，您将享受到独立、安全且随时可控的系统环境。我们承诺，将为您提供全面的技术支持服务，确保您的业务运行高效、稳定。
            </span>
          </div>

          <div class="scheme-box">
            <img src="./img/featuere-img-3.svg" alt="" class="scheme-img" />
            <span class="scheme-title">自主部署</span>
            <span class="scheme-content">
              如果您已经拥有自己的技术团队，我们将全力配合，与您的技术人员携手合作，共同完成系统的部署工作。在部署过程中，我们也会提供必要的帮助，解决您遇到的任何技术难题，确保项目顺利进行。
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="inner-container">
      <div class="side-bar">
        <div class="title">
          <span class="title-suffix">全心服务</span>
          <span class="title-content">“ 售后无忧 ”</span>
        </div>
        <img src="./img/item-3.svg" class="banner-img" alt="" />
      </div>
      <div class="left-box">
        <div class="free-use">
          <span class="rainbow-text">免费试用 30 天</span>
          包您满意
        </div>
        <div class="button-line">
          <a href="document/other/price" class="price-button">产品类型</a>
          <a href="document/other/concat" class="contact-us">联系我们</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexItems',
    data() {
      return {}
    },
  }
</script>
<style scoped>
  .price-container {
    width: 100%;
    /* background-color: #1e222f; */
    margin-top: 30px;
    border-radius: 12px;
  }

  .inner-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #12222f;
    margin: 28px 0;
    flex-wrap: wrap;
    padding: 20px 12px;
    border-radius: 8px;
    transition: all 0.7s;
  }

  .inner-container:first-child {
    margin-top: -40px;
  }

  .inner-container:hover .banner-img {
    animation: move-img 2s linear;
  }

  @keyframes move-img {
    0% {
      transform: translateX(0px);
    }
    25% {
      transform: translateX(-40px);
    }
    50% {
      transform: translateX(0px);
    }
    75% {
      transform: translateX(40px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .inside-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
  }

  .side-bar {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .left-box {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .title {
    color: #fff;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title-suffix {
    font-size: 1.6rem;
  }

  .title-prefix {
    font-size: 1.4rem;
    color: #ccc;
  }

  .title-content {
    font-size: 2.2rem;
    margin: 26px;
    color: antiquewhite;
  }

  .banner-img {
    width: 240px;
    margin-bottom: 20px;
    transition: all 2s;
  }

  .main-content {
    margin-top: 1.2rem;
    color: #fff;
    font-size: 0.9rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .line {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 8px 6px;
  }

  .line-last {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }

  .my-icon {
    width: 22px;
    height: 22px;
    margin-right: 6px;
  }

  .scheme-box {
    width: 90%;
    background: #fff;
    border-radius: 20px;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 12px 0;
    padding: 12px 0;
  }

  .scheme-img {
    width: 100px;
    height: 100px;
  }

  .scheme-title {
    font-size: 1.4rem;
    margin: 12px 0;
    font-weight: 900;
  }

  .scheme-content {
    width: 60%;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.8rem;
    color: #333;
    padding-bottom: 10px;
    text-indent: 1.6rem;
  }

  .free-use {
    width: 100%;
    font-size: 2.6rem;
    color: #fff;
    padding: 20px 10px;
    line-height: 2.8rem;
    text-align: center;
  }

  .rainbow-text {
    font-size: 44px;
    background-image: linear-gradient(
      to right,
      purple,
      green,
      yellow,
      orange,
      white
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent; /* Fallback for older browsers */
    display: inline;
  }

  .button-line {
    width: 80%;
    display: flex;
    margin: 20px auto;
    align-items: center;
    justify-content: center;
  }

  .contact-us {
    width: 90px;
    height: 36px;
    line-height: 36px;
    border-radius: 100px;
    background: #ffda68;
    color: #000;
    font-weight: 900;
    font-size: 0.8rem;
    text-decoration: none;
    text-align: center;
    margin-left: 20px;
  }

  .price-button {
    width: 90px;
    height: 36px;
    line-height: 36px;
    border-radius: 100px;
    background: #ff687d;
    color: #fff;
    font-weight: 900;
    font-size: 0.8rem;
    text-decoration: none;
    text-align: center;
    margin-right: 10px;
  }
</style>
