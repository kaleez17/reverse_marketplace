// Reverse Marketplace - Frontend-only

// Amazon affiliate tag
const AMAZON_TAG = "reversemarket-21";

// Flipkart placeholder (add later)
const FLIPKART_TAG = ""; // Add Flipkart affiliate when ready

function handleSearch() {
  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) {
    alert("Please describe what you need!");
    return;
  }

  setLoading(true);

  // Build Amazon URL
  const amazonUrl = `https://www.amazon.in/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

  // Placeholder for Flipkart logic (future)
  // if(FLIPKART_TAG) { ... }

  // Redirect instantly
  window.location.href = amazonUrl;
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
