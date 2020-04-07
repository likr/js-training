おのうえさんは [Qiita](https://qiita.com) に投稿された記事に付けられているタグの集計をしました。

集計結果は `input` として以下のように与えられます。

```json
[
  { "tag": "JavaScript", "count": 30644 },
  { "tag": "Node.js", "count": 10235 },
  { "tag": "CI", "count": 598 },
  { "tag": "java8", "count": 951 },
  ：
]
```

おのうえさんはこの中から`count` の数が上位 20 件のデータを棒グラフで表示したいと思っています。

おのうえさんはうまくデータを変換することができませんでした。
おのうえさんを助けるために、`src/pages/Lesson02/index.js` を開き`input` から `count` が上位 20 件の要素のみを取り出した配列を返す関数 `convertData` を実装してください。

```javascript
const convertData = (input) => {
  return []; // ここを作りましょう！
};
```
