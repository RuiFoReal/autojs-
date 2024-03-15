function ScriptEngineTool() {
    this.self = function () {
        log("成功导入ScriptEngineTool" + "author：RTQ")
    }
    this.send = function (engine, key, value) {
        engine.put(key, value)
    }
    this.GetScriptEngineArraysByFileName = function (name) {
        let res = []
        engines.all().forEach(function (e) {
            tn = e.source.toString().substring(e.source.toString().lastIndexOf("/") + 1, e.source.toString().length)
            if (tn.toString() == name.toString()) {
                res.push(e);
            }
        })
        return res
    }
}
module.exports = new ScriptEngineTool()