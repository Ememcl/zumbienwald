// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Reservation form demo
const form = document.getElementById("reservationForm");
const hint = document.getElementById("formHint");
if (form && hint) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const date = data.get("date");
    const time = data.get("time");
    const guests = data.get("guests");

    hint.textContent = `Danke, ${name}! Anfrage für ${guests} Person(en) am ${date} um ${time} wurde erfasst (Demo).`;
    form.reset();
  });
}

// Lightbox (gallery)
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox?.querySelector(".lightbox__img");
const closeBtn = lightbox?.querySelector(".lightbox__close");

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  if (lightboxImg) lightboxImg.src = "";
}

document.querySelectorAll(".g").forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-src");
    if (src) openLightbox(src);
  });
});

closeBtn?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});