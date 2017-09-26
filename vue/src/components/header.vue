<template>
  <div class="layout-header">
    <ul class="header-ul">
      <li v-for="item in items">
        <a href="">{{item.title}}</a>
      </li>
    </ul>
    <div class="user-info">
      <a @click="toggleIsvisibale">
        <span>{{userInfo.userName}}的账号</span>
        <i class="down-icon"></i>
      </a>
      <div class="user-list" v-show="isvisible">
        <ul class="user-ul">
          <li>个人主页</li>
          <li>我的订单</li>
          <li>退出</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        data(){
            return {
                items:[{id:1,title:'豆瓣'},{id:2,title:'读书'},{id:3,title:'小组'}],
                userInfo:{
                    id:12,
                    userName:'宽宽',
                    userlogo:''
                },
                isvisible:false
            }
        },
        methods: {
          toggleIsvisibale(hide){

              this.isvisible=!this.isvisible;
          }

        }

    }

</script>


<style lang="scss">
  .layout-header{
    padding: 4px 0px;
    background: #545652;
    color: #d5d5d5;
    display: flex;
    flex-direction: row;

    ul.header-ul{
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 0;
      flex:1;

      li{
        list-style: none;
      }
    }
    ul li ,.user-info{
      position: relative;
      a{
        padding: 0 12px;
        cursor: pointer;
        color: #d5d5d5;
        text-decoration:none;
        &:hover{
          color:#fff;
          .down-icon,.up-icon{
            border-color:#fff transparent transparent transparent;
          }
        }

      }
    }
    .down-icon,.up-icon{
      margin:3px;
      width:0;
      height:0;
      display: inline-block;
      border-width:3px 3px 0;
      border-color: #d5d5d5 transparent transparent transparent;
      border-style:solid dashed dashed dashed;

    }
    .up-icon{

    }
    .user-list {
      position: absolute;
      border: 1px solid #e6e6e6;
      width: 88px;
      padding: 10px 0;
      left:0;
      top:23px;
    }
    ul.user-ul{
      padding: 0;
      margin: 0;
      li{
        list-style: none;
        color: #3d3d3d;
        line-height: 28px;
        padding: 0 20px;
        cursor: pointer;
        &:hover{
          background: #f0f6f3;
        }
      }
    }
  }

</style>
