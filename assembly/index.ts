import "wasi";

console.log("Content-Type: text/plain");
console.log("");

let args = process.argv;
let n=0;
if (args.length > 1) 
{
  n=I32.parseInt(args[1]);
}
var output:string;
if (n<=93) {
  let result:u64=fib(n);
  output="fib("+n.toString()+")="+result.toString();
} else {
  output="can only calculate up to fib(93)";
}

console.log(output);

function fib(n: i32): u64 {
  var a:u64 = 0, b:u64 = 1
  if (n <= 0) {
    return 0
  }
  while (--n) {
    let t = a + b
    a = b
    b = t
  }
  return b
}
