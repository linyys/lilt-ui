<template>
  <div>
    <canvas id="LStreamer" style="position: fixed;left: 0;top: 0;pointer-events: none"/>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";

// 颜色
const colorArray: Array<string> = ['#18a058', '#d03050', '#f0a020', '#2080f0']

function Star(this: any, x, y,color) {
  this.x = x
  this.y = y
  this.color = color
  // speed参数
  this.speedY = -3
}

// 构造画布
const create = () => {
  const LStreamer: any = document.getElementById('LStreamer')
  const cxt = LStreamer.getContext('2d')
  // 获取当前视图的宽度和高度
  let aw = document.documentElement.clientWidth || document.body.clientWidth
  let ah = document.documentElement.clientHeight || document.body.clientHeight
  // 保存屏幕高度
  let starH = ah
  // 赋值给canvas
  LStreamer.width = aw
  LStreamer.height = ah
  let timer
  // 创建星星
  Star.prototype.draw = function () {
    const horn = 5; // 画5个角
    const angle = 360 / horn; // 五个角的度数
    // 两个圆的半径
    const R = 12.5;
    const r = 5;
    cxt.beginPath()
    for (let i = 0; i < horn; i++) {
      // 角度转弧度：角度/180*Math.PI
      // 外圆顶点坐标
      cxt.lineTo(Math.cos((18 + i * angle) / 180 * Math.PI) * R + this.x, -Math.sin((18 + i * angle) / 180 * Math.PI) * R + this.y);
      // 內圆顶点坐标
      cxt.lineTo(Math.cos((54 + i * angle) / 180 * Math.PI) * r + this.x, -Math.sin((54 + i * angle) / 180 * Math.PI) * r + this.y);
    }
    // cxt.transform()
    cxt.fillStyle = this.color;
    cxt.fill()
    cxt.closePath()
  }
  // 星星的移动轨迹
  Star.prototype.move = function () {
    this.y -= this.speedY
    // this.x -= (Math.random() * 3) * Math.pow(-1, Math.round(Math.random()))
  }
  // 星星的数量
  const stars:any = []
  for (let i = 0 ; i < 100;i++ ) {
    stars.push(new Star(Math.random() * aw, Math.random() * ah,colorArray[Math.floor((Math.random() * colorArray.length))]))
  }
  timer = setInterval(() => {
    cxt.clearRect(0, 0, aw, ah)
    stars.forEach(star => {
      star.move()
      star.draw()
    })
    // 每次减去速度判断是否超出屏幕
    starH -= 3
    // 销毁
    if(starH < 0) {
      clearInterval(timer)
      cxt.clearRect(0,0,aw,ah)
    }
  }, 20)
}
onMounted(() => {
  create()
})
</script>
<script lang="ts">
export default {
  name: "LStreamer"
}
</script>

<style scoped>

</style>
