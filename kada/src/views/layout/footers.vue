<template>
  <div class="footer">
    <div class="footerbanner">
      <div class="fl leftbanner">
        <!-- logo定义 -->
        <div class="logo">
          logo
        </div>
        <div class="contact">
          <!--  -->
          <span>
            关注我们:
          </span>
          <span class="iconfont icon-wechat wechat">
          </span>
          <span class="iconfont icon-qq-copy qq">
          </span>
        </div>
        <div>
          <p>
            ©1997-2018 网易公司 版权所有
          </p>
        </div>
      </div>
      <div class="fr f-cb">
        <dl class="fl">
          <dt>关于我们</dt>
          <dd>社区公约</dd>
          <dd>关于我们</dd>
          <dd>使用条款</dd>
          <dd>网站地图</dd>
          <dd>加入我们</dd>
        </dl>
        <dl class="fl">
          <dt>帮助反馈</dt>
          <dd>意见反馈</dd>
          <dd>帮助中心</dd>
          <dd>联系我们</dd>
        </dl>
        <dl class="fl">
          <dt>教学管理</dt>
          <dd>认证中心</dd>
          <dd>卡搭班级</dd>
        </dl>
        <dl class="fl">
          <dt>友情链接</dt>
          <dd>极客战记</dd>
          <dd>网易100分</dd>
          <dd>网易云课堂</dd>
          <dd>中国大学MOOC</dd>
        </dl>
        <dl class="fl">
          <dt>
            <img class="img" src="//edu-image.nosdn.127.net/62b5f533-429e-45f9-b0b8-33e7bf1dfa6f.png" alt="">
          </dt>
          <dd>
            扫码关注官方服务号
            <br>
          获取STEAM公益课程及干货
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang='scss' scoped>
  .footer {
    width: 100%;
    .f-cb:after,
    .f-cbli li:after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
    background: url(//edu-image.nosdn.127.net/19b2afd3-4f82-4a97-a037-5cb409184945.png) no-repeat center 0;
    background-size: 1920px 218px;
    .footerbanner::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
    .footerbanner {
      padding: 38px 0 35px;
      width: 1200px;
      margin: 0 auto;
      .leftbanner{
        color: #ffffff;
        .contact{
          padding-top: 20px;
          padding-bottom: 28px;
          span{
            padding-right: 12px;
          }
          .wechat:hover, .qq:hover{
            cursor: pointer;
          }
        }
         .logo{
        width: 180px;
        height: 40px;
      }
      }
      dl {
        margin-left: 54px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
        .img{
          width: 90px;
          height: 90px;
        }
        dd{
          line-height: 19px;
        }
        dt{
          font-size: 16px;
        }
      }
      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
    }
  }
</style>
