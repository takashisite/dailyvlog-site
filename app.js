document.documentElement.classList.add("js-ready");

const storageKey = "dailyvlog-site-lang";
const languageButtons = document.querySelectorAll("[data-lang-button]");
const localizedNodes = document.querySelectorAll("[data-lang]");
const revealNodes = document.querySelectorAll("[data-reveal]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-nav]");
const storedLanguage = localStorage.getItem(storageKey);
const initialLanguage = storedLanguage === "ja" || storedLanguage === "en"
  ? storedLanguage
  : "en";

function applyLanguage(language) {
  document.documentElement.lang = language;
  document.title = language === "ja"
    ? document.body.dataset.titleJa || document.title
    : document.body.dataset.titleEn || document.title;

  localizedNodes.forEach((node) => {
    node.hidden = node.dataset.lang !== language;
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.langButton === language;
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.classList.toggle("is-active", active);
  });

  menuButton?.setAttribute(
    "aria-label",
    language === "ja" ? "メニューを開く" : "Open menu"
  );
  localStorage.setItem(storageKey, language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langButton);
  });
});

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", expanded ? "false" : "true");
  navigation?.classList.toggle("is-open", !expanded);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

applyLanguage(initialLanguage);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
