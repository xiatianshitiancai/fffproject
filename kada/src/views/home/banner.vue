<!-- 轮播图组件和开始创作的组件 -->
<template>
  <div class="bannerAndCreate">
    <!-- 轮播图组件 -->
    <div class="banner fl" @mouseover="clearoftimer" @mouseout="settimer">
      <ul>
        <div class="jiantou" v-show="showbutton">
          <a href="#" @click="back(-1)">
          <span class="fl">
            <
          </span>
          </a>
          <a href="#" @click="back(1)">
          <span class="fr">
            >
          </span>
          </a>
        </div>
        <transition name="fade">
        <li v-show="index ===1" transiton='fade'><a href="#"><img src="//edu-image.nosdn.127.net/0490f271-25dd-4843-8a4e-f9f3ac9163b2.png" alt=""></a></li>
        </transition>
        <transition name="fade">
        <li v-show="index ===2"><a href="#"><img src="//edu-image.nosdn.127.net/b3aa037e-3c06-448a-ae1d-957061ef7f21.png" alt=""></a></li>
        </transition>
        <transition name="fade">
        <li v-show="index ===3"><a href="#"><img src="//edu-image.nosdn.127.net/04b84917-3d66-4e8e-9f9f-6e1ebbed1b63.jpg" alt=""></a></li>
        </transition>
        <transition name="fade">
        <li v-show="index ===4"><a href="#"><img src="//edu-image.nosdn.127.net/7d1f24e3-8fbc-4043-8f2d-6c08bb4c5845.png" alt=""></a></li>
        </transition>
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
    return {
      index: 1,
      showbutton: false,
      flag: true,
      timer: {}
    };
  },

  components: {},

  computed: {},
  created() {
    this.timer = setInterval(() => {
      if (this.index === 4) {
        this.index = 1;
      } else {
        this.index++;
      }
    }, 2000);
    // console.log(111)
  },
  // mounted: {},

  methods: {
    // 点击按钮的事件
    back(a) {
      // 节流阀
      if (this.flag) {
        this.flag = false
        if (a > 0) {
          if (this.index === 4) {
            this.index = 1;
          } else {
            this.index++;
          }
        } else {
          if (this.index === 1) {
            this.index = 4;
          } else {
            this.index--;
          }
        }
        setTimeout( () => {
          this.flag = true
        },1000)
      }
    },
    settimer() {
      this.timer = setInterval(() => {
        if (this.index === 4) {
          this.index = 1;
        } else {
          this.index++;
        }
      }, 2000);
    },
    clearoftimer() {
      this.showbutton = true;
      clearInterval(this.timer);
    }
  }
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
      .jiantou {
        width: 100%;
        z-index: 2;
        top: 50%;
        transform: translate(0, -50%);
        position: absolute;
        padding-left: 20px;
        padding-right: 20px;
        span {
          font-size: 40px;
          font-family: simsun;
          font-weight: 900;
          padding-left: 20px;
          padding-right: 20px;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.3);
        }
      }
      li {
        height: 100%;
        text-align: center;
        width: 960px;
        position: absolute;
        img {
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
