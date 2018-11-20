<!-- sectionTitle: History: The Future -->

## The Future

---

## Version 5

<!-- https://github.com/webpack/webpack/pull/8162
https://github.com/webpack/webpack/milestone/18 -->

<br />

👷 確定ではないことに注意してください 👷

<br />

<div class="list-with-description">
  <div style="text-align: center">
    <img src="../images/logo-new.svg" class="description-logo" />
    <br />
    <p>🚀: 未定</p>
  </div>
  <ul>
    <li>[persistent cachingの追加(FileCachePluginの追加)](https://github.com/webpack/webpack/pull/8162)</li>
    <li>HTTP/2をデフォルトへ</li>
    <li>[wip]: モジュールタイプに[`css`](https://github.com/webpack/webpack/pull/6448), [`html`](https://github.com/webpack/webpack/pull/6447), [`url`](https://github.com/webpack/webpack/pull/6446)のサポート</li>
    <li>[wip]: [`webpack-preset-`の対応, 及びwebpack-mergeの導入](https://github.com/webpack/webpack/pull/6395)</li>
    <li>[spec]: [`target.webpackGraph`の追加](https://github.com/webpack/webpack/issues/6386)
  </ul>
</div>

<br />

```txt
$ npm i -D webpack/webpack#next
```

---

## Persistent Caching

```javascript
{
  type: 'filesystem', // タイプ

  cacheDirectory: '/path/to/dir', // ディレクトリ

  name: 'something', // サブフォルダー名

  version: '1xz2', // 設定ファイルのバージョン

  // いつキャッシュするか
  // idle: コンパイラがアイドル状態の時
  // instant: コンパイル・ブロック
  // background: コンパイラ中・ノンブロッキング
  store: 'idle',

  loglevel: 'warning', // ログのレベル

  hashAlgorithm: 'md4' // ハッシュアルゴリズム
}
```

---

🏃