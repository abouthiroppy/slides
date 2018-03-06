# Slides
[![Build Status](https://travis-ci.org/abouthiroppy/slides.svg?branch=master)](https://travis-ci.org/abouthiroppy/slides)

My slides using bespoke.  
All slides can be written in Markdown or HTML.

## My Slides
- [sample](https://abouthiroppy.github.io/slides/hello/)

### 2018
- [node-core-utils](https://abouthiroppy.github.io/slides/node-core-utils/)
  - 03/06: [SRE-SET Automation Night #2](https://mercari.connpass.com/event/79046/)

### 2017
- [how to build a slide](https://abouthiroppy.github.io/slides/how-to-build-a-slide/)
  - 11/11: [A(izu)LT#09](https://atnd.org/events/91189)
- [node-whatwg-url](https://abouthiroppy.github.io/slides/node-whatwg-url/)
  - 03/31: [Node Academy 24th period](https://nodejs.connpass.com/event/53534/)
  - 04/03: LT in Dwango
- [node@8.0.0](http://abouthiroppy.github.io/slides/node8/)(Japanese)
  - 04/24: [Node Academy 25th period](https://nodejs.connpass.com/event/54749/)
- [nicohaco](https://abouthiroppy.github.io/slides/nicohaco/)(Japanese)
  - 05/29: LT in Dwango
- [the present and future of JavaScript](https://abouthiroppy.github.io/slides/the-present-and-future-of-JavaScript/)
  - 10/08: [情報科学若手の会 by 一般社団法人 情報処理学会 プログラミングシンポジウム委員会](http://wakate.org/2017/07/20/50th-general/) 
    - http://abouthiroppy.hatenablog.jp/entry/the-present-and-future-of-JavaScript
- [how to manage the document of Node.js](https://abouthiroppy.github.io/slides/how-to-manage-the-document-of-Node.js)
  - 11/18: [OSSドキュメンテーション勉強会](https://kbkz.connpass.com/event/5150/)

### Other Accounts
speakerdeck: https://speakerdeck.com/abouthiroppy  
slideshare: https://www.slideshare.net/about_hiroppy  
ECMAScript on niconare: http://niconare.nicovideo.jp/watch/kn1937

## Tasks
### Development
```sh
$ npm install
$ npm start
```

### Production Build
```sh
$ npm run build
```

### Publish
```sh
$ npm run deploy
```

## Slide Syntax
All slides are written in HTML or markdown.  

### Contents
Get the content of the slide and display it as a list in the sidebar.

#### Slide
```md
<!-- contents -->

## Contents
```

### Background
Change the slide's background.

#### Slide
```md
<!-- background: xxx -->

## title
```

#### CSS
```css
.bespoke-backdrop.xxx {
  background: red;
}
```

### Section Title
This is the common setting of the slide for the title of the section.
#### Slide
```md
<!-- sectionTitle -->

## title
```
#### CSS
```css
.bespoke-backdrop.section-title {
  background: red;
}

.section-title h2 {
  color: var(--color-js);
}
```

### Presenter Note
#### Slide
```md
## title

<!-- note
This is the presenter note.
This sentence can be seen when using Presenter Mode.
-->
```
![](./images/presenter-host.png)

## Presenter Mode
Click the rocket(:rocket:) icon from the bottom right menu(三) and then slides for presentation will be opened as a new window, and an already open window will be windows for presenters.

Host: `?presenter=host`  
View: `?presenter=view`
