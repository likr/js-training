やることは、(1) 次数が 1 のノードとそこから伸びるリンクを取り除く、(2) `id` が「福島」のノードから始まり、そこから `source` と `target` をつないで辿れるノードを全て見つける、(3) 面積が `frequency` に比例するように `radius` を決めることの 3 つです。
順番に行っていきましょう。

はじめに、各ノードの次数を求めます。
最初に全てのハッシュタグの次数として 0 を持った `degree` を初期化しておきます。
`input.links` を順番に処理し、`source` と `target` に対応するハッシュタグの次数をそれぞれ 1 ずつ増やすていくことで全ノードの次数を求めることができます。
あとは次数が 2 以上のハッシュタグを残すように `input.nodes` と `input.links` に `filter` を適用します。

次に、次数 1 のノードを取り除いたデータを有向グラフとして、「福島」ハッシュタグから到達可能なノードの集合を得ます。
あるハッシュタグを `source` として、そこから `target` としてつながっているハッシュタグを配列として持っておけば良いでしょう。
具体的には、以下のようなデータ構造になります。

```json
{

  ：
  "福島": ["嘆願", "フク", "放射性物質", "フクイチ", "拡散", "拡張希望", "フクイチ嘆願", "フクイ", "フ", "放射線量", "放射性物質"],
  "放射性物質": ["フクイチ", "拡張希望", "フクイチ嘆願", "フクイ", "フ"],
  ：
}
```

このデータ構造は、グラフの隣接リストと呼ばれるものです。

隣接リストが構築できたら、「福島」を開始ノードとして、グラフの深さ優先探索または幅優先探索を行うことで到達可能なノードを求めることができます。
以下の実装例では、キュー（queue）を使った幅優先探索を行っています。
JavaScript では、配列の先頭から要素を取り出す `shift` と配列の末尾に要素を追加する `push` を使うことで配列をキューのように扱うことができます。

最後に、面積が`frequency` の値に比例するように`radius` を決めるためには、`radius` は `frequency` の平方根に比例するようにしなければいけません。
まずは `frequency` の値を 0 から 1 の範囲に正規化するために、`frequency` の値を`frequency` の最大値で割りましょう。
正規化した `frequency` の値の平方根と`radius` の最大値 20 を掛けた値を`radius` とすれば目的が達せられます。
例えば、`frequency` の最大値が 100 のときの場合で考えてみましょう。
`frequency` の値が 100 であれば、正規化した値は 1.0 であり、`radius` の値は 20 となります。
このときの面積は 400π です。
もう 1 つ `frequency` の値が 50 であれば正規化した値は 0.5 であり、`radius` はその平方根に 20 を掛けた 14.12... です。
このときの面積は約 200π で、確かに`frequency` の値と面積が比例するように計算できていることが確かめられます。

```javascript
const convertData = (input) => {
  const degree = {};
  for (const { id } of input.nodes) {
    degree[id] = 0;
  }
  for (const { source, target } of input.links) {
    degree[source] += 1;
    degree[target] += 1;
  }

  const removedTags = new Set(
    input.nodes.map(({ id }) => id).filter((tag) => degree[tag] <= 1)
  );
  const nodes = input.nodes.filter(({ id }) => !removedTags.has(id));
  const links = input.links.filter(
    ({ source, target }) => !removedTags.has(source) && !removedTags.has(target)
  );

  const neighbors = {};
  for (const { id } of nodes) {
    neighbors[id] = [];
  }
  for (const { source, target } of links) {
    neighbors[source].push(target);
  }

  const visited = new Set();
  const queue = ["福島"];
  while (queue.length > 0) {
    const u = queue.shift();
    if (visited.has(u)) {
      continue;
    }
    visited.add(u);
    for (const v of neighbors[u]) {
      queue.push(v);
    }
  }

  const maxFrequency = Math.max(
    ...input.nodes.map(({ frequency }) => frequency)
  );
  for (const node of nodes) {
    node.radius = Math.sqrt(node.frequency / maxFrequency) * 20;
    node.color = visited.has(node.id) ? "red" : "blue";
  }

  return { nodes, links };
};
```
