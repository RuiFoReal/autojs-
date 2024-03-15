const 识图库 = require("识图库.js")
const 关闭 = images.read("快手极速版/关闭.jpg");
const 红包圈 = images.read("快手极速版/翻倍中.jpg");
const 宝箱 = images.read("快手极速版/宝箱.jpg");
const 金蛋 = images.read("快手极速版/金蛋.jpg");

requestScreenCapture()
launch("com.kuaishou.nebula")
sleep(2000)
获取去赚钱().click()
text("去邀请").waitFor()
console.log("页面加载完成")
sleep(2000)

if (className("android.view.View").text("点击翻倍").exists()) {
    className("android.view.View").text("点击翻倍").findOne().click()
}
sleep(5000)
while (!className("android.view.View").text("明天再来").exists()) {
    获取领福利().click()
    sleep(5000)
    if (text("关注").exists()) {
        console.log("直播");
        while (!text("已领取").exists()) {
            sleep(随机数字(1000, 2000))
        }
        back()
        sleep(4000)
        id("again_dialog_abandon_text").findOne().click()
    } else {
        console.log("广告视频");
        while (!text("已成功领取奖励").exists()) {
            sleep(随机数字(1000, 2000))
        }
        back()
        sleep(2000)
        if (text("坚持退出").exists())
            text("坚持退出").click()
        else (text("放弃奖励").exists())
        text("放弃奖励").click()
    }
    sleep(4000)
}

console.log("看广告已结束");
sleep(2000)
获取首页().click()

num = 随机数字(100, 150)
let sleepTime = 60
for (b = 1; b <= num; b++) {
    if (sleepTime >= 60) {
        获取去赚钱().click()
        console.log("已点击去赚钱")
        text("去邀请").waitFor()
        console.log("页面加载完成")
        let box = 识图库.获取图片坐标(宝箱, 0.8)
        if (box === null) {
            sleep(2000)
            back()
            sleepTime = 0
            continue
        }
        识图库.点击坐标(box)
        sleep(5000)
        识图库.点击坐标(识图库.获取图片坐标未找到则报错(关闭, 0.8))
        sleep(2000)
        back()
        sleepTime = 0
    }
    sleep(2000)
    if (识图库.获取图片坐标(红包圈, 0.5) === null && 识图库.获取图片坐标(金蛋, 0.5) === null) {
        swipe(500, 600, 450, 300, 5)
        b--
        sleepTime += 2
        continue
    }
    swipe(500, 600, 450, 300, 5)
    sleep(2000)
    if (识图库.获取图片坐标(红包圈, 0.5) === null && 识图库.获取图片坐标(金蛋, 0.5) === null) {
        swipe(500, 600, 450, 300, 5)
        b--
        sleepTime += 4
        continue
    }
    let time = 随机数字(5000, 12000)
    sleep(time)
    sleepTime += (time / 1000) + 1
    console.log("已看篇数" + b)
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

function 获取领福利() {
    return className("android.view.View").text("领福利").findOne()
}


function 获取去赚钱() {
    let button = className("androidx.appcompat.app.ActionBar$c").desc("去赚钱").findOne(10000)
    if (button == null) {
        throw "去赚钱按钮未找到"
    }
    log("已找到")
    return button;
}

function 获取首页() {
    return className("androidx.appcompat.app.ActionBar$c").desc("首页").findOne()
}