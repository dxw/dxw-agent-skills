async function loadSearchIndex() {
  const response = await fetch("/search-index.json");
  if (!response.ok) return [];
  return response.json();
}

function includesQuery(value, query) {
  return String(value || "")
    .toLowerCase()
    .includes(query);
}

function renderResults(resultsEl, matches) {
  resultsEl.innerHTML = "";

  matches.slice(0, 8).forEach((entry) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = entry.url;
    link.textContent = `${entry.title} (${entry.type})`;
    item.appendChild(link);
    resultsEl.appendChild(item);
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("skill-search");
  const resultsEl = document.getElementById("search-results");
  if (!input || !resultsEl) return;

  const index = await loadSearchIndex();

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      resultsEl.innerHTML = "";
      return;
    }

    const matches = index.filter((entry) => {
      return (
        includesQuery(entry.title, query) ||
        includesQuery(entry.summary, query) ||
        includesQuery(entry.tags.join(" "), query)
      );
    });

    renderResults(resultsEl, matches);
  });
});
