# fibonacci-wagi-as: AssemblyScript example of fibonaci using WAGI

_WAGI is the easiest way to get started doing cloud-side WASM web apps._

**WARNING:** This is experimental code put together on a whim.
It is not considered production-grade by its developers, neither is it "supported" software.
This is a project we wrote to demonstrate another way to use WASI.

> DeisLabs is experimenting with many WASM technologies right now.
> This is one of a multitude of projects (including [Krustlet](https://github.com/deislabs/krustlet))
> designed to test the limits of WebAssembly as a cloud-based runtime.

## What It Does

This is an example of WAGI. It is written in [AssemblyScript](https://www.assemblyscript.org/),
a WebAssembly-oriented dialect of TypeScript/JavaScript.

This example shows a simple fibonacci function exposed over HTTP using WAGI.

## Building

- Clone this repo to `fibonacci-wagi-as` and enter that directory.
- Use `npm i` to install all dependencies.
- Use `npm run asbuild` to build a WASM binary.

## Configuring and Running

We recommend using the [WAGI server](https://github.com/deislabs/wagi) to run this module.
In your `modules.toml` for the WAGI server, add the following:

```toml
[[module]]
route = "/fibonacci"
module = "/path/to/fibonacci-wagi-as/build/optimized.wasm"
```

Substitute the correct module path for wherever you cloned this repo.

At that point, you should be able to access this program at `http://localhost:3000/fibonacci`
(Possibly substituting in your own domain and port, depending on the WAGI server).

You can use `curl` to test:

```console
$  curl -v http://localhost:3000/fibonacci?50
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET /fibonacci?50 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Thu, 29 Apr 2021 13:08:37 GMT
< Content-Type: text/plain
<
fib(50)=12586269025
* Connection #0 to host localhost left intact
```

You can omit the `-v` to just see the response body:

```console
$ curl http://localhost:3000/fibonacci?50
fib(50)=12586269025
```
