/* =========================================================
   G.C. Gupta Law Firm — site script
   ---------------------------------------------------------
   EDIT YOUR FIRM DETAILS HERE. They are used in the header,
   footer, contact page and form submissions on every page.
   ========================================================= */
const SITE = {
  name: "GC Gupta Law Firm",
  monogram: "GC",
  tagline: "Advocates & Legal Consultants",
  phone: "+91 94140 44199",
  phone2: "+91 94687 22227",
  whatsapp: "919414044199",          // country code + number, digits only
  email: "gcguptalawfirm@gmail.com",
  locations: "Jaipur · Jodhpur · Delhi · Pan India",
  // Where form submissions are emailed (via FormSubmit.co — free, no signup).
  // The first submission sends a one-time activation email to this address.
  formEmail: "gcguptalawfirm@gmail.com",
  // false = show the Bar Council disclaimer once per browser session (common practice).
  // true  = show it on every single page load.
  disclaimerEveryPage: false,
};

const NAV = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "practice-areas.html", label: "Practice Areas" },
  { href: "careers.html", label: "Careers" },
  { href: "contact.html", label: "Contact" },
];

const ICON = {
  scales: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M3 7h18M6 7l-3 7a3.5 3.5 0 0 0 6 0L6 7zM18 7l-3 7a3.5 3.5 0 0 0 6 0l-3-7z"/><circle cx="12" cy="4" r="1"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6 6 0 0 0 1.3 3.2 13.8 13.8 0 0 0 5.3 4.7c2 .8 2.7.9 3.7.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
};

/* ---------- Header ---------- */
function renderHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const solid = document.body.dataset.header === "solid" ? " solid" : "";
  const links = NAV.map(
    (n) => `<li><a href="${n.href}"${n.href === current ? ' class="active" aria-current="page"' : ""}>${n.label}</a></li>`
  ).join("");

  document.body.insertAdjacentHTML(
    "afterbegin",
    `<header class="site-header${solid}" id="top">
      <div class="wrap nav">
        <a href="index.html" class="brand" aria-label="${SITE.name} home">
          <span class="brand__mark">${SITE.monogram}</span>
          <span class="brand__text"><strong>${SITE.name}</strong><span>${SITE.tagline}</span></span>
        </a>
        <ul class="nav__links" id="nav-links">
          ${links}
          <li><a href="contact.html" class="btn btn--gold nav__cta">Get in Touch</a></li>
        </ul>
        <button class="nav__toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`
  );

  const header = document.querySelector(".site-header");
  const toggle = header.querySelector(".nav__toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
  header.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => document.body.classList.remove("nav-open"))
  );

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Footer ---------- */
function renderFooter() {
  const year = new Date().getFullYear();
  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="brand">
              <span class="brand__mark">${SITE.monogram}</span>
              <span class="brand__text"><strong>${SITE.name}</strong><span>${SITE.tagline}</span></span>
            </a>
            <p>Carrying forward the legacy of Shri Ganga Charan Gupta, Retd. DSP — a practice built on honour, service and trust, appearing before courts and tribunals across India.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Join Us</h4>
            <ul>
              <li><a href="careers.html?role=internship#apply">Internships</a></li>
              <li><a href="careers.html?role=associate#apply">Associate Positions</a></li>
              <li><a href="careers.html?role=paralegal#apply">Paralegal / Clerk</a></li>
              <li><a href="contact.html">Get in Touch</a></li>
            </ul>
          </div>
          <div>
            <h4>Reach Us</h4>
            <ul>
              <li>${SITE.locations}</li>
              <li><a href="tel:${SITE.phone.replace(/\s/g, "")}">${SITE.phone}</a></li>
              <li><a href="tel:${SITE.phone2.replace(/\s/g, "")}">${SITE.phone2}</a></li>
              <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-disclaimer">
          <strong>Disclaimer:</strong> As per the rules of the Bar Council of India, advocates and law firms are not permitted to solicit work or advertise.
          This website is meant solely to provide information about ${SITE.name} to those who seek it of their own accord. Nothing on this website
          constitutes legal advice or creates a lawyer–client relationship. <button type="button" data-open-disclaimer>Read full disclaimer</button>
        </div>
        <div class="footer-bottom">
          <span>© ${year} ${SITE.name}. All rights reserved.</span>
          <span>Information only · Not an advertisement or solicitation</span>
        </div>
      </div>
    </footer>
    <a class="float-btn" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Message us on WhatsApp">${ICON.whatsapp}</a>`
  );
}

/* ---------- Bar Council of India disclaimer ---------- */
const DISCLAIMER_KEY = "gcg_disclaimer_ok";

function disclaimerAccepted() {
  if (SITE.disclaimerEveryPage) return false;
  try { return sessionStorage.getItem(DISCLAIMER_KEY) === "1"; } catch (e) { return false; }
}

function renderDisclaimer() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="disclaimer" id="disclaimer" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div class="disclaimer__box">
        <div class="disclaimer__seal">${ICON.scales}</div>
        <h2 id="disclaimer-title">Disclaimer</h2>
        <p>As per the rules of the <strong>Bar Council of India</strong>, advocates and law firms are not permitted to solicit work or advertise in any manner. By clicking <strong>“I Agree”</strong> below, you acknowledge and confirm that:</p>
        <ul>
          <li>there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from ${SITE.name} or any of its members to solicit any work through this website;</li>
          <li>you wish to gain more information about ${SITE.name} for your own information and use;</li>
          <li>the information about us is provided to you only on your specific request, and any information obtained or material downloaded from this website is completely at your own volition;</li>
          <li>any transmission, receipt or use of this website does not create a lawyer–client relationship.</li>
        </ul>
        <p>The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. ${SITE.name} is not liable for the consequences of any action taken by relying on the material or information provided on this website. For any legal issue, you must seek independent legal advice.</p>
        <div class="disclaimer__actions">
          <button type="button" class="btn btn--dark" id="disclaimer-agree">I Agree ${ICON.arrow}</button>
          <button type="button" class="btn btn--outline" id="disclaimer-decline">I Disagree</button>
        </div>
      </div>
    </div>`
  );

  const modal = document.getElementById("disclaimer");
  const open = () => {
    modal.classList.add("open");
    document.body.classList.add("locked");
    document.getElementById("disclaimer-agree").focus();
  };
  const close = () => {
    modal.classList.remove("open");
    document.body.classList.remove("locked");
  };

  document.getElementById("disclaimer-agree").addEventListener("click", () => {
    try { sessionStorage.setItem(DISCLAIMER_KEY, "1"); } catch (e) { /* storage unavailable */ }
    close();
  });
  document.getElementById("disclaimer-decline").addEventListener("click", () => {
    if (history.length > 1) history.back();
    else location.href = "https://www.google.com";
  });
  document.querySelectorAll("[data-open-disclaimer]").forEach((b) => b.addEventListener("click", open));

  if (!disclaimerAccepted()) open();
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Fill in firm details placed in page content ---------- */
function fillSiteFields() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (!(key in SITE)) return;
    el.textContent = SITE[key];
    if (el.tagName === "A") {
      if (key.startsWith("phone")) el.href = "tel:" + SITE[key].replace(/\s/g, "");
      if (key === "email") el.href = "mailto:" + SITE.email;
    }
  });
}

/* ---------- Forms (FormSubmit.co) ---------- */
function initForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    const kind = form.dataset.form;
    form.action = "https://formsubmit.co/" + SITE.formEmail;
    form.method = "POST";

    const hidden = {
      _subject: `New ${kind} submission — ${SITE.name} website`,
      _template: "table",
      _captcha: "true",
      _next: new URL("thank-you.html?type=" + encodeURIComponent(kind), location.href).href,
    };
    Object.entries(hidden).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    form.addEventListener("submit", (e) => {
      const file = form.querySelector('input[type="file"]');
      if (file && file.files[0] && file.files[0].size > 5 * 1024 * 1024) {
        e.preventDefault();
        alert("Please upload a CV smaller than 5 MB.");
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
    });
  });

  // Pre-select a role on the careers page from ?role=…
  const role = new URLSearchParams(location.search).get("role");
  if (role) {
    const radio = document.querySelector(`input[name="Position"][data-role="${role}"]`);
    if (radio) radio.checked = true;
  }
  syncRoleFields();
  document.querySelectorAll('input[name="Position"]').forEach((r) => r.addEventListener("change", syncRoleFields));
}

// Internship-only fields are shown only when "Internship" is selected.
function syncRoleFields() {
  const checked = document.querySelector('input[name="Position"]:checked');
  if (!checked) return;
  const isIntern = checked.dataset.role === "internship";
  document.querySelectorAll("[data-intern-only]").forEach((el) => {
    el.hidden = !isIntern;
    el.querySelectorAll("input, select").forEach((i) => (i.disabled = !isIntern));
  });
  document.querySelectorAll("[data-pro-only]").forEach((el) => {
    el.hidden = isIntern;
    el.querySelectorAll("input, select").forEach((i) => (i.disabled = isIntern));
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderDisclaimer();
  fillSiteFields();
  initForms();
  initReveal();
});
