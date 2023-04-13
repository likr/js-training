# js-training

日本大学文理学部情報科学科尾上ゼミの JavaScript 演習資料です。
情報可視化に必要なデータ変換の演習を通じて、JavaScript 力を付けましょう。

この資料では、JavaScript 自体の説明はしていないので、以下のサイトなどで学修しながら演習を進めて下さい。

- [JavaScript Primer](https://jsprimer.net/)

## 開発環境を準備しよう

はじめに、必要なソフトウェアをインストールしましょう。
インストール済みの人は飛ばしてください。

- [Node.js (LTS 版)](https://nodejs.org/)
- Git
- モダン Web ブラウザ
  - [Google Chrome](https://www.google.com/chrome/)を推奨します
- [Visual Studio Code](https://azure.microsoft.com/products/visual-studio-code/)
  - 他に好みの IDE やエディタがあればそちらを使用して下さい。
  - Chrome OS で演習を行う場合は [Visual Studio Online](https://visualstudio.microsoft.com/services/visual-studio-online/) などが利用できます。

## リポジトリをクローンしよう

[GitHub](https://github.com/) のアカウントを持っていない人は、はじめにアカウントを作成しましょう。
詳しくは以下のページを読んでください。

- [GitHub へのサインアップ](https://docs.github.com/ja/get-started/signing-up-for-github/signing-up-for-a-new-github-account)

[このリポジトリ](https://github.com/likr/js-training) をフォークしましょう。
フォークの詳細は以下のページを読んでください。

- [リポジトリをフォークする](https://docs.github.com/ja/get-started/quickstart/fork-a-repo)

次に、GitHub から手元の作業環境にクローンします。
Visual Studio Code からリポジトリのクローンを行えます。
詳細な操作は以下のページを読んでください。

- [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)

git コマンドや GitHub デスクトップ等のアプリの方を使い慣れていれば好みの方法でも構いません。

## 開発サーバーを動かそう

Visual Studio Code のターミナルから、リポジトリのディレクトリで以下のコマンドを実行し、パッケージのインストールを行います。

```shell-session
npm ci
```

次に、以下のコマンドで開発サーバーを起動します。

```shell-session
npm start
```

正常に開発サーバーが起動すると、Web ブラウザでページが開かれます。

`npm ci` の実行はリポジトリをクローンした直後の一回だけで大丈夫です。
ですが、もしリポジトリの更新を取り込んだ後にアプリが動かなくなった場合などは、再度 `npm ci` を実行してみて下さい。

## 演習を始めよう

立ち上がった Web ページ上の指示を読みながら演習を進めましょう。

それぞれのページで指示されたソースコードを Visual Studio Code で開いてプログラムの開発をして下さい。
「表示例を見る」リンクから、正しい実行結果を確認できます。
ソースコードを保存すると、自動的に Web ページが更新されます。
正しい実行結果と一致するようにプログラムを開発しましょう。

もし、プログラムを書いていて Web サイトが動かなくなったら、以下のリンクからも同じ内容の Web サイトが見られます。

- [js-training](https://js-training.vdslab.jp)

画面やターミナルに表示されているエラーも読みながら、落ち着いてプログラムを修正しましょう。

## わからなくなったら

どうしてもプログラムの書き方がわからなければ、表示例のページで「解答例を表示」にチェックを入れると解答例と説明が表示されます。
自分のプログラムと見比べて、わからなかったところは復習しておきましょう。

自分でプログラムが書けた人も一度解答例を見て、知らないことがないか確認しておくと良いでしょう。

## 演習が解けたら

1 問演習が解けるごとにリポジトリの更新をコミットして、GitHub にプッシュすると良いでしょう。
学修の記録にもなります。
