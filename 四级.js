let words = require("word.js");
function getWordTimes() {
    id("iv_show_dict2").findOne().click();
    sleep(1500)
    let words = [];
    className("android.widget.TextView").untilFind().forEach(element => {
        words.push(element.text());
    });
    back();
    sleep(1500);
    return words[words.indexOf("在历年真题中出现") + 1];
}
let words_times = {}
//console.log(getWordTimes())
while (true) {
    let word = id("tv_word").findOne().text();
    sleep(250);
    let times = getWordTimes();
    words_times[word] = times;
    console.log(word + ":" + times);
    if (text("3589/3589").exists())
        break;
    sleep(500);
    let next = id("iv_next").findOne().bounds();
    click(next);
    sleep(250);
}

files.write("1.txt", JSON.stringify(words_times));
// words.forEach(word => {
//     let w = id("tv_word").className("android.widget.TextView").text(word).findOne().parent();
//     click(w.bounds());
//     sleep(1000)
// let times = getWordTimes();
//     words_times[word] = times;
//     console.log(times);
//     swipe(500, 1170, 500, 930, 500);
//     sleep(500);
// })
