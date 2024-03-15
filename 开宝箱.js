sc = require("ScriptEngineTool.js")
while (true) {
    sleep(2000)
    if (获取宝箱()!=null) {
        sc.GetScriptEngineArraysByFileName("快手极速版.js")[0].forceStop()
        通过对象点击(获取宝箱())
        通过对象点击(获取宝箱视频())
        通过对象点击(获取广告完成())
        engines.execScriptFile("快手极速版.js")
    }else if(获取宝箱视频()!=null){
        sc.GetScriptEngineArraysByFileName("快手极速版.js")[0].forceStop()
        通过对象点击(获取宝箱视频())
        通过对象点击(获取广告完成())
        engines.execScriptFile("快手极速版.js")
    }
}

function 获取宝箱视频(){
    return text("看视频最高得").findOne(2000)
}

function 获取宝箱(){
    return text("开宝箱得金币").findOne(2000)
}

function 获取广告完成(){
    return id("video_countdown").text("已成功领取奖励").findOne()
}

function 通过对象点击(obj) {
    if(obj!=null){
        click(obj.bounds().centerX(), obj.bounds().centerY())
    }else{
        return
    }
    sleep(2000)
}