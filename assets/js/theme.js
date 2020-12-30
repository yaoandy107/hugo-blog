// Toggle theme
let theme = window.localStorage && window.localStorage.getItem("theme");
if (!theme) 
    theme = window.matchMedia("(prefers-color-scheme: dark)")
const themeToggle = document.querySelector(".theme-toggle");
let isDark = theme === "dark";
let metaThemeColor = document.querySelector("meta[name=theme-color]");

if (theme !== null) {
    document.body.classList.toggle("dark-theme", isDark);
    isDark
        ? metaThemeColor.setAttribute("content", "#252627")
        : metaThemeColor.setAttribute("content", "#fafafa");
}

window.__setPreferredTheme = (isDark) => {
    document.body.classList.toggle("dark-theme", isDark);
    isDark
        ? metaThemeColor.setAttribute("content", "#252627")
        : metaThemeColor.setAttribute("content", "#fafafa");
}

themeToggle.addEventListener("click", () => {
    isDark = !document.body.classList.contains("dark-theme")
    window.localStorage &&
        window.localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );
    window.__setPreferredTheme(isDark)
});

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
darkQuery.addEventListener("change", (e) => {
    window.__setPreferredTheme(e.matches)
})
