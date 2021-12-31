var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _num, _name;
var DemoPrice = /** @class */ (function () {
    function DemoPrice() {
        _num.set(this, void 0);
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _num, 20);
        __classPrivateFieldSet(this, _name, 'peterzhang');
    }
    return DemoPrice;
}());
_num = new WeakMap(), _name = new WeakMap();
var s = new DemoPrice();
