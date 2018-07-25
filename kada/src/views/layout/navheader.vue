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
          <li><a href="#">创作</a></li>
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

      }
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .kada-header {
    header {
      background-color: #22f;
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
    .submit{
      color: #ffffff;
      padding-left: 30px;
      // line-height: 30px;
      span{
        height: 30px;
      cursor: pointer;
        line-height: 30px;
      }
    }
  }
</style>
