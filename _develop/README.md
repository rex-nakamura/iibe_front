# Template

## Introduction

### Environment

- npm
- ^node 12.16.3 (LTS)

### HTML

- pug

### CSS

- PostCSS

### Javascript

- es2016 / React

---

## Usage

### Install

```
npm install
```

### Start

```
npm start
```

### Build JS

```
npm run build
```

### Add npm package for project

```
npm install *** --save-dev
```

---

## config

1.書き出し先のパスを設定します。場所は、package.json -> config  
基本的に変更の必要は無いですが、public_html を htdocs にしたり、assets を common にしたりは  
臨機応変に。サブディレクトリがある場合 `例）***.com/directory/` も同場所で。

2.postCSS の vw や rem 等の基準になる値を、`postcss.config`で調整

3.あとは `npm install` -> `npm start` watch で十分になったら、 `npm run build`  
アップロード前には必ず build してください。

4.icon-font `_develop/src/css/_config/_fonts.css` は、`src/assets/fonts/`に svg を保存し、  
`npm run build:icon`を手動実行してください。  
(watch すると毎回 hash が変わってしまうため、マニュアル制御にしました。)
