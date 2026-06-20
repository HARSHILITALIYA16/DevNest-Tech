// ==========================================================================
// DevNest Tech — shared site behavior
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  highlightActiveNavLink();
});

/* Mobile nav toggle (hamburger menu) */
function initMobileNav() {
  var toggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".nav-mobile");
  if (!toggle || !mobileMenu) return;

  var iconOpen = toggle.querySelector(".icon-menu");
  var iconClose = toggle.querySelector(".icon-close");

  toggle.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.toggle("is-open");
    if (iconOpen && iconClose) {
      iconOpen.style.display = isOpen ? "none" : "block";
      iconClose.style.display = isOpen ? "block" : "none";
    }
  });

  // Close mobile menu after a nav link is clicked
  mobileMenu.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("is-open");
      if (iconOpen && iconClose) {
        iconOpen.style.display = "block";
        iconClose.style.display = "none";
      }
    });
  });
}

/* Highlight the nav link matching the current page */
function highlightActiveNavLink() {
  var current = window.location.pathname.replace(/\/index\.html$/, "/");
  if (current === "") current = "/";

  document.querySelectorAll(".nav-link[data-href]").forEach(function (link) {
    var target = link.getAttribute("data-href");
    var isHome = target === "/" || target === "/index.html";
    var matches = isHome
      ? current === "/" || current.endsWith("/index.html") || current.endsWith("/devnest-crafts-hub/") || current.endsWith("/devnest-crafts-hub/index.html")
      : current.indexOf(target.replace(/^\.?\//, "").replace(/\.html$/, "")) !== -1;

    if (matches) {
      link.classList.add("is-active");
    }
  });
}

/* Contact form — opens the user's email client with a prefilled message */
function handleContactSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var data = new FormData(form);
  var name = data.get("name");
  var email = data.get("email");
  var message = data.get("message");

  var subject = encodeURIComponent("Message from " + name);
  var body = encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">");
  window.location.href = "mailto:devnestlabs16@gmail.com?subject=" + subject + "&body=" + body;

  var status = document.getElementById("form-status");
  if (status) status.style.display = "block";

  return false;
}
