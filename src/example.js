var ts2hx = require('./ts2hx');

// Compile typescript code
var haxeCode = ts2hx([
    "class FooClass {",
    "    constructor(public name:string) {",
    "        console.log('Hello, my name is '+this.name);",
    "    }",
    "}"
].join("\n"));

// Log haxe output
process.stdout.write(haxeCode);

// Expected output:
//
//    package;
//
//    class FooClass {
//
//        public var name:String;
//
//        public function new(name:String) {
//            this.name = name;
//            trace('Hello, my name is ' + this.name);
//        }
//
//    }
//
