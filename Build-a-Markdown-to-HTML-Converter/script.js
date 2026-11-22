const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown() {
  let html = markdownInput.value;

  // Headings: match one to three # characters at the start of a line.
  html = html.replace(
    /^[ \t]*(#{1,3})[ \t]+(.+)$/gm,
    (match, hashes, text) => {
      const level = hashes.length;
      return `<h${level}>${text}</h${level}>`;
    }
  );

  // Quotes.
  html = html.replace(
    /^[ \t]*>[ \t]+(.+)$/gm,
    "<blockquote>$1</blockquote>"
  );

  // Images must be converted before links.
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  // Links.
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  // Bold must be converted before italic.
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Italic.
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");

  return html;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
