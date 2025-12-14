const BACKEND_URL = "https://reverse-marketplace-back-end.onrender.com";

function handleSearch() {
  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) {
    alert("Please describe what you need");
    return;
  }

  setLoading(true);

  fetch(`${BACKEND_URL}/search?q=${encodeURIComponent(query)}`)
    .then(res => {
      if (!res.ok) throw new Error("Server error");
      return res.json();
    })
    .then(data => {
      if (data.redirect) {
        window.location.href = data.redirect;
      } else {
        alert("No results found");
        setLoading(false);
      }
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    });
}

function setLoading(state) {
  const btn = document.querySelector("button");
  if (!btn) return;

  if (state) {
    btn.disabled = true;
    btn.innerText = "Finding best products...";
  } else {
    btn.disabled = false;
    btn.innerText = "Find Products";
  }
}
