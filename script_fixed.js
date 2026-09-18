/* =====================================================
   JK HYDRAULIC & ENGINEERING
   PREMIUM WEBSITE JAVASCRIPT
===================================================== */

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hide");
  }, 900);
});

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

if (cursor || cursorRing) {
  document.addEventListener("mousemove", (event) => {
    if (cursor) {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    }

    if (cursorRing) {
      cursorRing.style.left = `${event.clientX}px`;
      cursorRing.style.top = `${event.clientY}px`;
    }
  });
}

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => navbar.classList.toggle("open"));

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => navbar.classList.remove("open"));
  });
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a[href^='#']");

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

const machineScene = document.getElementById("machineScene");

if (machineScene) {
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.addEventListener("mousemove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = (x - centerX) / 45;
      const rotateX = (centerY - y) / 45;

      machineScene.style.transform = `translate(-50%,-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    hero.addEventListener("mouseleave", () => {
      machineScene.style.transform = "translate(-50%,-50%) rotateX(0deg) rotateY(0deg)";
    });
  }
}

const counters = document.querySelectorAll("[data-count]");
let countersStarted = false;

function startCounters() {
  if (countersStarted || counters.length === 0) return;
  countersStarted = true;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.count || 0);
    let current = 0;
    const duration = 1600;
    const increment = target / (duration / 16);

    const update = () => {
      current += increment;

      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };

    update();
  });
}

const statsSection = document.querySelector(".stats");

if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0] && entries[0].isIntersecting) {
      startCounters();
    }
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

const pressureSection = document.querySelector(".pressure-section");
const pressureValue = document.getElementById("pressureValue");
const gaugeCircle = document.querySelector(".gauge-circle");
let pressureStarted = false;

function animatePressure() {
  if (pressureStarted || !pressureValue || !gaugeCircle) return;
  pressureStarted = true;

  let value = 0;
  const target = 315;

  const interval = setInterval(() => {
    value += 5;

    if (value >= target) {
      value = target;
      clearInterval(interval);
    }

    pressureValue.textContent = value;

    const degrees = (value / 350) * 360;
    gaugeCircle.style.background = `conic-gradient(var(--orange) 0deg, var(--orange) ${degrees}deg, #182633 ${degrees}deg)`;
  }, 25);
}

if (pressureSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0] && entries[0].isIntersecting) {
      animatePressure();
    }
  }, { threshold: 0.4 });

  observer.observe(pressureSection);
}

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

const revealElements = document.querySelectorAll(".product-card, .service-item, .industry-card, .stat, .contact-line");

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const quoteForm = document.getElementById("quoteForm");
const toast = document.getElementById("toast");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (toast) toast.classList.add("show");
    quoteForm.reset();

    setTimeout(() => {
      if (toast) toast.classList.remove("show");
    }, 3500);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.style.background = "rgba(3,8,14,.88)";
    } else {
      header.style.background = "rgba(3,8,14,.58)";
    }
  });
}

const themeToggle = document.getElementById("themeToggle");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const savedTheme = localStorage.getItem("jk-theme");

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);

  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    const label = themeToggle.querySelector("span");

    if (icon) {
      icon.classList.toggle("fa-moon", !isLight);
      icon.classList.toggle("fa-sun", isLight);
    }

    if (label) {
      label.textContent = isLight ? "Dark" : "Light";
    }
  }
}

if (themeToggle) {
  const initialTheme = savedTheme || (prefersLight ? "light" : "dark");
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    localStorage.setItem("jk-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

const yearText = document.querySelector(".footer-bottom span");

if (yearText) {
  yearText.innerHTML = yearText.innerHTML.replace("2026", new Date().getFullYear());
}
