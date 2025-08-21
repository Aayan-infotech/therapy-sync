(function ($) {
  "use strict";

  if ($(".lang-switcher").length) {
    $(".lang-switcher").on("click", function (e) {
      try {
        $(this).toggleClass("lang-switcher--active");
      } catch (error) {
        console.error("Language switcher error:", error);
      }
    });
  }

  $(document).ready(function () {
    i18next.use(i18nextBrowserLanguageDetector).init(
      {
        fallbackLng: "en",
        detection: {
          order: [
            "querystring",
            "cookie",
            "localStorage",
            "sessionStorage",
            "navigator",
            "htmlTag",
          ],
          caches: ["localStorage", "cookie"],
          lookupQuerystring: "lng",
          lookupCookie: "i18next",
          lookupLocalStorage: "i18nextLng",
          lookupSessionStorage: "i18nextLng",
        },
        resources: {
          de: {
            translation: {
              // navbar
              "topbar.email": "expacttheraphy@gmail.com",
              "topbar.address": "8/05 Mozilla Golden Street",
              "topbar.help": "Hilfe",
              "topbar.coaching": "contact@dombrowe.berlin",
              "language.english": "Englisch",
              "language.german": "Deutsch",
              "header.logo_alt": "Therapie Logo",
              "menu.home": "Startseite",
              "menu.individual": "Einzeltherapie",
              "menu.couples": "Paartherapie",
              "menu.executive": "Führungskräfte-Coaching",
              "menu.about": "Über uns",
              "menu.contact": "Kontakt",
              "menu.book": "Beratung buchen",

              "slider1.title": "Psychodynamische Therapie für Expats -",
              "slider1.title_thin": "Wo auch immer das Leben",
              "slider1.title_base": "Sie hinführt",
              "slider1.shape_alt": "Dekorative Textform",
              "slider1.text":
                "Spezialisierte Unterstützung für international mobile Einzelpersonen und Paare – überall auf der Welt.",
              "slider1.cta1": "Vereinbaren Sie Ihre Beratung",
              "slider1.cta2": "Mehr erfahren",

              "slider2.title": "Willkommen bei Die Expat Therapy! -      ",
              "slider2.text":
                "Bei Expat Therapy verstehen wir die einzigartigen Herausforderungen, die mit dem Leben in einem neuen Land verbunden sind.",
              "slider2.cta1": "Vereinbaren Sie Ihre Beratung",
              "slider2.cta2": "Mehr erfahren",

              // opening

              "opening.title": "Das Leben im Ausland kann schwierig sein.",
              "opening.intro":
                "Wenn Sie über Grenzen hinweg leben und arbeiten, warten Ihre Herausforderungen nicht auf den „richtigen Zeitpunkt“ oder den „richtigen Ort“.",

              "opening.scenario1.title":
                "Fühlen Sie sich bei der Arbeit überfordert?",
              "opening.scenario1.text":
                "Eine Krise bei der Arbeit kann auftreten, während Sie zwischen den Zeitzonen pendeln – ohne Ihr gewohntes Unterstützungsnetzwerk ist das schwer zu bewältigen.",

              "opening.scenario2.title": "Kämpfen Sie mit Ihrer Beziehung?",
              "opening.scenario2.text":
                "Spannungen mit Ihrem Partner können entstehen, weit entfernt von Ihrem gewohnten Unterstützungssystem, was Sie isoliert fühlen lässt.",

              "opening.scenario3.title": "Schleicht sich Einsamkeit ein?",
              "opening.scenario3.text":
                "Und manchmal, trotz Ihrer Erfolge, fühlen sich Einsamkeit, Unsicherheit oder Erschöpfung überwältigend an.",

              "opening.conclusion.title":
                "Sie müssen sich dem nicht allein stellen",
              "opening.conclusion.text":
                'Mit <span class="emphasis">Expat Therapy</span> müssen Sie Ihre psychische Gesundheit nicht aufschieben, bis Sie wieder zu Hause sind oder sich woanders eingelebt haben.',
              "opening.conclusion.cta": "Sie können hier und jetzt beginnen.",

              // Feature Section
              "feature.cognitive.title": "Kognitive Beratung",
              "feature.cognitive.description":
                "Unterstützung von Personen bei der Bewältigung von Herausforderungen und Verbesserung ihrer Lebensqualität",

              "feature.academic.title": "Akademische Beratung",
              "feature.academic.description":
                "Hilfe für Studierende bei akademischen Herausforderungen und Karriereplanung",

              "feature.career.title": "Karriereberatung",
              "feature.career.description":
                "Professionelle Unterstützung bei Berufswahl und Karriereentwicklung",

              "feature.readmore": "Mehr erfahren",
              //about section

              "about.image_alt": "Therapie Sync Team",
              "about.experience": "+ Jahre Erfahrung",
              "about.tagline": "ÜBER UNS",
              "about.title": "Lernen Sie unseren Arzt kennen",
              "about.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services für Ihr Unternehmen. Professionelle Beratung für individuelle Bedürfnisse.",
              "about.image2_alt": "Unsere Methoden",

              "about.cta": "Mehr erfahren",
              "about.shape_alt": "Dekorative Grafik",
              "credentials.title": "Dr. Christian Dombrowe",
              "credentials.list1":
                "Voll approbierter psychodynamischer Therapeut (staatlich anerkannt in Deutschland)",
              "credentials.list2":
                "Zertifiziert in relationaler und systemisch-psychodynamischer Therapie",
              "credentials.list3":
                "Organisationspsychologe (systemisch-psychodynamisches Führungskräfte-Coaching)",
              "credentials.list4": "Fließend in Englisch und Deutsch",

              "specializations.title": "Spezialisierungen:",
              "specializations.item1": "✔ Psychische Gesundheit von Expats",
              "specializations.item2": "✔ Interkulturelle Paare",
              "specializations.item3": "✔ Trauma & Angststörungen",
              "specializations.item4": "✔ Coaching für globale Mobilität",

              // feature updated
              "feature.one.title": "Zweisprachig – Englisch & Deutsch",
              "feature.one.text":
                "Therapie für Menschen, deren Leben nicht in einen Ort passt.",

              "feature.two.title": "Staatlich anerkannte Therapie",
              "feature.two.text":
                "Therapie für Menschen, deren Leben nicht in einen Ort passt.",

              "feature.three.title": "Sicher & Vertraulich",
              "feature.three.text":
                "Verschlüsselte, private Videositzungen über die Expat-Therapie-App.",

              "feature.four.title": "Kulturell Sensibel",
              "feature.four.text":
                "Fachwissen zu den besonderen Herausforderungen des Expat-Lebens und interkultureller Beziehungen.",
              // approach

              "approach.tagline": "Unser Ansatz",
              "approach.title":
                "Wir sind, wer wir sind, wegen der Auswirkungen, die andere auf uns hatten. Echte Veränderung geschieht durch bedeutungsvolle Beziehungen.",
              "approach.description1":
                "Unser therapeutischer Ansatz basiert auf Zusammenarbeit und gegenseitigem Verständnis. Durch eine unterstützende Partnerschaft schaffen wir einen Raum, in dem emotionales Wachstum gedeihen kann.",
              "approach.description2":
                "Dieser Prozess führt zu tiefgreifender persönlicher Transformation und hilft Einzelpersonen, bedeutungsvollere Verbindungen und ein tieferes Verständnis ihrer selbst zu entwickeln.",
              "approach.image_alt":
                "Therapeut in einer Sitzung, der eine warme, sichere Umgebung schafft",
              //call one
              "call.title":
                "When you live and work across borders, your challenges don’t wait…”",
              "call.description":
                "Business tailored design, management & support services<br>business agency elit, sed do eiusmod tempor majority have<br>in some we form, by injected humour solution.",
              "call.button": "make an appointment",
              "call.alt_shape": "Therapy Sync decorative shape",
              "call.alt_shape2": "Therapy Sync decorative shape",

              // Services Section - German
              "services.shape_alt": "Therapie Sync dekorative Form",
              "services.text_shape_alt": "Therapie Sync Textdekoration",
              "services.tagline": "UNSERE BESTEN DIENSTLEISTUNGEN",
              "services.title":
                "Entwickeln Sie eine Marketingstrategie für psychologische Dienstleistungen",
              "services.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services. Professionelle Agenturleistungen mit innovativen Ansätzen für Ihre Bedürfnisse.",

              // Cognitive Psychology
              "services.cognitive.title": "Kognitive Psychologie",
              "services.cognitive.description":
                "Unterstützung von Personen bei der Bewältigung von Herausforderungen und Verbesserung ihrer Lebensqualität",
              "services.cognitive.image_alt": "Illustration kognitive Therapie",

              // Academic Psychology

              "services.academic.description":
                "Förderung von Lernprozessen und Unterstützung bei akademischen Herausforderungen",
              "services.academic.image_alt":
                "Illustration pädagogische Therapie",


              // steps
              "steps.title": "Unser 5-Stufen-Pfad zur Heilung",
              "steps.description":
                "Beginnen Sie eine transformative Reise mit unserem strukturierten 5-Stufen-Prozess, der sorgfältig entwickelt wurde, um Sie in einer einladenden, unterstützenden und mitfühlenden Umgebung zu Heilung und Selbsterkenntnis zu führen.",
              "steps.step1.title": "Erstgespräch",
              "steps.step1.description":
                "— Sprechen Sie mit mir über Ihre Bedürfnisse, unverbindlich",
              "steps.step2.title": "Vereinbarung",
              "steps.step2.description":
                "Wählen Sie Servicetyp, Sitzungslänge und Häufigkeit.",
              "steps.step3.title": "Regelmäßige Sitzungen",
              "steps.step3.description":
                "— Verbinden Sie sich über die Expat-Therapie-App, von überall",
              "steps.step4.title": "Integration",
              "steps.step4.description":
                "— Wenden Sie an, was wir im täglichen Leben und in Beziehungen entdecken.",
              "steps.step5.title": "Laufende Unterstützung",
              "steps.step5.description":
                "Fahren Sie fort oder pausieren Sie, wenn sich Ihre Umstände ändern.",

              // Specialized Areas
              "services.specialized.title": "Spezialgebiete",
              "services.specialized.description":
                "Individuelle Therapieansätze für spezifische Lebenssituationen und Herausforderungen",
              "services.specialized.image_alt": "Illustration Spezialtherapie",

              // Achievements Section - German
              "achievements.tagline": "UNSERE ERFOLGE",
              "achievements.title":
                "Wenn Sie grenzüberschreitend leben und arbeiten, warten Ihre Herausforderungen nicht …",
              "achievements.shape_alt": "Therapie Sync dekorative Form",
              "achievements.card_shape": "Therapie Sync Karten-Dekoration",
              // best service
              "services.cognitive.title": "Individuelle Psychotherapie",
              "services.cognitive.description":
                "Bietet einen sicheren, vertraulichen Raum für Selbstreflexion, persönliches Wachstum und Heilung.",
              "services.cognitive.image_alt":
                "Therapieraum mit Ledersofa und warmem Licht",
              "services.academic.title": "Paartherapie",
              "services.academic.description":
                "Ein Therapeut fördert Gespräche, um Verständnis zu vertiefen, Konflikte zu lösen und die Partnerschaft zu stärken.",
              "services.academic.image_alt":
                "Therapieraum mit Ledersofa und warmem Licht",
              "services.list.depression": "Depression & Angst",
              "services.list.trauma": "Trauma & PTBS",
              "services.list.stress": "Stressbewältigung",
              "services.list.relationship": "Beziehungsschwierigkeiten",
              "services.list.communication": "Kommunikationsprobleme",
              "services.list.conflict": "Konfliktlösung",
              "services.list.trust": "Vertrauensprobleme",
              "services.list.transitions": "Lebensübergänge",
              // Achievement Cards
              "achievements.projects": "Erfolgreiche Projekte",
              "achievements.customers": "Zufriedene Kunden",
              "achievements.consultants": "Berater Planung",
              "achievements.awards": "Gewonnene Auszeichnungen",

              // expertise
              "professional_expertise.title": "Professionelle Expertise",
              "professional_expertise.text":
                "Organisationspsychologe, Psychotherapeut und Executive Coach mit Spezialausbildungen in:",

              "expertise.list1": "Methodik des Tavistock Institute",
              "expertise.list2": "Systemisch-psychodynamisches Coaching",
              "expertise.list3": "Gruppendynamik und Organisationspsychologie",
              "expertise.list4": "Kultursensible und einfühlsame Betreuung",
              "philosophy.title": "Einzigartige Kombination",
              "philosophy.text":
                "Die seltene Kombination aus organisationspsychologischem Fachwissen und psychotherapeutischer Ausbildung bietet tiefe Einblicke sowohl in die individuelle Führungsdynamik als auch in Organisationssysteme.",
              // Why Choose Us Section - German
              "why_choose.tagline": "WARUM EXPAT THERAPY WÄHLEN",

              "why_choose.shape_alt": "Therapie Sync dekorative Form",
              "why_choose.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services. Professionelle Agenturleistungen mit modernen Ansätzen für Ihre Bedürfnisse.",
              "why_choose.list_image_alt":
                "Therapie Sync Vorteile Illustration",
              // why choose
              "why_choose.tagline": "WARUM EXPAT THERAPY WÄHLEN",
              "why_choose.title":
                "Wir bieten Psychologie Entscheidende Therapie",
              "why_choose.shape_alt": "Therapie Sync dekorative Form",
              "why_choose.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services. Professionelle Agenturleistungen mit modernen Ansätzen für Ihre Bedürfnisse.",
              "why_choose.icons.psychology": "Psychologie Symbol",
              "why_choose.icons.dating": "Beziehungssymbol",
              "why_choose.icons.helping": "Hilfe Symbol",

              "why_choose.cognitive.description":
                "Therapie für Menschen, deren Leben nicht an einen Ort passt",

              "why_choose.relationships.description":
                "Fachwissen zu den besonderen Herausforderungen des Expat-Lebens und interkultureller Beziehungen.",
              "why_choose.behavior.title": "Vertraulich und sicher",
              "why_choose.behavior.description":
                "Verschlüsselte, private Videositzungen über die Expat Therapy-App.",
              "why_choose.image_alt": "Therapiesitzung im Gange",
              "why_choose.counter_text": "KUNDENUNTERSTÜTZUNG",
              "why_choose.culturally.title": "Zweisprachige Unterstützung",
              "why_choose.culturally.description":
                "Wir treffen Sie in Sitzungen auf Englisch oder Deutsch dort, wo es für Sie am angenehmsten ist.",
              // Bullet Points
              "why_choose.bullet1": "Dating & Beziehungsberatung",
              "why_choose.bullet2":
                "Professionelle Lösungen für moderne Herausforderungen",
              "why_choose.bullet3": "Menschliches Verhalten und Lebenshilfe",

              // Cognitive Psychology
              "why_choose.cognitive.title": "Standortunabhängig",

              // Relationships
              "why_choose.relationships.title": "Kulturell sensibel",

              // Counter
              "why_choose.counter_text": "KUNDENUNTERSTÜTZUNG",
              "why_choose.image_alt": "Therapie Sync Team Unterstützung",

              // Testimonials Section - German
              "testimonials.tagline": "ERFAHRUNGSBERICHTE",
              "testimonials.title":
                "Hat meine Arbeitsweise wirklich verändert <br>und wie ich mit Kunden umgehe",
              "testimonials.main_image_alt": "Therapie Sync Erfahrungsberichte",
              "testimonials.shape_alt": "Therapie Sync dekorative Form",

              // Client 1
              "testimonials.client1.name": "Matthias Cordes",
              "testimonials.client1.title": "Gründer",
              "testimonials.client1.text":
                "Die Therapiesitzungen haben unseren Ansatz zur psychischen Gesundheit am Arbeitsplatz völlig verändert. Die professionelle Beratung half uns, ein unterstützenderes Umfeld für unser Team zu schaffen.",
              "testimonials.client1_alt": "Matthias Cordes Portrait",
              "testimonials.client1_thumb_alt": "Matthias Cordes Vorschaubild",

              // Client 2
              "testimonials.client2.name": "Sarah Müller",
              "testimonials.client2.title": "Marketingleiterin",
              "testimonials.client2.text":
                "Die Zusammenarbeit mit Therapie Sync war transformativ für unsere Teamdynamik. Die Kommunikationsstrategien, die wir gelernt haben, kommen unserer Arbeitskultur täglich zugute.",
              "testimonials.client2_alt": "Sarah Müller Portrait",
              "testimonials.client2_thumb_alt": "Sarah Müller Vorschaubild",

              // Client 3
              "testimonials.client3.name": "Michael Bauer",
              "testimonials.client3.title": "Personalmanager",
              "testimonials.client3.text":
                "Das Führungstraining war während unserer organisatorischen Umstrukturierung von außergewöhnlichem Wert. Die Werkzeuge und Techniken halfen uns, schwierige Übergänge erfolgreich zu bewältigen.",
              "testimonials.client3_alt": "Michael Bauer Portrait",
              "testimonials.client3_thumb_alt": "Michael Bauer Vorschaubild",

              // Client 4
              "testimonials.client4.name": "Emma Schneider",
              "testimonials.client4.title": "Geschäftsführerin",
              "testimonials.client4.text":
                "Die Coaching-Sitzungen für Führungskräfte führten zu messbaren Verbesserungen in unseren Entscheidungsprozessen und der Teamausrichtung. Sehr zu empfehlen für jedes Führungsteam.",
              "testimonials.client4_alt": "Emma Schneider Portrait",
              "testimonials.client4_thumb_alt": "Emma Schneider Vorschaubild",

              // cta
              "cta.headline":
                "Sie müssen nicht warten, bis Sie am 'richtigen Ort' sind, um sich besser zu fühlen.",
              "cta.headline2":
                "Die Therapie kann Sie genau dort erreichen, wo Sie sind – überall auf der Welt.",
              "cta.button": "Vereinbaren Sie noch heute Ihre Beratung",

              // Business Solutions Section - German
              "solutions.tagline": "WIR SIND DIE RICHTIGE LÖSUNG",
              "solutions.title":
                "Psychologie ist ein weites Feld <br>Spezialisierung bringt Erfolg",
              "solutions.shape_alt": "Therapie Sync dekorative Form",
              "solutions.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services. Professionelle Beratung mit modernen Ansätzen für Ihre Bedürfnisse.",
              "solutions.bullet_point":
                "Der richtige Therapeut hilft Ihnen, Fähigkeiten zur Bewältigung Ihrer mentalen Herausforderungen zu entwickeln.",
              "solutions.goal":
                "Unser Ziel ist es, unsere Kunden zufrieden zu stellen und ihre Herausforderungen durch professionelle Unterstützung zu lösen.",
              "solutions.see_more": "MEHR SEHEN",
              "solutions.discover_button": "Mehr entdecken",
              "solutions.watch_button": "VIDEO ANSEHEN",
              "solutions.image_alt":
                "Therapie Sync Geschäftslösungen Illustration",

              "contact.tagline": "KONTAKTIEREN SIE UNS",
              "contact.title":
                "Kontaktieren Sie uns umgehend für <br>professionelle Unterstützung",
              "contact.shape_alt": "Therapie Sync dekorative Form",
              "contact.description":
                "Nehmen Sie Kontakt mit unserem professionellen Team auf für maßgeschneiderte Unterstützung und Lösungen.",

              // Form Labels
              "contact.name_label": "Name",
              "contact.email_label": "E-Mail",
              "contact.phone_label": "Telefon",
              "contact.program_label": "Programm",
              "contact.program_sr": "Programm auswählen",

              // contact
              "contact.phone_title": "Jetzt Kontakt aufnehmen",
              "contact.email_title": "E-Mail senden",
              "contact.location_title": "Standort",
              "contact.address": "8/05 Mozilla Golden",
              "contact.logo_alt": "Therapieraum mit Ledersofa und warmem Licht",
              "contact.image_alt":
                "Therapieraum mit Ledersofa und warmem Licht",
              "contact.tagline": "KONTAKTIEREN SIE UNS",
              "contact.form_title": "Beginnen Sie Ihre Führungsreise",
              "contact.form_description":
                "Ich biete ein kostenloses Vorgespräch per Telefon oder Videokonferenz an, in dem Sie mich kennenlernen und Ihr Anliegen schildern können. Gemeinsam finden wir heraus, ob wir zueinander passen.",
              "contact.name_label": "Name",
              "contact.name_placeholder": "Ihr Name *",
              "contact.email_label": "E-Mail",
              "contact.email_placeholder": "Ihre E-Mail *",
              "contact.phone_label": "Telefon",
              "contact.phone_placeholder": "Ihre Telefonnummer",
              "contact.program_label": "Programm",
              "contact.program_default": "Programm auswählen",
              "contact.program1": "Einzeltherapie",
              "contact.program2": "Führungskräfte-Coaching",
              "contact.program3": "Paartherapie",
              "contact.submit_button": "Anfrage senden",

              // Placeholders
              "contact.name_placeholder": "Ihr Name *",
              "contact.email_placeholder": "Ihre E-Mail *",
              "contact.phone_placeholder": "Ihre Telefonnummer",
              // footer
              "footer.shape_alt": "Therapieraum mit Ledersofa und warmem Licht",
              "footer.logo_alt": "Therapieraum mit Ledersofa und warmem Licht",
              "footer.description":
                "Wir bieten Ihnen ein umfassendes System und erläutern die Lehren der großen Entdecker der Wahrheit, des Baumeisters, weil ...",
              "footer.social.facebook": "Facebook",
              "footer.social.twitter": "Twitter",
              "footer.social.google": "Google",
              "footer.social.linkedin": "LinkedIn",
              "footer.social.instagram": "Instagram",
              "footer.services_title": "Dienstleistungen",
              "services.individual": "Einzeltherapie",
              "services.couples": "Paartherapie",
              "services.executive": "Führungskräfte-Coaching",
              "footer.links_title": "Wichtige Links",
              "footer.services.about": "Über uns",
              "footer.services.appointment": "Termin vereinbaren",
              "footer.services.contact": "Kontakt",
              "footer.contact_title": "Kontaktinformation",
              "footer.recognition":
                "Psychodynamische Therapie ist eine von drei staatlich anerkannten Therapieformen in Deutschland.",
              "footer.shape2_alt":
                "Therapieraum mit Ledersofa und warmem Licht",
              "footer.copyright":
                "Copyright Therapy Sync <span class='dynamic-year'></span>, Alle Rechte vorbehalten",
              "footer.developer":
                "Entworfen & Entwickelt von <a href='https://aayaninfotech.com/' class='text-decoration-none text-light' target='_blank'>Aayan Infotech</a>",

              // Program Options
              "contact.program_default": "Programm auswählen",
              "contact.program1": "Einzeltherapie",
              "contact.program2": "Gruppenberatung",

              // Button
              "contact.submit_button": "ANFRAGE SENDEN",

              // excecutive theraphy
              "executive.title": "Führungskräfte-Coaching-Dienste",
              "executive.list1": "Entwicklung von Führungskompetenzen",
              "executive.list2": "Psychische Gesundheit und Leistungsfähigkeit",
              "executive.list3": "Individuelle Führungskräfteentwicklung",
              "executive.list4": "Persönliches und berufliches Wachstum",
              "executive.cta": "Mehr erfahren",
              "executive.image_alt":
                "Executive Coaching für global mobile Führungskräfte",

              // Add these new keys to the German section:
              "executive.core_focus": "Kernbereiche",
              "executive.leadership_development":
                "Entwicklung von Führungsautorität",
              "executive.leadership_point1":
                "Verstehen und Management zwischenmenschlicher Arbeitsplatzbeziehungen",
              "executive.leadership_point2":
                "Selbstbewusstes Übernehmen Ihrer Autorität in der Rolle",
              "executive.leadership_point3":
                "Übergang von reaktiver zu strategischer Führung",
              "executive.psychological_health":
                "Psychische Gesundheit & Leistung",
              "executive.health_point1":
                "Erreichen von Spitzenleistungen bei gleichzeitiger emotionaler Gesundheit",
              "executive.health_point2":
                "Schaffung gesundheitsfördernder Arbeitskulturen",
              "executive.health_point3":
                "Burnout-Prävention bei Aufrechterhaltung hoher Standards",
              "executive.safe_space": "Sicherer Raum für Führungskräfte",
              "executive.safe_space_text":
                "Ich biete Unternehmern und Führungskräften einen sicheren Raum, um Dampf abzulassen und ihre Sorgen und Bedenken zu äußern, und biete die vertrauliche Unterstützung, die Führungskräften oft fehlt.",
              "executive.individual_coaching":
                "Individuelles Executive Coaching",
              "executive.one_on_one": "Einzelne Führungskräfteentwicklung",
              "executive.development_point1":
                "Verbesserung des strategischen Denkens und der Entscheidungsfindung",
              "executive.development_point2":
                "Fähigkeiten im Personalmanagement und Konfliktlösung",
              "executive.development_point3":
                "Emotionale Intelligenz und Management zwischenmenschlicher Beziehungen",
              "executive.development_point4":
                "Autoritätsentwicklung und Rollenklarheit",
              "executive.development_point5":
                "Stressmanagement und Burnout-Prävention",
              "executive.growth": "Persönliches & berufliches Wachstum",
              "executive.growth_point1":
                "Erreichen Sie optimale Leistung bei psychischer Gesundheit",
              "executive.growth_point2":
                "Bewältigen Sie Karriereübergänge und Entscheidungen geschickt",
              "executive.growth_point3":
                "Aufbau von Resilienz gegen Burnout und Überforderung",
              "executive.growth_point4":
                "Verbessern Sie Entscheidungsklarheit und Selbstvertrauen",
              "executive.growth_point5":
                "Entwickeln Sie effektive Kommunikations- und Motivationsfähigkeiten",
                "topbar.coachingtext":"Für Coaching",

              footer: {
                shape_alt: "Therapie Sync dekorative Form",
                logo_alt: "Therapie Sync Logo",
                description:
                  "Wir bieten Ihnen ein umfassendes System und erläutern die Lehren der großen Entdecker der Wahrheit, des Baumeisters, weil ...",
                social: {
                  facebook: "Facebook",
                  twitter: "Twitter",
                  google: "Google",
                  linkedin: "LinkedIn",
                  instagram: "Instagram",
                },
                services_title: "Dienstleistungen",
                services: {
                  about: "Über uns",
                  appointment: "Termin vereinbaren",
                  blog: "Aktuelle Beiträge",
                  team: "Unser Team",
                  contact: "Kontakt",
                },
                contact_title: "Kontaktieren Sie uns",
                contact: {
                  phone: "+49 157 300 20 315",
                  email: "contact@psychotherapy-dombrowe.com",
                  address: "8/05 Mozilla Golden",
                },
                copyright:
                  "Copyright Therapie Sync <span class='dynamic-year'></span>, Alle Rechte vorbehalten",
                shape2_alt: "Therapie Sync dekorative Form",
              },
              mobile: {
                logo_alt: "Therapie Sync",
                contact: {
                  email: "contact@psychotherapy-dombrowe.com",
                  phone: "+49 157 300 20 315",
                },
                social: {
                  facebook: "Facebook",
                  twitter: "Twitter",
                  google: "Google",
                  linkedin: "LinkedIn",
                  instagram: "Instagram",
                },
              },
              search: {
                placeholder: "Hier suchen...",
              },
              sidebar: {
                logo_alt: "Therapie Sync",
                description:
                  "Unsere professionelle Beratung hilft Ihnen bei der Bewältigung von Herausforderungen und verbessert Ihre Lebensqualität nachhaltig.",
                contact_title: "Kontaktinformation:",
                contact: {
                  address: "85 Ketch Harbour Road Bensalem, PA 19020",
                  email: "contact@psychotherapy-dombrowe.com",
                  phone: "+49 157 300 20 315",
                },
                social: {
                  facebook: "Facebook",
                  twitter: "Twitter",
                  google: "Google",
                  linkedin: "LinkedIn",
                  instagram: "Instagram",
                },
                newsletter_title: "Newsletter:",
                newsletter_placeholder: "E-Mail-Adresse",
                submit: "absenden",
              },
            },
          },
          en: {
            translation: {
              // navbar
              "topbar.email": "expacttheraphy@gmail.com",
              "topbar.address": "8/05 Mozilla Golden Street",
              "topbar.coaching": "contact@dombrowe.berlin",
              "topbar.help": "Help you",
              "language.english": "English",
              "language.german": "German",
              "header.logo_alt": "Therapy Logo",
              "menu.home": "Home",
              "menu.individual": "Individual Therapy",
              "menu.couples": "Couples Therapy",
              "menu.executive": "Executive Coaching",
              "menu.about": "About",
              "menu.contact": "Contact",
              "menu.book": "Book Consultation",
              "slider1.title": "Psychodynamic Therapy for Expats -",
              "slider1.title_thin": "Wherever Life Takes",
              "slider1.title_base": "You",
              "slider1.shape_alt": "Decorative text shape",
              "slider1.text":
                "Specialized support for internationally mobile individuals and couples… anywhere in the world.",
              "slider1.cta1": "Schedule Your Consultation",
              "slider1.cta2": "Learn More",

              "slider2.title": "Welcome to the Expat Therapy! -",
              "slider2.text":
                "At Expat Therapy, we understand the unique challenges that come with living in a new country.",
              "slider2.cta1": "Schedule Your Consultation",
              "slider2.cta2": "Learn More",

              // opening
              "opening.title": "Navigating Life Abroad Can Be Tough.",
              "opening.intro":
                'When you live and work across borders, your challenges don\'t wait for the "right time" or "right place" to arise.',

              "opening.scenario1.title": "Feeling Overwhelmed at Work?",
              "opening.scenario1.text":
                "A crisis at work can hit while you're between time zones, making it hard to cope without your usual support network.",

              "opening.scenario2.title": "Struggling with Your Relationship?",
              "opening.scenario2.text":
                "Tension with your partner might surface miles away from your usual support system, leaving you feeling isolated.",

              "opening.scenario3.title": "Is Loneliness Creeping In?",
              "opening.scenario3.text":
                "And sometimes, despite your achievements, the loneliness, uncertainty, or exhaustion feels overwhelming.",

              "opening.conclusion.title": "You Don't Have to Face It Alone",
              "opening.conclusion.text":
                "With <span class=\"emphasis\">Expat Therapy</span>, you don't have to put your mental health on hold until you're back home or settled somewhere new.",
              "opening.conclusion.cta": "You can start here, now.",
              "why_choose.culturally.title": "Bilingual Support",
              "why_choose.culturally.description":
                "English or German sessions to meet you where you’re most comfortable.",
              // Feature Section
              "feature.cognitive.title": "Cognitive Counselling",
              "feature.cognitive.description":
                " supporting individuals in overcoming challenges, and enhancing their quality of life whether it's",

              "feature.academic.title": "Academic Counselling",
              "feature.academic.description":
                " supporting individuals in overcoming challenges, and enhancing their quality of life whether it's",

              "feature.career.title": "Career Coaching",
              "feature.career.description":
                "supporting individuals in overcoming challenges, and enhancing their quality of life whether it's",

              "feature.readmore": "Read More",
              // about section
              "about.image_alt": "Expact Theraphy",
              "about.experience": "+ Experience",
              "about.tagline": "ABOUT US",
              "about.title": " Meet our doctor",

              "about.image2_alt": "Expact Theraphy",

              "about.cta": "About More",
              "about.shape_alt": "Dekorative Grafik",
              "credentials.title": "Dr. Christian Dombrowe",
              "credentials.list1":
                "Fully Approbated Psychodynamic Therapist (State-Recognized in Germany)",
              "credentials.list2":
                "Certified in Relational & Systems-Psychodynamic Therapy",
              "credentials.list3":
                "Organizational Psychologist (Systems-Psychodynamic Executive Coaching)",
              "credentials.list4": "Fluent in English & German",

              "specializations.title": "Specializations:",
              "specializations.item1": "✔ Expat Mental Health",
              "specializations.item2": "✔ Intercultural Couples",
              "specializations.item3": "✔ Trauma & Anxiety",
              "specializations.item4": "✔ Global Mobility Coaching",

              // feature updated
              "feature.one.title": "Bilingual – English & German",
              "feature.one.text":
                "Therapy designed for people whose lives don’t fit in one place.",

              "feature.two.title": "State-Recognized Therapy",
              "feature.two.text":
                "Therapy designed for people whose lives don’t fit in one place.",

              "feature.three.title": "Secure & Confidential",
              "feature.three.text":
                "Encrypted, private video sessions through the Expat Therapy app.",

              "feature.four.title": "Culturally Sensitive",
              "feature.four.text":
                "Expertise in the unique challenges of expat life and intercultural relationships.",

              // call one
              "call.title":
                "When you live and work across borders, your challenges don’t wait…”",
              "call.description":
                "Business tailored design, management & support services<br>business agency elit, sed do eiusmod tempor majority have<br>in some we form, by injected humour solution.",
              "call.button": "make an appointment",
              "call.alt_shape": "Therapy Sync decorative shape",
              "call.alt_shape2": "Therapy Sync decorative shape",

              // Services Section - English
              "services.shape_alt": "Therapy Sync decorative shape",
              "services.text_shape_alt": "Therapy Sync text decoration",
              "services.tagline": "OUR BEST SERVICE",
              "services.title":
                "Develop a Marketing Strategy To Promote Psychology Service",
              "services.description":
                "Business tailored design, management & support services Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",

              // Cognitive Psychology
              "services.cognitive.title": "Cognitive Psychology",
              "services.cognitive.description":
                "Supporting individuals in overcoming challenges, and enhancing their quality of life whether it's",
              "services.cognitive.image_alt": "Cognitive therapy illustration",
              // best service
              "services.cognitive.title": "Individual Psychotherapy",
              "services.cognitive.description":
                "It provides a safe, confidential space for self-reflection, personal growth, and healing.",
              "services.cognitive.image_alt":
                "Therapy room with leather sofa and warm lighting",
              "services.academic.title": "Couples Therapy",
              "services.academic.description":
                "A therapist facilitates discussions to promote understanding, resolve disputes, and strengthen the partnership.",
              "services.academic.image_alt":
                "Therapy room with leather sofa and warm lighting",
              "services.list.depression": "Depression & anxiety",
              "services.list.trauma": "Trauma & PTSD",
              "services.list.stress": "Stress management",
              "services.list.relationship": "Relationship difficulties",
              "services.list.communication": "Communication breakdown",
              "services.list.conflict": "Conflict resolution",
              "services.list.trust": "Trust issues",
              "services.list.transitions": "Life transitions",
              // Academic Psychology

              "services.academic.description":
                "Supporting individuals in overcoming challenges, and enhancing their quality of life whether it's",
              "services.academic.image_alt": "Academic therapy illustration",

              // Specialized Areas
              "services.specialized.title": "Specialized Areas",
              "services.specialized.description":
                "Supporting individuals in overcoming challenges, and enhancing their quality of life whether it's",
              "services.specialized.image_alt":
                "Specialized therapy illustration",

              "achievements.tagline": "OUR FUN FACTS",
              "achievements.title":
                "When you live and work across borders, your challenges don’t wait…”",
              "achievements.shape_alt": "Therapy Sync decorative shape",
              "achievements.card_shape": "Therapy Sync card decoration",

              // Achievement Cards
              "achievements.projects": "Projects Successful",
              "achievements.customers": "Happy Customers",
              "achievements.consultants": "Consultants Planning",
              "achievements.awards": "Awards Won",

              //why choose us

              "why_choose.tagline": " WHY CHOOSE EXPAT THERAPY",

              "why_choose.shape_alt": "Therapy Sync decorative shape",
              "why_choose.description":
                "Business tailored design, management & support services, Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",
              "why_choose.list_image_alt": "Therapy Sync benefits illustration",
              "why_choose.tagline": "WHY CHOOSE EXPAT THERAPY",
              "why_choose.title": "We Providing Psychology Crucial theraphy",
              "why_choose.shape_alt": "Therapy Sync decorative shape",
              "why_choose.description":
                "Business tailored design, management & support services, Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",
              "why_choose.icons.psychology": "Psychology icon",
              "why_choose.icons.dating": "Dating icon",
              "why_choose.icons.helping": "Helping icon",
              "why_choose.cognitive.title": "Location Independent",
              "why_choose.cognitive.description":
                "Therapy designed for people whose lives don’t fit in one place",
              "why_choose.relationships.title": "Culturally Sensitive",
              "why_choose.relationships.description":
                "Expertise in the unique challenges of expat life and intercultural relationships.",
              "why_choose.behavior.title": "Confidential & Secure",
              "why_choose.behavior.description":
                "Encrypted, private video sessions through the Expat Therapy app.",
              "why_choose.image_alt": "Therapy session in progress",
              "why_choose.counter_text": "CUSTOMER SUPPORT",

              // Bullet Points
              "why_choose.bullet1": "Dating & Relationship of Psychologist",
              "why_choose.bullet2":
                "Professional Solutions for Modern Challenges",
              "why_choose.bullet3": "Human Behavior and Helping Lives",

              // approach
              "approach.tagline": "Our Approach",
              "approach.title":
                "We are who we are because of the impact others have had on us. Real change happens through meaningful relationships.",
              "approach.description1":
                "Our therapeutic approach is built on collaboration and mutual understanding. Through a supportive partnership, we create a space where emotional growth can flourish.",
              "approach.description2":
                "This process leads to profound personal transformation, helping individuals build more meaningful connections and a deeper understanding of themselves.",
              "approach.image_alt":
                "Therapist in session creating a warm, safe environment",

              // excecutive
         
              // steps
              "steps.title": "Our 5-Step Path to Healing",
              "steps.description":
                "Embark on a transformative journey with our structured 5-step process, thoughtfully designed to guide you towards healing and self-discovery in a welcoming, supportive, and compassionate environment.",
              "steps.step1.title": "Initial Consultation",
              "steps.step1.description":
                "— Talk to me about your needs, no obligation",
              "steps.step2.title": "Agreement",
              "steps.step2.description":
                "Choose service type, session length, and frequency.",
              "steps.step3.title": "Regular Sessions",
              "steps.step3.description":
                "— Connect via the Expat Therapy app, from anywhere",
              "steps.step4.title": "Integration",
              "steps.step4.description":
                "— Apply what we uncover to daily life and relationships.",
              "steps.step5.title": "Ongoing Support",
              "steps.step5.description":
                "Continue or pause as your circumstances change.",

              // Counter
              "why_choose.counter_text": "CUSTOMER SUPPORT",
              "why_choose.image_alt": "Therapy Sync team support",

              "testimonials.tagline": "OUR TESTIMONIALS",
              "testimonials.title":
                "Truly Transformed The Way I Work <br>And Manage Our Clients",
              "testimonials.main_image_alt": "Therapy Sync testimonials",
              "testimonials.shape_alt": "Therapy Sync decorative shape",

              // Client 1
              "testimonials.client1.name": "Matthew Cordes",
              "testimonials.client1.title": "Founder",
              "testimonials.client1.text":
                "The therapy sessions completely transformed our approach to mental health in the workplace. The professional guidance helped us create a more supportive environment for our team.",
              "testimonials.client1_alt": "Matthew Cordes portrait",
              "testimonials.client1_thumb_alt": "Matthew Cordes thumbnail",

              // Client 2
              "testimonials.client2.name": "Sarah Johnson",
              "testimonials.client2.title": "Marketing Director",
              "testimonials.client2.text":
                "Working with Therapy Sync has been transformative for our team dynamics. The communication strategies we learned continue to benefit our workplace culture daily.",
              "testimonials.client2_alt": "Sarah Johnson portrait",
              "testimonials.client2_thumb_alt": "Sarah Johnson thumbnail",

              // Client 3
              "testimonials.client3.name": "Michael Bauer",
              "testimonials.client3.title": "HR Manager",
              "testimonials.client3.text":
                "The leadership coaching provided exceptional value during our organizational restructuring. The tools and techniques helped us navigate challenging transitions successfully.",
              "testimonials.client3_alt": "Michael Bauer portrait",
              "testimonials.client3_thumb_alt": "Michael Bauer thumbnail",

              // Client 4
              "testimonials.client4.name": "Emma Schneider",
              "testimonials.client4.title": "CEO",
              "testimonials.client4.text":
                "The executive coaching sessions delivered measurable improvements in our decision-making processes and team alignment. Highly recommend their services for any leadership team.",
              "testimonials.client4_alt": "Emma Schneider portrait",
              "testimonials.client4_thumb_alt": "Emma Schneider thumbnail",
              // expertise
              "professional_expertise.title": "Professional Expertise",
              "professional_expertise.text":
                "Organizational Psychologist, Psychotherapist and Executive Coach with specialized training in:",
              "expertise.list1": "Tavistock Institute methodology",
              "expertise.list2": "Systems-psychodynamic coaching",
              "expertise.list3": "Group dynamics and organizational psychology",
              "expertise.list4": "Culturally sensitive & compassionate care",
              "philosophy.title": "Unique Combination",
              "philosophy.text":
                "The rare combination of organizational psychology expertise and psychotherapy training provides deep insight into both individual leadership dynamics and organizational systems.",

              // Business Solutions Section - English
              "solutions.tagline": "WE'RE GOOD SOLUTION",
              "solutions.title":
                "Psychology is a Broad Field So <br>Consider Narrowing Skill",
              "solutions.shape_alt": "Therapy Sync decorative shape",
              "solutions.description":
                "Business tailored design, management & support services Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",
              "solutions.bullet_point":
                "The right therapist can help you develop the skills to manage your mental health and find effective solutions.",
              "solutions.goal":
                "Our goal is to help our customers be satisfied and solve their challenges through professional support.",
              "solutions.see_more": "SEE MORE",
              "solutions.discover_button": "Discover More",
              "solutions.watch_button": "WATCH VIDEO",
              "solutions.image_alt":
                "Therapy Sync business solutions illustration",

              // cta
              "cta.headline":
                "You don't have to wait until you're in the 'right place' to feel better.",
              "cta.headline2":
                "Therapy can meet you right where you are — anywhere in the world.",
              "cta.button": "Schedule Your Consultation Today",

              "contact.tagline": "CONTACT US",
              "contact.title":
                "Contact Us Immediately For <br>Professional Support",
              "contact.shape_alt": "Therapy Sync decorative shape",
              "contact.description":
                "Get in touch with our professional team for personalized support and solutions tailored to your needs.",

              // contact
              "contact.phone_title": "Get Contact Now",
              "contact.email_title": "Sent Email",
              "contact.location_title": "Location",
              "contact.address": "8/05 Mozilla Golden",
              "contact.logo_alt":
                "Therapy room with leather sofa and warm lighting",
              "contact.image_alt":
                "Therapy room with leather sofa and warm lighting",
              "contact.tagline": "OUR CONTACT US",
              "contact.form_title": "Start Your Leadership Journey",
              "contact.form_description":
                "I offer a free preliminary conversation by phone or videoconference, in which you can get to know me and outline the problem that you want to work on. Together we can find out if we are a good fit.",
              "contact.name_label": "Name",
              "contact.name_placeholder": "Enter Your Name *",
              "contact.email_label": "Email",
              "contact.email_placeholder": "Enter Your Email *",
              "contact.phone_label": "Phone",
              "contact.phone_placeholder": "Enter Your Phone No.",
              "contact.program_label": "Program",
              "contact.program_default": "Select a Program",
              "contact.program1": "Individual Therapy",
              "contact.program2": "Executive Coaching",
              "contact.program3": "Couples Therapy",
              "contact.submit_button": "Send Your Query",

              // footer
              "footer.shape_alt":
                "Therapy room with leather sofa and warm lighting",
              "footer.logo_alt":
                "Therapy room with leather sofa and warm lighting",
              "footer.description":
                "Will give you a complete account the system, and expound the teachings of the great explorer the truth, the master-builder because ...",
              "footer.social.facebook": "Facebook",
              "footer.social.twitter": "Twitter",
              "footer.social.google": "Google",
              "footer.social.linkedin": "LinkedIn",
              "footer.social.instagram": "Instagram",
              "footer.services_title": "Services",
              "services.individual": "Individual Therapy",
              "services.couples": "Couples Therapy",
              "services.executive": "Executive Coaching",
              "footer.links_title": "Important Links",
              "footer.services.about": "About",
              "footer.services.appointment": "Make Appointment",
              "footer.services.contact": "Contact",
              "footer.contact_title": "Contact Info",
              "footer.recognition":
                "Psychodynamic therapy is one of three officially state-recognized modalities in Germany.",
              "footer.shape2_alt":
                "Therapy room with leather sofa and warm lighting",
              "footer.copyright":
                "Copyright Therapy Sync <span class='dynamic-year'></span>, All Right Reserved",
              "footer.developer":
                "Designed & Developed by <a href='https://aayaninfotech.com/' class='text-decoration-none text-light' target='_blank'>Aayan Infotech</a>",

              // Form Labels
              "contact.name_label": "Name",
              "contact.email_label": "Email",
              "contact.phone_label": "Phone",
              "contact.program_label": "Program",
              "contact.program_sr": "Select a Program",

              // Placeholders
              "contact.name_placeholder": "Your Name *",
              "contact.email_placeholder": "Your Email *",
              "contact.phone_placeholder": "Your Phone Number",

              // Program Options
              "contact.program_default": "Select a Program",
              "contact.program1": "Individual Therapy",
              "contact.program2": "Group Counseling",

              // Button
              "contact.submit_button": "SEND Request",

              // excecutive theraphy
              "executive.title": "Executive Coaching Services",
              "executive.list1": "Leadership Authority Development",
              "executive.list2": "Psychological Health & Performance",
              "executive.list3": "One-on-One Leadership Development",
              "executive.list4": "Personal & Professional Growth",
              "executive.cta": "Know More",
              "executive.image_alt":
                "Executive coaching session with a professional",

              // Add these new keys to the English section:
              "excecutive.core_maintitle":" Specialized coaching for entrepreneurs and executives:",
              "executive.core_focus": "Core Focus Areas",
              "executive.leadership_development":
                "Leadership Authority Development",
              "executive.leadership_point1":
                "Understanding and managing interpersonal workplace relationships",
              "executive.leadership_point2":
                "Taking up your authority in role with confidence",
              "executive.leadership_point3":
                "Moving from reactive to strategic leadership",
              "executive.psychological_health":
                "Psychological Health & Performance",
              "executive.health_point1":
                "Achieving optimum performance alongside emotional well-being",
              "executive.health_point2":
                "Creating health-promoting work cultures",
              "executive.health_point3":
                "Preventing burnout while maintaining high standards",
              "executive.safe_space": "Safe Space for Leaders",
              "executive.safe_space_text":
                "I provide entrepreneurs and business leaders with a safe space to blow off steam and air their worries and concerns, offering the confidential support that leadership often lacks.",
              "executive.individual_coaching": "Individual Executive Coaching",
              "executive.one_on_one": "One-on-One Leadership Development",
              "executive.development_point1":
                "Strategic thinking and decision-making enhancement",
              "executive.development_point2":
                "People management and conflict resolution skills",
              "executive.development_point3":
                "Emotional intelligence and interpersonal relationship management",
              "executive.development_point4":
                "Authority development and role clarity",
              "executive.development_point5":
                "Stress management and burnout prevention",
              "executive.growth": "Personal & Professional Growth",
              "executive.growth_point1":
                "Achieve optimum performance with psychological health",
              "executive.growth_point2":
                "Manage career transitions and decisions skillfully",
              "executive.growth_point3":
                "Build resilience against burnout and overwhelm",
              "executive.growth_point4":
                "Improve decision-making clarity and confidence",
              "executive.growth_point5":
                "Develop effective communication and motivation skills",
                "topbar.coachingtext":"For contact",

              footer: {
                shape_alt: "Therapy Sync decorative shape",
                logo_alt: "Therapy Sync logo",
                description:
                  "Will give you a complete account the system, and expound the teachings of the great explorer the truth, the master-builder because ...",
                social: {
                  facebook: "Facebook",
                  twitter: "Twitter",
                  google: "Google",
                  linkedin: "LinkedIn",
                  instagram: "Instagram",
                },
                services_title: "Service",
                services: {
                  about: "About",
                  appointment: "Make Appointment",
                  blog: "Latest Post",
                  team: "Our Team",
                  contact: "Contact",
                },
                contact_title: "Contact Us",
                contact: {
                  phone: "+49 157 300 20 315",
                  email: "contact@psychotherapy-dombrowe.com",
                  address: "8/05 Mozilla Golden",
                },
                copyright:
                  "Copyright Therapy Sync <span class='dynamic-year'></span>, All Right Reserved",
                shape2_alt: "Therapy Sync decorative shape",
              },
              mobile: {
                logo_alt: "Therapy Sync",
                contact: {
                  email: "contact@psychotherapy-dombrowe.com",
                  phone: "+49 157 300 20 315",
                },
                social: {
                  facebook: "Facebook",
                  twitter: "Twitter",
                  google: "Google",
                  linkedin: "LinkedIn",
                  instagram: "Instagram",
                },
              },
              search: {
                placeholder: "Search Here...",
              },
              sidebar: {
                logo_alt: "Therapy Sync",
                description:
                  "Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ puru rhoncu tincidunt odio ultrices. Sed feugiat feugiat felis.",
                contact_title: "Contact Info:",
                contact: {
                  address: "85 Ketch Harbour Road Bensalem, PA 19020",
                  email: "contact@psychotherapy-dombrowe.com",
                  phone: "+49 157 300 20 315",
                },
                social: {
                  facebook: "Facebook",
                  twitter: "Twitter",
                  google: "Google",
                  linkedin: "LinkedIn",
                  instagram: "Instagram",
                },
                newsletter_title: "Newsletter:",
                newsletter_placeholder: "Email address",
                submit: "submit",
              },
            },
          },
        },
      },
      function (err, t) {
        jqueryI18next.init(i18next, $);
        $("body").localize();
        $("#language-select").val(i18next.language);
        updateContent();

        var currentLang = i18next.language;
        console.log("Current language loaded:", currentLang);

        // Set the select dropdown to the current language
        $("#language-select").val(currentLang);

        // If using selectpicker, refresh it
        if (typeof $.fn.selectpicker !== "undefined") {
          $("#language-select").selectpicker("val", currentLang);
          $("#language-select").selectpicker("refresh");
        }
      }
    );

    function updateContent() {
      // Your code to update page content with translations
      $("[data-i18n]").each(function () {
        var key = $(this).data("i18n");
        var translation = i18next.t(key);

        // Special handling for placeholders
        if ($(this).is("[placeholder]")) {
          $(this).attr("placeholder", translation);
        }
        // Default text/html content
        else {
          $(this).html(translation);
        }
      });
    }

    $("#language-select").change(function () {
      $("#language-select").change(function () {
        var newLang = $(this).val();
        i18next.changeLanguage(newLang, function (err, t) {
          if (err) console.error("Language change error:", err);

          // Update all content
          updateContent();

          // No need to manually set the select value here -
          // i18next will persist the language preference automatically
          $("#language-select").val(newLang);

          // If using selectpicker, refresh it
          if (typeof $.fn.selectpicker !== "undefined") {
            $("#language-select").selectpicker("val", newLang);
            $("#language-select").selectpicker("refresh");
          }

          console.log("Language successfully changed to:", newLang);
          console.log(
            "Stored in localStorage:",
            localStorage.getItem("i18nextLng")
          );
        });
      });
    });
  });
})(jQuery);
