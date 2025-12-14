function handleSearch() {
  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) {
    alert("Please describe what you are looking for");
    return;
  }

  const amazonUrl =
    `${AFFILIATES.amazon.baseUrl}?k=` +
    encodeURIComponent(query) +
    `&tag=${AFFILIATES.amazon.tag}`;

  window.location.href = amazonUrl;
}
