import React from "react";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const content = hljs.highlight(lang, str, true).value;
        return `<pre class="hljs"><code>${content}</code></pre>`;
      } catch (__) {}
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  },
});

const Markdown = ({ text }) => {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div
        className="md"
        dangerouslySetInnerHTML={{ __html: md.render(text) }}
      />
    </div>
  );
};

export default Markdown;
