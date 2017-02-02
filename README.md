# README

## 環境

npmをインストール済みであること。
MacでHomebrewを利用している場合は以下のコマンドでインストール可能。

```
$ brew update
$ brew install npm
```

## 使い方

```
$ git clone https://github.com/yoshiokaCB/webpack-react-sample.git
$ cd webpack-react-sample

# 必要モジュールのインストール
$ npm install

# タスクランナー起動
$ webpack -d --watch
```

上記作業後、 `public/index.html` をブラウザで開く

もしくはwebサーバを起動する。
```
$ cd public
$ python -m SimpleHTTPServer 8080
```
起動後、 `localhost:8080` にブラウザからアクセスする。


あとは `src/app.js` を変更してReact.jsを色々と書いてみる。
