const THEME_KEY = "siteTheme";

const applyTheme = (theme) => {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  document.documentElement.style.colorScheme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (error) {
    // ignore
  }
};

const initTheme = () => {
  let saved = null;
  try {
    saved = localStorage.getItem(THEME_KEY);
  } catch (error) {
    saved = null;
  }
  const initial = saved === "light" || saved === "dark" ? saved : "dark";
  applyTheme(initial);

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}
