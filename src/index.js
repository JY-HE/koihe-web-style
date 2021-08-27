class CssUtil {
    constructor() {
        this.root = document.documentElement;
        this.root_computed = getComputedStyle(this.root);
    }

    // 获取自定义属性值
    getRootCss(varName) {
        if (!varName) return '';
        return this.root_computed.getPropertyValue(varName).trim();
    }

    // 修改自定义属性值
    setRootCss(varName, varValue) {
        this.root.style.setProperty(varName, varValue);
    }

    // 移除修改自定义属性值
    removeRootCss(varName) {
        this.root.style.removeProperty(varName);
    }
}
const cssUtil = new CssUtil();
export default cssUtil;
