/**
 * A paragraph is either a plain string or
 * { text, link: { phrase, href } }.
 * Strings render unchanged. When link is set, the first exact
 * phrase in text becomes an anchor. Other data files can ignore this.
 */
export default function ParagraphText({ item }) {
  if (typeof item !== "object" || item === null) {
    return item;
  }

  const text = item.text ?? "";
  const link = item.link;
  if (!link?.phrase || !link?.href || !text.includes(link.phrase)) {
    return text;
  }

  const index = text.indexOf(link.phrase);
  return (
    <>
      {text.slice(0, index)}
      <a href={link.href} target="_blank" rel="noreferrer">
        {link.phrase}
      </a>
      {text.slice(index + link.phrase.length)}
    </>
  );
}
