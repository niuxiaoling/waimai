<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/

  *{
    padding: 0;
    margin:0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    /*iOS (iPhone和iPad)点击一个链接或者通过Javascript定义的可点击元素的时候，它就会出现一个半透明的灰色背景*/
    -webkit-tap-highlight-color: transparent;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  a{
    color: #000;
  }
  html{
    background: #f5f5f5;
  }
@font-face {
  font-family: 'iconfont';  /* project id 384711 */
  src: url('//at.alicdn.com/t/font_384711_y152t5hzdsp58kt9.eot');
  src: url('//at.alicdn.com/t/font_384711_y152t5hzdsp58kt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_384711_y152t5hzdsp58kt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_384711_y152t5hzdsp58kt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_384711_y152t5hzdsp58kt9.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
