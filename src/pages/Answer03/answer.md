配列から、条件を満たす要素のみを残した配列を得るためには `filter` を使います。

```javascript
const convertData = (input) => {
  return input.filter((item) => item.gender === "男性");
};
```
