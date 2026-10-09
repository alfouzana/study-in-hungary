import "./style.css";

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));
document.querySelectorAll("[data-nav-menu] a").forEach((a) =>
  a.addEventListener("click", () => { if (window.innerWidth < 768) menu?.classList.add("hidden"); })
);

// all WhatsApp buttons
const WA = "https://wa.me/966553494888?text=" + encodeURIComponent("السلام عليكم، أبغى أستفسر عن الدراسة في هنغاريا");
document.querySelectorAll("[data-wa]").forEach((el) => { el.href = WA; el.target = "_blank"; el.rel = "noopener"; });

// current year in footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
