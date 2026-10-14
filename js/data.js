/**
 * Quick Learn - Educational Content & Question Bank
 * Subjects: Mathematics, Science, English
 */

const LESSONS_DATA = [
  // --- MATHEMATICS ---
  {
    id: "math-1",
    subject: "mathematics",
    subjectTitle: "Mathematics",
    icon: "📐",
    title: "Introduction to Algebra & Linear Equations",
    readTime: "7 min read",
    level: "Beginner - Intermediate",
    summary: "Understand variables, constants, algebraic expressions, and solving single-variable linear equations.",
    summaries: {
      en: "Learn how to isolate variables and solve linear equations like 2x + 5 = 15.",
      bn: "চলক ও ধ্রুবক বুঝুন এবং 2x + 5 = 15 সমীকরণ সমাধান করুন।",
      sat: "ᱪᱚᱞ ᱟᱨ ᱛᱷᱤᱨ ᱵᱩᱡᱷᱟᱹᱣ ᱢᱮ ᱟᱨ 2x + 5 = 15 ᱞᱮᱠᱟᱱ ᱥᱚᱢᱤᱠᱚᱨᱚᱱ ᱥᱚᱞᱦᱮᱭ ᱢᱮ᱾",
      es: "Aprende a aislar variables y resolver ecuaciones lineales como 2x + 5 = 15.",
      fr: "Apprenez à isoler les variables et à résoudre des équations linéaires comme 2x + 5 = 15.",
      de: "Lerne, wie man Variablen isoliert und lineare Gleichungen wie 2x + 5 = 15 löst.",
      hi: "चर और अचर को समझें तथा रैखिक समीकरण जैसे 2x + 5 = 15 को हल करना सीखें।",
      ta: "மாறிகள் மற்றும் மாறிலிகளைப் புரிந்துகொண்டு 2x + 5 = 15 போன்ற சமன்பாடுகளைத் தீர்க்கவும்.",
      te: "చలరాశులు మరియు స్థిరాంకాలను అర్థం చేసుకోండి మరియు 2x + 5 = 15 సమీకరణాలను పరిష్కరించండి.",
      mr: "चल आणि स्थिर पदे समजून घ्या व 2x + 5 = 15 समीकरण सोडवा."
    },
    keyConcepts: [
      "A variable (e.g., x, y) represents an unknown numerical value.",
      "A constant is a fixed quantity (e.g., 5, -3, 100).",
      "The Golden Rule: Whatever operation you do to one side of the equation, you must do to the other side."
    ],
    content: `
      <h4>1. What is an Equation?</h4>
      <p>An equation is a mathematical statement showing that two expressions are equal, denoted by the equals sign (<strong>=</strong>). In algebra, we use letters as symbols for quantities that can change or need to be solved for.</p>
      
      <div class="formula-box">
        <span class="formula-title">Standard Linear Form:</span>
        <code>ax + b = c  (where a ≠ 0)</code>
      </div>

      <h4>2. Step-by-Step Solving Technique:</h4>
      <ol>
        <li><strong>Simplify both sides:</strong> Clear parentheses using distributive law and combine like terms.</li>
        <li><strong>Isolate the variable term:</strong> Add or subtract terms so all variables are on one side and constants on the other.</li>
        <li><strong>Solve for the variable:</strong> Multiply or divide both sides by the coefficient of the variable.</li>
        <li><strong>Check your answer:</strong> Substitute your solution back into the original equation.</li>
      </ol>

      <div class="example-box">
        <strong>Worked Example:</strong><br>
        Solve for x: <code>3x + 7 = 22</code><br>
        <em>Step 1:</em> Subtract 7 from both sides: <code>3x = 22 - 7 => 3x = 15</code><br>
        <em>Step 2:</em> Divide both sides by 3: <code>x = 15 / 3 => x = 5</code><br>
        <em>Verification:</em> <code>3(5) + 7 = 15 + 7 = 22</code>. (Correct!)
      </div>
    `
  },
  {
    id: "math-2",
    subject: "mathematics",
    subjectTitle: "Mathematics",
    icon: "📏",
    title: "Geometry: Pythagorean Theorem & Triangle Properties",
    readTime: "6 min read",
    level: "Intermediate",
    summary: "Master the fundamental relationship among the three sides of a right triangle discovered by Pythagoras.",
    summaries: {
      en: "In any right-angled triangle, a² + b² = c², where c is the hypotenuse.",
      bn: "সমকোণী ত্রিভুজে: a² + b² = c², যেখানে c হলো অতিভুজ।",
      sat: "ᱥᱚᱢᱠᱚᱬᱤ ᱯᱮᱠᱳᱬ ᱨᱮ: a² + b² = c² (ᱠᱚᱨᱱᱚ ᱨᱮᱭᱟᱜ ᱵᱚᱨᱜᱚ = ᱮᱴᱟᱜ ᱵᱟᱨ ᱫᱷᱟᱨᱮ ᱨᱮᱭᱟᱜ ᱵᱚᱨᱜᱚ ᱡᱚᱲ)᱾",
      es: "En cualquier triángulo rectángulo, a² + b² = c², donde c es la hipotenusa.",
      fr: "Dans tout triangle rectangle, a² + b² = c², où c est l'hypoténuse.",
      de: "In jedem rechtwinkligen Dreieck gilt a² + b² = c², wobei c die Hypotenuse ist.",
      hi: "समकोण त्रिभुज में कर्ण का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर होता है: a² + b² = c²।",
      ta: "செங்கோண முக்கோணத்தில் கர்ணத்தின் வர்க்கம் மற்ற இரு பக்கங்களின் வர்க்கங்களின் கூடுதலுக்கு சமம்: a² + b² = c²."
    },
    keyConcepts: [
      "Applies exclusively to Right-Angled Triangles (having a 90° angle).",
      "The hypotenuse is always the longest side, directly opposite the right angle.",
      "Useful for calculating direct distances, navigation, architecture, and trigonometry."
    ],
    content: `
      <h4>1. The Theorem Explained</h4>
      <p>The Pythagorean Theorem states that in a right-angled triangle, the area of the square whose side is the hypotenuse is equal to the sum of the areas of the squares on the other two sides.</p>

      <div class="formula-box">
        <span class="formula-title">Pythagorean Equation:</span>
        <code>a² + b² = c²</code>
        <small style="display:block; margin-top:4px; opacity:0.85;">c = √(a² + b²)</small>
      </div>

      <div class="example-box">
        <strong>Common Pythagorean Triples:</strong><br>
        • (3, 4, 5) -> 3² + 4² = 9 + 16 = 25 = 5²<br>
        • (5, 12, 13) -> 5² + 12² = 25 + 144 = 169 = 13²<br>
        • (8, 15, 17) -> 8² + 15² = 64 + 225 = 289 = 17²
      </div>
    `
  },
  {
    id: "math-3",
    subject: "mathematics",
    subjectTitle: "Mathematics",
    icon: "📊",
    title: "Percentages, Ratios, and Proportions",
    readTime: "5 min read",
    level: "Beginner",
    summary: "Practical mathematical tools for calculating interest, discounts, proportions, and real-life statistics.",
    summaries: {
      en: "Percentage literally means 'per hundred'. Convert effortlessly between decimals, fractions, and percentages.",
      bn: "শতকরা মানে প্রতি একশত। ভগ্নাংশ, দশমিক এবং শতকরা সহজে গণনা করুন।",
      sat: "ᱥᱟᱭᱠᱚᱲᱟ ᱨᱮᱭᱟᱜ ᱢᱮᱱᱮᱛ ᱫᱚ 'ᱥᱟᱭ ᱨᱮ ᱢᱤᱫ' ᱠᱟᱱᱟ᱾ ᱵᱷᱤᱱ, ᱫᱚᱥᱚᱢᱤᱠ ᱟᱨ ᱥᱟᱭᱠᱚᱲᱟ ᱦᱤᱥᱟᱹᱵᱽ ᱢᱮ᱾",
      es: "Porcentaje significa 'por cien'. Convierte fácilmente entre decimales, fracciones y porcentajes.",
      fr: "Le pourcentage signifie 'pour cent'. Convertissez facilement entre décimales, fractions et pourcentages.",
      de: "Prozent bedeutet 'pro Hundert'. Rechne mühelos zwischen Dezimalzahlen, Brüchen und Prozenten um.",
      hi: "प्रतिशत का अर्थ है 'प्रति सौ'। भिन्न, दशमलव और प्रतिशत के बीच सरलता से गणना करें।",
      ta: "சதவீதம் என்பது 'நூற்றுக்கு ஒன்று' என்று பொருள்படும். பின்னங்கள் மற்றும் தசமங்களை எளிதாக மாற்றலாம்."
    },
    keyConcepts: [
      "Percentage = (Part / Whole) × 100%",
      "To find discount: Original Price × (Discount % / 100)",
      "Ratio compares quantities of the same kind: a : b = a / b"
    ],
    content: `
      <h4>1. Understanding Percentage</h4>
      <p>The symbol <strong>%</strong> represents hundredths. For example, 45% means 45 out of 100, which is also 0.45 in decimal or 9/20 in simplified fraction form.</p>

      <div class="formula-box">
        <span class="formula-title">Quick Percentage Formula:</span>
        <code>Value = (Percentage × Total) / 100</code>
      </div>

      <div class="example-box">
        <strong>Real World Problem:</strong><br>
        A student scores 42 out of 50 marks in an exam. What is the percentage?<br>
        <em>Calculation:</em> (42 / 50) × 100 = 0.84 × 100 = <strong>84%</strong>
      </div>
    `
  },

  // --- SCIENCE ---
  {
    id: "sci-1",
    subject: "science",
    subjectTitle: "Science",
    icon: "🌱",
    title: "Biology: Photosynthesis & Plant Life Cycles",
    readTime: "8 min read",
    level: "Beginner - Intermediate",
    summary: "Discover how green plants convert solar sunlight into chemical energy to sustain life on Earth.",
    summaries: {
      en: "Photosynthesis uses sunlight, carbon dioxide, and water to produce glucose and oxygen in chlorophyll.",
      es: "La fotosíntesis usa luz solar, dióxido de carbono y agua para producir glucosa y oxígeno.",
      fr: "La photosynthèse utilise la lumière du soleil, le CO2 et l'eau pour produire du glucose et de l'oxygène.",
      de: "Die Photosynthese nutzt Sonnenlicht, Kohlendioxid und Wasser, um Glukose und Sauerstoff zu erzeugen.",
      hi: "प्रकाश संश्लेषण प्रक्रिया में पौधे सूर्य के प्रकाश, कार्बन डाइऑक्साइड और जल से ग्लूकोज और ऑक्सीजन बनाते हैं।",
      ta: "ஒளிச்சேர்க்கை என்பது தாவரங்கள் சூரிய ஒளி, நீர் மற்றும் CO2 மூலம் உணவு மற்றும் ஆக்ஸிஜனை உருவாக்கும் முறையாகும்."
    },
    keyConcepts: [
      "Occurs in the Chloroplasts of plant cells containing the pigment Chlorophyll.",
      "Input: Carbon Dioxide (6CO₂) + Water (6H₂O) + Solar Energy.",
      "Output: Glucose (C₆H₁₂O₆) + Oxygen (6O₂)."
    ],
    content: `
      <h4>1. The Life-Giving Chemical Reaction</h4>
      <p>Almost all energy in the biosphere flows from the sun, captured through photosynthesis. Plants are autotrophs (primary producers) creating their own nutrition.</p>

      <div class="formula-box">
        <span class="formula-title">Chemical Equation of Photosynthesis:</span>
        <code>6CO₂ + 6H₂O + Sunlight ──► C₆H₁₂O₆ + 6O₂</code>
      </div>

      <h4>2. Two Stages of Photosynthesis</h4>
      <ul>
        <li><strong>Light-dependent reactions (Thylakoids):</strong> Absorb light photons, split water molecules, release oxygen gas, and generate ATP & NADPH.</li>
        <li><strong>Light-independent reactions / Calvin Cycle (Stroma):</strong> Uses ATP and NADPH to fix carbon dioxide into sugar molecules (glucose).</li>
      </ul>
    `
  },
  {
    id: "sci-2",
    subject: "science",
    subjectTitle: "Science",
    icon: "🚀",
    title: "Physics: Newton's Three Laws of Motion",
    readTime: "7 min read",
    level: "Intermediate",
    summary: "Explore the fundamental principles of classical mechanics governing how objects move and interact.",
    summaries: {
      en: "Isaac Newton's laws describe inertia, force (F = ma), and action-reaction pairs.",
      es: "Las leyes de Newton describen la inercia, la fuerza (F = ma) y la acción-reacción.",
      fr: "Les lois de Newton décrivent l'inertie, la force (F = ma) et les paires action-réaction.",
      de: "Newtons Gesetze beschreiben Trägheit, Kraft (F = m*a) und Aktion-Reaktion.",
      hi: "न्यूटन के गति नियम जड़त्व, बल (F = ma) और क्रिया-प्रतिक्रिया की व्याख्या करते हैं।",
      ta: "நியூட்டனின் இயக்க விதிகள் நிலைமம், விசை (F = ma) மற்றும் செயல்-எதிர்ச்செயல் பற்றி விளக்குகின்றன."
    },
    keyConcepts: [
      "1st Law (Inertia): An object remains at rest or constant velocity unless acted upon by an external net force.",
      "2nd Law (Force): Net Force is equal to mass times acceleration: F = m · a.",
      "3rd Law (Action-Reaction): For every action force, there is an equal and opposite reaction force."
    ],
    content: `
      <h4>1. First Law - Law of Inertia</h4>
      <p>Objects resist changes to their state of motion. If you slide a hockey puck on frictionless ice, it keeps traveling forever unless stopped by an outside force.</p>

      <div class="formula-box">
        <span class="formula-title">Newton's Second Law Formula:</span>
        <code>F = m × a  (Force = mass × acceleration)</code>
        <small style="display:block; margin-top:4px; opacity:0.85;">Units: 1 Newton (N) = 1 kg·m/s²</small>
      </div>

      <h4>2. Third Law - Action and Reaction</h4>
      <p>When you jump off a small boat onto the dock, your legs push forward onto the dock, but also push backward against the boat, causing it to drift away.</p>
    `
  },
  {
    id: "sci-3",
    subject: "science",
    subjectTitle: "Science",
    icon: "⚛️",
    title: "Chemistry: Atomic Structure and the Periodic Table",
    readTime: "6 min read",
    level: "Beginner - Intermediate",
    summary: "The building blocks of matter: understand protons, neutrons, electrons, and elemental periods.",
    summaries: {
      en: "Atoms consist of a nucleus with protons and neutrons, orbited by electrons in energy levels.",
      es: "Los átomos tienen un núcleo con protones y neutrones, rodeado por electrones en niveles de energía.",
      fr: "Les atomes sont constitués d'un noyau avec protons et neutrons, entouré d'électrons.",
      de: "Atome bestehen aus einem Kern mit Protonen und Neutronen, umkreist von Elektronen.",
      hi: "परमाणु में प्रोटॉन और न्यूट्रॉन का नाभिक होता है, जिसके चारों ओर इलेक्ट्रॉन चक्कर लगाते हैं।",
      ta: "அணுக்கள் புரோட்டான்கள் மற்றும் நியூட்ரான்களைக் கொண்ட கருவையும், அதைச் சுற்றி எலக்ட்ரான்களையும் கொண்டுள்ளன."
    },
    keyConcepts: [
      "Protons carry positive charge (+1), Electrons carry negative charge (-1), Neutrons have neutral charge (0).",
      "Atomic Number (Z) = Total number of protons in an atom.",
      "Valence electrons in the outermost shell dictate chemical bonding and reactivity."
    ],
    content: `
      <h4>1. Anatomy of the Atom</h4>
      <p>Everything in the universe is constructed from atoms. In a neutral atom, the number of negatively charged electrons precisely balances the number of positively charged protons.</p>

      <div class="example-box">
        <strong>Subatomic Particles Overview:</strong><br>
        • <strong>Proton:</strong> Mass ≈ 1 amu | Charge: +1 | Located: Nucleus<br>
        • <strong>Neutron:</strong> Mass ≈ 1 amu | Charge: 0 | Located: Nucleus<br>
        • <strong>Electron:</strong> Mass ≈ 1/1836 amu | Charge: -1 | Located: Electron Cloud
      </div>
    `
  },

  // --- ENGLISH ---
  {
    id: "eng-1",
    subject: "english",
    subjectTitle: "English",
    icon: "📚",
    title: "Grammar: The Eight Essential Parts of Speech",
    readTime: "7 min read",
    level: "Beginner",
    summary: "Build flawless sentences by understanding the 8 grammatical categories that classify every English word.",
    summaries: {
      en: "Master Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, and Interjections.",
      es: "Domina sustantivos, pronombres, verbos, adjetivos, adverbios, preposiciones, conjunciones e interjecciones.",
      fr: "Maîtrisez noms, pronoms, verbes, adjectifs, adverbes, prépositions, conjonctions et interjections.",
      de: "Beherrsche Nomen, Pronomen, Verben, Adjektive, Adverbien, Präpositionen, Konjunktionen und Interjektionen.",
      hi: "अंग्रेजी व्याकरण के 8 अंगों (संज्ञा, सर्वनाम, क्रिया, विशेषण आदि) को विस्तार से समझें।",
      ta: "ஆங்கில இலக்கணத்தின் 8 முக்கிய பாகங்களை (பெயர்ச்சொல், வினைச்சொல், முதலியன) கற்கவும்."
    },
    keyConcepts: [
      "Noun: Names a person, place, thing, or abstract idea (e.g., student, London, curiosity).",
      "Verb: Expresses action or state of being (e.g., run, write, is, become).",
      "Adjective: Modifies or describes a noun (e.g., brilliant, bright, blue).",
      "Adverb: Modifies a verb, adjective, or another adverb (e.g., quickly, very, silently)."
    ],
    content: `
      <h4>The 8 Foundation Stones of Language</h4>
      <div class="example-box">
        <strong>Quick Reference:</strong><br>
        1. <strong>Noun:</strong> <em>Quick Learn</em> is a great platform.<br>
        2. <strong>Pronoun:</strong> <em>She</em> completed her homework.<br>
        3. <strong>Verb:</strong> They <em>study</em> every evening.<br>
        4. <strong>Adjective:</strong> A <em>clever</em> answer.<br>
        5. <strong>Adverb:</strong> The cheetah runs <em>swiftly</em>.<br>
        6. <strong>Preposition:</strong> The book is <em>on</em> the desk.<br>
        7. <strong>Conjunction:</strong> Science <em>and</em> Math are fascinating.<br>
        8. <strong>Interjection:</strong> <em>Wow!</em> That was impressive!
      </div>
    `
  },
  {
    id: "eng-2",
    subject: "english",
    subjectTitle: "English",
    icon: "✍️",
    title: "Effective Essay & Paragraph Writing Skills",
    readTime: "6 min read",
    level: "Intermediate",
    summary: "Techniques for structuring coherent arguments, thesis statements, and persuasive paragraphs.",
    summaries: {
      en: "Structure your thoughts using Introduction (Hook + Thesis), Body Paragraphs (PEEL), and Conclusion.",
      es: "Estructura tus ensayos con Introducción, Párrafos del cuerpo (PEEL) y Conclusión.",
      fr: "Structurez vos dissertations avec Introduction, Paragraphes de corps et Conclusion.",
      de: "Strukturiere Aufsätze mit Einleitung, Hauptteil (PEEL-Methode) und Schluss.",
      hi: "प्रभावी निबंध लेखन की संरचना: प्रस्तावना, मुख्य बिंदु और निष्कर्ष का सही प्रयोग।",
      ta: "சிறந்த கட்டுரை எழுதும் முறை: முன்னுரை, உடற்பகுதி மற்றும் முடிவுரை அமைக்கும் வழிமுறைகள்."
    },
    keyConcepts: [
      "Thesis Statement: One clear sentence stating the central claim of the essay.",
      "PEEL Method for Paragraphs: Point, Evidence, Explanation, Link back to thesis.",
      "Transitions: Use 'Furthermore', 'However', 'Consequently' for smooth flow."
    ],
    content: `
      <h4>1. The Classic Three-Part Structure</h4>
      <p>Whether writing academic research papers or descriptive narratives, follow the proven three-pillar architecture:</p>
      <ul>
        <li><strong>Introduction:</strong> Captures attention (hook), provides background context, and presents a crisp thesis statement.</li>
        <li><strong>Body Paragraphs (typically 3):</strong> Each covers a single coherent theme. Begin with a topic sentence, substantiate with facts, and analyze the significance.</li>
        <li><strong>Conclusion:</strong> Restates the thesis in new words, synthesizes the core takeaways, and leaves the reader with a thought-provoking final thought.</li>
      </ul>
    `
  },
  {
    id: "eng-3",
    subject: "english",
    subjectTitle: "English",
    icon: "💡",
    title: "Vocabulary Enrichment and Contextual Idioms",
    readTime: "5 min read",
    level: "All Levels",
    summary: "Elevate your vocabulary with contextual synonyms, roots, prefixes, and colourful idioms.",
    summaries: {
      en: "Enrich your language by mastering Greek & Latin roots, nuance in synonyms, and famous idioms.",
      es: "Enriquece tu vocabulario dominando raíces, sinónimos y modismos comunes.",
      fr: "Enrichissez votre vocabulaire en apprenant les racines, les synonymes et les expressions idiomatiques.",
      de: "Erweitere deinen Wortschatz mit Wortstämmen, Synonymen und beliebten Redewendungen.",
      hi: "शब्दावली संवर्धन, मुहावरे और शब्दों का सटीक संदर्भ में उपयोग करना सीखें।",
      ta: "சொற்களஞ்சியத்தை விரிவுபடுத்துதல் மற்றும் பழமொழிகள், சொற்றொடர்களின் பயன்பாடு."
    },
    keyConcepts: [
      "Prefixes change meanings (e.g., un-, re-, pre-, anti-).",
      "Idiom: An expression whose meaning cannot be deduced from literal words (e.g., 'piece of cake' = very easy).",
      "Collocations: Words that naturally go together (e.g., 'heavy rain', not 'thick rain')."
    ],
    content: `
      <h4>1. Popular Educational Idioms</h4>
      <div class="example-box">
        • <strong>"Hit the books":</strong> To study intensively.<br>
        • <strong>"Learn the ropes":</strong> To learn the basics of how something is done.<br>
        • <strong>"Piece of cake":</strong> An effortless task or simple quiz.<br>
        • <strong>"Burn the midnight oil":</strong> To study or work late into the night.
      </div>
    `
  }
];

// --- QUIZ & ASSESSMENT QUESTION BANK ---
const QUIZZES_DATA = {
  mathematics: [
    {
      id: "m-q1",
      question: "Solve the linear equation for x: 3x + 9 = 24",
      options: ["x = 3", "x = 5", "x = 7", "x = 9"],
      correct: 1, // index 1: x = 5
      explanation: "Subtract 9 from both sides: 3x = 15. Then divide by 3: x = 5.",
      difficulty: "Easy"
    },
    {
      id: "m-q2",
      question: "According to the Pythagorean Theorem, what is the hypotenuse if the two legs are 6 cm and 8 cm?",
      options: ["9 cm", "10 cm", "12 cm", "14 cm"],
      correct: 1, // index 1: 10 cm
      explanation: "c² = 6² + 8² = 36 + 64 = 100. Taking the square root gives c = 10 cm.",
      difficulty: "Medium"
    },
    {
      id: "m-q3",
      question: "A jacket originally priced at $80 is on a 25% discount. What is the sale price?",
      options: ["$55", "$60", "$65", "$70"],
      correct: 1, // index 1: $60
      explanation: "Discount = 25% of 80 = 0.25 × 80 = $20. Sale price = 80 - 20 = $60.",
      difficulty: "Easy"
    },
    {
      id: "m-q4",
      question: "What is the slope (m) of a line passing through (2, 3) and (6, 11)?",
      options: ["m = 1", "m = 2", "m = 3", "m = 4"],
      correct: 1, // index 1: m = 2
      explanation: "Slope m = (y₂ - y₁) / (x₂ - x₁) = (11 - 3) / (6 - 2) = 8 / 4 = 2.",
      difficulty: "Medium"
    },
    {
      id: "m-q5",
      question: "If a circle has a radius of 7 cm, what is its approximate circumference? (Use π ≈ 22/7)",
      options: ["22 cm", "44 cm", "88 cm", "154 cm"],
      correct: 1, // index 1: 44 cm
      explanation: "Circumference = 2 × π × r = 2 × (22/7) × 7 = 44 cm.",
      difficulty: "Medium"
    }
  ],

  science: [
    {
      id: "s-q1",
      question: "Which gas is primarily released as a by-product during plant photosynthesis?",
      options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Methane"],
      correct: 2, // Oxygen
      explanation: "Plants use CO₂ and water in the presence of sunlight to produce glucose and release Oxygen (O₂).",
      difficulty: "Easy"
    },
    {
      id: "s-q2",
      question: "Newton's Second Law of Motion is mathematically expressed as which formula?",
      options: ["E = mc²", "F = m · a", "P = V · I", "v = u + at"],
      correct: 1, // F = m · a
      explanation: "Newton's second law states that Force equals mass multiplied by acceleration (F = ma).",
      difficulty: "Easy"
    },
    {
      id: "s-q3",
      question: "Which subatomic particle carries a negative electrical charge in an atom?",
      options: ["Proton", "Neutron", "Electron", "Positron"],
      correct: 2, // Electron
      explanation: "Electrons carry a -1 negative electrical charge and orbit the nucleus.",
      difficulty: "Easy"
    },
    {
      id: "s-q4",
      question: "What green pigment inside plant cells is primarily responsible for capturing sunlight?",
      options: ["Carotenoid", "Chlorophyll", "Hemoglobin", "Melanin"],
      correct: 1, // Chlorophyll
      explanation: "Chlorophyll absorbs blue and red wavelengths of sunlight, reflecting green light.",
      difficulty: "Easy"
    },
    {
      id: "s-q5",
      question: "What is the acceleration due to gravity on the surface of the Earth approximately?",
      options: ["3.14 m/s²", "9.8 m/s²", "15.0 m/s²", "32.2 km/s²"],
      correct: 1, // 9.8 m/s²
      explanation: "Standard acceleration due to Earth's gravity (g) is approximately 9.8 m/s² (or 9.81 m/s²).",
      difficulty: "Medium"
    }
  ],

  english: [
    {
      id: "e-q1",
      question: "Identify the adverb in this sentence: 'The diligent student quickly solved the challenging riddle.'",
      options: ["diligent", "quickly", "solved", "challenging"],
      correct: 1, // quickly
      explanation: "'Quickly' modifies the verb 'solved', describing how the action was performed.",
      difficulty: "Easy"
    },
    {
      id: "e-q2",
      question: "What does the idiom 'hit the books' mean?",
      options: ["Throw books away", "Study intensively", "Damage school property", "Write a new novel"],
      correct: 1, // Study intensively
      explanation: "'Hit the books' is a widely used idiom meaning to sit down and study hard.",
      difficulty: "Easy"
    },
    {
      id: "e-q3",
      question: "In the PEEL essay paragraph structure, what does the letter 'E' stand for?",
      options: ["Emotion and Ending", "Evidence and Explanation", "Energy and Effort", "Enthusiasm and English"],
      correct: 1, // Evidence and Explanation
      explanation: "PEEL stands for Point, Evidence, Explanation, and Link.",
      difficulty: "Medium"
    },
    {
      id: "e-q4",
      question: "Which word is a synonym for 'meticulous'?",
      options: ["Careless", "Thorough & Precise", "Aggressive", "Confused"],
      correct: 1, // Thorough & Precise
      explanation: "'Meticulous' means showing great attention to detail; very careful and precise.",
      difficulty: "Medium"
    },
    {
      id: "e-q5",
      question: "Which of the following is a Compound Sentence?",
      options: [
        "She likes to read books in the morning.",
        "He studied hard, so he passed the exam with top marks.",
        "Because it was raining heavily outside.",
        "Running fast down the hill."
      ],
      correct: 1, // He studied hard, so he passed...
      explanation: "A compound sentence contains at least two independent clauses joined by a coordinating conjunction (so).",
      difficulty: "Hard"
    }
  ]
};

// Initial student assessment mock records (so teachers can view real class analytics!)
const INITIAL_STUDENT_RECORDS = [
  {
    id: "rec-101",
    studentName: "Aryan Sharma",
    studentEmail: "student@quicklearn.com",
    subject: "mathematics",
    subjectLabel: "Mathematics",
    score: 80,
    total: 5,
    correctCount: 4,
    grade: "A",
    date: "2026-10-10 14:32",
    feedback: "Excellent analytical ability. Review circle formulas."
  },
  {
    id: "rec-102",
    studentName: "Elena Rodriguez",
    studentEmail: "elena.r@school.edu",
    subject: "science",
    subjectLabel: "Science",
    score: 100,
    total: 5,
    correctCount: 5,
    grade: "A+",
    date: "2026-10-10 16:15",
    feedback: "Flawless score in Physics & Biology concepts!"
  },
  {
    id: "rec-103",
    studentName: "Lucas Dubois",
    studentEmail: "lucas.d@school.edu",
    subject: "english",
    subjectLabel: "English",
    score: 80,
    total: 5,
    correctCount: 4,
    grade: "A",
    date: "2026-10-11 08:20",
    feedback: "Great understanding of grammar and essay structures."
  },
  {
    id: "rec-104",
    studentName: "Priya Sundaram",
    studentEmail: "priya.s@school.edu",
    subject: "mathematics",
    subjectLabel: "Mathematics",
    score: 100,
    total: 5,
    correctCount: 5,
    grade: "A+",
    date: "2026-10-11 09:12",
    feedback: "Perfect mastery of linear equations and Pythagorean theorem."
  }
];

// Helper to initialize or fetch saved quiz records
function getAssessmentRecords() {
  const saved = localStorage.getItem("quicklearn_assessments");
  if (!saved) {
    localStorage.setItem("quicklearn_assessments", JSON.stringify(INITIAL_STUDENT_RECORDS));
    return INITIAL_STUDENT_RECORDS;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return INITIAL_STUDENT_RECORDS;
  }
}

function saveAssessmentRecord(record) {
  const records = getAssessmentRecords();
  records.unshift(record);
  localStorage.setItem("quicklearn_assessments", JSON.stringify(records));
}

// Export to window
window.QuickLearnData = {
  LESSONS_DATA,
  QUIZZES_DATA,
  getAssessmentRecords,
  saveAssessmentRecord
};
