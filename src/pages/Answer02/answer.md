`count` の降順でソートして、先頭 20 件を取り出してあげましょう。
配列から連続する一部を取り出すには `slice` を使うことができます。

```javascript
const convertData = (input) => {
  input.sort((item1, item2) => item2.count - item1.count);
  return input.slice(0, 20);
};
```
