# Quick Learn - Multilingual Learning & Assessment Portal ⚡

Welcome to **Quick Learn**, a clean, modern, and neat multilingual web application designed to empower students and teachers with interactive lessons, quizzes, and instant translation across 6 languages.

---

## 🌟 Key Features

1. **User Login (Separate Student & Teacher Portals)**
   - **Student Access**: Study lessons, take quizzes, view instant grades and answer breakdowns.
   - **Teacher Access**: Monitor student assessment results, review class KPI statistics (average scores, submission logs), and publish study announcements.
   - **One-Click Demo Credentials**:
     - **Student**: `student@quicklearn.com` / `student123`
     - **Teacher**: `teacher@quicklearn.com` / `teacher123`

2. **Language Selection (Preferred Mother Tongue)**
   - Choose your preferred mother tongue from the persistent navbar selector anytime:
     - 🇬🇧 **English**
     - 🇮🇳 **Bengali (বাংলা)**
     - 🇮🇳 **Santali (ᱥᱟᱱᱛᱟᱲᱤ)**
     - 🇮🇳 **Hindi (हिन्दी)**
     - 🇮🇳 **Tamil (தமிழ்)**
     - 🇮🇳 **Telugu (తెలుగు)**
     - 🇮🇳 **Marathi (मराठी)**
     - 🇪🇸 **Spanish (Español)**
     - 🇫🇷 **French (Français)**
     - 🇩🇪 **German (Deutsch)**
   - Lesson summaries and UI labels dynamically adapt to your selected mother tongue.

3. **Text Translation Studio**
   - Translate text between any of the **10 supported languages**.
   - Includes real-time translation, language swap, text-to-speech audio pronunciation, and one-click clipboard copying.
   - Pre-loaded with educational sample phrases.

4. **Learning Materials**
   - **Mathematics**: Linear Equations, Pythagorean Theorem, Percentages & Ratios.
   - **Science**: Photosynthesis, Newton's Laws of Motion, Atomic Structure & Periodic Table.
   - **English**: Parts of Speech, PEEL Essay Writing, Contextual Idioms & Vocabulary.
   - Includes live keyword search, step-by-step formulas, and audio reading.

5. **Quiz & Assessment Studio**
   - Conduct interactive timed quizzes for Math, Science, and English.
   - Instant answer verification with detailed conceptual explanations.
   - Visual scorecard featuring percentage, letter grade (A+, A, B, C), and question-by-question review.
   - Automatically records submissions to the teacher log.

---

## 📂 Project Structure & Separate Pages

| Page | URL / File | Purpose |
| :--- | :--- | :--- |
| **Home** | `index.html` | Overview, user welcome banner, subject previews |
| **Login** | `login.html` | Dedicated Student & Teacher login tabs + registration |
| **Lessons** | `lessons.html` | Math, Science, English lessons with mother tongue summary |
| **Quiz** | `quiz.html` | Timed assessments, instant scoring, grade badges |
| **Translator** | `translate.html` | 6-Language text translation studio with audio speech |
| **Teacher Portal** | `teacher.html` | Class analytics, assessment score logs, announcements |

---

## 🚀 How to Run the Website

### Option 1: Run with npm (Recommended)
Open the VS Code integrated terminal and run either:
```bash
npm start
```
or:
```bash
npm run dev
```
Both commands start the local server on `http://localhost:5500` and automatically launch your browser!

### Option 2: Open Directly in Browser
Open `login.html` directly in your browser:
```
C:\Users\karth\.gemini\antigravity\scratch\quick-learn\login.html
```
