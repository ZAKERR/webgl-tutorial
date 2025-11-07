# 知识点

## webgl理解
简单来说就是 浏览器利用GPU的运算能力绘制图形的API

## 关于随机
Math.random();生成了一个伪随机数t...然后代入sin().生成的结果居然可被预测
主要还是时间戳是线性增长的，sinx又是个周期函数，故很容易被预测
但如果将t*100000，整个周期函数将会被缩短，间隔比较小，非常难以预测


# 资料参考
[Webgl Programming Guide](https://www.rose-hulman.edu/class/csse/csse351/reference/0321902920_WebGL.pdf)
[fundamentals](https://webglfundamentals.org/)