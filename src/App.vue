<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted () {
    let ws = new WebSocket("ws://10.13.64.25:8080")

    ws.onopen = function()
    {
      // Web Socket 已连接上，使用 send() 方法发送数据
      ws.send("发送数据")
      alert("数据发送中...")
    }

    ws.onmessage = function (info) 
    {  
      console.log(info)
      alert("数据已接收...")
    }

    ws.onclose = function()
    { 
      // 关闭 websocket
      alert("连接已关闭...");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
