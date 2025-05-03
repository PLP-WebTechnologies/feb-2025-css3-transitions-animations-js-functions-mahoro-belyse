// Set theme color and store in localStorage
function setTheme(theme) {
  let colorMap = {
    lavender: "lavender",
    mint: "honeydew",
    blush: "mistyrose",
  };
  const color = colorMap[theme] || "lavender";
  document.body.style.backgroundColor = color;
  localStorage.setItem("themeColor", color);
}

// Load theme on startup
window.onload = () => {
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
};

// Add to wishlist animation
function addToWishlist(productElement) {
  const label = productElement.querySelector(".wish-label");
  label.classList.add("animate");

  setTimeout(() => {
    label.classList.remove("animate");
  }, 800);
}
