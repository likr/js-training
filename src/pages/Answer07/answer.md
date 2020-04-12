はじめに、それぞれのツイートの日付を `2020-01-26` のような形式に直さないといけません。
日付を扱うために `Date` クラスを使用しましょう。
その際にタイムゾーンのズレを直すことに注意しましょう。
また、日と月は 1 桁の場合に 0 埋めすることを忘れないようにしましょう。
文字列の 0 埋めには `padStart` メソッドが便利です。

あとは、ツイートとリツイートに分けて件数を数えていきましょう。

```javascript
const convertData = (input) => {
  for (const item of input) {
    const d = new Date(`${item.createdAt} UTC`);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const date = `${d.getDate()}`.padStart(2, "0");
    item.createdAt = `${year}-${month}-${date}`;
  }
  const dates = Array.from(new Set(input.map(({ createdAt }) => createdAt)));
  dates.sort();
  const count = { tweet: {}, retweet: {} };
  for (const d of dates) {
    count.tweet[d] = 0;
    count.retweet[d] = 0;
  }
  for (const { createdAt, isRetweet } of input) {
    if (isRetweet) {
      count.retweet[createdAt] += 1;
    } else {
      count.tweet[createdAt] += 1;
    }
  }
  return ["tweet", "retweet"].map((key) => {
    return {
      id: key,
      data: dates.map((d) => {
        return {
          x: d,
          y: count[key][d],
        };
      }),
    };
  });
};
```
