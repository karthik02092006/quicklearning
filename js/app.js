/**
 * Quick Learn - Shared App Utilities & Navigation Renderer
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check auth requirement on protected pages
  if (!window.QuickLearnAuth.requireAuth()) {
    return; // will redirect to login.html
  }

  renderNavigation();
  renderFooter();
  applyCurrentLanguage();
  initGlobalLanguageSelector();
});

// Helper to determine the active page file name
function getCurrentPageName() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  return page.toLowerCase();
}

// Render dynamic navbar with active indicator, role badge, language selector
function renderNavigation() {
  const navContainer = document.getElementById("navbar-mount");
  if (!navContainer) return;

  const user = window.QuickLearnAuth.getCurrentUser();
  const currentLang = window.QuickLearnAuth.getMotherTongue();
  const t = window.QuickLearnLang.UI_TRANSLATIONS[currentLang] || window.QuickLearnLang.UI_TRANSLATIONS.en;
  const activePage = getCurrentPageName();

  const isTeacher = user && user.role === "teacher";

  // If not logged in, show minimal navbar with logo and login button
  if (!user) {
    navContainer.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <a href="login.html" class="nav-logo">
            <div class="logo-icon">⚡</div>
            <span class="logo-text">Quick Learn</span>
          </a>
          <div class="nav-actions">
            <a href="login.html" class="btn btn-primary btn-sm">
              🔑 ${t.nav_login}
            </a>
          </div>
        </div>
      </nav>
    `;
    return;
  }

  // When logged in, render full feature navigation
  navContainer.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <!-- Logo -->
        <a href="index.html" class="nav-logo">
          <div class="logo-icon">⚡</div>
          <span class="logo-text">Quick Learn</span>
        </a>

        <!-- Main Nav Links (Accessible only after login) -->
        <div class="nav-menu" id="navMenu">
          <a href="index.html" class="nav-link ${activePage === 'index.html' || activePage === '' ? 'active' : ''}">
            <span class="nav-icon">🏠</span> <span>${t.nav_home}</span>
          </a>
          <a href="lessons.html" class="nav-link ${activePage === 'lessons.html' ? 'active' : ''}">
            <span class="nav-icon">📖</span> <span>${t.nav_lessons}</span>
          </a>
          <a href="quiz.html" class="nav-link ${activePage === 'quiz.html' ? 'active' : ''}">
            <span class="nav-icon">🎯</span> <span>${t.nav_quiz}</span>
          </a>
          <a href="translate.html" class="nav-link ${activePage === 'translate.html' ? 'active' : ''}">
            <span class="nav-icon">🌐</span> <span>${t.nav_translate}</span>
          </a>
          ${
            isTeacher
              ? `<a href="teacher.html" class="nav-link ${activePage === 'teacher.html' ? 'active' : ''} teacher-highlight">
                   <span class="nav-icon">👩‍🏫</span> <span>${t.nav_teacher}</span>
                 </a>`
              : `<a href="teacher.html" class="nav-link ${activePage === 'teacher.html' ? 'active' : ''}">
                   <span class="nav-icon">👩‍🏫</span> <span>${t.nav_teacher}</span>
                 </a>`
          }
        </div>

        <!-- Controls: Language Selector & User Profile & Logout -->
        <div class="nav-actions">
          <!-- Mother Tongue Selector -->
          <div class="lang-selector-wrapper">
            <span class="lang-icon" title="Mother Tongue / Interface Language">🗣️</span>
            <select id="globalLangSelect" class="lang-dropdown" title="Select preferred mother tongue">
              ${Object.values(window.QuickLearnLang.LANGUAGES)
                .map(
                  (l) => `
                <option value="${l.code}" ${l.code === currentLang ? "selected" : ""}>
                  ${l.flag} ${l.native} (${l.name})
                </option>`
                )
                .join("")}
            </select>
          </div>

          <!-- User Badge with Logout Dropdown -->
          <div class="user-badge" id="userBadge">
            <span class="user-avatar">${user.avatar || '👤'}</span>
            <div class="user-info">
              <span class="user-name">${user.name.split(" ")[0]}</span>
              <span class="user-role-pill role-${user.role}">${user.role === 'teacher' ? t.teacher : t.student}</span>
            </div>
            <div class="user-dropdown">
              <div class="user-dropdown-header">
                <strong>${user.name}</strong>
                <small>${user.email}</small>
                <span class="dropdown-role-tag">${user.role.toUpperCase()}</span>
              </div>
              <div class="user-dropdown-actions">
                <button class="dropdown-btn switch-btn" onclick="toggleRoleSwitch()">
                  🔄 Switch to ${user.role === 'student' ? 'Teacher' : 'Student'}
                </button>
                <button class="dropdown-btn logout-btn" onclick="window.QuickLearnAuth.logout()">
                  🚪 ${t.nav_logout}
                </button>
              </div>
            </div>
          </div>

          <!-- Direct Logout Button -->
          <button class="btn btn-secondary btn-sm" onclick="window.QuickLearnAuth.logout()" title="Logout of Quick Learn">
            <span>🚪</span> <span>Logout</span>
          </button>

          <!-- Mobile Hamburger -->
          <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `;

  // Attach mobile menu toggle event
  const mobileBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      mobileBtn.classList.toggle("open");
    });
  }

  // Attach language selector change event
  const langSelect = document.getElementById("globalLangSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      const chosen = e.target.value;
      window.QuickLearnAuth.updateMotherTongue(chosen);
      applyCurrentLanguage();
      window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: chosen } }));
      showToast(`Language changed to ${window.QuickLearnLang.LANGUAGES[chosen].name}`);
    });
  }
}

// Render dynamic footer
function renderFooter() {
  const footerMount = document.getElementById("footer-mount");
  if (!footerMount) return;

  const currentLang = window.QuickLearnAuth.getMotherTongue();
  const t = window.QuickLearnLang.UI_TRANSLATIONS[currentLang] || window.QuickLearnLang.UI_TRANSLATIONS.en;
  const user = window.QuickLearnAuth.getCurrentUser();

  footerMount.innerHTML = `
    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="logo-icon-sm">⚡</div>
          <h3>Quick Learn</h3>
          <p>${t.tagline}</p>
        </div>
        ${
          user ? `
          <div class="footer-links">
            <h4>Pages</h4>
            <ul>
              <li><a href="index.html">${t.nav_home}</a></li>
              <li><a href="lessons.html">${t.nav_lessons}</a></li>
              <li><a href="quiz.html">${t.nav_quiz}</a></li>
              <li><a href="translate.html">${t.nav_translate}</a></li>
              <li><a href="teacher.html">${t.nav_teacher}</a></li>
            </ul>
          </div>` : `
          <div class="footer-links">
            <h4>Access</h4>
            <ul>
              <li><a href="login.html">Sign In (Student & Teacher)</a></li>
            </ul>
          </div>`
        }
        <div class="footer-features">
          <h4>Features (Unlocked Upon Login)</h4>
          <ul>
            <li>✨ Separate Student & Teacher Login</li>
            <li>🌍 6 Mother Tongue Languages</li>
            <li>⚡ Instant Text Translation Studio</li>
            <li>📐 Math, Science & English Lessons</li>
            <li>🎯 Real-time Quizzes & Assessment</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>${t.footer_text}</p>
      </div>
    </footer>
  `;
}

// Apply UI language strings to data-i18n elements
function applyCurrentLanguage() {
  const currentLang = window.QuickLearnAuth.getMotherTongue();
  const t = window.QuickLearnLang.UI_TRANSLATIONS[currentLang] || window.QuickLearnLang.UI_TRANSLATIONS.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      el.setAttribute("placeholder", t[key]);
    }
  });

  const langSelect = document.getElementById("globalLangSelect");
  if (langSelect && langSelect.value !== currentLang) {
    langSelect.value = currentLang;
  }
}

function initGlobalLanguageSelector() {
  window.addEventListener("storage", (e) => {
    if (e.key === "quicklearn_mother_tongue") {
      applyCurrentLanguage();
    }
  });
}

function toggleRoleSwitch() {
  const current = window.QuickLearnAuth.getCurrentUser();
  const newRole = current && current.role === "teacher" ? "student" : "teacher";
  window.QuickLearnAuth.quickSwitchRole(newRole);
}

function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span class="toast-msg">${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function speakText(text, langCode = "en") {
  if (!('speechSynthesis' in window)) {
    showToast("Speech synthesis is not supported on this browser.", "error");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  
  const langMap = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    hi: 'hi-IN',
    ta: 'ta-IN'
  };

  utterance.lang = langMap[langCode] || 'en-US';
  utterance.rate = 0.95;

  utterance.onerror = (e) => {
    console.warn("Speech synthesis notice:", e);
  };

  window.speechSynthesis.speak(utterance);
  showToast(`Speaking in ${window.QuickLearnLang.LANGUAGES[langCode]?.name || 'English'}...`, "info");
}

window.QuickLearnApp = {
  showToast,
  speakText,
  applyCurrentLanguage,
  toggleRoleSwitch
};
