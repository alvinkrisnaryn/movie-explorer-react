export function filterByLetter(items, letter) {
  if (!letter) return items;
  return items.filter((item) => {
    const title = item.title || item.name || "";
    return title.toUpperCase().startsWith(letter);
  });
}
