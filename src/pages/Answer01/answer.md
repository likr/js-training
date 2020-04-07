配列の要素の変換には `map` を使いましょう。

```javascript
const convertData = (input) => {
  return input.map(([name, count]) => ({
    name,
    count,
  }));
};
```
