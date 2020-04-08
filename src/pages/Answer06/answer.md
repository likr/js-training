`map` メソッドでデータを変換しながら BMI の計算を行いましょう。

```javascript
const convertData = (input) => {
  const colors = {
    男性: "blue",
    女性: "red",
  };
  return input.map(({ gender, x, y }) => {
    return {
      color: colors[gender],
      gender,
      bmi: x / (y / 100) ** 2,
      weight: x,
      height: y,
    };
  });
};
```
