<template>
  <h1>VueQr插件vue3中使用报错</h1>
  <el-divider>
    <el-tag type="success">qrcanvas</el-tag>
  </el-divider>
  <div id="qrcode"></div>
  <el-divider>
    <el-tag type="success">vue-qart</el-tag>
  </el-divider>
  <img :src="logo" alt />
  <el-divider>
    <el-tag type="success">qrcanvas</el-tag>
  </el-divider>
</template>

<script setup>
import { nextTick } from "vue";
import logo from "../../assets/logo.png";
import { qrcanvas } from "qrcanvas";

/**
 * 描述
 * @date 2021-05-31
 * @param {String} data 用于生成二维码的原始数据，字符串将使用UTF-8编码。
 * @param {Number} cellSize  每个小格的像素宽度或高度。
 * @param {Number} size    最终生成的图片的像素宽度或高度，如果指定了 cellSize 那么此项被忽略。
 * @param {Number [1..40]} typeNumber   二维码的 typeNumber ，如果太小将自动增加直到找到一个合适的 typeNumber 。
 * @param {String {'L', 'M', 'Q', 'H'}} correctLevel  二维码的容错级别，如果指定了 logo 则设置为 H 。
 * @param {Image | Canvas | String | Array} colorDark 暗格的背景色。
 * @param {Image | Canvas | String | Array} colorLight 亮格的背景色。
 * @param {Object} logo   可以有以下属性（均可选）：
              若logo是图片：
                image ：一个 Image 元素，用于传递将要画到二维码中的图片。
              若logo是文本：
                text ：将要画成Logo的文本。
                color ：Logo文本的颜色，默认是 black 。
                fontStyle ：Logo文本的样式，如 italic bold 。
                fontFamily ：Logo文本的字体，默认是 Cursive 。
              共同属性：
                clearEdges ：一个Number，指定Logo周围被破坏的小格的清理级别，默认为 0 。
                margin ：图片及周围小格之间的像素间距，默认为 2 。
                size ：一个float，表示Logo占二维码总面积的比例，默认是 .15 （建议使用）。
 * @param {Object} effect  可以有 key 和 value 属性。
            effect.key = 'round'
            effect.value 在0-1之间，使小格有一个 value * cellSize 的 border-radius 。
            effect.key = 'liquid'
            effect.value 在0-1之间，液态效果，即相邻的小格之间互相融合。
 * @param {Canvas} reuseCanvas    如果设置了 reuseCanvas ，最终的图片将绘制到这个canvas上。
 * @param {Boolean} noAlpha     是否去除图片的alpha通道
 * @returns {canvas}
 */
const canvas = qrcanvas({
  data: "dsadas",
  size: 150,
  effect: {},
});

nextTick(() => {
  document.getElementById("qrcode").innerHTML = "";
  document.getElementById("qrcode").appendChild(canvas);
});
</script>

<style scoped>
::v-deep(.el-divider__text) {
  background: transparent;
}
</style>
