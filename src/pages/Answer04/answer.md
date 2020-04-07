はじめに、アヤメの品種の名前を重複なく配列に格納する必要があります。
要素を重複なく数えるには、 `Set` を使いましょう。
`Set` では配列のメソッドを使えないので、 `Array.from` で配列に戻してあげましょう。
この配列の名前を `species` とします。

`species` に対して`map` メソッドを使って、それぞれのアヤメの品種ごとのデータを作成します。
目的のデータの各要素は、 `id` にアヤメの品種の名前、 `data` に該当する品種のデータを持っています。
`input` の `filter` メソッドを使って、アヤメの品種が一致するレコードのみを取り出しましょう。
更に、`filter` の結果に対して `map` メソッドを使って、`sepalLength` を `x` 、`petalWidth` を `y` に変換したオブジェクトを作りましょう。

```javascript
const convertData = (input) => {
  const species = Array.from(new Set(input.map(({ species }) => species)));
  return species.map((species) => {
    return {
      id: species,
      data: input
        .filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
};
```
