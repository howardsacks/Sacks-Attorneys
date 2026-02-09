// Mobile menu toggle
(function () {
  const btn = document.querySelector("[data-menu-btn]");
  const nav = document.querySelector("[data-nav]");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// Footer year
(function () {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
})();

// Contact form: creates an email draft (no server needed)
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const topic = (fd.get("topic") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    const subject = encodeURIComponent(`Website enquiry${topic ? " - " + topic : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMatter: ${topic}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:sacksattorney@atomicmail.io?subject=${subject}&body=${body}`;
  });
})();
<script src="/script.js" defer></script>

