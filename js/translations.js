/**
 * Quick Learn - Multilingual Support & Translation Engine
 * Supported Languages (10 Languages):
 * English (en), Spanish (es), French (fr), German (de), Hindi (hi), Tamil (ta),
 * Bengali (bn), Santali (sat), Telugu (te), Marathi (mr)
 */

const LANGUAGES = {
  en: { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  es: { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  fr: { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  de: { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  hi: { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  ta: { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  bn: { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
  sat: { code: 'sat', name: 'Santali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', flag: '🇮🇳' },
  te: { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  mr: { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' }
};

// UI Localizations across core languages
const UI_TRANSLATIONS = {
  en: {
    app_title: "Quick Learn",
    tagline: "Empowering education with multilingual learning, instant translation, and smart assessments.",
    nav_home: "Home",
    nav_lessons: "Lessons",
    nav_quiz: "Quiz & Assessment",
    nav_translate: "Translator",
    nav_teacher: "Teacher Portal",
    nav_login: "Login",
    nav_logout: "Logout",
    welcome: "Welcome",
    student: "Student",
    teacher: "Teacher",
    select_language: "Mother Tongue",
    search_placeholder: "Search topics, concepts, formulas...",
    math_title: "Mathematics",
    science_title: "Science",
    english_title: "English",
    start_quiz: "Take Quiz",
    view_lesson: "Read Lesson",
    translate_now: "Translate Now",
    score_label: "Score",
    submit_btn: "Submit",
    next_btn: "Next Question",
    finish_btn: "Finish Quiz",
    try_again: "Try Again",
    copy_text: "Copy",
    listen_text: "Listen",
    source_lang: "From Language",
    target_lang: "To Language",
    enter_text: "Enter text to translate...",
    translation_result: "Translation will appear here...",
    footer_text: "Quick Learn © 2026 • Quality Education for Everyone"
  },
  bn: {
    app_title: "Quick Learn",
    tagline: "বহুভাষিক শিক্ষা, তাৎক্ষণিক অনুবাদ এবং স্মার্ট মূল্যায়নের মাধ্যমে শিক্ষার ক্ষমতায়ন।",
    nav_home: "হোম",
    nav_lessons: "পাঠসমূহ",
    nav_quiz: "কুইজ ও মূল্যায়ন",
    nav_translate: "অনুবাদক",
    nav_teacher: "শিক্ষক পোর্টাল",
    nav_login: "লগইন",
    nav_logout: "লগআউট",
    welcome: "স্বাগতম",
    student: "ছাত্র/ছাত্রী",
    teacher: "শিক্ষক",
    select_language: "মাতৃভাষা নির্বাচন",
    search_placeholder: "বিষয়, সূত্র বা ধারণা খুঁজুন...",
    math_title: "গণিত",
    science_title: "বিজ্ঞান",
    english_title: "ইংরেজি",
    start_quiz: "কুইজ শুরু করুন",
    view_lesson: "পাঠ পড়ুন",
    translate_now: "এখনই অনুবাদ করুন",
    score_label: "নম্বর",
    submit_btn: "জমা দিন",
    next_btn: "পরবর্তী প্রশ্ন",
    finish_btn: "সমাপ্ত করুন",
    try_again: "আবার চেষ্টা করুন",
    copy_text: "কপি",
    listen_text: "শুনুন",
    source_lang: "উৎস ভাষা",
    target_lang: "অনুবাদ ভাষা",
    enter_text: "অনুবাদ করার জন্য পাঠ্য লিখুন...",
    translation_result: "অনুবাদ এখানে দৃশ্যমান হবে...",
    footer_text: "Quick Learn © 2026 • সবার জন্য মানসম্মত শিক্ষা"
  },
  sat: {
    app_title: "Quick Learn",
    tagline: "ᱥᱟᱸᱜᱮ ᱯᱟᱹᱨᱥᱤ ᱪᱮᱫᱚᱜ, ᱩᱥᱟᱹᱨᱟ ᱛᱚᱨᱡᱚᱢᱟ ᱟᱨ ᱥᱢᱟᱨᱴ ᱵᱤᱰᱟᱹᱣ ᱦᱚᱛᱮᱛᱮ ᱥᱮᱪᱮᱫ ᱞᱟᱦᱟᱭ ᱢᱮ᱾",
    nav_home: "ᱢᱩᱬᱩᱛ",
    nav_lessons: "ᱯᱟᱲᱦᱟᱣ",
    nav_quiz: "ᱠᱩᱠᱞᱤ ᱨᱩᱣᱟᱹᱲ",
    nav_translate: "ᱛᱚᱨᱡᱚᱢᱟᱤᱭᱟᱹ",
    nav_teacher: "ᱜᱩᱨᱩ ᱛᱷᱟᱱ",
    nav_login: "ᱵᱚᱞᱚᱱ",
    nav_logout: "ᱚᱰᱚᱠ",
    welcome: "ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ",
    student: "ᱯᱟᱹᱴᱷᱩᱣᱟᱹ",
    teacher: "ᱜᱩᱨᱩ ᱜᱚᱢᱠᱮ",
    select_language: "ᱟᱭᱳ ᱟᱲᱟᱝ",
    search_placeholder: "ᱥᱟᱛᱟᱢ, ᱥᱩᱛᱨᱩ ᱯᱟᱱᱛᱷᱟᱭ ᱢᱮ...",
    math_title: "ᱮᱞᱠᱷᱟ",
    science_title: "ᱥᱟᱬᱮᱥ",
    english_title: "ᱤᱝᱞᱤᱥ",
    start_quiz: "ᱠᱩᱠᱞᱤ ᱮᱛᱚᱦᱚᱵ",
    view_lesson: "ᱯᱟᱲᱦᱟᱣ ᱢᱮ",
    translate_now: "ᱱᱤᱛ ᱜᱮ ᱛᱚᱨᱡᱚᱢᱟᱭ ᱢᱮ",
    score_label: "ᱱᱚᱢᱵᱚᱨ",
    submit_btn: "ᱮᱢ",
    next_btn: "ᱛᱟᱭᱚᱢ ᱠᱩᱠᱞᱤ",
    finish_btn: "ᱪᱟᱵᱟ",
    try_again: "ᱟᱨᱦᱚᱸ ᱠᱩᱨᱩᱢᱩᱴᱩᱭ ᱢᱮ",
    copy_text: "ᱱᱚᱠᱚᱞ",
    listen_text: "ᱟᱸᱡᱚᱢ",
    source_lang: "ᱢᱩᱬ ᱯᱟᱹᱨᱥᱤ",
    target_lang: "ᱛᱚᱨᱡᱚᱢᱟ ᱯᱟᱹᱨᱥᱤ",
    enter_text: "ᱛᱚᱨᱡᱚᱢᱟ ᱞᱟᱹᱜᱤᱫ ᱚᱞ ᱢᱮ...",
    translation_result: "ᱛᱚᱨᱡᱚᱢᱟ ᱱᱚᱸᱰᱮ ᱧᱮᱞᱚᱜ-ᱟ...",
    footer_text: "Quick Learn © 2026 • ᱡᱚᱛᱚ ᱦᱚᱲ ᱞᱟᱹᱜᱤᱫ ᱥᱮᱪᱮᱫ"
  },
  te: {
    app_title: "Quick Learn",
    tagline: "బహుభాషా అభ్యాసం, తక్షణ అనువాదం మరియు స్మార్ట్ అసెస్‌మెంట్‌లతో విద్యను మెరుగుపరుస్తుంది.",
    nav_home: "హోమ్",
    nav_lessons: "పాఠాలు",
    nav_quiz: "క్విజ్ & అసెస్‌మెంట్",
    nav_translate: "అనువాదకుడు",
    nav_teacher: "ఉపాధ్యాయుల పోర్టల్",
    nav_login: "లాగిన్",
    nav_logout: "లాగౌట్",
    welcome: "స్వాగతం",
    student: "విద్యార్థి",
    teacher: "ఉపాధ్యాయుడు",
    select_language: "మాతృభాష",
    search_placeholder: "అంశాలు, సూత్రాలు శోధించండి...",
    math_title: "గణితం",
    science_title: "సైన్స్",
    english_title: "ఇంగ్లీష్",
    start_quiz: "క్విజ్ ప్రారంభించండి",
    view_lesson: "పాఠం చదవండి",
    translate_now: "ఇప్పుడే అనువదించండి",
    score_label: "స్కోరు",
    submit_btn: "సమర్పించు",
    next_btn: "తదుపరి ప్రశ్న",
    finish_btn: "పూర్తి చేయండి",
    try_again: "మళ్లీ ప్రయత్నించండి",
    copy_text: "కాపీ",
    listen_text: "వినండి",
    source_lang: "మూల భాష",
    target_lang: "లక్ష్య భాష",
    enter_text: "అనువదించడానికి వచనాన్ని నమోదు చేయండి...",
    translation_result: "అనువాదం ఇక్కడ కనిపిస్తుంది...",
    footer_text: "Quick Learn © 2026 • అందరికీ నాణ్యమైన విద్య"
  },
  mr: {
    app_title: "Quick Learn",
    tagline: "बहुभाषिक शिक्षण, त्वरित भाषांतर आणि स्मार्ट मूल्यांकनासह शिक्षणाचे सशक्तीकरण.",
    nav_home: "मुख्यपृष्ठ",
    nav_lessons: "धडे",
    nav_quiz: "चाचणी व मूल्यांकन",
    nav_translate: "अनुवादक",
    nav_teacher: "शिक्षक पोर्टल",
    nav_login: "लॉगिन",
    nav_logout: "लॉगआउट",
    welcome: "स्वागत आहे",
    student: "विद्यार्थी",
    teacher: "शिक्षक",
    select_language: "मातृभाषा",
    search_placeholder: "विषय, सूत्रे शोधा...",
    math_title: "गणित",
    science_title: "विज्ञान",
    english_title: "इंग्रजी",
    start_quiz: "क्विझ सुरू करा",
    view_lesson: "धडा वाचा",
    translate_now: "आता भाषांतर करा",
    score_label: "गुण",
    submit_btn: "सबमिट करा",
    next_btn: "पुढील प्रश्न",
    finish_btn: "समाप्त करा",
    try_again: "पुन्हा प्रयत्न करा",
    copy_text: "कॉपी करा",
    listen_text: "ऐका",
    source_lang: "मूळ भाषा",
    target_lang: "अनुवाद भाषा",
    enter_text: "भाषांतरासाठी मजकूर लिहा...",
    translation_result: "भाषांतर येथे दिसेल...",
    footer_text: "Quick Learn © 2026 • सर्वांसाठी दर्जेदार शिक्षण"
  },
  es: {
    app_title: "Quick Learn",
    tagline: "Potenciando la educación con aprendizaje multilingüe, traducción instantánea y evaluaciones inteligentes.",
    nav_home: "Inicio",
    nav_lessons: "Lecciones",
    nav_quiz: "Cuestionarios",
    nav_translate: "Traductor",
    nav_teacher: "Portal Docente",
    nav_login: "Iniciar Sesión",
    nav_logout: "Cerrar Sesión",
    welcome: "Bienvenido",
    student: "Estudiante",
    teacher: "Profesor",
    select_language: "Lengua Materna",
    search_placeholder: "Buscar temas, conceptos, fórmulas...",
    math_title: "Matemáticas",
    science_title: "Ciencias",
    english_title: "Inglés",
    start_quiz: "Hacer Cuestionario",
    view_lesson: "Leer Lección",
    translate_now: "Traducir Ahora",
    score_label: "Puntuación",
    submit_btn: "Enviar",
    next_btn: "Siguiente Pregunta",
    finish_btn: "Finalizar Examen",
    try_again: "Intentar de nuevo",
    copy_text: "Copiar",
    listen_text: "Escuchar",
    source_lang: "Idioma de Origen",
    target_lang: "Idioma de Destino",
    enter_text: "Ingrese el texto a traducir...",
    translation_result: "La traducción aparecerá aquí...",
    footer_text: "Quick Learn © 2026 • Educación de Calidad para Todos"
  },
  fr: {
    app_title: "Quick Learn",
    tagline: "Renforcer l'éducation avec un apprentissage multilingue, une traduction instantanée et des évaluations intelligentes.",
    nav_home: "Accueil",
    nav_lessons: "Leçons",
    nav_quiz: "Quiz & Évaluation",
    nav_translate: "Traducteur",
    nav_teacher: "Portail Enseignant",
    nav_login: "Connexion",
    nav_logout: "Déconnexion",
    welcome: "Bienvenue",
    student: "Étudiant",
    teacher: "Enseignant",
    select_language: "Langue Maternelle",
    search_placeholder: "Rechercher des sujets, concepts, formules...",
    math_title: "Mathématiques",
    science_title: "Sciences",
    english_title: "Anglais",
    start_quiz: "Commencer le Quiz",
    view_lesson: "Lire la Leçon",
    translate_now: "Traduire Maintenant",
    score_label: "Score",
    submit_btn: "Soumettre",
    next_btn: "Question Suivante",
    finish_btn: "Terminer le Quiz",
    try_again: "Réessayer",
    copy_text: "Copier",
    listen_text: "Écouter",
    source_lang: "Langue Source",
    target_lang: "Langue Cible",
    enter_text: "Entrez le texte à traduire...",
    translation_result: "La traduction apparaîtra ici...",
    footer_text: "Quick Learn © 2026 • Éducation de Qualité pour Tous"
  },
  de: {
    app_title: "Quick Learn",
    tagline: "Bildung stärken mit mehrsprachigem Lernen, sofortiger Übersetzung und intelligenten Tests.",
    nav_home: "Startseite",
    nav_lessons: "Lektionen",
    nav_quiz: "Quiz & Bewertung",
    nav_translate: "Übersetzer",
    nav_teacher: "Lehrerportal",
    nav_login: "Anmelden",
    nav_logout: "Abmelden",
    welcome: "Willkommen",
    student: "Schüler",
    teacher: "Lehrer",
    select_language: "Muttersprache",
    search_placeholder: "Themen, Konzepte, Formeln suchen...",
    math_title: "Mathematik",
    science_title: "Wissenschaft",
    english_title: "Englisch",
    start_quiz: "Quiz Starten",
    view_lesson: "Lektion Lesen",
    translate_now: "Jetzt Übersetzen",
    score_label: "Ergebnis",
    submit_btn: "Absenden",
    next_btn: "Nächste Frage",
    finish_btn: "Quiz Beenden",
    try_again: "Erneut versuchen",
    copy_text: "Kopieren",
    listen_text: "Anhören",
    source_lang: "Ausgangssprache",
    target_lang: "Zielsprache",
    enter_text: "Geben Sie den zu übersetzenden Text ein...",
    translation_result: "Die Übersetzung wird hier angezeigt...",
    footer_text: "Quick Learn © 2026 • Hochwertige Bildung für Alle"
  },
  hi: {
    app_title: "Quick Learn",
    tagline: "बहुभाषी अध्ययन, त्वरित अनुवाद और स्मार्ट मूल्यांकन के साथ शिक्षा को सशक्त बनाना।",
    nav_home: "मुख्य पृष्ठ",
    nav_lessons: "पाठ सामग्री",
    nav_quiz: "प्रश्नोत्तरी एवं परीक्षा",
    nav_translate: "अनुवादक",
    nav_teacher: "शिक्षक पोर्टल",
    nav_login: "लॉग इन",
    nav_logout: "लॉग आउट",
    welcome: "स्वागत है",
    student: "विद्यार्थी",
    teacher: "शिक्षक",
    select_language: "मातृभाषा चुनें",
    search_placeholder: "विषय, सूत्र या अवधारणा खोजें...",
    math_title: "गणित",
    science_title: "विज्ञान",
    english_title: "अंग्रेज़ी",
    start_quiz: "क्विज़ शुरू करें",
    view_lesson: "पाठ पढ़ें",
    translate_now: "अनुवाद करें",
    score_label: "अंक",
    submit_btn: "जमा करें",
    next_btn: "अगला प्रश्न",
    finish_btn: "क्विज़ समाप्त करें",
    try_again: "पुनः प्रयास करें",
    copy_text: "कॉपी करें",
    listen_text: "सुनें",
    source_lang: "स्रोत भाषा",
    target_lang: "अनुवाद भाषा",
    enter_text: "अनुवाद के लिए पाठ यहाँ लिखें...",
    translation_result: "अनुवाद यहाँ दिखाई देगा...",
    footer_text: "Quick Learn © 2026 • सभी के लिए गुणवत्तापूर्ण शिक्षा"
  },
  ta: {
    app_title: "Quick Learn",
    tagline: "பன்மொழி கற்றல், உடனடி மொழிபெயர்ப்பு மற்றும் ஸ்மார்ட் மதிப்பீடுகள் மூலம் கல்வியை மேம்படுத்துதல்.",
    nav_home: "முகப்பு",
    nav_lessons: "பாடங்கள்",
    nav_quiz: "வினாடி வினா & மதிப்பீடு",
    nav_translate: "மொழிபெயர்ப்பாளர்",
    nav_teacher: "ஆசிரியர் தளம்",
    nav_login: "உள்நுழைவு",
    nav_logout: "வெளியேறு",
    welcome: "நல்வரவு",
    student: "மாணவர்",
    teacher: "ஆசிரியர்",
    select_language: "தாய்மொழி தேர்வு",
    search_placeholder: "தலைப்புகள், சூத்திரங்கள் தேடவும்...",
    math_title: "கணிதம்",
    science_title: "அறிவியல்",
    english_title: "ஆங்கிலம்",
    start_quiz: "வினாடி வினா தொடங்கு",
    view_lesson: "பாடம் படிக்கவும்",
    translate_now: "மொழிபெயர்க்க",
    score_label: "மதிப்பெண்",
    submit_btn: "சமர்ப்பிக்கவும்",
    next_btn: "அடுத்த கேள்வி",
    finish_btn: "முடிக்கவும்",
    try_again: "மீண்டும் முயற்சிக்கவும்",
    copy_text: "நகலெடு",
    listen_text: "கேட்கவும்",
    source_lang: "மூல மொழி",
    target_lang: "இலக்கு மொழி",
    enter_text: "மொழிபெயர்க்க உரை உள்ளிடவும்...",
    translation_result: "மொழிபெயர்ப்பு இங்கே தோன்றும்...",
    footer_text: "Quick Learn © 2026 • அனைவருக்கும் தரமான கல்வி"
  }
};

// Rich multilingual vocabulary dictionary across all 10 languages
const CORE_DICTIONARY = [
  {
    en: "Hello, welcome to Quick Learn!",
    es: "¡Hola, bienvenido a Quick Learn!",
    fr: "Bonjour, bienvenue sur Quick Learn !",
    de: "Hallo, willkommen bei Quick Learn!",
    hi: "नमस्ते, क्विक लर्न में आपका स्वागत है!",
    ta: "வணக்கம், Quick Learn-க்கு நல்வரவு!",
    bn: "নমস্কার, কুইক লার্নে স্বাগতম!",
    sat: "ᱡᱚᱦᱟᱨ, ᱠᱩᱭᱤᱠ ᱞᱟᱨᱱ ᱨᱮ ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ!",
    te: "నమస్కారం, క్విక్ లెర్న్‌కి స్వాగతం!",
    mr: "नमस्कार, क्विक लर्नमध्ये आपले स्वागत आहे!"
  },
  {
    en: "Mathematics is the language of science.",
    es: "Las matemáticas son el lenguaje de la ciencia.",
    fr: "Les mathématiques sont le langage de la science.",
    de: "Mathematik ist die Sprache der Wissenschaft.",
    hi: "गणित विज्ञान की भाषा है।",
    ta: "கணிதம் அறிவியலின் மொழியாகும்.",
    bn: "গণিত হলো বিজ্ঞানের ভাষা।",
    sat: "ᱮᱞᱠᱷᱟ ᱫᱚ ᱥᱟᱬᱮᱥ ᱨᱮᱭᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱠᱟᱱᱟ᱾",
    te: "గణితం సైన్స్ యొక్క భాష.",
    mr: "गणित ही विज्ञानाची भाषा आहे."
  },
  {
    en: "What is photosynthesis in plants?",
    es: "¿Qué es la fotosíntesis en las plantas?",
    fr: "Qu'est-ce que la photosynthèse chez les plantes ?",
    de: "Was ist Photosynthese bei Pflanzen?",
    hi: "पौधों में प्रकाश संश्लेषण क्या है?",
    ta: "தாவரங்களில் ஒளிச்சேர்க்கை என்றால் என்ன?",
    bn: "উদ্ভিদে সালোকসংশ্লেষ কী?",
    sat: "ᱫᱟᱨᱮ-ᱱᱟᱹᱲᱤ ᱨᱮ ᱯᱷᱚᱴᱚᱥᱤᱱᱛᱷᱮᱥᱤᱥ ᱪᱮᱫ ᱠᱟᱱᱟ?",
    te: "మొక్కలలో కిరణజన్య సంయోగక్రియ అంటే ఏమిటి?",
    mr: "वनस्पतींमध्ये प्रकाशसंश्लेषण म्हणजे काय?"
  },
  {
    en: "How do we calculate the area of a circle?",
    es: "¿Cómo calculamos el área de un círculo?",
    fr: "Comment calcule-t-on l'aire d'un cercle ?",
    de: "Wie berechnet man die Fläche eines Kreises?",
    hi: "हम वृत्त का क्षेत्रफल कैसे निकालते हैं?",
    ta: "வட்டத்தின் பரப்பளவை எவ்வாறு கணக்கிடுவது?",
    bn: "আমরা বৃত্তের ক্ষেত্রফল কীভাবে বের করব?",
    sat: "ᱜᱩᱞᱟᱹᱴ ᱨᱮᱭᱟᱜ ᱡᱟᱭᱜᱟ ᱪᱮᱫ ᱞᱮᱠᱟᱛᱮ ᱵᱚ ᱦᱤᱥᱟᱹᱵᱟ?",
    te: "వృత్తం వైశాల్యాన్ని ఎలా లెక్కిస్తాము?",
    mr: "आपण वर्तुळाचे क्षेत्रफळ कसे मोजतो?"
  },
  {
    en: "Practice makes a person perfect.",
    es: "La práctica hace al maestro.",
    fr: "C'est en forgeant qu'on devient forgeron.",
    de: "Übung macht den Meister.",
    hi: "अभ्यास मनुष्य को परिपूर्ण बनाता है।",
    ta: "பயிற்சி மனிதனை முழுமையாக்குகிறது.",
    bn: "অনুশীলন মানুষকে নিখুঁত করে তোলে।",
    sat: "ᱠᱩᱨᱩᱢᱩᱴᱩ ᱦᱚᱲ ᱮ ᱯᱩᱨᱟᱹᱣ ᱚᱪᱚᱭᱮᱭᱟ᱾",
    te: "సాధన మనిషిని పరిపూర్ణుడిని చేస్తుంది.",
    mr: "सराव माणसाला परिपूर्ण बनवतो."
  },
  {
    en: "Gravity pulls objects toward the center of the Earth.",
    es: "La gravedad atrae los objetos hacia el centro de la Tierra.",
    fr: "La gravité attire les objets vers le centre de la Terre.",
    de: "Die Schwerkraft zieht Objekte zum Mittelpunkt der Erde.",
    hi: "गुरुत्वाकर्षण वस्तुओं को पृथ्वी के केंद्र की ओर खींचता है।",
    ta: "ஈர்ப்பு விசை பொருட்களை பூமியின் மையத்தை நோக்கி இழுக்கிறது.",
    bn: "মহাকর্ষ বস্তুকে পৃথিবীর কেন্দ্রের দিকে টানে।",
    sat: "ᱜᱽᱨᱮᱵᱷᱤᱴᱤ ᱡᱤᱱᱤᱥ ᱠᱚ ᱫᱷᱟᱹᱨᱛᱤ ᱨᱮᱭᱟᱜ ᱛᱟᱞᱟ ᱥᱮᱫ ᱚᱨᱟ᱾",
    te: "గురుత్వాకర్షణ వస్తువులను భూమి కేంద్రం వైపు లాగుతుంది.",
    mr: "गुरुत्वाकर्षण वस्तू पृथ्वीच्या केंद्राकडे खेचते."
  },
  {
    en: "A noun is the name of a person, place, or thing.",
    es: "Un sustantivo es el nombre de una persona, lugar o cosa.",
    fr: "Un nom est le nom d'une personne, d'un lieu ou d'une chose.",
    de: "Ein Nomen ist der Name einer Person, eines Ortes oder einer Sache.",
    hi: "संज्ञा किसी व्यक्ति, स्थान या वस्तु का नाम है।",
    ta: "பெயர்ச்சொல் என்பது ஒரு நபர், இடம் அல்லது பொருளின் பெயராகும்.",
    bn: "বিশেষ্য হলো কোনো ব্যক্তি, স্থান বা বস্তুর নাম।",
    sat: "ᱧᱩᱛᱩᱢ ᱫᱚ ᱢᱤᱫ ᱦᱚᱲ, ᱡᱟᱭᱜᱟ ᱥᱮ ᱡᱤᱱᱤᱥ ᱨᱮᱭᱟᱜ ᱧᱩᱛᱩᱢ ᱠᱟᱱᱟ᱾",
    te: "నామవాచకం అనేది ఒక వ్యక్తి, స్థలం లేదా వస్తువు పేరు.",
    mr: "नाम म्हणजे एखाद्या व्यक्तीचे, स्थळाचे किंवा वस्तूचे नाव होय."
  },
  {
    en: "Good morning teacher",
    es: "Buenos días profesor",
    fr: "Bonjour professeur",
    de: "Guten Morgen Lehrer",
    hi: "सुप्रभात शिक्षक महोदय",
    ta: "காலை வணக்கம் ஆசிரியர்",
    bn: "সুপ্রভাত শিক্ষক মহাশয়",
    sat: "ᱥᱟᱹᱜᱩᱱ ᱥᱮᱛᱟᱜ ᱜᱩᱨᱩ ᱜᱚᱢᱠᱮ",
    te: "శుభోదయం ఉపాధ్యాయులారా",
    mr: "शुभ प्रभात शिक्षक"
  },
  {
    en: "Thank you for the lesson",
    es: "Gracias por la lección",
    fr: "Merci pour la leçon",
    de: "Danke für die Lektion",
    hi: "पाठ के लिए धन्यवाद",
    ta: "பாடத்திற்கு நன்றி",
    bn: "পাঠের জন্য আপনাকে ধন্যবাদ",
    sat: "ᱯᱟᱲᱦᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱨᱦᱟᱣ",
    te: "పాఠానికి ధన్యవాదాలు",
    mr: "धड्यासाठी धन्यवाद"
  },
  {
    en: "I want to take a quiz",
    es: "Quiero hacer un cuestionario",
    fr: "Je veux faire un quiz",
    de: "Ich möchte ein Quiz machen",
    hi: "मैं एक प्रश्नोत्तरी देना चाहता हूँ",
    ta: "நான் வினாடி வினா எடுக்க விரும்புகிறேன்",
    bn: "আমি একটি কুইজে অংশ নিতে চাই",
    sat: "ᱤᱧ ᱢᱤᱫ ᱠᱩᱠᱞᱤ ᱨᱩᱣᱟᱹᱲ ᱮᱢᱚᱜ ᱥᱟᱱᱟᱧ ᱠᱟᱱᱟ",
    te: "నేను క్విజ్ రాయాలనుకుంటున్నాను",
    mr: "मला एक क्विझ सोडवायची आहे"
  },
  // Single-word terms & vocabulary
  { en: "mathematics", es: "matemáticas", fr: "mathématiques", de: "mathematik", hi: "गणित", ta: "கணிதம்", bn: "গণিত", sat: "ᱮᱞᱠᱷᱟ", te: "గణితం", mr: "गणित" },
  { en: "science", es: "ciencia", fr: "science", de: "wissenschaft", hi: "विज्ञान", ta: "அறிவியல்", bn: "বিজ্ঞান", sat: "ᱥᱟᱬᱮᱥ", te: "సైన్స్", mr: "विज्ञान" },
  { en: "english", es: "inglés", fr: "anglais", de: "englisch", hi: "अंग्रेज़ी", ta: "ஆங்கிலம்", bn: "ইংরেজি", sat: "ᱤᱝᱞᱤᱥ", te: "ఇంగ్లీష్", mr: "इंग्रजी" },
  { en: "student", es: "estudiante", fr: "étudiant", de: "schüler", hi: "विद्यार्थी", ta: "மாணவர்", bn: "ছাত্র", sat: "ᱯᱟᱹᱴᱷᱩᱣᱟᱹ", te: "విద్యార్థి", mr: "विद्यार्थी" },
  { en: "teacher", es: "profesor", fr: "enseignant", de: "lehrer", hi: "शिक्षक", ta: "ஆசிரியர்", bn: "শিক্ষক", sat: "ᱜᱩᱨᱩ", te: "ఉపాధ్యాయుడు", mr: "शिक्षक" },
  { en: "school", es: "escuela", fr: "école", de: "schule", hi: "विद्यालय", ta: "பள்ளி", bn: "বিদ্যালয়", sat: "ᱟᱥᱲᱟ", te: "పాఠశాల", mr: "शाळा" },
  { en: "book", es: "libro", fr: "livre", de: "buch", hi: "पुस्तक", ta: "புத்தகம்", bn: "বই", sat: "ᱯᱩᱛᱷᱤ", te: "పుస్తకం", mr: "पुस्तक" },
  { en: "lesson", es: "lección", fr: "leçon", de: "lektion", hi: "पाठ", ta: "பாடம்", bn: "পাঠ", sat: "ᱯᱟᱲᱦᱟᱣ", te: "పాఠం", mr: "धडा" },
  { en: "question", es: "pregunta", fr: "question", de: "frage", hi: "प्रश्न", ta: "கேள்வி", bn: "প্রশ্ন", sat: "ᱠᱩᱠᱞᱤ", te: "ప్రశ్న", mr: "प्रश्न" },
  { en: "answer", es: "respuesta", fr: "réponse", de: "antwort", hi: "उत्तर", ta: "பதில்", bn: "উত্তর", sat: "ᱛᱮᱞᱟ", te: "సమాధానం", mr: "उत्तर" },
  { en: "knowledge", es: "conocimiento", fr: "connaissance", de: "wissen", hi: "ज्ञान", ta: "அறிவு", bn: "জ্ঞান", sat: "ᱜᱮᱭᱟᱱ", te: "జ్ఞానం", mr: "ज्ञान" },
  { en: "score", es: "puntuación", fr: "score", de: "punktzahl", hi: "अंक", ta: "மதிப்பெண்", bn: "নম্বর", sat: "ᱱᱚᱢᱵᱚᱨ", te: "స్కోరు", mr: "गुण" },
  { en: "education", es: "educación", fr: "éducation", de: "bildung", hi: "शिक्षा", ta: "கல்வி", bn: "শিক্ষা", sat: "ᱥᱮᱪᱮᱫ", te: "విద్య", mr: "शिक्षण" }
];

/**
 * Universal text translation helper
 * Checks local dictionary first, then falls back to public API if accessible
 */
async function translateText(text, fromLang, toLang) {
  if (!text || !text.trim()) return "";
  if (fromLang === toLang) return text;

  const clean = text.trim();
  const lower = clean.toLowerCase();

  // 1. Direct match in local dictionary
  const exactMatch = CORE_DICTIONARY.find(item => 
    item[fromLang] && item[fromLang].toLowerCase() === lower
  );
  if (exactMatch && exactMatch[toLang]) {
    return exactMatch[toLang];
  }

  // 2. Partial / word-by-word local mapping if single word
  const words = clean.split(/\s+/);
  if (words.length === 1) {
    const wordMatch = CORE_DICTIONARY.find(item => 
      item[fromLang] && item[fromLang].toLowerCase() === words[0].toLowerCase()
    );
    if (wordMatch && wordMatch[toLang]) {
      return wordMatch[toLang];
    }
  }

  // 3. Try free public translation API (MyMemory)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const langPair = `${fromLang}|${toLang}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=${langPair}`;
    
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const data = await response.json();
      if (data && data.responseData && data.responseData.translatedText) {
        const translated = data.responseData.translatedText;
        if (!translated.toUpperCase().includes("MYMEMORY WARNING")) {
          return translated;
        }
      }
    }
  } catch (err) {
    console.log("Online translation unavailable, using dictionary fallback");
  }

  // 4. Substring matching
  for (const item of CORE_DICTIONARY) {
    if (item[fromLang] && lower.includes(item[fromLang].toLowerCase())) {
      return item[toLang];
    }
  }

  return `[${LANGUAGES[toLang]?.native || LANGUAGES[toLang]?.name || toLang}] ${clean}`;
}

// Export to window
window.QuickLearnLang = {
  LANGUAGES,
  UI_TRANSLATIONS,
  CORE_DICTIONARY,
  translateText
};
