class Foo {
    save(callback: (n: number) => any) : void {
        callback(42);
    }
}
var foo = new Foo();

var strCallback = (result: string) : void => {
    alert(result);
}
var numCallback = (result: number) : void => {
    alert(result.toString());
}

//foo.save(strCallback); // not OK
foo.save(numCallback);