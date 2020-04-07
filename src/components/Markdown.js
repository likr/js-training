import React from "react";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

const Markdown = ({ text }) => {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div dangerouslySetInnerHTML={{ __html: md.render(text) }} />
    </div>
  );
};

export default Markdown;
