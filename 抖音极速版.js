const 识图库 = require("识图库.js")
const 赚钱 = images.read("抖音极速版/赚钱.jpg");
const 看广告 = images.read("抖音极速版/看广告赚金币.jpg");
const 搜索 = images.read("抖音极速版/搜索.jpg");
const 已完成 = images.read("抖音极速版/已完成.jpg");
const 搜索框 = images.read("抖音极速版/搜索框.jpg");


requestScreenCapture();


launch("com.ss.android.ugc.aweme.lite")
sleep(2000)
识图库.点击坐标(识图库.获取图片坐标未找到则报错(搜索, 0.8))
sleep(2000)
for (let i = 0; i < 10; i++) {
    识图库.点击坐标(识图库.获取图片坐标未找到则报错(搜索框, 0.8))
    let element = packageName("com.ss.android.ugc.aweme.lite").className("com.lynx.tasm.behavior.ui.view.UIView").untilFind().slice(0, 8)[随机数字(0, 8)]
    log(element.text())
    setText(element.text().replace("搜索", "").replace("按钮", "").replace("，", "").replace(",", ""))
    sleep(2000)
    通过对象点击(id("nuj").findOne())
    sleep(16000)
    back()
    sleep(2000)
}



function 通过对象点击(obj) {
    if (obj != null) {
        try {
            console.log(obj.bounds);
            console.log(obj.bounds());
            click(obj.bounds().centerX(), obj.bounds().centerY())
        } catch (E) { }
    } else {
        throw "null object error"
    }
    sleep(2000)
}

function 随机数字(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}