<template>
  <div class="kada-header">
    <header>
      <div class="layout-logo fl">
        <router-link to="/">
          <h1>
            logo的占位符
          </h1>
        </router-link>
      </div>
      <div class="fl">
        <ul class="link">
          <li>
            <router-link to="/layout">首页</router-link>
          </li>
          <li>
            <router-link to="findmore">发现</router-link>
          </li>
          <li @mouseover="fn" @mouseout="fn1"><a href="#">创作</a>
            <ul v-show="isshow" class="makemore">
              <li>
                Scratch2.0
              </li>
              <li>
                Scratch3.0beta
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/forum"> 论坛</router-link>
          </li>
          <li>
            <router-link to="/Events">赛事 </router-link>
          </li>
        </ul>
      </div>
      <div class="search fl">
        <input type="text">
      </div>
      <div class="submit fl">
        <span>
                登陆
              </span>
        <span>
                |
              </span>
        <span>
                注册
              </span>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isshow: false
      }
    },
    components: {

    },
    methods: {
      fn() {
        console.log(111)
        this.isshow = true
      },
      fn1() {
        this.isshow = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .kada-header {
    // background-color: blue;
    header {
      // background-color: blue;
      width: 1200px;
      margin: 0 auto;
      height: 100%;
    }
    height: 70px;
    position: relative;
    text-align: center;
    line-height: 70px;
    .fl {
      float: left;
    }
    .link {
      margin-left: 80px;
      position: relative;
      .makemore::before {
        content: '';
        position: absolute;
        top: -7px;
        left: 16px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #fff;
        z-index: 999;
      }
      .makemore {
        height: 80px;
        width: 120px;
        position: absolute;
        border-radius: 5px;
        margin-top: -5px;
        border: 1px solid gray;
        li:hover {
          background-color: #39A5EF;
          color: #ffffff;
          cursor: pointer;
        }
         :first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          // border-bottom-right-radius: 2em;
          // border-bottom-left-radius: 2em;
        }
         :last-child {
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        li {
          margin-right: 0;
          float: none;
          padding: 0 8px;
          line-height: 40px;
          background-color: #ffffff;
        }
      }
      li {
        float: left;
        margin-right: 18px;
        a {
          display: inline-block;
          margin-right: 18px;
          min-width: 64px;
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          border-radius: 30px;
          text-align: center;
          box-sizing: border-box;
          color: #ffffff;
          border: 1px solid transparent;
        }
        a:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
    .search {
      input {
        display: inline-block;
        width: 288px;
        height: 30px;
        line-height: 30px;
        padding: 6px 12px;
        vertical-align: middle;
        border: none;
        font-size: 12px;
        border-radius: 30px;
        background: #ffffff;
        outline: none;
      }
    }
    .submit {
      color: #ffffff;
      padding-left: 30px;
      // line-height: 30px;
      span {
        height: 30px;
        cursor: pointer;
        line-height: 30px;
      }
    }
  }
</style>
