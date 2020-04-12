全データの中の省 (`ministry`)、省の中の部局 (`bureau`)、部局の中の課(`department`)と言うように 3 つの階層を作る必要があります。

今の階層から 1 つ下の階層を作るための処理を考えます。
例えば、`x` 省の中の部局のデータを作るには、以下のように処理することができます。

1. 全データの中から `x` 省の事業を絞り込む
2. `x` 省の事業に出現する部局を重複なく配列 `bureaus` に格納する
3. `bureaus` を順番に処理し、各部局に対応するデータを作成する（部局の中の課のデータを作成する）
4. `bureaus` から、各部局に含まれる事業数が全体の 1%以下の要素を取り除く
5. `bureaus` を部局に含まれる事業数の降順でソートする
6. `bureaus` の末尾に、4.で取り除いた事業数の合計を持ったその他の要素を追加する

部局の中の課も同様に処理することができます。

```javascript
const convertData = (input) => {
  const ratio = 0.01;
  const ministries = Array.from(
    new Set(input.map(({ ministry }) => ministry))
  ).map((ministry) => {
    const ministryProjects = input.filter((item) => item.ministry === ministry);
    const bureauCount = {};
    const bureaus = Array.from(
      new Set(ministryProjects.map(({ bureau }) => bureau))
    )
      .map((bureau) => {
        const bureauProjects = ministryProjects.filter(
          (item) => item.bureau === bureau
        );
        const departments = Array.from(
          new Set(bureauProjects.map(({ department }) => department))
        )
          .map((department) => {
            const departmentProjects = bureauProjects.filter(
              (item) => item.department === department
            );
            return {
              name: department,
              count: departmentProjects.length,
            };
          })
          .filter(({ count }) => count / input.length >= ratio);
        departments.sort((item1, item2) => item2.count - item1.count);
        departments.push({
          name: "その他",
          count:
            bureauProjects.length -
            departments.reduce((a, { count }) => a + count, 0),
        });
        bureauCount[bureau] = 0;
        for (const { count } of departments) {
          bureauCount[bureau] += count;
        }
        return {
          name: bureau,
          children: departments,
        };
      })
      .filter(({ name }) => bureauCount[name] / input.length >= ratio);
    bureaus.sort(
      (item1, item2) => bureauCount[item2.name] - bureauCount[item1.name]
    );
    bureaus.push({
      name: "その他",
      count:
        ministryProjects.length -
        bureaus.reduce((a, { name }) => a + bureauCount[name], 0),
    });
    return {
      name: ministry,
      children: bureaus,
    };
  });
  return {
    children: ministries,
  };
};
```
