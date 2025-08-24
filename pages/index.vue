<template>
  <div class="bg-white text-ink selection:bg-brand-100 selection:text-ink">
    <!-- ניווט קבוע -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" class="font-bold text-xl text-brand-700">PayrollPro<span class="text-brand-500">.</span></a>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <button @click="scrollToSection('services')" class="hover:text-brand-700 cursor-pointer">שירותים</button>
          <button @click="scrollToSection('process')" class="hover:text-brand-700 cursor-pointer">איך זה עובד</button>
          <button @click="scrollToSection('about')" class="hover:text-brand-700 cursor-pointer">למה אני</button>
          <button @click="scrollToSection('contact')" class="hover:text-brand-700 cursor-pointer">צור קשר</button>
        </nav>
        <button @click="scrollToSection('contact')" class="inline-flex items-center justify-center rounded-2xl bg-brand-600 text-white px-4 py-2 text-sm font-semibold shadow-soft hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300">
          שיחת היכרות חינם
        </button>
      </div>
    </header>

    <!-- HERO -->
    <section id="hero" class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white pointer-events-none"></div>
      <div class="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div ref="heroText" class="reveal transition-base" data-delay="0">
            <h1 class="text-3xl md:text-5xl leading-tight font-extrabold text-ink">
              חשב/ת שכר פרילנסר/ית<br class="hidden md:block"> שמביא/ה לכם שקט וביטחון
            </h1>
            <p class="mt-4 text-slate-600 md:text-lg">
              ליווי מקצועי ואישי לעסקים קטנים וסטארטאפים: ניהול שכר, דיווחים לרשויות, קליטת עובדים, הטמעת מדיניות – הכל במקום אחד ובזמן.
            </p>
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
              <button @click="scrollToSection('contact')" class="rounded-2xl bg-brand-600 text-white px-6 py-3 font-semibold shadow-soft hover:bg-brand-700">
                קביעת פגישה
              </button>
              <button @click="scrollToSection('services')" class="rounded-2xl border border-slate-200 px-6 py-3 font-semibold hover:border-brand-300 hover:text-brand-700">
                צפייה בשירותים
              </button>
            </div>
            <div class="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div class="flex items-center gap-2"><span class="i">⭐</span> 4.9/5 חוות דעת</div>
              <div class="flex items-center gap-2"><span class="i">🕒</span> SLA של 24–48 שעות</div>
            </div>
          </div>
          <div ref="heroImage" class="reveal transition-base" data-delay="150">
            <div class="relative">
              <div class="absolute -inset-6 bg-brand-100/60 blur-3xl rounded-full -z-10"></div>
              <div class="aspect-[4/3] rounded-3xl border border-slate-100 shadow-soft bg-white p-6 flex items-center justify-center">
                <!-- איור/אייקונים פשוטים -->
                <svg viewBox="0 0 200 160" class="w-full h-full">
                  <rect x="10" y="20" width="180" height="120" rx="14" fill="#ffffff" stroke="#e2e8f0"/>
                  <rect x="24" y="36" width="68" height="12" rx="6" fill="#94a3b8"/>
                  <rect x="24" y="60" width="152" height="10" rx="5" fill="#c7d2fe"/>
                  <rect x="24" y="80" width="120" height="10" rx="5" fill="#a5b4fc"/>
                  <rect x="24" y="100" width="152" height="10" rx="5" fill="#93c5fd"/>
                  <circle cx="160" cy="48" r="8" fill="#60a5fa"/>
                  <circle cx="176" cy="48" r="8" fill="#4f46e5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: שירותים (מטקעים של תוכן #1) -->
    <section id="services" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div ref="servicesTitle" class="text-center mb-12 reveal transition-base" data-delay="0">
          <h2 class="text-2xl md:text-4xl font-extrabold">שירותי השכר שאני מציע/ה</h2>
          <p class="mt-3 text-slate-600 max-w-2xl mx-auto">תהליכי שכר מדויקים, שקופים ומתועדים. הכל בהתאם לדיני העבודה ולהסכמים הקיבוציים הרלוונטיים.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- כרטיס 1 -->
          <div ref="serviceCard1" class="reveal transition-base" data-delay="0">
            <div class="h-full rounded-3xl border border-slate-100 p-6 shadow-soft hover:shadow-md">
              <div class="text-3xl">🧾</div>
              <h3 class="mt-3 font-bold text-lg">ניהול שכר חודשי</h3>
              <p class="mt-2 text-slate-600 text-sm">קליטת נתוני שעות, חישוב שכר, הפקת תלושים, התאמות בנק וקליטת הנחיות מעסיק.</p>
              <ul class="mt-3 text-sm text-slate-600 list-disc pr-5 space-y-1">
                <li>ניהול זכויות סוציאליות</li>
                <li>הפרשות לפנסיה ולקרן השתלמות</li>
                <li>דוחות תקופתיים</li>
              </ul>
            </div>
          </div>
          <!-- כרטיס 2 -->
          <div ref="serviceCard2" class="reveal transition-base" data-delay="100">
            <div class="h-full rounded-3xl border border-slate-100 p-6 shadow-soft hover:shadow-md">
              <div class="text-3xl">🏛️</div>
              <h3 class="mt-3 font-bold text-lg">דיווחים לרשויות</h3>
              <p class="mt-2 text-slate-600 text-sm">מס הכנסה, ביטוח לאומי ומע"מ – הגשות מדויקות ובזמן תוך בדיקות איכות.</p>
              <ul class="mt-3 text-sm text-slate-600 list-disc pr-5 space-y-1">
                <li>טפסי 102/126/130</li>
                <li>דיווח ניכויים ותיאומי מס</li>
                <li>מענה לבקרות</li>
              </ul>
            </div>
          </div>
          <!-- כרטיס 3 -->
          <div ref="serviceCard3" class="reveal transition-base" data-delay="200">
            <div class="h-full rounded-3xl border border-slate-100 p-6 shadow-soft hover:shadow-md">
              <div class="text-3xl">👥</div>
              <h3 class="mt-3 font-bold text-lg">קליטת עובדים ופרידה</h3>
              <p class="mt-2 text-slate-600 text-sm">תיק עובד מלא, חוזי העסקה, טפסי קליטה, הליך סיום העסקה וחישובי פיצויים.</p>
              <ul class="mt-3 text-sm text-slate-600 list-disc pr-5 space-y-1">
                <li>Onboarding מסודר</li>
                <li>חישובי חופשה והבראה</li>
                <li>Exit מסודר בהתאם לחוק</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <!-- כרטיס 4 -->
          <div ref="serviceCard4" class="reveal transition-base" data-delay="0">
            <div class="h-full rounded-3xl border border-slate-100 p-6 shadow-soft hover:shadow-md">
              <div class="text-3xl">🧩</div>
              <h3 class="mt-3 font-bold text-lg">ייעוץ מדיניות ושכר</h3>
              <p class="mt-2 text-slate-600 text-sm">בניית טבלאות שכר, נהלי שעות נוספות, עבודה היברידית, ושקיפות פנים-ארגונית.</p>
            </div>
          </div>
          <!-- כרטיס 5 -->
          <div ref="serviceCard5" class="reveal transition-base" data-delay="100">
            <div class="h-full rounded-3xl border border-slate-100 p-6 shadow-soft hover:shadow-md">
              <div class="text-3xl">🔐</div>
              <h3 class="mt-3 font-bold text-lg">בקרות ורגולציה</h3>
              <p class="mt-2 text-slate-600 text-sm">בדיקות ציות לדיני עבודה, שמירת פרטיות ושיתוף מאובטח של נתוני שכר.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: למה אני (מטקעים #2) -->
    <section id="about" class="py-16 md:py-24 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div ref="aboutText" class="reveal transition-base" data-delay="0">
            <h2 class="text-2xl md:text-4xl font-extrabold">למה לעבוד איתי?</h2>
            <p class="mt-3 text-slate-600">אני מביא/ה שילוב של ניסיון מעשי בארגונים לצד שירות אישי זמין. תמחור שקוף, תהליכים מתועדים, ומדדי איכות ברורים.</p>
            <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="rounded-2xl border border-slate-200 p-4 bg-white">
                <dt class="font-semibold">דיוק ואמינות</dt>
                <dd class="text-slate-600 text-sm mt-1">Double-check לכל חישוב ותיקונים יזומים לפני סגירה.</dd>
              </div>
              <div class="rounded-2xl border border-slate-200 p-4 bg-white">
                <dt class="font-semibold">זמינות גבוהה</dt>
                <dd class="text-slate-600 text-sm mt-1">מענה ראשוני עד 24 שעות בימי עסקים.</dd>
              </div>
              <div class="rounded-2xl border border-slate-200 p-4 bg-white">
                <dt class="font-semibold">אבטחת מידע</dt>
                <dd class="text-slate-600 text-sm mt-1">שיתוף מאובטח וחתימה דיגיטלית על מסמכים.</dd>
              </div>
              <div class="rounded-2xl border border-slate-200 p-4 bg-white">
                <dt class="font-semibold">התאמה לעסק</dt>
                <dd class="text-slate-600 text-sm mt-1">מודל שירות גמיש – פר פרויקט או ריטיינר.</dd>
              </div>
            </dl>
          </div>
          <div ref="aboutTestimonials" class="reveal transition-base" data-delay="150">
            <div class="rounded-3xl border border-slate-100 shadow-soft bg-white p-6">
              <h3 class="font-bold text-lg">חוות דעת לקוחות</h3>
              <div class="mt-4 space-y-4">
                <figure class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <blockquote class="text-slate-700">״עברנו לשירות של <b>PayrollPro</b> והשלווה חזרה למחלקת הכספים. כל הדיווחים בזמן וללא טעויות.״</blockquote>
                  <figcaption class="mt-2 text-sm text-slate-500">— נועה, מנכ"לית סטארטאפ</figcaption>
                </figure>
                <figure class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <blockquote class="text-slate-700">״מקצועיות, זמינות, ומחיר הוגן. ממליצה בחום.״</blockquote>
                  <figcaption class="mt-2 text-sm text-slate-500">— דניאל, בעל עסק קטן</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: איך זה עובד (מטקעים #3) -->
    <section id="process" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div ref="processTitle" class="text-center reveal transition-base" data-delay="0">
          <h2 class="text-2xl md:text-4xl font-extrabold">איך זה עובד</h2>
          <p class="mt-3 text-slate-600 max-w-2xl mx-auto">תהליך קצר ומדויק שמאפשר לנו לצאת לדרך במהירות – עם מינימום בירוקרטיה ומקסימום בהירות.</p>
        </div>
        <ol class="mt-10 grid md:grid-cols-4 gap-6">
          <li ref="processStep1" class="reveal transition-base" data-delay="0">
            <div class="h-full rounded-3xl border border-slate-200 p-6 text-center">
              <div class="text-3xl">①</div>
              <h3 class="mt-2 font-bold">שיחת התאמה</h3>
              <p class="text-slate-600 text-sm mt-1">הבנת צרכים, כמות עובדים והיקף פעילות.</p>
            </div>
          </li>
          <li ref="processStep2" class="reveal transition-base" data-delay="100">
            <div class="h-full rounded-3xl border border-slate-200 p-6 text-center">
              <div class="text-3xl">②</div>
              <h3 class="mt-2 font-bold">הצעת מחיר</h3>
              <p class="text-slate-600 text-sm mt-1">מודל קבוע/משתנה ושקיפות מלאה בעלויות.</p>
            </div>
          </li>
          <li ref="processStep3" class="reveal transition-base" data-delay="150">
            <div class="h-full rounded-3xl border border-slate-200 p-6 text-center">
              <div class="text-3xl">③</div>
              <h3 class="mt-2 font-bold">Onboarding</h3>
              <p class="text-slate-600 text-sm mt-1">איסוף מסמכים, הגדרות מערכת ואבטחה.</p>
            </div>
          </li>
          <li ref="processStep4" class="reveal transition-base" data-delay="200">
            <div class="h-full rounded-3xl border border-slate-200 p-6 text-center">
              <div class="text-3xl">④</div>
              <h3 class="mt-2 font-bold">ריצה שוטפת</h3>
              <p class="text-slate-600 text-sm mt-1">ניהול חודשי, דיווחים, ותמיכה שוטפת.</p>
            </div>
          </li>
        </ol>

        <div class="mt-10 text-center reveal transition-base" data-delay="0">
          <button @click="scrollToSection('contact')" class="inline-flex items-center justify-center rounded-2xl bg-ink text-white px-6 py-3 font-semibold shadow-soft hover:bg-slate-900">
            להתחלת תהליך
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION 4: תמחור (אופציונלי/תדמיתי) -->
    <section id="pricing" class="py-16 md:py-24 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4">
        <div ref="pricingTitle" class="text-center reveal transition-base" data-delay="0">
          <h2 class="text-2xl md:text-4xl font-extrabold">תמחור פשוט ושקוף</h2>
          <p class="mt-3 text-slate-600 max-w-2xl mx-auto">ניתן להתאים כל חבילה לצרכים שלכם. המחירים להלן להמחשה וניתנים לשינוי.</p>
        </div>
        <div class="mt-10 grid md:grid-cols-3 gap-6">
          <div ref="pricingCard1" class="reveal transition-base" data-delay="0">
            <div class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 class="font-bold text-lg">Starter</h3>
              <p class="text-3xl font-extrabold mt-2">₪990<span class="text-base font-normal text-slate-500">/חודש</span></p>
              <ul class="mt-4 text-sm text-slate-600 space-y-2">
                <li>עד 5 עובדים</li>
                <li>הפקת תלושים</li>
                <li>דוח חודשי בסיסי</li>
              </ul>
              <button @click="scrollToSection('contact')" class="mt-6 inline-block rounded-2xl border border-slate-300 px-4 py-2 font-semibold hover:border-brand-400">לבירור</button>
            </div>
          </div>
          <div ref="pricingCard2" class="reveal transition-base" data-delay="100">
            <div class="h-full rounded-3xl border-2 border-brand-200 bg-white p-6 shadow-soft">
              <div class="inline-block text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold">הפופולרי</div>
              <h3 class="font-bold text-lg mt-2">Growth</h3>
              <p class="text-3xl font-extrabold mt-2">₪1,790<span class="text-base font-normal text-slate-500">/חודש</span></p>
              <ul class="mt-4 text-sm text-slate-600 space-y-2">
                <li>עד 15 עובדים</li>
                <li>דיווחים לרשויות</li>
                <li>בקרות והתאמות</li>
              </ul>
              <button @click="scrollToSection('contact')" class="mt-6 inline-block rounded-2xl bg-brand-600 text-white px-4 py-2 font-semibold hover:bg-brand-700">בחירה חכמה</button>
            </div>
          </div>
          <div ref="pricingCard3" class="reveal transition-base" data-delay="150">
            <div class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 class="font-bold text-lg">Custom</h3>
              <p class="text-3xl font-extrabold mt-2">הצעת מחיר</p>
              <ul class="mt-4 text-sm text-slate-600 space-y-2">
                <li>מעל 15 עובדים</li>
                <li>ייעוץ מדיניות</li>
                <li>אינטגרציות למערכות</li>
              </ul>
              <button @click="scrollToSection('contact')" class="mt-6 inline-block rounded-2xl border border-slate-300 px-4 py-2 font-semibold hover:border-brand-400">נדבר</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: טופס יצירת קשר -->
    <section id="contact" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-10 items-start">
          <div ref="contactText" class="reveal transition-base" data-delay="0">
            <h2 class="text-2xl md:text-4xl font-extrabold">בואו נדבר</h2>
            <p class="mt-3 text-slate-600">השאירו פרטים ואני/אנחנו נחזור אליכם לשיחת היכרות. אפשר גם לציין שאלות מיוחדות או צורך דחוף.</p>
            <ul class="mt-6 text-slate-600 space-y-2 text-sm">
              <li>📧 example@payrollpro.co.il</li>
              <li>📞 03-555-1234</li>
              <li>📍 תל אביב והאזור | עבודה מרחוק לכל הארץ</li>
            </ul>
          </div>
          <form ref="contactForm" class="reveal transition-base space-y-4" data-delay="100" @submit.prevent="handleSubmit">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">שם מלא</label>
                <input v-model="formData.fullName" type="text" required class="w-full rounded-2xl border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-brand-300 outline-none" placeholder="רות כהן" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">אימייל</label>
                <input v-model="formData.email" type="email" required class="w-full rounded-2xl border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-brand-300 outline-none" placeholder="name@example.com" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">טלפון</label>
              <input v-model="formData.phone" type="tel" class="w-full rounded-2xl border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-brand-300 outline-none" placeholder="05X-XXXXXXX" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">איך אפשר לעזור?</label>
              <textarea v-model="formData.message" rows="4" class="w-full rounded-2xl border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-brand-300 outline-none" placeholder="כמה עובדים? באילו מערכות אתם משתמשים?"></textarea>
            </div>
            <button type="submit" class="w-full sm:w-auto rounded-2xl bg-brand-600 text-white px-6 py-3 font-semibold shadow-soft hover:bg-brand-700">שליחת טופס</button>
            <p class="text-xs text-slate-500">בלחיצה על "שליחת טופס" הנני מאשר/ת יצירת קשר בהתאם למדיניות הפרטיות.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- פוטר -->
    <footer class="border-t border-slate-100 py-8">
      <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {{ currentYear }} PayrollPro. כל הזכויות שמורות.</p>
        <div class="flex items-center gap-4">
          <button @click="scrollToSection('hero')" class="hover:text-brand-700 cursor-pointer">למעלה</button>
          <button @click="scrollToSection('contact')" class="hover:text-brand-700 cursor-pointer">צור קשר</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// Form data
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  message: ''
})

// Current year for footer
const currentYear = computed(() => new Date().getFullYear())

// Form submission handler
const handleSubmit = () => {
  alert('תודה! נחזור אליכם בהקדם.')
  formData.value = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  }
}

// Smooth scrolling navigation
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Scroll animation setup
onMounted(() => {
  // Intersection Observer for scroll animations
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10)
        setTimeout(() => {
          el.classList.add('revealed')
        }, delay)
        io.unobserve(el)
      }
    })
  }, { threshold: 0.2 })

  // Observe all reveal elements
  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.add('transition-base')
    io.observe(el)
  })

  // Hover animations for cards
  document.querySelectorAll('.shadow-soft').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)'
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)'
    })
  })
})
</script>

<style scoped>
/* בסיס לאנימציות גלילה */
.reveal { 
  opacity: 0; 
  transform: translateY(16px); 
}

.revealed { 
  opacity: 1; 
  transform: translateY(0); 
}

.transition-base { 
  transition: all 700ms cubic-bezier(.2,.8,.2,1); 
}

/* Custom brand colors - using direct hex values for better compatibility */
.bg-brand-50 { background-color: #f6f9ff; }
.bg-brand-100 { background-color: #eaf1ff; }
.bg-brand-200 { background-color: #cfe0ff; }
.bg-brand-300 { background-color: #a9c6ff; }
.bg-brand-400 { background-color: #7ba6ff; }
.bg-brand-500 { background-color: #4d85ff; }
.bg-brand-600 { background-color: #2f6dff; }
.bg-brand-700 { background-color: #2155d6; }
.bg-brand-800 { background-color: #1b46ad; }
.bg-brand-900 { background-color: #183e93; }

.text-brand-100 { color: #eaf1ff; }
.text-brand-500 { color: #4d85ff; }
.text-brand-600 { color: #2f6dff; }
.text-brand-700 { color: #2155d6; }

.border-brand-200 { border-color: #cfe0ff; }
.border-brand-300 { border-color: #a9c6ff; }
.border-brand-400 { border-color: #7ba6ff; }

.ring-brand-300 { --tw-ring-color: #a9c6ff; }

.hover\:bg-brand-700:hover { background-color: #2155d6; }
.hover\:border-brand-300:hover { border-color: #a9c6ff; }
.hover\:border-brand-400:hover { border-color: #7ba6ff; }
.hover\:text-brand-700:hover { color: #2155d6; }

.focus\:ring-brand-300:focus { --tw-ring-color: #a9c6ff; }

.text-ink { color: #0f172a; }
.bg-ink { background-color: #0f172a; }
.hover\:bg-slate-900:hover { background-color: #0f172a; }

/* Shadow utilities */
.shadow-soft { 
  box-shadow: 0 10px 25px rgba(2, 6, 23, 0.06); 
}

/* Blur utilities */
.blur-3xl { 
  filter: blur(64px); 
}

/* Font family */
body {
  font-family: 'Assistant', system-ui, ui-sans-serif, 'Segoe UI', 'Helvetica Neue', sans-serif;
}

/* Button styles to match original link appearance */
button {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

button:focus {
  outline: none;
}
</style>
