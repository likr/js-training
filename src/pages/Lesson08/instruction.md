おのうえさんは 2019 年 4 月に Qiita に投稿された記事に付けられたタグのリストを入手しました。

データは `input` として以下のように与えられます。

```json
[
  { "id": "602b2731267295fd2b9d", "tags": ["Python", "Windows", "初心者", "Python3", "VSCode"] },
  { "id": "2bd7cfbbfb829893b22d", "tags": ["jsdo", "複素数"] },
  { "id": "36365bcdf30eaea65250", "tags": ["Rails", "jQuery", "Ajax"] },
  { "id": "20cc50c5d6c4bfdb351f", "tags": ["Ansible", "inspec"] },
  { "id": "9391b263683ba1846aa0", "tags": ["PHP", "EC-CUBE", "新元号", "令和"] },
  ：
]
```

おのうえさんは、このデータのタグの共起関係をネットワーク図で表示しようと思いました。
すなわち、タグをネットワークのノードとし、同じ記事内に含まれる全てのタグのペアをネットワークのリンクで結びます。
例えば、ある記事のタグが `Python`, `Ruby`, `初心者` の 3 つであるとき、`Python` と `Ruby`、`Python` と `初心者`、`Ruby` と `初心者` の 3 つのペアがリンクで結ばれます。

ただし、全ての共起関係をネットワーク図にすると複雑になるなので、あるタグのペアを含んだ記事が 2 つ以上あるもののみを表示することにしました。
例えば、 `Python` と `Ruby` の間のリンクが存在するためには、 `Python` と `Ruby` の 2 つともを含んだ記事が 2 個以上ある必要があります。

目的のネットワーク図を表示するためには以下のような形式のデータを用意する必要があります。

```json
{
  "nodes": [
    { "id": ".NET" },
    { "id": "AWS" },
    { "id": "ActiveRecord" },
    { "id": "Ajax" },
    { "id": "Android" },
    ：
  ],
  "links": [
    { "source": ".NET", "target": "C#" },
    { "source": "AWS", "target": "CloudFront" },
    { "source": "AWS", "target": "EC2" },
    { "source": "AWS", "target": "ENI" },
    { "source": "AWS", "target": "Linux" },
    ：
  ]
}
```

データは `nodes` と `links` の 2 つのプロパティを持ちます。
`nodes` はノードの配列で、各要素は `id` プロパティにタグ名を格納します。
`links` はリンクの配列で、各要素は `source` と `target` それぞれにそのリンクが結ぶ 2 つのタグ名を格納します。

ここで、`links` には、`source` と `target` を入れ替えた要素が含まれてはいけません。
例えば、`Python` と `Ruby` のタグのリンクは、 `{ "source": "Python", "target": "Ruby" }` か `{ "source": "Ruby", "target": "Python" }` のいずれか片方だけしか含まれていてはいけません。

おのうえさんはうまくデータを変換することができませんでした。
おのうえさんを助けるために、`src/pages/Lesson08/index.js` を開き `input` のデータを目的の形式に変換する `convertData` を実装してください。

```javascript
const convertData = (input) => {
  return { nodes: [], links: [] }; // ここを作りましょう！
};
```
