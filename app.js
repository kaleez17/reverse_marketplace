function search() {
  const need = document.getElementById("need").value.trim();
  const category = document.getElementById("category").value;
  const budget = document.getElementById("budget").value;

  if (!need || !budget) {
    alert("Please describe your need and budget.");
    return;
  }

  const params = new URLSearchParams({
    need,
    category,
    budget
  });

  window.location.href = `results.html?${params.toString()}`;
}
