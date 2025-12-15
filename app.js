// Reverse Marketplace - Frontend-only

const AMAZON_TAG = "reversemarket-21";
const FLIPKART_TAG = ""; // Future use

function handleSearch() {
  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) {
    showMessage("⚠️ Please describe what you need!", "error");
    return;
  }

  setLoading(true);

  // Build Amazon URL
  const amazonUrl = `https://www.amazon.in/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

  // Open results in a new tab (better UX)
  window.open(amazonUrl, "_blank");

  setLoading(false);
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

function showMessage(message, type = "info") {
  const msgBox = document.getElementById("messageBox");
  if (!msgBox) return;

  msgBox.innerText = message;
  msgBox.className = type;
}
