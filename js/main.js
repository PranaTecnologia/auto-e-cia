const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll("[data-filter]").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const value = chip.dataset.filter;
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.classList.toggle("hidden", value !== "todos" && card.dataset.category !== value);
    });
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");

document.querySelectorAll("[data-lightbox]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = link.getAttribute("href");
    lightbox.classList.add("open");
  });
});

lightbox?.addEventListener("click", () => lightbox.classList.remove("open"));

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const required = [...form.querySelectorAll("[required]")];
    const invalid = required.find((field) => !field.value.trim());
    if (invalid) {
      invalid.focus();
      showToast("Preencha todos os campos obrigatórios.");
      return;
    }
    form.reset();
    const success = form.dataset.success || "Recebemos sua mensagem. Retornamos em breve.";
    showToast(success);
  });
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
