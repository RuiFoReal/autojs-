const content = ['美', '好看','好温柔','好可','爱了','绝绝子','很喜欢']

launchApp("小红书")
sleep(2000)
while (true) {
    if (FindLikeIsFalse() != null) {
        ClickTitle()
        sleep(2000)
        if(FindLike1()!=null){
            ClickByObj(FindLike1()) //点赞
            sleep(2000)

            ClickByObj(FindComment1())
            sleep(2000)
            FindCommentInput().setText(RandomContent())
            sleep(2000)
            ClickByObj(FindSend())
            sleep(2000)
            ClickByObj(FindComment1())
            sleep(2000)
            FindCommentInput().setText(RandomContent())
            sleep(2000)
            ClickByObj(FindSend())
            sleep(2000)
            back()
            sleep(2000)
        }else if(FindLike2()!=null){
            click(device.width/2,device.height/2)
            sleep(2000)
            ClickByObj(FindLike2()) //点赞
            sleep(2000)
            ClickByObj(FindComment2())

            sleep(2000)
            ClickByObj(FindCommentInput())
            sleep(2000)
            FindCommentInput().setText(RandomContent())
            sleep(2000)
            ClickByObj(FindSend())
            sleep(2000)
            ClickByObj(FindCommentInput())
            sleep(2000)
            FindCommentInput().setText(RandomContent())
            sleep(2000)
            ClickByObj(FindSend())

            sleep(2000)
            back()
            sleep(2000)
            back()
        }
    }else{
    swipe(500, 800, 500, 300, 1000)
    sleep(1000)
    }
}


function RandomContent() {
    return content[Math.round(Math.random()*(content.length-1))]
}

function ClickByObj(o) {
    click(o.bounds().centerX(), o.bounds().centerY())
}

function FindLikeIsFalse() {
    var s = className("android.widget.ImageView").id("cop").selected(false).findOne(1000)
    if(s==null)return null
    if (0 < s.bounds().centerX() && s.bounds().centerX() < device.width && 0 < s.bounds().centerY() && s.bounds().centerY() < device.height) {
        return s
    } else {
        return null
    }
}

function ClickTitle() {
    var s = FindLikeIsFalse().bounds()
    click(s.centerX(), s.centerY() - 200)
}

function FindComment1() {
    return id("ceg").findOne()
}

function FindComment2(){
    return id("commentLayout").findOne()
}

function FindCommentInput() {
    return id("d_y").findOne()
}

function FindLike1() {
    return id("e6l").findOne(1000)
}

function FindLike2(){
    return id("doz").findOne(1000)
}

function FindSend(){
    return id("dk0").findOne()
}