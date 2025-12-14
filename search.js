const params = new URLSearchParams(window.location.search);
const need = params.get("need");
const category = params.get("category");
const budget = params.get("budget");

document.getElementById("contextText").innerText =
  `Showing best results for: "${need}" (up to ₹${budget})`;

// ---- Keyword cleanup (simple but effective) ----
function cleanKeywords(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(" ")
    .filter(word => word.length > 2)
    .join("+");
}

const keywords = cleanKeywords(need);

// ---- Affiliate Links ----
const amazonLink = `https://www.amazon.in/s?k=${keywords}&tag=YOURTAG-21`;
const flipkartLink = `https://www.flipkart.com/search?q=${keywords}&affid=YOURID`;

const container = document.getElementById("products");

container.innerHTML = `
  <div class="product-card">
    <h3>Recommended from Amazon</h3>
    <p>Curated results based on your need.</p>
    <a class="buy-btn" href="${amazonLink}" target="_blank">
      View on Amazon
    </a>
  </div>

  <div class="product-card">
    <h3>Recommended from Flipkart</h3>
    <p>More options matching your budget.</p>
    <a class="buy-btn" href="${flipkartLink}" target="_blank">
      View on Flipkart
    </a>
  </div>
`;
