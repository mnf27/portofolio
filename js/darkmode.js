const toggle = document.getElementById("darkModeToggle");
const body = document.body;

toggle.addEventListener("change", function () {
  body.classList.toggle("dark-mode", toggle.checked);
  localStorage.setItem("darkMode", toggle.checked ? "enabled" : "disabled");
});

window.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }
});
