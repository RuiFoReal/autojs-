console.show()
function add_up(){
var l1=266
var h1=1182
var text=1
var level=[]
var x=[]
var y=[]
for(h=1128;h<=1758;h+=210){
    for(l=212;l<=956;l+=248){
        for(text=1;text<=36;text++){
            if(l==956){
                l--;
            }
            if(l1==1010){
                l1--
            }
            var res=bounds(l,h,l1,h1).text(String(text)).find()
            if(res.length!=0){
                print("level为"+String(text)+"的龙已记录")
                level.push(text)
                x.push(l)
                y.push(h)
                break
            }
        }
        l1+=248
    }
    l1=266
    h1+=210
}
print("开始合成")
for(index=0;index<x.length;index++){
for(i=index+1;i<x.length;i++){
    if(level[index]==level[i]){
        swipe(x[index],y[index],x[i],y[i],400)
        
    }
    sleep(500)
}
}
print("合成结束")
}
launchApp("全民来养龙")
sleep(10000)
back()
sleep(1000)
click("打工")
sleep(1000)
while(true){
sleep(2000)
if(text("观看12次福利视频（12/12）").exists()){
    print("福利视频已看完")
    break
}
id("everydayTaskRv").findOne().children().forEach(child => {
    var target = child.findOne(id("operateBtn"));
    target.click();
    });    
sleep(5000)
sleep(45000)
back()
sleep(5000)
className("android.view.View").clickable(true).depth(11).findOne().parent().click()
}
sleep(2000)
click("合成")
while(true){
sleep(4000)
for(ie=0;ie<4;ie++){
    add_up()
    sleep(3000)
}
sleep(3000)
for(i=0;i<4;i++){
id("quickBuyLayout").findOne().click()
sleep(2000)
if(text("免费获得金币").exists()){
    click("免费获得金币")
    sleep(5000)
    if(!(text("免费获取").exists())){
        i--
        back()
        continue
    }
    sleep(45000)
    back()
    sleep(2000)
    back()
}
sleep(2000)
}
}