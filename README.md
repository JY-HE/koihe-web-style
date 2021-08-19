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

## 函数

1. `pxToRem`

    _@desc: px 转换 rem 方法_

    _@param {Number} \$px 像素值_

    _@use: @include pxToRem(10px);_

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

    _@use: @include pxToPercent(80, 100);_

    _@return: {String} % 计算后的百分比;_

    使用参考：无

    ```scss
    .demo {
        width: pxToPercent(50, 100); // width: 50%;
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

2. `fullContain`

    _@desc: 宽高为 100%;_

    _@use: @include fullContain;_

    使用参考：无

    ```scss
    .demo {
        @include fullContain; // width: 100%; height: 100%;
    }
    ```

3. `flexCenter`

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

4. `grid`

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

5. `gridItem`

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

6. `textEllipsis`

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

7. `boxClamp`

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

8. `position`

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

9. `fixed`

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

10. `absolute`

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

11. `centerTranslate`

    _@desc: 未知宽高的元素水平/垂直居中;_

    _@param {String} \$direction 居中方式_

    _@use: @include centerTranslate);_

    使用参考：无

    ```scss
    .demo {
        @include wh(pxToRem(100));
        @include centerTranslate(both); // 水平/垂直居中
        @include centerTranslate(horizontal); // 水平居中
        @include centerTranslate(vertical); // 垂直居中
    }
    ```

12. `pointerEvents`

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

13. `cursor`

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

14. `css3`

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

15. `bgImage`

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

16. `img`

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

17. `regularTriangle`

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

18. `shadow`

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

19. `keyframes`

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

20. `miniFont`

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

21. `select`

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

22. `gradient`

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

1. `gradientBorder`

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

2. `before`

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

3. `after`

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

4. `console`

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

5. `modulewh`

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

6. `demoBox`

    _@desc: 测试盒子样式; 给父元素设置 子元素需要有个元素 class 为 demo-box_

    _@param {Boolean} \$showBorder 是否显示边界线_

    _@use: @include demoBox_

    使用参考：无

    ```scss
    .demo {
        @include demoBox(true);
    }
    ```

7. `titleStyle`

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
