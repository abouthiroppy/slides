(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,n,t){t(152),t(386),e.exports=t(383)},369:function(e,n,t){var o={"./0-title.md":370,"./01-self-introduction.md":371,"./02-mercari.md":373,"./03-contents.md":375,"./04-esm.md":376,"./05-esm-node.md":378,"./06-summary.md":381,"./z-end.md":382};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=a,e.exports=s,s.id=369},370:function(e,n){e.exports='\x3c!-- background: title --\x3e\n\x3c!-- note\n--\x3e\n<h1 id="introduce-br-ecmascript-modules-br-of-node-js">Introduce <br /> ECMAScript modules <br /> of Node.js</h1>\n<p><br></p>\n<p><a href="https://github.com/hiroppy/slides">https://github.com/hiroppy/slides</a></p>\n'},371:function(e,n,t){e.exports='\x3c!-- background: japan --\x3e\n\x3c!-- note\nI\'m Yuta. Everyone calls me "hiroppy".\nI came to Dublin from Japan to study English, so I\'m a student now!\nI\'m living in Dublin until September and then I\'m going to go back to Japan.\n\nCurrently, I\'m a technical advisor at Mercari and working on improving webpack to version5 as an OSS developer.\nAlso, I\'m Node.js Core Collaborator.\n\nThis picture which is taken from the article titled "Why 2019 is the best year to visit Japan" is so beautiful.\n\nIf you have been to Japan, please raise your hand.\nPlease come to Japan! Now you can see the cherry blossoms like this picture.\n--\x3e\n<h2 id="-me-">😋 ME 😙</h2>\n<p><br /></p>\n<div class="profile">\n  <div class="profile-left">\n    <img src="'+t(372)+'" alt="profile" class="profile-avatar">\n    <h4 class="profile-name">Yuta Hiroto</h4>\n    🇯🇵 🛫 🇮🇪\n    <br />\n    <div class="sns-list">\n      <a href="https://hiroppy.me" target="_blank">\n        <i class="fas fa-home"></i>\n      </a>\n      <a href="https://twitter.com/about_hiroppy" target="_blank">\n        <i class="fab fa-twitter"></i>\n      </a>\n      <a href="https://github.com/hiroppy" target="_blank">\n        <i class="fab fa-github"></i>\n      </a>\n      <a href="https://www.facebook.com/abouthiroppy" target="_blank">\n        <i class="fab fa-facebook"></i>\n      </a>\n      <a href="https://www.linkedin.com/in/hiroppy" target="_blank">\n        <i class="fab fa-linkedin"></i>\n      </a>\n    </div>\n    <br>\n    <a href="https://www.patreon.com/hiroppy">please support me!</a>\n  </div>\n  <div class="profile-right">\n    <h5>\n      <i class="fab fa-js"></i>\n      A Web engineer and Architect\n    </h5>\n    <h4>Working at</h4>\n    <p>Mercari, Inc. as a web technical advisor</p>\n    <h4>A member of</h4>\n    <p>Node.js</p>\n    <p>webpack</p>\n    <p>Babel</p>\n    <p>Gatsby</p>\n    <p>Stylelint</p>\n    <p>Node.js Japan User Group</p>\n  </div>\n</div>\n\n<p><a href="https://www.womanandhome.com/travel/best-time-to-visit-japan-55928/" class="ref-link">Why 2019 is the best year to visit Japan</a></p>\n'},372:function(e,n,t){e.exports=t.p+"376f5905f3a7df570bb7afff4c696a62.jpg"},373:function(e,n,t){e.exports='\x3c!-- note\nPlease let me introduce my company.\nMercari is a C2C marketplace app that allows users to enjoy buying and selling.\nOffices in Japan and the United States have more than 1650 people work.\n\nMercari’s mission is to “create value in a global marketplace where anyone can buy & sell,” and its focus on a global marketplace can be seen in the decision to expand overseas the year after its foundation. The company believes that succeeding in a market as large and diverse as the US is a key milestone in achieving its mission.\n--\x3e\n<p><img src="'+t(374)+'" /></p>\n'},374:function(e,n,t){e.exports=t.p+"961c33788e18b3f83148057303992a34.png"},375:function(e,n){e.exports='<h2 id="contents">Contents</h2>\n<p><br /></p>\n\x3c!-- contents --\x3e\n'},376:function(e,n,t){e.exports='\x3c!-- sectionTitle: Modules --\x3e\n\x3c!-- note\nJavaScript has many module systems. For example, AMD, UMD, and CJS.\nThis specification is owned by whatwg and tc39.\ntc39 has ESM syntax and rules concerning javascript.\nFor example, the default is strict mode and how to treat "this", etc...\nwip\nThis is because ESM involves not only JavaScript syntax but also HTML syntax.\nBrowser Syntax is `<script type="module">`.\nOn the other hand, dynamic import is javascript only syntax, so tc39 has managed.\n--\x3e\n<h2 id="ecmascript-modules">ECMAScript Modules</h2>\n<p><br /></p>\n<p><a href="https://whatwg.github.io/loader/">whatwg/loader</a><br><a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-scripts-and-modules">ECMAScript Language: Scripts and Modules</a></p>\n<hr>\n\x3c!-- note\nYou can specify "module" to "type" attribute in "script" to make it recognized as ESM. However, browsers that don\'t know `type: module` ignore this script tag. In other words, it is not executed.\n\nSo you use the `nomodule` attribute. Browsers that don\'t support ESM can ignore this attribute and execute it as a normal script tag because `type` attribute has not changed. And browsers that support ESM don\'t execute this script. I think that files into one using a bundler usually have this attribute.\n--\x3e\n<h2 id="html">HTML</h2>\n<pre><code class="lang-html">&lt;!-- browsers that support ESM --&gt;\n&lt;script type=&quot;module&quot; src=&quot;esm.js&quot;&gt;&lt;/script&gt;\n&lt;script nomodule src=&quot;fallback.js&quot;&gt;&lt;/script&gt;\n\n&lt;!-- interpreting browsers that don&#39;t support ESM are to the below --&gt;\n&lt;!-- &lt;script type=&quot;module&quot; src=&quot;esm.js&quot;&gt;&lt;/script&gt; --&gt; &lt;!-- ignore this line --&gt;\n&lt;script src=&quot;fallback.js&quot;&gt;&lt;/script&gt; &lt;!-- ignore `nomodule` attribute --&gt;\n</code></pre>\n<p><a href="https://developers.google.com/web/fundamentals/primers/modules" class="ref-link">Using JavaScript modules on the web</a></p>\n<hr>\n\x3c!-- note\nAll browsers can use Modules other than Internet Explorer.\nWe might not need bundlers like webpack in the future.\nHowever, it is still more efficient to bundle large code.\n--\x3e\n<h2 id="browser-compatibility">Browser Compatibility</h2>\n<p><img src="'+t(377)+'" class="browser-compatibility" /></p>\n<p><a class="ref-link" href="https://caniuse.com/#search=modules">can I use modules</a></p>\n<hr>\n\x3c!-- note\nI think many people are already using this.\nESM has `import` and `export` syntax.\n--\x3e\n<h2 id="ecmascript-modules">ECMAScript Modules</h2>\n<pre><code class="lang-javascript">import defaultExport from &#39;module-name&#39;;\nimport * as name from &#39;module-name1&#39;;\nimport { name } from &#39;module-name2&#39;;\nimport { export as alias } from &#39;module-name&#39;;\nimport &#39;module-name&#39;;\n\nexport { name as name2 };\nexport let name1 = &#39;1&#39;, name2 = &#39;2&#39;;\nexport function FunctionName() {}\nexport class ClassName {}\n// ref:\n//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import\n//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export\n</code></pre>\n'},377:function(e,n,t){e.exports=t.p+"95da57d23d38d365db9c50f7b29a840d.png"},378:function(e,n,t){e.exports='\x3c!-- sectionTitle: ESM in Node.js --\x3e\n\x3c!-- note\nNow, the status of ESM is stability1.\nNode.js has stability index. It has 3 phases, 0 is Deprecated, 1 is Experimental, and 2 is Stable.\nStability1 is subject to major changes and should be used with caution.\n--\x3e\n<h2 id="esm-in-node-js">ESM in Node.js</h2>\n<p><br /></p>\n<p>Stability: 1<br>👷‍ the specifications may change in the future</p>\n<hr>\n\x3c!-- note\nPR was submitted on 18th March to Node.js Core by Myles.\n--\x3e\n<p><img src="'+t(379)+'" class="esm-pr" /></p>\n<p><a href="https://github.com/nodejs/node/pull/26745" class="ref-link">https://github.com/nodejs/node/pull/26745</a></p>\n<hr>\n\x3c!-- note\nNode.js spent a long time to implement ESM.\nNode.js has two major problems that browsers don\'t have.\n\nNode.js doesn\'t recognize the file which is written in ESM or not.\nSo we decided to look at the file extensions to be imported.\nWe made a rule which a file with the `.mjs` extension is written in ESM.\n\nAnd another issue is compatibility with existing CJS.\nIt\'s very difficult to implement a new feature called ESM and as not to break the existing code.\n--\x3e\n<h2 id="node-js-specific-issues">Node.js specific issues</h2>\n<p><br /></p>\n<p>Node.js spent a long long time to implement ESM...</p>\n<p><br /></p>\n<ul>\n<li>whether the file to be called is written in ESM or not</li>\n<li>compatible with CJS</li>\n</ul>\n<hr>\n\x3c!-- note\nNode.js defines the standard for implementation.\n[read below]\n---\x3e\n<h2 id="standards">Standards</h2>\n<p><br /></p>\n<ul>\n<li>Spec compliance<ul>\n<li>always follow the ES spec</li>\n</ul>\n</li>\n<li>Browser equivalence<ul>\n<li>a code that executes in both environments should produce identical results</li>\n</ul>\n</li>\n<li>Don’t break CommonJS<ul>\n<li>cannot cause breaking changes with regards to CommonJS</li>\n</ul>\n</li>\n</ul>\n<p><br /></p>\n<p><a href="https://github.com/nodejs/modules">Node.js Foundation Modules Team</a></p>\n<hr>\n<h2 id="plan">Plan</h2>\n<p>add if time is not enough.</p>\n<hr>\n\x3c!-- note\nESM\'s path conforms to whatwg url.\nSee the example.\nAs you can see, import syntax accepts URL object.\nAccess using a relative path and `file` protocol can be performed.\n\nTODO: need to investigate using a getting url, not the file\n--\x3e\n<h2 id="esm-s-path-conforms-to-whatwg-url">ESM&#39;s path conforms to whatwg url</h2>\n<pre><code class="lang-javascript">import &#39;./foo.js&#39;;\nimport &#39;file:///xxxx/foo.js&#39;;\n\n// dynamic import\n(async () =&gt; {\n  const baseURL = new URL(&#39;file://&#39;);\n  baseURL.pathname = `${process.cwd()}/foo.js`;\n\n  const foo = await import(baseURL);\n\n  console.log(foo); // [Module] { default: &#39;hello&#39; }\n})();\n</code></pre>\n<hr>\n\x3c!-- note\nYou can not use Node.js specific variables that were available until now.\nFor example, `require`, `module`, `exports`, `__dirname`, and `__filename`.\nAll variables are `undefined` when you write as ESM.\n\nInstead, you can use `import.meta` or `createRequireFromPath` to reproduce the same behavior.\nIf you want to get a file path, you can use `import.meta.url`. This is an ESM specification and currently exists in stage-3 of TC39.\nAnd, if you want to use `require` syntax in ESM, you can use `createRequireFromPath` method. By passing a based path as an argument, This function returns an executable `require` method based on that path.\n--\x3e\n<h2 id="invalid-variables">Invalid variables</h2>\n<pre><code class="lang-javascript">// The following variables don&#39;t exist in ESM.\nconsole.log(typeof require);\nconsole.log(typeof module);\nconsole.log(typeof exports);\nconsole.log(typeof __dirname);\nconsole.log(typeof __filename);\n\n// Substitutes ------------------------------------\n// Get a path info like __dirname and __filename.\nconsole.log(import.meta);\n// [Object: null prototype] {\n//   url: &#39;file:///Users/xxxx/index.js&#39;\n// }\n\n// Create `require` function.\nimport { createRequireFromPath } from &#39;module&#39;;\nimport { fileURLToPath } from &#39;url&#39;;\n\n// ./\nconst require = createRequireFromPath(fileURLToPath(import.meta.url));\n\n// ./cjs/index.js\nrequire(&#39;./cjs/index.js&#39;);\n</code></pre>\n<hr>\n\x3c!-- note\nCJS can omit `.js`, `.node`, `.json` extensions and the filename "index".\nHowever, ESM doesn\'t have this spec, so we also make this CJS specification unavailable in ESM by default.\nSo, we prepared `--es-module-specifier-resolution` flag.\nThis flag has `explicit` and `node` options, and the default is `explicit`.\nI think that most of the existing code is written in ESM is omitted the extension and `index`. At that time, please use `node` option.\n--\x3e\n<h2 id="explicit-filenames">Explicit filenames</h2>\n<p><code>explicit</code> and <code>node</code> exist, the default is <code>explicit</code><br>since explicit file extensions are usually required on the Web.</p>\n<p><br /></p>\n<ul>\n<li>file extensions are mandatory in import statements</li>\n<li>cannot omit index.js</li>\n</ul>\n<p><br /></p>\n<pre><code class="lang-javascript">// strict/index.js\n\nimport &#39;./foo/index.js&#39;; // --es-module-specifier-resolution=explicit\nimport &#39;./foo&#39;; // --es-module-specifier-resolution=node\n</code></pre>\n<pre><code class="lang-sh">$ node --experimental-modules --es-module-specifier-resolution=node ./strict/index.js\n$ node --experimental-modules  ./strict/index.js # default is `explicit`\n</code></pre>\n<hr>\n<h2 id="javascript-only">JavaScript only</h2>\n<p><br /></p>\n<p>CJS supported JSON(<code>.json</code>) and native modules(<code>.node</code>), but ESM does not.<br>you may use <code>module.createRequireFromPath()</code> for these.</p>\n<p><br /></p>\n<p>But, Node has <code>--experimental-json-modules</code> flag for loading JSON<br>because there is work in progress for standardizing this feature with browsers.</p>\n<p><br /></p>\n<p><a href="https://github.com/whatwg/html/issues/4315">whatwg/html &quot;JSON modules&quot;</a></p>\n<hr>\n\x3c!-- note\nThis file is written in CJS.\nIt is impossible to call an ESM file using require syntax.\nOn the other hand, if you use import syntax, you can call CJS files.\nHowever, only dynamic import can call ESM files from CJS.\nIn conclusion, CJS cannot call ESM at the top level.\n--\x3e\n<h2 id="cannot-load-esm-from-cjs">Cannot load ESM from CJS</h2>\n<pre><code class="lang-javascript">// // Reading ESM at top-level is prohibited.\n// import foo from &#39;./esm/foo.js&#39;; // invalid\n\n// // An error occurs because the read file is written as an ESM.\n// // `require` expects read file as CJS\n// require(&#39;./esm/foo&#39;);\n//\n// // export default typeof module !== &#39;undefined&#39; ? &#39;cjs&#39; : &#39;esm&#39;;\n// // ^^^^^^\n// // SyntaxError: Unexpected token export\n\nconsole.log(&#39;root.js:&#39;, typeof module !== &#39;undefined&#39; ? &#39;cjs&#39; : &#39;esm&#39;); // cjs\n\n(async () =&gt; {\n  const { default: foo } = await import(&#39;./esm/foo.js&#39;);\n  console.log(&#39;foo.js :&#39;, foo); // esm\n})();\n\n// Conclusion\n// 🙆‍♀️ ESM -&gt; CJS\n// 🙅‍♀️ CJS -&gt; ESM (excluding dynamic import)\n</code></pre>\n<hr>\n\x3c!-- sectionTitle: How to resolver ESM and CJS --\x3e\n<h2 id="how-to-resolve-esm-and-cjs">How to resolve ESM and CJS</h2>\n<hr>\n\x3c!-- note\nIn the future, ESM will become the de-facto standard, so we do not want to change the extension from `.js` to `.mjs` if possible. Many people would want this. So we looked for another solution.\n--\x3e\n<h2 id="-mjs-">.mjs ?</h2>\n<p><br /></p>\n<p>🤔</p>\n<p><br /></p>\n<p>It is easy to judge a file which has the <code>.mjs</code> extension is as ESM.<br>But, maybe many people don&#39;t want to use the <code>.mjs</code> extension.😞</p>\n<hr>\n\x3c!-- note\nIt is a way to specify the module type to package.json.\nThis solution is already in the Core of Node.js, and probably will not change.  \nThe solution is very simple. Each file\'s module type depends on the closest parent\'s package.json.\n\nSee this picture.\npackage.json next to root.js has `type: module`, so root.js will be read as ESM.\n\nindex.js in esm directory does not have package.json in the same hierarchy so index.js depends on package.json in the root hierarchy. Therefore, this file is also read as ESM.\n\nFinally, let\'s look at the index.js in cjs. package.json exists in the same hierarchy but does not have `type` attribute. So, index.js is read as CJS.\n--\x3e\n<h2 id="package-json-type-field">Package.json &quot;type&quot; field</h2>\n<p><br /></p>\n<p><img src="'+t(380)+'" /></p>\n<p><br />\nRefers to the closest parent&#39;s package.json.</p>\n<hr>\n\x3c!-- note\nYou can specify the type attribute in package.json. This attribute has `commonjs` and `module`, default is `commonjs`.\n\n--\x3e\n<h2 id="package-json">package.json</h2>\n<p><br /></p>\n<pre><code class="lang-json">{\n  &quot;type&quot;: &quot;module&quot; // or `commonjs`, default is `commonjs`\n}\n</code></pre>\n<p><br /></p>\n<p>Basically, all node_modules don&#39;t have <code>type</code> field,<br>So they are read by CJS. Thus this change isn&#39;t breaking changes.</p>\n<hr>\n\x3c!-- note\nLet\'s check the code. The directory structure is the same as the previous slide.\n\nSince ESM does not have a `module` variable, it is ESM if `module` is undefined.\n\nLook at the output results.\n\nAt first, `./esm/index.js` is called and output as ESM. This file depends on package.json of the root directory.\nNext, `./esm/cjs/index.js` is called and output as CJS. This file depends on package.json which exists in the same hierarchy and this package.json doesn\'t have `type` attribute.\nFinally, `./root.js` outputs as ESM because package.json in the same hierarchy has `type:module`.\nIf package.json in the root directory doesn\'t have `type:module`, this file can not be executed. Because it is executed as CJS, it can not interpret import syntax.\n--\x3e\n\x3c!-- prettier-ignore --\x3e\n<pre><code class="lang-javascript">/**\n├── esm\n│   ├── cjs\n│   │   ├── index.js\n│   │   └── package.json (commonjs is used because type is not specified)\n│   └── index.js\n├── package.json (type: module)\n└── root.js\n */\n// ./root.js -----------------------------------------------------------------1\nimport &#39;./esm/index.js&#39;;\nimport &#39;./esm/cjs/index.js&#39;;\nconsole.log(&#39;root.js          :&#39;, typeof module !== &#39;undefined&#39; ? &#39;cjs&#39; : &#39;esm&#39;); \n\n// ./esm/index.js ------------------------------------------------------------2\n// Refers to the closest parent&#39;s package.json.\nconsole.log(&#39;esm/index.js    :&#39;, typeof module !== &#39;undefined&#39; ? &#39;cjs&#39; : &#39;esm&#39;);\n\n// ./esm/cjs/index.js --------------------------------------------------------3\nconsole.log(&#39;esm/cjs/index.js:&#39;, typeof module !== &#39;undefined&#39; ? &#39;cjs&#39; : &#39;esm&#39;);\n</code></pre>\n<pre><code class="lang-shell">$ node --experimental-modules root.js\nesm/index.js    : esm # 2\nesm/cjs/index.js: cjs # 3\nroot.js         : esm # 1\n</code></pre>\n<hr>\n\x3c!-- note\nIf you do not want to follow this rule for specific files, specify the extension.\nYou can use `.mjs` and `.cjs` extensions.\n--\x3e\n<h2 id="-mjs-and-cjs"><code>.mjs</code> and <code>.cjs</code></h2>\n<p>All files follow the package.json type rules,<br>but there are cases where want to exclude certain files.</p>\n<p>By changing the file extension from <code>.js</code>,<br>it is possible to exclude the application of the rule.</p>\n<pre><code class="lang-javascript">// Always read as CJS\nimport &#39;./file.cjs&#39;;\n\n// Always read as ESM\nimport &#39;./file.mjs&#39;;\n</code></pre>\n<hr>\n\x3c!-- sectionTitle: Works in progress --\x3e\n<h2 id="works-in-progress">Works in progress</h2>\n<hr>\n'},379:function(e,n,t){e.exports=t.p+"f4f70262a66cd6d76c58f334eff2e818.png"},380:function(e,n,t){e.exports=t.p+"5a91970af71426f2170bdc9d4a49e514.png"},381:function(e,n){e.exports='\x3c!-- sectionTitle: Summary --\x3e\n<h2 id="summary">Summary</h2>\n<p><br /></p>\n<ul>\n<li>a file becomes ESM when package.json has <code>type: module</code></li>\n<li>a file&#39;s module depends on the closest parent&#39;s package.json</li>\n<li>at the top level, CJS cannot call ESM</li>\n<li>some variables used in CJS cannot be used in ESM</li>\n<li>the goal is to drop a flag by when Node 12 starts LTS in October 2019</li>\n</ul>\n<hr>\n\x3c!-- sectionTitle: References --\x3e\n<h2 id="references">References</h2>\n<p><br /></p>\n<ul>\n<li><a href="https://github.com/nodejs/modules">nodejs/modules</a></li>\n<li><a href="https://developers.google.com/web/fundamentals/primers/modules">Using JavaScript modules on the web</a></li>\n<li><a href="https://blog.hiroppy.me/entry/nodejs-experimental-modules">Node.js の新しいモジュール方式の実験的導入</a></li>\n<li><a href="https://blog.jxck.io/entries/2017-06-21/nomodule-attribute.html">ES Modules への橋渡しとしての nomodule 属性</a></li>\n</ul>\n'},382:function(e,n){e.exports='\x3c!-- background: end --\x3e\n<h1 id="the-end">The End</h1>\n<p><br /></p>\n<div class="sns-list sns-list-end">\n  <a href="https://hiroppy.me" target="_blank">\n    <i class="fas fa-home"></i>\n  </a>\n  <a href="https://twitter.com/about_hiroppy" target="_blank">\n    <i class="fab fa-twitter"></i>\n  </a>\n  <a href="https://github.com/hiroppy" target="_blank">\n    <i class="fab fa-github"></i>\n  </a>\n  <a href="https://www.facebook.com/abouthiroppy" target="_blank">\n    <i class="fab fa-facebook"></i>\n  </a>\n  <a href="https://www.linkedin.com/in/hiroppy" target="_blank">\n    <i class="fab fa-linkedin"></i>\n  </a>\n</div>\n'},384:function(e,n,t){var o=t(385);"string"==typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(54)(o,s);o.locals&&(e.exports=o.locals)},385:function(e,n,t){}},[[151,3,4]],[5]]);