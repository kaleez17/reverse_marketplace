// ===============================
// Reverse Marketplace - Frontend
// Backend: Render
// ===============================

const BACKEND_URL = "https://reverse-marketplace-back-end.onrender.com";

// Main search function
function search() {
  const input = document.getElementById("query");
  const query = input.value.trim();

  if (!query) {
    alert("Please describe what you need");
    return;
  }

  setLoading(true);

  fetch(`${BACKEND_URL}/search?q=${encodeURIComponent(query)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Backend error");
      }
      return response.json();
    })
    .then(data => {
      if (data.redirect) {
        // Affiliate redirect
        window.location.href = data.redirect;
      } else {
        alert("No results found. Try a different request.");
        setLoading(false);
      }
    })
    .catch(() => {
      alert("Service temporarily unavailable. Please try again.");
      setLoading(false);
    });
}

// UI loading state
function setLoading(state) {
  const btn = document.getElementById("searchBtn");
  if (!btn) return;

  if (state) {
    btn.disabled = true;
    btn.innerText = "Finding best products...";
  } else {
    btn.disabled = false;
    btn.innerText = "Find Products";
  }
}
