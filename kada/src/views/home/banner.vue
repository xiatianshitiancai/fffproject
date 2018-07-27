<!-- 轮播图组件和开始创作的组件 -->
<template>
  <div class="bannerAndCreate">
    <!-- 轮播图组件 -->
    <div class="banner fl">
      <ul>
        <li><a href="#"><img src="//edu-image.nosdn.127.net/0490f271-25dd-4843-8a4e-f9f3ac9163b2.png" alt=""></a></li>
        <li><a href="#"><img src="//edu-image.nosdn.127.net/b3aa037e-3c06-448a-ae1d-957061ef7f21.png" alt=""></a></li>
        <li><a href="#"><img src="//edu-image.nosdn.127.net/04b84917-3d66-4e8e-9f9f-6e1ebbed1b63.jpg" alt=""></a></li>
        <li><a href="#"><img src="//edu-image.nosdn.127.net/7d1f24e3-8fbc-4043-8f2d-6c08bb4c5845.png" alt=""></a></li>
      </ul>
    </div>
    <!-- 登陆注册组件 -->
    <div class="create fr">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.bannerAndCreate {
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .banner {
    width: 960px;
    height: 380px;
    border-radius: 5px;
    ul {
    border-radius: 5px;
      position: relative;
      height: 100%;
      li {
        height: 100%;
        text-align: center;
        width: 960px;
        position: absolute;
        img{
    border-radius: 10px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.bannerAndCreate:after {
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  content: ".";
}
</style>
