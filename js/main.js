(() =>  {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#primary-menu");
  if (!toggle || !menu) return;
  const closeMenu = () =>  {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  }
  ;
  toggle.addEventListener("click", () =>  {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    menu.classList.toggle("is-open", !isOpen);
  }
  );
  menu.addEventListener("click", (event) =>  {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  }
  );
  document.addEventListener("keydown", (event) =>  {
    if (event.key === "Escape")  {
      closeMenu();
      toggle.focus();
    }
  }
  );
  window.addEventListener("resize", () =>  {
    if (window.matchMedia("(min-width: 901px)").matches) closeMenu();
  }
  );
}
)();