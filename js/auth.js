/**
 * Quick Learn - Authentication & Role Management
 * Handles Student vs Teacher logins, session persistence, and mother tongue preferences.
 */

const DEMO_USERS = [
  {
    id: "usr-student-1",
    name: "Aryan Sharma",
    email: "student@quicklearn.com",
    password: "student123",
    role: "student",
    grade: "Grade 10",
    motherTongue: "hi",
    avatar: "🎓"
  },
  {
    id: "usr-teacher-1",
    name: "Prof. Sarah Jenkins",
    email: "teacher@quicklearn.com",
    password: "teacher123",
    role: "teacher",
    department: "Science & Mathematics Dept.",
    motherTongue: "en",
    avatar: "👩‍🏫"
  }
];

function initUsers() {
  if (!localStorage.getItem("quicklearn_users")) {
    localStorage.setItem("quicklearn_users", JSON.stringify(DEMO_USERS));
  }
}

function getUsers() {
  initUsers();
  try {
    return JSON.parse(localStorage.getItem("quicklearn_users")) || DEMO_USERS;
  } catch (e) {
    return DEMO_USERS;
  }
}

function getCurrentUser() {
  initUsers();
  const saved = localStorage.getItem("quicklearn_current_user");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }
  // User must log in first - returns null if not authenticated
  return null;
}

function requireAuth() {
  const path = window.location.pathname.toLowerCase();
  // Do not redirect if already on login.html
  if (path.endsWith("login.html")) return true;

  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
    return false;
  }
  return true;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem("quicklearn_current_user", JSON.stringify(user));
    if (user.motherTongue) {
      localStorage.setItem("quicklearn_mother_tongue", user.motherTongue);
    }
  } else {
    localStorage.removeItem("quicklearn_current_user");
  }
}

function login(email, password, expectedRole) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
  
  if (!user) {
    return { success: false, message: "No account found with this email address." };
  }
  if (user.password !== password) {
    return { success: false, message: "Incorrect password. Please try again." };
  }
  if (expectedRole && user.role !== expectedRole) {
    return { 
      success: false, 
      message: `This account is registered as a ${user.role}. Please select the ${user.role === 'teacher' ? 'Teacher' : 'Student'} login tab.` 
    };
  }

  setCurrentUser(user);
  return { success: true, user };
}

function register(name, email, password, role, motherTongue) {
  const users = getUsers();
  if (users.some(u => u.email.toLowerCase() === email.trim().toLowerCase())) {
    return { success: false, message: "An account with this email already exists." };
  }

  const newUser = {
    id: "usr-" + Date.now(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password,
    role: role || "student",
    motherTongue: motherTongue || "en",
    avatar: role === "teacher" ? "👨‍🏫" : "🧑‍🎓",
    grade: role === "student" ? "Secondary" : undefined,
    department: role === "teacher" ? "General Faculty" : undefined
  };

  users.push(newUser);
  localStorage.setItem("quicklearn_users", JSON.stringify(users));
  setCurrentUser(newUser);
  return { success: true, user: newUser };
}

function logout() {
  localStorage.removeItem("quicklearn_current_user");
  window.location.href = "login.html";
}

function quickSwitchRole(targetRole) {
  const users = getUsers();
  const found = users.find(u => u.role === targetRole);
  if (found) {
    setCurrentUser(found);
    window.location.reload();
  }
}

function updateMotherTongue(langCode) {
  const current = getCurrentUser();
  if (current) {
    current.motherTongue = langCode;
    setCurrentUser(current);
  }
  localStorage.setItem("quicklearn_mother_tongue", langCode);
}

function getMotherTongue() {
  const saved = localStorage.getItem("quicklearn_mother_tongue");
  if (saved && window.QuickLearnLang && window.QuickLearnLang.LANGUAGES[saved]) {
    return saved;
  }
  const current = getCurrentUser();
  if (current && current.motherTongue) return current.motherTongue;
  return "en";
}

window.QuickLearnAuth = {
  getCurrentUser,
  setCurrentUser,
  requireAuth,
  login,
  register,
  logout,
  quickSwitchRole,
  updateMotherTongue,
  getMotherTongue,
  DEMO_USERS
};
