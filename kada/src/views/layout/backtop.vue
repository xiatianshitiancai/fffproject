<!--  -->
<template>
  <div class="back">
    <ul>
      <!-- 客服 -->
      <li class=" iconfont icon-custom-service"></li>
      <!-- 微信二维码的展示 -->
      <li class="iconfont icon-wechat"></li>
      <!-- 返回顶部的动画实现 -->
      <li class="iconfont icon-huojian"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.back {
  position: fixed;
  bottom: 60px;
  right: 40px;
  width: 50px;
  ul {
    background-color: #ffffff;
    border-radius: 10px;
    :first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #39a5ef;
      color: #ffffff;
    }
    :last-child {
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom: none;
    }
  }
  li {
    border-bottom: 1px solid #cbd1d5;
    text-align: center;
    font-size: 18px;
    line-height: 50px;
    vertical-align: middle;
    color: #cbd1d5;
    cursor: pointer;
  }
  li:hover {
    background-color: #39a5ef;
    color: #ffffff;
  }
}
</style>
