var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.save = function (callback) {
        callback(42);
    };
    return Foo;
}());
var foo = new Foo();
var strCallback = function (result) {
    alert(result);
};
var numCallback = function (result) {
    alert(result.toString());
};
//foo.save(strCallback); // not OK
foo.save(numCallback);
