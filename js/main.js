/**
 * main.js  –  Refactored with:
 *  - BEM-aligned selectors
 *  - IntersectionObserver (replaces scroll events for performance)
 *  - No duplicate variable declarations
 *  - Countdown to configurable target date
 *  - Accessible skill-bar widths driven by data-width
 */

"use strict";

/* ═══════════════════════════════════════════════════
   1. STAT COUNTER  (IntersectionObserver)
═══════════════════════════════════════════════════ */
(function initStatCounter() {
  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const statNumbers = statsSection.querySelectorAll(".stat-card__number");
  let hasStarted = false;

  function incrementNumber(el) {
    const goal = parseInt(el.dataset.goal, 10);
    if (!goal || isNaN(goal)) return;

    const interval = Math.max(10, Math.floor(2000 / goal));
    const timer = setInterval(() => {
      const current = parseInt(el.textContent, 10) || 0;
      if (current >= goal) {
        el.textContent = goal;
        clearInterval(timer);
        return;
      }
      el.textContent = current + 1;
    }, interval);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          statNumbers.forEach(incrementNumber);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(statsSection);
})();

/* ═══════════════════════════════════════════════════
   2. SKILL BARS  (IntersectionObserver)
═══════════════════════════════════════════════════ */
(function initSkillBars() {
  const skillsSection = document.querySelector(".our-skills");
  if (!skillsSection) return;

  const fills = skillsSection.querySelectorAll(".skill-bar__fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fills.forEach((fill) => {
            fill.style.width = fill.dataset.width || "0%";
          });
          observer.disconnect();
        }
      });
    },
    { rootMargin: "-200px 0px 0px 0px" },
  );

  observer.observe(skillsSection);
})();

/* ═══════════════════════════════════════════════════
   3. COUNTDOWN TIMER
═══════════════════════════════════════════════════ */
(function initCountdown() {
  const targetDate = new Date("Dec 31 2025 23:59:59");

  const daysEl = document.querySelector(".countdown__value--days");
  const hoursEl = document.querySelector(".countdown__value--hours");
  const minutesEl = document.querySelector(".countdown__value--minutes");
  const secondsEl = document.querySelector(".countdown__value--seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function pad(n) {
    return n < 10 ? `0${n}` : String(n);
  }

  function tick() {
    const diff = targetDate - Date.now();

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(timer);
      return;
    }

    const MS_DAY = 1000 * 60 * 60 * 24;
    const MS_HOUR = 1000 * 60 * 60;
    const MS_MIN = 1000 * 60;

    daysEl.textContent = Math.floor(diff / MS_DAY);
    hoursEl.textContent = Math.floor((diff % MS_DAY) / MS_HOUR);
    minutesEl.textContent = pad(Math.floor((diff % MS_HOUR) / MS_MIN));
    secondsEl.textContent = pad(Math.floor((diff % MS_MIN) / 1000));
  }

  tick();
  const timer = setInterval(tick, 1000);
})();

/* ═══════════════════════════════════════════════════
   4. VIDEO LIST – PREVIEW SWITCHER
═══════════════════════════════════════════════════ */
(function initVideoPreview() {
  const items = document.querySelectorAll(".top-videos__item");
  const preview = document.querySelector(".top-videos__preview-image");
  const title = document.querySelector(".top-videos__preview-title");
  if (!items.length || !preview || !title) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.dataset.preview;
      const name = item.querySelector("a")?.textContent;
      if (src) preview.src = src;
      if (name) title.textContent = name;

      items.forEach((i) => i.classList.remove("top-videos__item--active"));
      item.classList.add("top-videos__item--active");
    });
  });
})();

/* ═══════════════════════════════════════════════════
   5. MEGA MENU – KEYBOARD ACCESSIBILITY
═══════════════════════════════════════════════════ */
(function initMegaMenu() {
  const trigger = document.querySelector(".nav__item--has-mega > .nav__link");
  const megaMenu = document.querySelector(".mega-menu");
  if (!trigger || !megaMenu) return;

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isExpanded));
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!trigger.closest(".nav__item--has-mega").contains(e.target)) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
})();
