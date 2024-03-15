launchApp("中青看点")
sleep(10000)
id("a70").findOne().click()
sleep(2000)
swipe(500,2000,500,100,5000)
sleep(2000)
click("展开")
sleep(2000)
/*

if(!text("搜索领青豆 (3 /3)").exists()){
var 搜索 = id("ho").className("android.widget.TextView").text("完成全部搜索任务额外获得150青豆").findOne()
click(搜索.bounds().centerX() + 500, 搜索.bounds().centerY() - 50)
sleep(2000)


var 搜索必赚 = text("搜索必赚").findOne()
click(搜索必赚.bounds().centerX() + 580, 搜索必赚.bounds().centerY() + 60)
sleep(2000)
while (!id("finishedCount").text("8").exists()) {
    var 今日热词 = className("android.view.View").text("今日热词 refresh.png 换一批").findOne()
    click(今日热词.bounds().centerX() - 360, 今日热词.bounds().centerY() + 134)
    sleep(5000)
    back()
    sleep(5000)
}
back()
sleep(2000)

var 每日搜索 = text("每日搜索").findOne()
click(每日搜索.bounds().centerX() + 580, 每日搜索.bounds().centerY() + 60)
sleep(2000)
while (!id("finishedCount").text("8").exists()) {
    var 今日热词 = className("android.view.View").text("今日热词 refresh.png 换一批").findOne()
    click(今日热词.bounds().centerX() - 360, 今日热词.bounds().centerY() + 134)
    sleep(5000)
    back()
    sleep(5000)
}
back()
sleep(2000)


var 热搜热词 = text("热搜热词").findOne()
click(热搜热词.bounds().centerX() + 580, 热搜热词.bounds().centerY() + 60)
sleep(2000)
while (!id("finishedCount").text("4").exists()) {
    var 今日热词 = className("android.view.View").text("今日热词 refresh.png 换一批").findOne()
    click(今日热词.bounds().centerX() - 360, 今日热词.bounds().centerY() + 134)
    sleep(5000)
    back()
    sleep(5000)
}
back()
sleep(2000)
}
if(id("ame").exists()){
  id("ame").findOne().click()
}

*/
/*
    看广告
*/
/*
while(!id("title").className("android.widget.TextView").text("看福利视频 (6 /6)").exists()){
    sleep(2000)
    var 激励视频=text("今日观看6次激励视频额外奖励150青豆").findOne()
    click(激励视频.bounds().centerX()+500,激励视频.bounds().centerY()-50)
    sleep(70000)
    id("tt_video_ad_close_layout").findOne().click()
    }
sleep(2000)
if(id("ame").exists()){
  id("ame").findOne().click()
}
*/
/*
    刷文章
*/
while(!text("阅读60分钟 (60 /60)").exists()){
for(var a=0;a<20;a++){
sleep(2000)
id("a6x").findOne().click()
sleep(2000)
var 推荐=className("android.widget.TextView").text("推荐").findOne().parent()
click(推荐.bounds().centerX(),推荐.bounds().centerY()+160)
sleep(2000)
for(var i=0;i<8;i++){
    swipe(500,700,500,300,400)
    sleep(4000)
}
back()
}
sleep(2000)
id("a70").findOne().click()
sleep(3000)
}



/*
    看视频
*/
for (var a = 0; a < 15; a++) {
    sleep(2000)
    id("a71").findOne().click()
    sleep(2000)
    var 推荐 = className("android.widget.TextView").text("推荐").findOne().parent()
    click(推荐.bounds().centerX(), 推荐.bounds().centerY() + 300)
    sleep(60000)
    back()
}
