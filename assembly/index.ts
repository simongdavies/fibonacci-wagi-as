import "wasi";
import { Console, Environ, CommandLine } from "as-wasi";

// Without \r on windows blank line is not produced by first console.log

Console.write("content-type: text/plain\n\r",false);
Console.log("");

let commandLine = new CommandLine();
let args = commandLine.all();
let n=0;
if (args.length > 0) 
{
  n=I32.parseInt(args[0]);
}
var output:string;
if (n<=93) {
  let result:u64=fib(n);
  output="fib("+n.toString()+")="+result.toString();
} else {
  output="can only calculate up to fib(93)";
}

Console.log(output);

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