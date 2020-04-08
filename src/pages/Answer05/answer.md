ヒストグラムでは、それぞれの棒のことをビン（階級）と呼びます。
方針としては、最初に頻度 0 で初期化したビンを用意しておき、データを順番に処理して該当するビンの頻度を 1 ずつ増やすようにすると良いでしょう。

はじめに性別の配列と、身長の最小値・最大値を計算します。
性別は今回は男性と女性のみとわかっていますが、`Set` を使ってデータから重複ない集合を作る方がベターでしょう。
配列の最小値・最大値はそれぞれ `Math.min` と `Math.max` で得られます。
小数点の四捨五入には `Math.round` を使います。

要素数 `n` の配列を `map` で作る方法はいくつかありますが、 `Array.from({ length: n })` という方法を紹介しておきます。

それぞれのデータを見て、注意深く対応したビンの添字を計算しましょう。
ここでは、 `Math.round(y) - i` で計算を行っています。

```javascript
const convertData = (input) => {
  const genders = Array.from(new Set(input.map(({ gender }) => gender)));
  const min = Math.round(Math.min(...input.map(({ y }) => y)));
  const max = Math.round(Math.max(...input.map(({ y }) => y)));
  const bins = Array.from({ length: max - min + 1 }).map((_, i) => {
    const obj = {
      bin: (min + i).toString(),
    };
    for (const gender of genders) {
      obj[gender] = 0;
    }
    return obj;
  });
  for (const { y, gender } of input) {
    const i = Math.round(y) - min;
    bins[i][gender] += 1;
  }
  return bins;
};
```
