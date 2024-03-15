const 识图库 = require("识图库.js")
const 搜一搜赚钱 = images.read("头条搜索极速版/搜一搜赚钱.jpg");
const 随机搜赚钱 = images.read("头条搜索极速版/随机搜赚钱.jpg");
const 看广告赚金币 = images.read("头条搜索极速版/看广告赚金币.jpg");
const 搜索 = images.read("头条搜索极速版/搜索.jpg");
const 看文章 = images.read("头条搜索极速版/看文章.jpg");
const 刷新 = images.read("头条搜索极速版/刷新.jpg");
const 宝箱 = images.read("头条搜索极速版/宝箱.jpg");
const 宝箱看广告 = images.read("头条搜索极速版/宝箱看广告.jpg");
const 任务 = images.read("头条搜索极速版/任务.jpg");


launch("com.ss.android.article.lite")
sleep(3000)
点击任务()
sleep(2000)

while (识图库.获取图片坐标(看广告赚金币, 0.8) === null) {
    swipe(500, 350, 450, 300, 20)
    sleep(200)
}
sleep(2000)
// 识图库.点击坐标(识图库.获取图片坐标未找到则报错(看广告赚金币, 0.8))
// while(!className("com.lynx.tasm.behavior.ui.text.FlattenUIText").text("领取成功").exists()){
//     sleep(2000)
// }
// back()


// while (识图库.获取图片坐标(搜一搜赚钱, 0.8) === null) {
//     swipe(500, 350, 450, 300, 20)
//     sleep(200)
// }
// sleep(2000)
// 识图库.点击坐标(识图库.获取图片坐标未找到则报错(搜一搜赚钱, 0.8))
// sleep(3000)
// 识图库.点击坐标(识图库.获取图片坐标未找到则报错(搜索, 0.8))
// sleep(2000)
// for (let index = 0; index < 5; index++) {
//     swipe(500, 1000, 450, 900, 20)
//     sleep(4000)
// }
// back()
// sleep(5000)
// 识图库.点击坐标(识图库.获取图片坐标未找到则报错(搜索, 0.8))
// sleep(2000)
// for (let index = 0; index < 5; index++) {
//     swipe(500, 1000, 450, 900, 20)
//     sleep(4000)
// }
// back()

/*随机搜*/
let location;
while ((location = 识图库.获取图片坐标(随机搜赚钱, 0.8)) !== null) {
    识图库.点击坐标(location)
    sleep(4000)
    for (let index = 0; index < 5; index++) {
        swipe(500, 1000, 450, 900, 20)
        sleep(4000)
        log("滑动一次")
    }
    back()
    log("已看完")
    sleep(4000)
}
sleep(2000)

log("开始刷文章")
/*刷文章*/
识图库.点击坐标(识图库.获取图片坐标未找到则报错(看文章, 0.8))
for (let time = 0; time < 45 * 60 * 1000; time += 4000 * 10) {
    for (let index = 0; index < 10; index++) {
        swipe(500, 600, 450, 300, 30)
        sleep(4000)
        log("滑动一次")
    }
    识图库.点击坐标(识图库.获取图片坐标未找到则报错(刷新, 0.8))
    log('已刷新')
    sleep(4000)
    if (time % 1000 * 60 * 6 === 0) {
        点击任务()
        sleep(4000)
        开宝箱()
        sleep(4000)
        识图库.点击坐标(识图库.获取图片坐标未找到则报错(看文章, 0.8))
        sleep(4000)
    }
}
sleep(2000)



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

function 点击任务() {
    识图库.点击坐标(识图库.获取图片坐标未找到则报错(任务, 0.8))
}

function 开宝箱() {
    识图库.点击坐标(识图库.获取图片坐标未找到则报错(宝箱, 0.7))
    sleep(4000)
    let 广告视频 = 识图库.获取图片坐标(宝箱看广告, 0.7)
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