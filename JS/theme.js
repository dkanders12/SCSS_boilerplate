// Theme switching logic - requires that classes;
// .light or .dark are applied to elements that should be part of the theme
function toggleTheme() {
  let themeContent = document.querySelectorAll(".light, .dark");

  for (el of themeContent) {
    if (el.id === "themeButton") {
      if (el.innerText == "Dark Mode") {
        el.innerText = "Light Mode";
      } else el.innerText = "Dark Mode";
    }
    el.classList.toggle("dark");
    el.classList.toggle("light");
  }
}
