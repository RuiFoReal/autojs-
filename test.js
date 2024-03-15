const 识图库 = require("识图库.js")
const 宝箱 = images.read("头条搜索极速版/宝箱.jpg");
const 宝箱看广告 = images.read("头条搜索极速版/宝箱看广告.jpg");
const 任务 = images.read("头条搜索极速版/任务.jpg");
// const 看广告 = images.read("抖音极速版/看广告赚金币.jpg");

// const 已完成 = images.read("抖音极速版/已完成.jpg");

// 识图库.点击坐标(识图库.获取图片坐标未找到则报错(搜索框, 0.8))
// while (识图库.获取图片坐标(已完成, 0.8) != null) {
//     sleep(2000)
// }
// back()
识图库.点击坐标(识图库.获取图片坐标未找到则报错(任务, 0.8))

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

function 开宝箱() {
    识图库.点击坐标(识图库.获取图片坐标未找到则报错(宝箱, 0.7))
    sleep(4000)
    let 广告视频 = 识图库.获取图片坐标(宝箱看广告, 0.8)
    if (广告视频 === null) {
        return
    }
    识图库.点击坐标(广告视频)
    sleep(2000)
    while (!className("com.lynx.tasm.behavior.ui.text.FlattenUIText").text("领取成功").exists()) {
        sleep(2000)
    }
    back()
    sleep(4000)
    back()
}