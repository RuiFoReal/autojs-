function 识图库() {

    this.获取图片坐标 = function (img, 识别率) {
        let result = images.findImage(captureScreen(), img, {
            threshold: 识别率
        })
        return result == null ? null : [result.x + (img.getWidth() / 2), result.y + (img.getHeight() / 2)]
    }

    this.获取图片坐标未找到则报错 = function (img, 识别率) {
        let res = this.获取图片坐标(img, 识别率)
        if (res == null) {
            throw "未找到图片"
        }
        return res
    }


    this.点击坐标 = function (bounds) {
        click(bounds[0], bounds[1])
    }

}
module.exports = new 识图库()