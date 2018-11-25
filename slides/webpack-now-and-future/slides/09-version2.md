<!-- sectionTitle: Release: Version 2 -->

## Version 2

<br />

<div class="list-with-description">
  <div style="text-align: center">
    <img src="../images/logo-new.svg" class="description-logo" />
    <br />
    <div style="text-align: left">
      <p>🚀 2017/01/18(v2.1.0)</p>
      <p>rc: ~ 8</p>
      <p>beta: ~ 28</p>
      <p>alpha: N/A</p>
      <p>v1から2年11ヶ月</p>
    </div>
  </div>
  <ul>
    <li>設定ファイルスキーマの大幅な変更</li>
    <li>設定ファイルのバリデーターが導入</li>
    <li>ESM, JSONのネイティブサポート開始</li>
    <li>パフォーマンスヒントの追加</li>
    <li>Tree Shakingの追加</li>
  </ul>
</div>

---

## Changes of the configuration file

```javascript
module.exports = {
  resolve: {
    modulesDirectories: []
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        query: {}
      }
    ]
  }
};
```

```javascript
module.exports = {
  resolve: {
    modules: []
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        options: {},
        enforce: 'pre'
      }
    ]
  }
};
```

---

## Performance hints

```javascript
// mode: productionではデフォルトでwarning
module.exports = {
  performance: {
    hints: 'error',
    maxEntrypointSize: 400000, // 250000bytes
    maxAssetSize: 100000 // 250000bytes
  }
};
```

```txt
WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: vendor.1047e160d5fc0fcb59cf.6.bundle.js (956 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined assetsize exceeds the recommended limit (244 KiB).
This can impact web performance.
Entrypoints:
  main (966 KiB)
      vendor.1047e160d5fc0fcb59cf.6.bundle.js
      main.22bd33c53e53638cfca2.bundle.js
```
