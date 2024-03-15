"ui";
ui.layout(
    <frame w="*">
        <list id="list">
            <vertical>
                <text text="标题:{{title}}" gravity="center" w="auto" h="auto" bg="#00FFFF" />
                <text text="时间:{{time}}" gravity="center" w="auto" h="auto" bg="#00FFFF" />
                <text text="消息:{{text}}" gravity="center" w="auto" h="auto" bg="#00FFFF" />
            </vertical>
        </list>
    </frame>
);
var list = []
ui.list.setDataSource(list)

events.observeNotification()
events.onNotification(n => {
    if (n.getPackageName() === "com.tencent.mobileqq") {
        CreateMessage(n.getTitle(), DateToString(new Date(n.when)), n.getText())
        n.delete()
    }
})

function CreateMessage(title, time, text) {
    list.push({ title: title, time: time, text: text })
}

function DateToString(date) {
    return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`
}
