// limit()

var s=className("android.widget.TextView").findOne()

ClickByObj(s)
function ClickByObj(o) {
    click(o.bounds().centerX(), o.bounds().centerY())
}

function limit() {
    importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
    let bridge = runtime.accessibilityBridge;
    let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
    let configField = bridgeField.getType().getDeclaredField("mConfig");
    configField.setAccessible(true);
    configField.set(bridge, configField.getType().newInstance());
    bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
        filter : function (info) {
            return true;
        }
    }))
}