# Source Maps v3

---

Node@16 で v3 が安定的となりました 🎉

<br />

```shell
$ NODE_OPTIONS=--enable-source-maps node dist/index.js
```

<br />

Node.js は生成されたコードが `//# sourceMappingURL=xxx.js.map` を持っている場合、<br />`require/import`でのロード時に sourcemap をキャッシュします。

---

```ts
class MyError extends Error {
  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, MyError);
  }
}

throw new MyError('This line is L:8');
```

```shell
# ===== 😭 =====
$ node dist/index.js
/dist/index.js:26 # 26は生成されたコードの行
throw new MyError('This line is L:8');
^

Error: This line is L:8
    at Object.<anonymous> (/dist/index.js:26:7)

# ===== 👍 =====
$ NODE_OPTIONS=--enable-source-maps node dist/index.js
/src/index.ts:8 # 8はtypescriptで書かれたコードの実際の行
throw new MyError('This line is L:8');
      ^

Error: This line is L:8
    at Object.<anonymous> (/src/index.ts:8:7)
```

---

`*.map` ファイルの中身

<br />

```json
{
  "version": 3,
  "file": "index.js",
  "sourceRoot": "",
  "sources": ["../src/index.ts"],
  "names": [],
  "mappings": ";;;;;;;;;;;;;;;;AAAA;IAAsB,2BAAK;IACzB,iBAAY,OAAe;QAA3B,YACE,kBAAM,OAAO,CAAC,SAEf;QADC,KAAK,CAAC,iBAAiB,CAAC,KAAI,EAAE,OAAO,CAAC,CAAC;;IACzC,CAAC;IACH,cAAC;AAAD,CAAC,AALD,CAAsB,KAAK,GAK1B;AAED,MAAM,IAAI,OAAO,CAAC,kBAAkB,CAAC,CAAC"
}
```

[spec](http://sourcemaps.info/spec.html)

---

## BASE64 VLQ CODEC

<br />

`mappings`は Base64 VLQ で圧縮されていて、ソースのトランスパイル前後の位置を保存している。

```txt
16) [0,0,0,0]
17) [4,0,0,22], [27,0,0,5]
18) [4,0,1,-25], [17,0,0,12], [7,0,0,15]
19) [8,0,0,-27], [12,0,1,2], [18,0,0,6], [7,0,0,7], [1,0,0,1], [9,0,2,-15]
20) [8,0,-1,1], [5,0,0,5], [1,0,0,1], [17,0,0,17], [1,0,0,1], [5,0,0,4], [2,0,0,2], [7,0,0,7], [1,0,0,1], [1,0,0,1]
22) [4,0,1,-41], [1,0,0,1]
23) [4,0,1,-3], [14,0,0,1]
24) [0,0,0,-1], [1,0,0,1], [0,0,-5,-1], [1,0,0,22], [5,0,0,5], [3,0,5,-26]
25) [0,0,2,-1], [6,0,0,6], [4,0,0,4], [7,0,0,7], [1,0,0,1], [18,0,0,18], [1,0,0,1], [1,0,0,1]
```

<br />

読みやすいように変換した形  
`([from_position](source_index)=>[to_position])`

```txt
([0,0](#0)=>[16,0])
([0,22](#0)=>[17,4]) | ([0,27](#0)=>[17,31])
([1,-25](#0)=>[18,4]) | ([1,-13](#0)=>[18,21]) | ([1,2](#0)=>[18,28])
([1,-27](#0)=>[19,8]) | ([2,-25](#0)=>[19,20]) | ([2,-19](#0)=>[19,38]) | ([2,-12](#0)=>[19,45]) | ([2,-11](#0)=>[19,46]) | ([4,-26](#0)=>[19,55])
([3,1](#0)=>[20,8]) | ([3,6](#0)=>[20,13]) | ([3,7](#0)=>[20,14]) | ([3,24](#0)=>[20,31]) | ([3,25](#0)=>[20,32]) | ([3,29](#0)=>[20,37]) | ([3,31](#0)=>[20,39]) | ([3,38](#0)=>[20,46]) | ([3,39](#0)=>[20,47]) | ([3,40](#0)=>[20,48])
([4,-41](#0)=>[22,4]) | ([4,-40](#0)=>[22,5])
([5,-3](#0)=>[23,4]) | ([5,-2](#0)=>[23,18])
([5,-1](#0)=>[24,0]) | ([5,0](#0)=>[24,1]) | ([0,-1](#0)=>[24,1]) | ([0,21](#0)=>[24,2]) | ([0,26](#0)=>[24,7]) | ([5,0](#0)=>[24,10])
([7,-1](#0)=>[25,0]) | ([7,5](#0)=>[25,6]) | ([7,9](#0)=>[25,10]) | ([7,16](#0)=>[25,17]) | ([7,17](#0)=>[25,18]) | ([7,35](#0)=>[25,36]) | ([7,36](#0)=>[25,37]) | ([7,37](#0)=>[25,38])
```

[base64vlq](https://www.murzwin.com/base64vlq.html)

---

```ts
// 生成元コード
class MyError extends Error { // L: 1
```

```ts
// 生成元コードの分割されるトークン群, sourcemapsは0スタート
class MyError extends // ([0,0](#0)=>[16,0])
Error                 // ([0,22](#0)=>[17,4])
 {                    // ([0,27](#0)=>[17,31])
```

```js
// 生成されたコード
var MyError = /** @class */ (function (_super) { // L:17
    __extends(MyError, _super);                  // L:18
```

---

## まとめ

<br />

- トランスパイルされたコードを実行するときは、`NODE_OPTIONS=--enable-source-maps`をつけると<br />デバッグが断然楽になる
- sourcemaps の仕組みは面白い

---

# The End
