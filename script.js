const cfg = window.SAMU_CONFIG || {};
const qs = (s) => document.querySelector(s);

const email = cfg.email || "tuemail@ejemplo.com";
const instagram = cfg.instagram || "samu.psigamer";
const whatsapp = cfg.whatsapp || "TU_NUMERO";

const emailLink = document.querySelector('[data-contact="email"]');
const whatsappLink = document.querySelector('[data-contact="whatsapp"]');
const instagramLink = document.querySelector('[data-contact="instagram"]');

if (emailLink) {
  emailLink.href = `mailto:${email}?subject=Consulta psicológica`;
  qs("#emailText").textContent = email;
}
if (whatsappLink && whatsapp !== "TU_NUMERO") {
  whatsappLink.href = `https://wa.me/${whatsapp.replace(/\\D/g, "")}`;
} else if (whatsappLink) {
  whatsappLink.href = "#";
  whatsappLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Añade tu número en config.js para activar WhatsApp.");
  });
}
if (instagramLink) instagramLink.href = `https://instagram.com/${instagram.replace(/^@/, "")}`;

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    document.querySelectorAll(".resource").forEach(card => {
      const cats = card.dataset.cat.split(" ");
      card.style.display = filter === "all" || cats.includes(filter) ? "grid" : "none";
    });
  });
});
