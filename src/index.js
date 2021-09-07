class CssUtil {
    constructor() {
        this.root = document.documentElement;
    }

    // 获取自定义属性值
    getRootCss(varName) {
        return this.getCss(this.root, varName);
    }

    // 修改自定义属性值
    setRootCss(varName, varValue) {
        this.root.style.setProperty(varName, varValue);
        this.setCss(this.root, varName, varValue);
    }

    // 移除修改自定义属性值
    removeRootCss(varName) {
        this.root.style.removeProperty(varName);
    }

    // 获取自定义属性值
    // eslint-disable-next-line class-methods-use-this
    getCss(dom, varName) {
        if (!varName) return '';
        // eslint-disable-next-line camelcase
        const dom_computed = getComputedStyle(dom);
        return dom_computed.getPropertyValue(varName).trim();
    }

    // 修改自定义属性值
    // eslint-disable-next-line class-methods-use-this
    setCss(dom, varName, varValue) {
        dom.style.setProperty(varName, varValue);
    }

    // 移除修改自定义属性值
    // eslint-disable-next-line class-methods-use-this
    removeCss(dom, varName) {
        dom.style.removeProperty(varName);
    }
}
const cssUtil = new CssUtil();
export default cssUtil;
