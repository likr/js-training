おのうえさんはデータサイエンティストを目指すため、iris データセットの分析をしようと思いました。

iris データセットにはアヤメのがく片の長さ(sepalLength)、がく片の幅(sepalWidth)、花びらの長さ(petalLength)、花びらの幅(petalWidth)、アヤメの品種(species)の 5 つの属性が各個体ごとに含まれています。

iris データセットは `input` として以下のように与えられます。

```json
[
  {
    "sepalLength": 5.1,
    "sepalWidth": 3.5,
    "petalLength": 1.4,
    "petalWidth": 0.2,
    "species": "setosa"
  },
  {
    "sepalLength": 4.9,
    "sepalWidth": 3.0,
    "petalLength": 1.4,
    "petalWidth": 0.2,
    "species": "setosa"
  },
  {
    "sepalLength": 4.7,
    "sepalWidth": 3.2,
    "petalLength": 1.3,
    "petalWidth": 0.2,
    "species": "setosa"
  },
  ：
]
```

おのうえさんは、手始めにがく片の長さと花びらの幅の関係を散布図として表示したいと思っています。
なおかつ、散布図の点はアヤメの品種ごとに変えたいと思っています。

目的の散布図を表示するためには、以下のような形式のデータを用意する必要があります。

```json
[
  {
    "id": "setosa",
    "data": [
      { "x": 5.1, "y": 0.2 },
      { "x": 4.9, "y": 0.2 },
      { "x": 4.7, "y": 0.2 },
      ：
    ]
  },
  {
    "id": "versicolor",
    "data": [
      { "x": 7, "y": 1.4 },
      { "x": 6.4, "y": 1.5 },
      { "x": 6.9, "y": 1.5 },
      ：
    ]
  },
  ：
]
```

目的の形式は、アヤメの品種ごとに `id` 属性と `data` 属性を持った配列です。
`id` にはアヤメの品種の名前、`data` にはその品種のがく片の長さを `x` 、花びらの幅を `y` とした値が含まれています。

おのうえさんはうまくデータを変換することができませんでした。
おのうえさんを助けるために、`src/pages/Lesson04/index.js` を開き `input` のデータを目的の形式に変換する `convertData` を実装してください。

```javascript
const convertData = (input) => {
  return []; // ここを作りましょう！
};
```
