# @rdapp/web-common-style

> 一套基于 scss 的前端样式库

## 安装

```
npm install --save @rdapp/web-common-style
```

## 引入

> 在 vue.config.js 中导入样式库入口文件

```javascript
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@rdapp/web-common-style/src/index.scss";
            `,
            },
        },
    },
};
```

> 在 main.js 中 或需要使用的地方导入 js 方法

```javascript
import cssUtils from '@rdapp/web-common-style/src';
Vue.prototype.$cssUtils = cssUtils;
```

## 函数

1. `pxToRem`

    _@desc: px 转换 rem 方法_

    _@param {Number} \$px 像素值_

    _@use: pxToRem(10px);_

    _@return: {String} rem 像素对象转换的 rem 值;_

    使用参考：无

    ```scss
    .demo {
        width: pxToRem(16); // width: 1rem;
    }
    ```

2. `pxToPercent`

    _@desc: 计算百分比方法_

    _@param {Number} \$px 像素值_

    _@param {Number} \$refer 参考值_

    _@use: pxToPercent(80, 100);_

    _@return: {String} % 计算后的百分比;_

    使用参考：无

    ```scss
    .demo {
        width: pxToPercent(50, 100); // width: 50%;
    }
    ```

3. `pi`

    _@desc: 返回 π 值_

    _@use: pi();_

    _@return: {Number} π 值_

    使用参考：无

    ```scss
    .demo {
        @include console(pi()); // 3.14159265359px;;
    }
    ```

4. `pow`

    _@desc: 计算次方值_

    _@param {Number} \$number 基数_

    _@param {Number} \$exp 次幂_

    _@use: pow(2, 3); 表示 2 的 3 次幂_

    _@return: {Number} 计算后的值_

    使用参考：无

    ```scss
    .demo {
        width: #{pow(2, 3)}px; // width: 8px;
    }
    ```

5. `fact`

    _@desc: 计算参数的阶乘_

    _@param {Number} \$number 基数_

    _@use: fact(10); 表示 10 的阶乘 3628800_

    _@return: {Number} 计算后的值_

    使用参考：无

    ```scss
    .demo {
        @include console(fact(10)); // 3628800px;
    }
    ```

6. `rad`

    _@desc: 将角度的值从度转换为弧度_

    _@param {Number} \$angle 角度_

    _@use: rad(45deg); 计算 45deg 的弧度 0.7854_

    _@return: {Number} 计算后的值_

    使用参考：无

    ```scss
    .demo {
        @include console(rad(45deg)); // 0.7854
    }
    ```

7. `sin`

    _@desc: 求某个数的正弦值_

    _@param {String} \$angle 角度_

    _@use: sin(90deg); 计算 90deg 的 sin 值 1_

    _@return: {Number} 计算后的值_

    使用参考：无

    ```scss
    .demo {
        @include console(sin(90deg)); // 1
    }
    ```

8. `cos`

    _@desc: 求某个数的余弦值_

    _@param {String} \$angle 角度_

    _@use: cos(90deg); 计算 90deg 的 cos 值 0_

    _@return: {Number} 计算后的值_

    使用参考：无

    ```scss
    .demo {
        @include console(cos(90deg)); // 0
    }
    ```

9. `tan`

    _@desc: 求某个数的正切值_

    _@param {String} \$angle 角度_

    _@use: tan(90deg); 计算 45deg 的 tan 值 1_

    _@return: {Number} 计算后的值_

    使用参考：无

    ```scss
    .demo {
        @include console(tan(90deg)); // 1
    }
    ```

## 方法

1. `wh`

    _@desc: 设置元素宽高_

    _@param {String} \$width 宽度 默认 100%_

    _@param {String} \$height 高度 默认继承宽度_

    _@use: @include wh;_

    使用参考：无

    ```scss
    .demo {
        @include wh; // width: 100%; height: 100%;
        @include wh(100px); // width: 100px; height: 100px;
        @include wh(100px, 50px); // width: 100px; height: 50px;
    }
    ```

2. `whrem`

    _@desc: 设置元素宽高,传入数值自动转换 rem 值_

    _@param {String} \$width 宽度_

    _@param {String} \$height 高度 默认继承宽度_

    _@use: @include wh(40);_

    _@use: @include wh(40, 50);_

    使用参考：无

    ```scss
    .demo {
        @include wh(40); // width: 2.5rem; height: 2.5rem;
        @include wh(40, 50); // width: 2.5rem; height: 3.125rem;
    }
    ```

3. `fullContain`

    _@desc: 宽高为 100%;_

    _@use: @include fullContain;_

    使用参考：无

    ```scss
    .demo {
        @include fullContain; // width: 100%; height: 100%;
    }
    ```

4. `flexCenter`

    _@desc: 弹性盒 flex;_

    _@param {String} \$justify 主轴对齐方式 默认 center_

    _@param {String} \$align 副轴对齐方式 默认 center_

    _@param {String} \$direction 主轴是否垂直 默认 false_

    _@use: @include flexCenter;_

    使用参考：无

    ```scss
    .demo {
        @include flexCenter; // flex 垂直水平居中
        @include flexCenter(space-between); // flex 水平两端对齐，水平居中
        @include flexCenter(center, center, true); // 水平垂直居中，主轴方向为垂直
    }
    ```

5. `flexwh`

    _@desc: 弹性盒-平分元素 flex 1_

    _@use: @include flexwh;_

    使用参考：无

    ```scss
    .demo {
        @include flexwh; // flex: 1; flex-shrink: 0;
    }
    ```

6. `grid`

    _@desc: 网格布局 grid;_

    _@param {Number} \$columns 网格分割行数_

    _@param {Number} \$rows 网格分割列数_

    _@use: @include grid(2, 2);_

    使用参考：无

    ```scss
    .demo {
        @include grid(2, 2); // 表示划分为 2 x 2 的表格
    }
    ```

7. `gridItem`

    _@desc: 网格布局-格子设置 配合 @include grid 使用;_

    _@param {Number} \$column-start 网格行起始点_

    _@param {Number} \$column-end 网格行结束点_

    _@param {Number} \$row-start 网格列起始点_

    _@param {Number} \$row-end 网格列结束点_

    _@use: @include gridItem(1, 2, 2, 2);_

    使用参考：无

    ```scss
    .demo {
        @include grid(2, 2);
        @include gridItem(1, 2, 1, 2); // 表示行1-2，列2-2大小的格子;
    }
    ```

8. `textEllipsis` / `textHidden`

    _@desc: 单行文本溢出省略号;_

    _@use: @include textEllipsis;_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100), pxToRem(40));
        line-height: pxToRem(40);
        @include textEllipsis; // 单行文本溢出省略号
    }
    ```

9. `boxClamp`

    _@desc: 多行文本溢出省略号;_

    _@param {Number} \$row 行数 默认 3 行_

    _@use: @include boxClamp(2);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100), pxToRem(80));
        line-height: pxToRem(40);
        @include boxClamp(2); // 两行文本溢出省略
    }
    ```

10. `longWordWrap`

    _@desc: 长单词自动换行;_

    _@use: @include longWordWrap;_

    使用参考：无

    ```scss
    .demo {
        @include longWordWrap;
    }
    ```

11. `position`

    _@desc: 定位;_

    _@param {String} \$position 定位方式_

    _@param {String} \$args 定位参数_

    _@use: @include position(absolute,top 10px right 20px bottom 20px left 20px);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include position(absolute, top 10px right 20px bottom 20px left 20px);
        // 表示绝对定位， 上右下左分别为 10px, 20px, 20px, 20px;
    }
    ```

12. `fixed`

    _@desc: 固定定位;_

    _@param {String} \$param 定位方式_

    _@use: @include fixed(top-left);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include fixed(top-left); // 固定定位 - 上左
        @include fixed(top-center); // 固定定位 - 上中
        @include fixed(top-right); // 固定定位 - 上右
        @include fixed(center-left); // 固定定位 - 中左
        @include fixed(center-center); // 固定定位 - 中
        @include fixed(center); // 固定定位 - 中
        @include fixed(center-right); // 固定定位 - 中右
        @include fixed(bottom-left); // 固定定位 - 下左
        @include fixed(bottom-center); // 固定定位 - 下中
        @include fixed(bottom-right); // 固定定位 - 下右
    }
    ```

13. `absolute`

    _@desc: 绝对定位;_

    _@param {String} \$param 定位方式_

    _@use: @include absolute(top-left);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include absolute(top-left); // 绝对定位 - 上左
        @include absolute(top-center); // 绝对定位 - 上中
        @include absolute(top-right); // 绝对定位 - 上右
        @include absolute(center-left); // 绝对定位 - 中左
        @include absolute(center-center); // 绝对定位 - 中
        @include absolute(center); // 绝对定位 - 中
        @include absolute(center-right); // 绝对定位 - 中右
        @include absolute(bottom-left); // 绝对定位 - 下左
        @include absolute(bottom-center); // 绝对定位 - 下中
        @include absolute(bottom-right); // 绝对定位 - 下右
    }
    ```

14. `resize`

    _@desc: 宽高变化过度动画;_

    _@param {String} \$duration 过度所需时间 默认 3s_

    _@use: @include resize;_

    _@use: @include resize(0.2s);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include centerTranslate(both); // 水平/垂直居中
        @include resize;
    }
    ```

15. `centerTranslate`

    _@desc: 未知宽高的元素水平/垂直居中;_

    _@param {String} \$direction 居中方式_

    _@use: @include centerTranslate;_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include centerTranslate(both); // 水平/垂直居中
        @include centerTranslate(horizontal); // 水平居中
        @include centerTranslate(vertical); // 垂直居中
    }
    ```

16. `pointerEvents`

    _@desc: 点击穿透;_

    _@param {String} \$pointer 穿透参数_

    _@use: @include pointerEvents;_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include pointerEvents; // 点击穿透
        @include pointerEvents(auto); // 取消
    }
    ```

17. `pointer`

    _@desc: 点击穿透;_

    _@param {String} \$pointer 穿透参数_

    _@use: @include pointer(false);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include pointer; // 点击穿透
        @include pointer(false); // 取消
    }
    ```

18. `cursor`

    _@desc: 鼠标样式;_

    _@param {String} \$pointer 穿透参数_

    _@use: @include cursor;_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include cursor; // 点击手势
        @include cursor(auto); // 默认手势
    }
    ```

19. `css3`

    _@desc: 浏览器兼容性前缀;_

    _@param {String} \$property 属性名_

    _@param {String} \$value 属性值_

    _@use: @include css3(transition, 0.5s all);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include css3(transition, 0.5s all);
        // 编译为
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -ms-transition: 0.5s all;
        -o-transition: 0.5s all;
        transition: 0.5s all;
    }
    ```

20. `bgImage` / `bgImg`

    _@desc: css 背景图;_

    _@param {String} \$url 图片路径_

    _@param {String} \$width 背景宽度 默认 100%_

    _@param {String} \$height 背景高度 默认继承宽度_

    _@param {String} \$isUrl 是否带 url()的地址 默认 false_

    _@use: @include bgImage('../../public/img/demo.png');_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include bgImage('../../public/img/demo.png');
        @include bgImage('../../public/img/demo.png', cover);
        @include bgImage('../../public/img/demo.png', 100%);
        @include bgImage('../../public/img/demo.png', 100%, 80%);
    }
    ```

21. `img`

    _@desc: 给 img 标签设置样式和 src，仅适用于 img 标签;_

    _@param {String} \$url 图片地址_

    _@param {String} \$width img 标签宽度 默认 auto_

    _@param {String} \$height img 标签高度 默认 auto_

    _@use: @include img('../../public/img/demo.png');_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include img('../../public/img/demo.png');
        @include img('../../public/img/demo.png', 100%);
        @include img('../../public/img/demo.png', 100px, auto);
    }
    ```

22. `regularTriangle`

    _@desc: div 边框实现正三角;_

    _@param {String} \$direction 三角形方向 默认 bottom_

    _@param {String} \$color 三角形颜色 默认 #000_

    _@param {String} \$size 三角形大小 默认 1rem_

    _@use: @include regularTriangle;_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include regularTriangle;
        @include regularTriangle(left, red, 2rem);
    }
    ```

23. `shadow`

    _@desc: div 边框阴影;_

    _@param {String} \$x 阴影 x 轴偏移 默认 pxToRem(3)_

    _@param {String} \$y 阴影 y 轴偏移 默认 pxToRem(3)_

    _@param {String} \$shadowColor 阴影颜色 默认 #cccccc_

    _@param {String} \$spread 扩散大小 默认 pxToRem(4)_

    _@use: @include shadow;_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include shadow;
        @include shadow(5px);
        @include shadow(5px, 3px, red);
        @include shadow(5px, 3px, red, 10px);
    }
    ```

24. `keyframes`

    _@desc: 动画 keyframes 兼容性;_

    _@param {String} \$animationName 动画名称 默认名称 anime_

    _@use: @include keyframes(move-the-object) {100% { transform: translateX(200px); }}_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include keyframes(move-the-object) {
            100% {
                transform: translateX(200px);
            }
        }
    }
    ```

25. `placeholder`

    _@desc: 输入框提示文字样式;_

    _@use: @include placeholder { color: #fff; }_

    使用参考：无

    ```scss
    input.demo {
        @include placeholder {
            color: #fff;
        }
    }
    ```

26. `scrollbar`

    _@desc: 滚动条样式;_

    _@use: @include scrollbar { background: #fff; }_

    使用参考：无

    ```scss
    input.demo {
        @include placeholder {
            background: #fff;
        }
    }
    ```

27. `miniFont`

    _@desc: 小于 12px 的文字 取值范围 0-12;_

    _@param {Number} \$font-size 字体大小 默认名称 12_

    _@use: @include miniFont(12)_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include miniFont(8);
    }
    ```

28. `select`

    _@desc: 用户是否可用选中文本;_

    _@param {Boolean} \$operation 是否可选 默认不能_

    _@use: @include select;_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include select; //不可选
        @include select(true); //可选
    }
    ```

29. `gradient`

    _@desc: 渐变背景色;_

    _@param {String} \$colors 颜色数组 默认 transparent_

    _@param {String} \$direction 渐变方向 默认 0deg_

    _@use: @include gradient(red blue);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include gradient(red blue, 90deg);
    }
    ```

## 样式块

1.  `gradientBorder`

    _@desc: 带圆角渐变色边框实现，需要在父元素里嵌套一个 class 名为 content 的子元素;_

    _@param {String} \$border-width 边框宽度 默认 1px_

    _@param {String} \$radius 圆角度数 默认 0_

    _@param {String} \$direction 渐变色方向 默认 vertical_

    _@use: @include gradientBorder(1px, 10px, red yellow, vertical);_

    使用参考：无

    ```scss
    .demo {
        @include gradientBorder(1px, 10px, red yellow, vertical); // 垂直渐变
        @include gradientBorder(1px, 10px, red yellow, horizontal); // 水平渐变
    }
    ```

2.  `linearGradientText`

    _@desc: 文字发光 + 文字阴影效果，需要在元素上添加 title 为文字内容 <div title="文字"></div>;_

    _@param {Number} \$fontSize 文字大小 默认 1rem_

    _@param {String} \$linearGradient1 起始渐变色 默认 #dcebff_

    _@param {String} \$linearGradient2 结束渐变色 默认 #9cc5ff_

    _@param {String} \$textShadow 文字阴影颜色 默认 #032e60_

    _@param {String} \$deg 渐变色角度 默认 0deg 从上到下_

    _@use: @use: @include linearGradientText(16, #dcebff, #9cc5ff, #032e60, 0); 垂直渐变_

    使用参考：无

    ```scss
    .demo {
        @include linearGradientText(16, #dcebff, #9cc5ff, #032e60, 0); // 垂直渐变
    }
    ```

3.  `hover`

    _@desc: hover 给当前元素添加 hover;_

    _@param {Number} \$duration 过度时长 默认 0.5 单位秒(s)_

    _@use: @include hover{ width: 20px; height: 20px; }_

    使用参考：无

    ```scss
    .demo {
        @include hover {
            background: red;
        }
        @include hover(2) {
            background: yellow;
            color: red;
        }
    }
    ```

4.  `focus`

    _@desc: focus 给当前元素添加 focus;_

    _@param {Number} \$duration 过度时长 默认 0.5 单位秒(s)_

    _@use: @include focus{ width: 20px; height: 20px; }_

    使用参考：无

    ```scss
    .demo {
        @include focus {
            background: red;
        }
        @include focus(2) {
            background: yellow;
            color: red;
        }
    }
    ```

5.  `before`

    _@desc: before 伪类添加;_

    _@use: @include before{ width: 20px; height: 20px; }_

    使用参考：无

    ```scss
    .demo {
        @include before {
            width: 20px;
            height: 20px;
            background: red;
        }
    }
    ```

6.  `after`

    _@desc: after 伪类添加;_

    _@use: @include after{ width: 20px; height: 20px; }_

    使用参考：无

    ```scss
    .demo {
        @include after {
            width: 20px;
            height: 20px;
            background: skyblue;
        }
    }
    ```

7.  `placeholder`

    _@desc: placeholder 样式修改;_

    _@use: @use: @include placeholder{ width: 20px; height: 20px; }_

    使用参考：无

    ```scss
    input.demo {
        @include placeholder {
            width: 20px;
            height: 20px;
            background: skyblue;
        }
    }
    ```

8.  `console`

    _@desc: 利用伪类打印 SCSS 日志;_

    _@param {String} \$log 打印内容_

    _@use: @include console(Fate);_

    使用参考：无

    ```scss
    .demo {
        @include console(Fate);
        // 伪类的content: log -> Fate
    }
    ```

9.  `modulewh`

    _@desc: 平时调度-模块大小;_

    _@param {String} \$widthList 宽度列表_

    _@param {String} \$className 类名 默认绑定 module_

    _@use: @include modulewh(8 8 8); 表示有三列，每列占 8 格，共 24 格。_

    使用参考：无

    ```scss
    .demo {
        // 利用网格布局默认将父元素划分为24格
        // 传入8 8 8 表示表示有三列，每列占 8 格
        @include modulewh(8 8 8);
    }
    ```

10. `demoBox`

    _@desc: 测试盒子样式; 给父元素设置 子元素需要有个元素 class 为 demo-box_

    _@param {Boolean} \$showBorder 是否显示边界线_

    _@use: @include demoBox_

    使用参考：无

    ```scss
    .demo {
        @include demoBox(true);
    }
    ```

11. `titleStyle`

    _@desc: 平时调度标题基础样式 取全局自定义变量中的响应名称的基础样式_

    _@param {String} \$name 基础标题名称_

    _@use: @include titleStyle('main');_

    使用参考：无

    ```scss
    .demo {
        @include titleStyle('main');
        // 编译为
        font-size: var(--main-title-font-size);
        font-weight: var(--main-title-font-weight);
        font-family: var(--main-title-font-family);
        color: var(--main-title-font-color);
        letter-spacing: var(--main-title-letter-spacing);
        transform: translate(var(--main-title-font-position));
    }
    ```

## 内置操作 css 方法

1.  `getRootCss`

    _@desc: 获取全局自定义 css 变量方法_

    _@param {String} varName 自定义变量名_

    _@use: cssUtils.getRootCss('--main-title-font-size');_

    使用参考：无

    ```javascript
    const fontSize = cssUtils.getRootCss('--main-title-font-size');
    ```

2.  `setRootCss`

    _@desc: 设置全局自定义 css 变量方法_

    _@param {String} varName 自定义变量名_

    _@param {String} varValue 设置的值_

    _@use: cssUtils.setRootCss('--main-title-font-size','5rem');_

    使用参考：无

    ```javascript
    cssUtils.setRootCss('--main-title-font-size', '5rem');
    ```

3.  `removeRootCss`

    _@desc: 删除全局已设置的自定义 css 变量方法_

    _@param {String} varName 自定义变量名_

    _@use: cssUtils.removeRootCss('--main-title-font-size');_

    使用参考：无

    ```javascript
    cssUtils.removeRootCss('--main-title-font-size');
    ```

4.  `getCss`

    _@desc: 获取某项自定义 css 变量方法_

    _@param {Object} dom 获取的 dom 对象_

    _@param {String} varName 自定义变量名_

    _@use: cssUtils.getCss(document.querySelect('#headerMain'), '--title-font-size');_

    使用参考：无

    ```javascript
    const fontSize = cssUtils.getCss(document.querySelect('#headerMain'), '--title-font-size');
    ```

5.  `setCss`

    _@desc: 设置某项自定义 css 变量方法_

    _@param {Object} dom 获取的 dom 对象_

    _@param {String} varName 自定义变量名_

    _@param {String} varValue 设置的值_

    _@use: cssUtils.setCss(document.querySelect('#headerMain'), '--title-font-size','5rem');_

    使用参考：无

    ```javascript
    cssUtils.setCss(document.querySelect('#headerMain'), '--title-font-size', '5rem');
    ```

6.  `removeCss`

    _@desc: 删除某项已设置的自定义 css 变量方法_

    _@param {Object} dom 获取的 dom 对象_

    _@param {String} varName 自定义变量名_

    _@use: cssUtils.removeCss(document.querySelect('#headerMain'), '--title-font-size');_

    使用参考：无

    ```javascript
    cssUtils.removeCss(document.querySelect('#headerMain'), '--title-font-size');
    ```
