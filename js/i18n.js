/* ============================================================
   i18n.js — Translation dictionary + apply logic
   Applies ONLY to informational content. The school name, the
   tagline "join THE GENIUS, be THE GENIUS," and the logo are
   never translated or re-cased — see index.html, they carry no
   data-i18n attribute.
   ============================================================ */

const translations = {
  en: {
    "nav.about": "About",
    "nav.features": "Why Us",
    "nav.academics": "Academics",
    "nav.gallery": "Campus",
    "nav.leadership": "Leadership",
    "nav.contact": "Contact",
    "nav.cta": "Enroll Now",

    "hero.eyebrow": "Knowledge · Training · Character",
    "hero.sub": "A school built on three pillars — where every learner is trained, tested, and trusted to lead.",
    "hero.ctaPrimary": "Get in Touch",
    "hero.ctaSecondary": "Learn More",

    "about.eyebrow": "About the School",
    "about.title": "Built on three pillars",
    "about.intro": "The Genius School System was founded on a simple belief: that real education shapes the mind, the discipline, and the character of a child in equal measure.",
    "about.pillar1.title": "Knowledge",
    "about.pillar1.text": "A rigorous, modern curriculum that builds real understanding, not rote memory.",
    "about.pillar2.title": "Training",
    "about.pillar2.text": "Structured practice in academics, sport, and skill — discipline built through repetition.",
    "about.pillar3.title": "Character",
    "about.pillar3.text": "Values, integrity, and empathy — the flame at the centre of everything we teach.",

    "features.eyebrow": "Why Choose Us",
    "features.title": "A campus built for growth",
    "features.f1.title": "Experienced Faculty",
    "features.f1.text": "Qualified teachers dedicated to every student's individual progress.",
    "features.f2.title": "Modern Curriculum",
    "features.f2.text": "A balanced blend of national standards and 21st-century skills.",
    "features.f3.title": "Safe Campus",
    "features.f3.text": "A secure, supervised environment where every child is looked after.",
    "features.f4.title": "Character Building",
    "features.f4.text": "Values-based mentorship woven into daily school life.",
    "features.f5.title": "Extracurriculars",
    "features.f5.text": "Sports, arts, and clubs that build teamwork beyond the classroom.",
    "features.f6.title": "Proven Results",
    "features.f6.text": "A consistent record of strong academic outcomes year after year.",

    "academics.eyebrow": "Academics",
    "academics.title": "Programs for every stage",
    "academics.tabs.pre": "Pre-Primary",
    "academics.tabs.primary": "Primary",
    "academics.tabs.middle": "Middle",
    "academics.tabs.secondary": "Secondary",
    "academics.pre.title": "Pre-Primary (Playgroup – KG)",
    "academics.pre.text": "A nurturing early-years foundation built around play, language, and early numeracy.",
    "academics.primary.title": "Primary (Grades 1–5)",
    "academics.primary.text": "Core literacy, numeracy, and science skills built through structured, engaging lessons.",
    "academics.middle.title": "Middle (Grades 6–8)",
    "academics.middle.text": "Broader subjects and early specialisation, preparing students for board examinations.",
    "academics.secondary.title": "Secondary (Matric / O-Level)",
    "academics.secondary.text": "Focused subject streams and exam preparation guided by experienced subject specialists.",

    "gallery.eyebrow": "Our Campus",
    "gallery.title": "A place designed for learning",
    "gallery.classrooms": "Classrooms",
    "gallery.labs": "Science Labs",
    "gallery.library": "Library",
    "gallery.sports": "Sports Ground",
    "gallery.arts": "Arts Studio",
    "gallery.computer": "Computer Lab",

    "leadership.eyebrow": "Leadership",
    "leadership.title": "Guided by experience",
    "leadership.p1.name": "Principal",
    "leadership.p1.role": "Head of School",
    "leadership.p2.name": "Academic Coordinator",
    "leadership.p2.role": "Curriculum & Faculty",
    "leadership.p3.name": "Student Affairs",
    "leadership.p3.role": "Discipline & Wellbeing",

    "stats.years": "Years Established",
    "stats.passRate": "Pass Rate",

    "contact.eyebrow": "Get in Touch",
    "contact.title": "We'd love to hear from you",
    "contact.addressLabel": "Address",
    "contact.address": "Aimnabad Road, Beharipur, Sialkot, Punjab, Pakistan",
    "contact.getDirections": "(Get Directions)",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.note": "This is a demo form — messages open in your email client.",

    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved."
  },

  ur: {
    "nav.about": "تعارف",
    "nav.features": "ہمیں کیوں منتخب کریں",
    "nav.academics": "تعلیمی پروگرام",
    "nav.gallery": "کیمپس",
    "nav.leadership": "قیادت",
    "nav.contact": "رابطہ",
    "nav.cta": "ابھی داخلہ لیں",

    "hero.eyebrow": "علم · تربیت · کردار",
    "hero.sub": "ایک ایسا ادارہ جو تین ستونوں پر قائم ہے — جہاں ہر طالب علم کو تربیت دی جاتی ہے، پرکھا جاتا ہے، اور قیادت کے قابل بنایا جاتا ہے۔",
    "hero.ctaPrimary": "رابطہ کریں",
    "hero.ctaSecondary": "مزید جانیں",

    "about.eyebrow": "اسکول کا تعارف",
    "about.title": "تین ستونوں پر استوار",
    "about.intro": "دی جینیئس اسکول سسٹم کی بنیاد ایک سادہ عقیدے پر رکھی گئی: حقیقی تعلیم بچے کے ذہن، نظم و ضبط اور کردار کو یکساں طور پر تشکیل دیتی ہے۔",
    "about.pillar1.title": "علم",
    "about.pillar1.text": "ایک جامع اور جدید نصاب جو رٹے کی بجائے حقیقی فہم پیدا کرتا ہے۔",
    "about.pillar2.title": "تربیت",
    "about.pillar2.text": "تعلیم، کھیل اور مہارت میں منظم مشق — مسلسل عمل سے پیدا ہونے والا نظم و ضبط۔",
    "about.pillar3.title": "کردار",
    "about.pillar3.text": "اقدار، دیانت اور ہمدردی — وہ شعلہ جو ہماری ہر تعلیم کے مرکز میں ہے۔",

    "features.eyebrow": "ہمیں کیوں منتخب کریں",
    "features.title": "ترقی کے لیے بنایا گیا کیمپس",
    "features.f1.title": "تجربہ کار اساتذہ",
    "features.f1.text": "قابل اساتذہ جو ہر طالب علم کی انفرادی ترقی کے لیے کوشاں ہیں۔",
    "features.f2.title": "جدید نصاب",
    "features.f2.text": "قومی معیارات اور اکیسویں صدی کی مہارتوں کا متوازن امتزاج۔",
    "features.f3.title": "محفوظ کیمپس",
    "features.f3.text": "ایک محفوظ اور زیرِ نگرانی ماحول جہاں ہر بچے کا خیال رکھا جاتا ہے۔",
    "features.f4.title": "کردار سازی",
    "features.f4.text": "روزمرہ اسکول کی زندگی میں شامل اقدار پر مبنی رہنمائی۔",
    "features.f5.title": "غیر نصابی سرگرمیاں",
    "features.f5.text": "کھیل، فنون اور کلبز جو جماعت کے باہر ٹیم ورک پیدا کرتے ہیں۔",
    "features.f6.title": "ثابت شدہ نتائج",
    "features.f6.text": "ہر سال مضبوط تعلیمی نتائج کا مسلسل ریکارڈ۔",

    "academics.eyebrow": "تعلیمی پروگرام",
    "academics.title": "ہر مرحلے کے لیے پروگرام",
    "academics.tabs.pre": "قبل از پرائمری",
    "academics.tabs.primary": "پرائمری",
    "academics.tabs.middle": "مڈل",
    "academics.tabs.secondary": "سیکنڈری",
    "academics.pre.title": "قبل از پرائمری (پلے گروپ – کے جی)",
    "academics.pre.text": "کھیل، زبان اور ابتدائی گنتی پر مبنی نرم و پُرخیال ابتدائی بنیاد۔",
    "academics.primary.title": "پرائمری (جماعت 1 تا 5)",
    "academics.primary.text": "منظم اور دلچسپ اسباق کے ذریعے بنیادی زبان، حساب اور سائنسی مہارتیں۔",
    "academics.middle.title": "مڈل (جماعت 6 تا 8)",
    "academics.middle.text": "وسیع مضامین اور ابتدائی تخصص، طلبہ کو بورڈ امتحانات کے لیے تیار کرنا۔",
    "academics.secondary.title": "سیکنڈری (میٹرک / او-لیول)",
    "academics.secondary.text": "تجربہ کار مضمون کے ماہرین کی رہنمائی میں مرکوز مضامین اور امتحان کی تیاری۔",

    "gallery.eyebrow": "ہمارا کیمپس",
    "gallery.title": "سیکھنے کے لیے بنائی گئی جگہ",
    "gallery.classrooms": "جماعت کے کمرے",
    "gallery.labs": "سائنس لیبارٹریز",
    "gallery.library": "لائبریری",
    "gallery.sports": "کھیل کا میدان",
    "gallery.arts": "آرٹس اسٹوڈیو",
    "gallery.computer": "کمپیوٹر لیب",

    "leadership.eyebrow": "قیادت",
    "leadership.title": "تجربے کی روشنی میں رہنمائی",
    "leadership.p1.name": "پرنسپل",
    "leadership.p1.role": "سربراہِ اسکول",
    "leadership.p2.name": "اکیڈمک کوآرڈینیٹر",
    "leadership.p2.role": "نصاب و اساتذہ",
    "leadership.p3.name": "طلبہ امور",
    "leadership.p3.role": "نظم و ضبط اور فلاح و بہبود",

    "stats.years": "قیام کے سال",
    "stats.passRate": "کامیابی کی شرح",

    "contact.eyebrow": "رابطہ کریں",
    "contact.title": "ہم آپ سے سننا پسند کریں گے",
    "contact.addressLabel": "پتہ",
    "contact.address": "ایمن آباد روڈ، بہاری پور، سیالکوٹ، پنجاب، پاکستان",
    "contact.getDirections": "(راستہ دیکھیں)",
    "contact.phoneLabel": "فون",
    "contact.emailLabel": "ای میل",
    "contact.form.name": "پورا نام",
    "contact.form.email": "ای میل ایڈریس",
    "contact.form.message": "پیغام",
    "contact.form.submit": "پیغام بھیجیں",
    "contact.form.note": "یہ ایک نمائشی فارم ہے — پیغام آپ کے ای میل پروگرام میں کھلے گا۔",

    "footer.quickLinks": "فوری لنکس",
    "footer.contactUs": "ہم سے رابطہ کریں",
    "footer.rights": "جملہ حقوق محفوظ ہیں۔"
  }
};

/**
 * Applies the translation dictionary for the given language code
 * to every element carrying a data-i18n key, and flips document
 * direction/lang. The brand name, tagline, and logo are untouched
 * because they carry no data-i18n attribute (see index.html).
 */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.setAttribute('lang', lang === 'ur' ? 'ur' : 'en');
  document.body.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');

  const langToggleLabel = document.getElementById('lang-toggle-label');
  if (langToggleLabel) {
    langToggleLabel.textContent = lang === 'ur' ? 'English' : 'اردو';
  }
}
