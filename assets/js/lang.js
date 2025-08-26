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
              "topbar.address": "Linienstraße 130 , 10115 Berlin , Germany",
              "topbar.help": "Hilfe",
              "topbar.coaching": "contact@dombrowe.berlin",
              "language.english": "Englisch",
              "language.german": "Deutsch",
              "header.logo_alt": "Therapie Logo",
              "menu.home": "Startseite",
              "menu.individual": "Individuelle Psychotherapie",
              "menu.couples": "Paartherapie",
              "menu.executive": "Führungskräfte-Coaching",
              "menu.about": "Über uns",
              "menu.contact": "Kontakt",
              "menu.book": "Beratung buchen",

              "slider1.title": "Psychodynamische Therapie für Expats - Wohin das Leben Sie auch führt",
           
              "slider1.shape_alt": "Dekorative Textform",
              "slider1.text":
                "Das Leben im Ausland bringt Herausforderungen mit sich. Ich helfe Expats und Paaren, Klarheit, Widerstandsfähigkeit und Verbundenheit zu finden – überall auf der Welt.",
              "slider1.cta1": "Vereinbaren Sie Ihre Beratung",
              "slider1.cta2": "Mehr erfahren",

              "slider2.title": "Empowering expats through therapy & coaching“ hilft potenziellen Kunden sofort zu erkennen, ob dies für sie gedacht ist",
              "slider2.text":
                "Bei Expat Therapy verstehen wir die einzigartigen Herausforderungen, die mit dem Leben in einem neuen Land verbunden sind.",
              "slider2.cta1": "Vereinbaren Sie Ihre Beratung",
              "slider2.cta2": "Mehr erfahren",

              // opening
              "services.list.goal": "Unser Ziel",
              "services.list.goal.individual":
                "Emotionales Wachstum, gesündere Beziehungen und ein stärkeres Selbstbewusstsein, das Sie überallhin begleitet",
              "opening.title": "Das Leben im Ausland kann schwierig sein.",
              "opening.intro":
                "Wenn Sie über Grenzen hinweg leben und arbeiten, warten Ihre Herausforderungen nicht auf den „richtigen Zeitpunkt“ oder den „richtigen Ort“.",

              "opening.scenario1.title":
                "Fühlen Sie sich bei der Arbeit überfordert?",
              "opening.scenario1.text":
                "Eine Krise am Arbeitsplatz kann eintreten, während Sie sich zwischen Zeitzonen befinden.",

              "opening.scenario2.title": "Kämpfen Sie mit Ihrer Beziehung?",
              "opening.scenario2.text":
                "Spannungen mit Ihrem Partner können meilenweit von Ihrem üblichen Unterstützungssystem entfernt auftreten",

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
              "about.highlight":"Meine Mission ist es, Expats bei Übergängen zu unterstützen",
              "about.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services für Ihr Unternehmen. Professionelle Beratung für individuelle Bedürfnisse.",
              "about.image2_alt": "Unsere Methoden",

              "about.cta": "Mehr erfahren",
              "about.shape_alt": "Dekorative Grafik",
              "credentials.title": "Dr. Christian Dombrowe",
              "credentials.list1":
                "Voll approbierter psychodynamischer Therapeut (staatlich anerkannt in Deutschland)",
              "credentials.list2":
                "Zertifiziert in Psychodynamischer Psychotherapie",
              "credentials.list3":
                "Organisationspsychologe (systemisch-psychodynamisches Führungskräfte-Coaching)",
              "credentials.list4": "Fließend in Englisch und Deutsch",

              "specializations.title": "Spezialisierungen:",
              "specializations.item1": "✔ Psychische Gesundheit von Expats",
              "specializations.item2": "✔ Interkulturelle Paare",
              "specializations.item3":
                "✔ Depression, Selbstwertgefühl und Identität",
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
              // individual
              "individual.overview.title": "Übersicht",
              "individual.overview.text1":
                "Aus psychodynamischer Sicht sind wir so, wie wir sind, aufgrund der Auswirkungen, die andere auf uns hatten. Und die einzige Möglichkeit, wie Menschen sich wirklich verändern, sind die Erfahrungen, die sie mit anderen Menschen machen. Dieser Fokus auf Beziehungen ist es, was die psychodynamische Therapie von anderen Therapien abhebt. Im Gegensatz zu anderen Behandlungsarten konzentriert sich die psychodynamische Therapie nicht nur auf die Symptomreduktion. Das Ziel der Therapie, die ich anbiete, ist auch, positives Wachstum der emotionalen Fähigkeiten zu fördern, die ein erfülltes Leben ermöglichen.",
              "individual.overview.text2":
                "Dazu gehören die Fähigkeit, erfüllendere Beziehungen zu gestalten, ein stabiles und realistisch fundiertes Selbstwertgefühl zu erhalten, ein breiteres Spektrum an Emotionen zu tolerieren und sich selbst und andere im Allgemeinen auf emotional nuanciertere und nützlichere Weise zu verstehen. Als in psychodynamischer Psychotherapie ausgebildeter Therapeut möchte ich Sie dabei unterstützen, Ihren eigenen Weg zu einem erfüllteren und selbstverwirklichten Leben zu finden. Dieser Prozess ist für jede Person unterschiedlich, ein kreativer Prozess, der durch die therapeutische Beziehung kultiviert wird.",
              "individual.overview.text3":
                "Einzelpsychotherapie kann konstruktiv sein, wenn Sie erkennen, dass Sie trotz Ihrer besten Bemühungen in wiederkehrenden belastenden Mustern feststecken, die Sie daran hindern, sich zufrieden zu fühlen und Ihr volles Potenzial in Ihren intimen Beziehungen und Ihrer Karriere auszuschöpfen. Andere Gründe können wiederkehrende emotionale Schwierigkeiten (z. B. Depressionen, Angstzustände, geringes Selbstwertgefühl), schmerzhafte und traumatische Erfahrungen oder akute Krisen sein. Egal, was Sie in die Therapie bringt, ich werde meine Arbeit entsprechend anpassen, um Ihren spezifischen Bedürfnissen gerecht zu werden.",
              "individual.overview.text4":
                "Ich werde mit Ihnen zusammenarbeiten, um eine Arbeitsweise zu finden, die sich für Sie angenehm und effektiv anfühlt. Ich werde Ihnen helfen, die Gedanken, Gefühle und Muster in Ihrem Leben zu identifizieren, die Sie an dem Ort des Schmerzes festhalten und Sie daran hindern, das Leben zu führen, das Sie wollen.",

              // approach

              "approach.tagline": "Unser Ansatz",
              "approach.title":
                "Wir sind, wer wir sind, wegen der Auswirkungen, die andere auf uns hatten. Echte Veränderung geschieht durch bedeutungsvolle Beziehungen.",
              "approach.description1":
                "Unsere Arbeit ist kooperativ und auf Sie zugeschnitten.",
              "approach.description2":
                "Wir erforschen die Gedanken, Gefühle und Muster, die Sie zurückhalten, und entwickeln die emotionale Fähigkeit, voranzukommen – im Leben, in Beziehungen und in sich selbst.",
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
              "services.tagline": "unsere Leistungen",
              "services.title":
                "Entwickeln Sie eine Marketingstrategie für psychologische Dienstleistungen",
              "services.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services. Professionelle Agenturleistungen mit innovativen Ansätzen für Ihre Bedürfnisse.",

              // Cognitive Psychology
              // "services.cognitive.title": "Kognitive Psychologie",
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
              "services.cognitive.title_thin":
                "nachhaltige Veränderung schaffen",
              "services.cognitive.description":
                "Gemeinsam werden wir über die Linderung der Symptome hinausgehen und uns mit den tieferen Mustern befassen, die Ihr Leben prägen.",
              "services.cognitive.image_alt":
                "Therapieraum mit Ledersofa und warmem Licht",
              "services.academic.title": "Paartherapie",
              "services.academic.description":
                "Psychodynamische Paartherapie hilft Ihnen und Ihrem Partner, die verborgenen Dynamiken aufzudecken, die Ihre Beziehung beeinflussen",
              "services.academic.image_alt":
                "Therapieraum mit Ledersofa und warmem Licht",
              "services.list.depression":
                "Depressionen, Angstzustände und Stress",
              "services.list.trauma": "Beziehungs- und Intimitätsprobleme",
              "services.list.stress":
                "Geringes Selbstwertgefühl und Selbstwert",
              "services.list.relationship":
                "Trauer, Verlust und Traumabewältigung",
              "services.list.phobia": "Phobien und soziale Ängste",
              "services.list.communication":
                "Kommunikation verbessern und Konflikte lösen",
              "services.list.conflict":
                "Gemeinsam durch Lebensübergänge navigieren",
              "services.list.trust": "Vertrauensprobleme",
              "services.list.rebuild":
                "Bauen Sie Intimität und Vertrauen wieder auf",
              "services.list.create":
                "Schaffen Sie eine sicherere und erfüllendere Partnerschaft",
              "services.list.goal.couple":
                "Es handelt sich um eine tiefergehende Arbeit, die die Art und Weise verändert, wie Sie einander verstehen und aufeinander reagieren.",
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

              "contact.address": "Linienstraße 130 , 10115 Berlin , Germany",
              "contact.logo_alt": "Therapieraum mit Ledersofa und warmem Licht",
              "contact.image_alt":
                "Therapieraum mit Ledersofa und warmem Licht",
              "contact.tagline": "KONTAKTIEREN SIE UNS",
              "contact.form_title": "Beginnen Sie Ihre Führungsreise",
              "contact.form_description":
                "Wenn Sie Unterstützung bei Ihrer Entscheidung benötigen, biete ich Ihnen ein kurzes Vorgespräch per Telefon oder E-Mail an. Darin schildern Sie uns Ihr Problem, das Sie lösen möchten. Gemeinsam finden wir heraus, ob wir zueinander passen.",
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
                "Treffen Sie klarere und sicherere Entscheidungen.",
              "executive.development_point2":
                "Fähigkeiten im Personalmanagement und Konfliktlösung",
              "executive.development_point3":
                "Emotionale Intelligenz und Management zwischenmenschlicher Beziehungen",
              "executive.development_point4":
                "Autoritätsentwicklung und Rollenklarheit",
              "executive.development_point5":
                "Bleiben Sie voller Energie und vermeiden Sie ein Burnout.",
                "cta.headline-coaching":"Ganz gleich, ob Sie Führungsherausforderungen meistern, Stress bewältigen oder Resilienz aufbauen möchten – ich unterstütze Sie dabei, beruflich und persönlich erfolgreich zu sein.",
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
              "topbar.coachingtext": "Für Coaching",
              // couples
              "couples.overview_title": "Überblick",
              "couples.overview_text":
                "Psychodynamische Paartherapie. Wiederverbinden. Verstehen. Heilen. Jede Beziehung hat Momente des Konflikts, der Distanz oder der Trennung. Manchmal fühlen sich diese Kämpfe überwältigend an und wiederholen die gleichen Argumente ohne Lösung. Psychodynamische Paartherapie bietet einen tieferen Weg, Ihre Beziehung zu verstehen und zu transformieren. Was ist psychodynamische Paartherapie? Im Gegensatz zu Schnellschuss-Ansätzen, die sich nur auf Kommunikationsfähigkeiten konzentrieren, geht die psychodynamische Paartherapie unter die Oberfläche. Sie erforscht, wie vergangene Erfahrungen, Kindheitsbindungen und unbewusste Muster die Art und Weise prägen, wie Sie sich heute auf Ihren Partner beziehen. Oft geht es bei den Konflikten in unseren engsten Beziehungen nicht nur um das 'Hier und Jetzt' – sie wurzeln in alten Ängsten, Sehnsüchten und Wunden. In der Therapie kommen diese verborgenen Dynamiken ans Licht und helfen beiden Partnern zu verstehen, warum sie immer wieder stecken bleiben und wie sie sich anders weiterentwickeln können. Wie es hilft: Durch diesen Prozess können Sie und Ihr Partner:",
              "couples.help_item1":
                "Wiederkehrende Muster erkennen, die Sie in den gleichen Argumenten festhalten.",
              "couples.help_item2":
                "Verstehen, wie vergangene Erfahrungen Ihre aktuelle Beziehung beeinflussen.",
              "couples.help_item3":
                "Tiefere Empathie und emotionale Verbindung entwickeln.",
              "couples.help_item4":
                "Sich gegenseitig klarer sehen, jenseits von Annahmen und alten Verletzungen.",
              "couples.help_item5":
                "Gesündere Wege finden, Konflikte zu bewältigen und Intimität aufzubauen.",
              "couples.expect_text":
                "Das Ziel ist nicht nur, das Streiten einzustellen, sondern eine dauerhafte Veränderung zu fördern – Ihnen beiden dabei zu helfen, sich in Ihrer Beziehung gesehen, verstanden und unterstützt zu fühlen. Was Sie erwartet: In den Sitzungen wird Ihr Therapeut Sie und Ihren Partner sanft anleiten, die Gefühle unter den Konflikten zu erforschen. Anstatt sich nur auf das zu konzentrieren, was außerhalb der Therapie passiert, schauen wir genau auf das, was zwischen Ihnen im Raum geschieht. Dies kann eine herausfordernde Arbeit sein, aber in einer sicheren, unterstützenden Umgebung wird es zu einer kraftvollen Gelegenheit, gemeinsam zu wachsen. Im Laufe der Zeit entdecken Paare oft neue Wege des Umgangs, die sich authentischer, sicherer und erfüllender anfühlen. Ist dies das Richtige für Sie? Psychodynamische Paartherapie kann helfen bei:",
              "couples.right_item1":
                "Häufigen Auseinandersetzungen und Kommunikationsstörungen",
              "couples.right_item2":
                "Emotionaler Distanz oder Verlust von Intimität",
              "couples.right_item3": "Genesung von Untreue oder Verrat",
              "couples.right_item4":
                "Sich wiederholenden, zerstörerischen Zyklen in der Beziehung",
              "couples.right_item5":
                "Der Bewältigung von Lebensübergängen wie Elternschaft, Karrierewechsel oder Alter. Wenn Sie und Ihr Partner bereit sind, über oberflächliche Lösungen hinauszugehen und dauerhafte Veränderungen zu schaffen, könnte dieser Ansatz der richtige für Sie sein.",
              "couples.journey_text":
                "Beginnen Sie Ihre gemeinsame Reise. Jedes Paar verdient die Chance, eine tiefere, verbundenere Beziehung aufzubauen. Psychodynamische Paartherapie bietet einen Weg, die verborgenen Dynamiken zu verstehen und eine Beziehung zu schaffen, in der sich beide Partner wertgeschätzt und sicher fühlen. Machen Sie heute den ersten Schritt – kontaktieren Sie uns, um eine Beratung zu vereinbaren.",

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
                  address: "Linienstraße 130 , 10115 Berlin , Germany",
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
              "topbar.address": "Linienstraße 130 , 10115 Berlin , Germany",
              "topbar.coaching": "contact@dombrowe.berlin",
              "topbar.help": "Help you",
              "language.english": "English",
              "language.german": "German",
              "header.logo_alt": "Therapy Logo",
              "menu.home": "Home",
              "menu.individual": "Individual Psychotherapy",
              "menu.couples": "Couples Therapy",
              "menu.executive": "Executive Coaching",
              "menu.about": "About",
              "menu.contact": "Contact",
              "menu.book": "Book Consultation",
              "slider1.title": "Psychodynamic Therapy for Expats - Wherever Life Takes You",
 

              "slider1.shape_alt": "Decorative text shape",
              "slider1.text":
                "Life abroad brings challenges. I help expats and couples find clarity, resilience, and connection — anywhere in the world.",
              "slider1.cta1": "Schedule Your Consultation",
              "slider1.cta2": "Learn More",

              "slider2.title": "Empowering expats through therapy & coaching” helps potential clients immediately understand whether this is meant for them",
              "slider2.text":
                "At Expat Therapy, we understand the unique challenges that come with living in a new country.",
              "slider2.cta1": "Schedule Your Consultation",
              "slider2.cta2": "Learn More",

              // opening
              "services.list.goal": "Our Goal",
              "services.list.goal.individual":
                "Emotional growth, healthier relationships, and a stronger sense of self that travels with you wherever you go",
              "opening.title": "Navigating Life Abroad Can Be Tough.",
              "opening.intro":
                'When you live and work across borders, your challenges don\'t wait for the "right time" or "right place" to arise.',

              "opening.scenario1.title": "Feeling Overwhelmed at Work?",
              "opening.scenario1.text":
                "A crisis at work can hit while you’re between time zones.",

              "opening.scenario2.title": "Struggling with Your Relationship?",
              "opening.scenario2.text":
                "Tension with your partner might surface miles away from your usual support system",

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
              "about.highlight":"My mission is to support expats through transitions",

              "about.image2_alt": "Expact Theraphy",

              "about.cta": "About More",
              "about.shape_alt": "Dekorative Grafik",
              "credentials.title": "Dr. Christian Dombrowe",
              "credentials.list1":
                "Fully Approbated Psychodynamic Therapist (State-Recognized in Germany)",
              "credentials.list2": "Certified in Psychodynamic Psychotherapy",
              "credentials.list3":
                "Organizational Psychologist (Systems-Psychodynamic Executive Coaching)",
              "credentials.list4": "Fluent in English & German",

              "specializations.title": "Specializations:",
              "specializations.item1": "✔ Expat Mental Health",
              "specializations.item2": "✔ Intercultural Couples",
              "specializations.item3": "✔ Depression, Self-Esteem and Identity",
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
              "services.tagline": "OUR SERVICES",
              "services.title":
                "Develop a Marketing Strategy To Promote Psychology Service",
              "services.description":
                "Business tailored design, management & support services Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",

              // Cognitive Psychology
              // "services.cognitive.title": "Cognitive Psychology",
              "services.cognitive.description":
                "Supporting individuals in overcoming challenges, and enhancing their quality of life whether it's",
              "services.cognitive.image_alt": "Cognitive therapy illustration",
              // best service
              "services.cognitive.title": "Individual Psychotherapy",
              "services.cognitive.title_thin": "Creating Lasting Change",
              "services.cognitive.description":
                "Together, we’ll go beyond symptom relief to address the deeper patterns shaping your life.",
              "services.cognitive.image_alt":
                "Therapy room with leather sofa and warm lighting",
              "services.academic.title": "Couples Therapy",
              "services.academic.title_thin":
                "Rebuilding Connection across Borders",
              "services.academic.description":
                "A therapist facilitates discussions to promote understanding, resolve disputes, and strengthen the partnership.",
              "services.academic.image_alt":
                "Therapy room with leather sofa and warm lighting",
              "services.list.depression": "Depression, anxiety, and stress",
              "services.list.trauma": "Relationship and intimacy issues",
              "services.list.stress": "Low self-esteem and self-worth",
              "services.list.relationship": "Grief, loss, and trauma recovery",
              "services.list.phobia": "Phobias and social anxiety",
              "services.list.communication":
                "Improve communication and resolve conflicts",
              "services.list.conflict": "Navigate life transitions together",
              "services.list.trust": "Trust issues",
              "services.list.rebuild": "Rebuild intimacy and trust",
              "services.list.create":
                "Create a more secure and fulfilling partnership",
              "services.list.goal.couple":
                " It’s deeper work that reshapes the way you understand and respond to each other.",
              "services.list.transitions": "Life transitions",
              // Academic Psychology

              "services.academic.description":
                "Psychodynamic couples therapy helps you and your partner uncover the hidden dynamics influencing your relationship",
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
                "Our work is collaborative and tailored to you.",
              "approach.description2":
                "We’ll explore the thoughts, feelings, and patterns holding you back, and develop the emotional capacity to move forward — in life, in relationships, and in yourself.",
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
              // Individual Therapy Page
              "individual.overview.title": "Overview",
              "individual.overview.text1":
                "From a psychodynamic point of view, we are the way we are because of the impact that others have had on us. And the only way that people really change is through the experiences they have with other people. This focus on relationship is what makes psychodynamic therapy stand above other therapies. In contrast to other types treatments psychodynamic therapy doesn't solely focus on symptom reduction. The goal of the therapy I offer is also to foster positive growth of the emotional capacities which make possible a satisfying life.",
              "individual.overview.text2":
                "These include the capacity to create more fulfilling relationships, to maintain a stable and realistically based sense of self-esteem, tolerate the wider range of emotions and generally to understand oneself and others in more emotionally nuanced and useful ways. As a therapist trained in psychodynamic psychotherapy, I would like to assist you in finding your unique path to living a more fulfilled and actualized life. This process is different for each person, a creative process that is cultivated through the therapeutic relationship.",
              "individual.overview.text3":
                "Individual psychotherapy can be constructive, when you recognize that despite your best efforts, you are stuck in repetitive distressing patterns that prevent you from feeling satisfied and reaching your full potential in your intimate relationships and career. Other reasons may be recurring emotional difficulties (e.g. depression, anxiety, low self-esteem), painful and traumatic experiences or acute crisis. No matter what brings you into therapy I will adjust my work accordingly to meet your specific needs.",
              "individual.overview.text4":
                "I will collaborate with you to find a way of working that feels comfortable and effective. I will help you to identify the thoughts, feelings and patterns in your life that are keeping you in the place of pain and block you from living the life you want.",

              // contact
              "contact.phone_title": "Get Contact Now",
              "contact.email_title": "Sent Email",
              "contact.location_title": "Location",
              "contact.address": "Linienstraße 130 , 10115 Berlin , Germany",
              "contact.logo_alt":
                "Therapy room with leather sofa and warm lighting",
              "contact.image_alt":
                "Therapy room with leather sofa and warm lighting",

              "contact.form_title": "Start Your Leadership Journey",
              "contact.form_description":
                "If you need support making your decision I offer a short preliminary telephone or email consultation, in which you can outline the problem that you want to resolve. Together we can find out if we are a good fit.",
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
              // couples
              "couples.overview_title": "Overview",
              "couples.overview_text":
                "Psychodynamic Couples Therapy. Reconnect. Understand. Heal. Every relationship has moments of conflict, distance, or disconnection. Sometimes those struggles feel overwhelming, repeating the same arguments without resolution. Psychodynamic couples therapy offers a deeper way of understanding and transforming your relationship. What Is Psychodynamic Couples Therapy? Unlike quick-fix approaches that only focus on communication skills, psychodynamic couples therapy goes beneath the surface. It explores how past experiences, childhood attachments, and unconscious patterns shape the way you relate to your partner today. Often, the conflicts we face in our closest relationships are not just about the “here and now”—they are rooted in old fears, longings, and wounds. In therapy, these hidden dynamics come to light, helping both partners understand why they keep getting stuck and how to move forward differently. How It Helps: Through this process, you and your partner can:",
              "couples.help_item1":
                "Recognize recurring patterns that keep you stuck in the same arguments.",
              "couples.help_item2":
                "Understand how past experiences influence your current relationship",
              "couples.help_item3":
                "Develop deeper empathy and emotional connection.",
              "couples.help_item4":
                "See each other more clearly, beyond assumptions and old hurts.",
              "couples.help_item5":
                "Create healthier ways of managing conflict and building intimacy.",
              "couples.expect_text":
                "The goal is not simply to stop fighting, but to foster lasting change—helping you both feel seen, understood, and supported in your relationship. What to Expect: In sessions, your therapist will gently guide you and your partner to explore the feelings beneath the conflicts. Instead of focusing only on what’s happening outside of therapy, we look closely at what happens between you in the room. This can be challenging work, but in a safe, supportive environment, it becomes a powerful opportunity to grow together. Over time, couples often discover new ways of relating that feel more authentic, secure, and fulfilling. Is This Right for You? Psychodynamic couples therapy can help with:",
              "couples.right_item1":
                "Frequent arguments and communication breakdowns",
              "couples.right_item2": "Emotional distance or loss of intimacy",
              "couples.right_item3": "Recovering from infidelity or betrayal",
              "couples.right_item4":
                "Repetitive, destructive cycles in the relationship",
              "couples.right_item5":
                "Navigating life transitions such as parenthood, career shifts, or aging. If you and your partner are ready to move beyond surface solutions and create lasting change, this approach may be right for you.",
              "couples.journey_text":
                "Begin Your Journey Together. Every couple deserves the chance to build a deeper, more connected relationship. Psychodynamic couples therapy provides a path to understanding the hidden dynamics at play and creating a relationship where both partners feel valued and secure. Take the first step today—reach out to schedule a consultation.",
              

              // Add these new keys to the English section:
              "excecutive.core_maintitle":
                " Specialized coaching for entrepreneurs and executives:",
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
                "Make clearer, more confident decisions.",
              "executive.development_point2":
                "People management and conflict resolution skills",
              "executive.development_point3":
                "Emotional intelligence and interpersonal relationship management",
              "executive.development_point4":
                "Authority development and role clarity",
              "executive.development_point5":
                "Stay energized and avoid burnout.",
                "cta.headline-coaching":"Whether you’re navigating leadership challenges, managing stress, or building resilience, I’ll support you in thriving professionally and personally.",
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
              "topbar.coachingtext": "For contact",

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
        $("#language-select-mobile").val(i18next.language);
        updateContent();

        var currentLang = i18next.language;
        console.log("Current language loaded:", currentLang);

        // Set the select dropdown to the current language
        $("#language-select").val(currentLang);

        // If using selectpicker, refresh it
        if (typeof $.fn.selectpicker !== "undefined") {
          $("#language-select").selectpicker("val", currentLang);
          $("#language-select-mobile").selectpicker("val", currentLang);
          $("#language-select").selectpicker("refresh");
          $("#language-select-mobile").selectpicker("refresh");
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
      var newLang = $(this).val();
      i18next.changeLanguage(newLang, function (err, t) {
        if (err) console.error("Language change error:", err);

        // Update all content
        updateContent();

        // Update select value
        $("#language-select").val(newLang);

        // If using selectpicker, refresh it
        if (typeof $.fn.selectpicker !== "undefined") {
          $("#language-select").selectpicker("val", newLang);
          $("#language-select").selectpicker("refresh");
        }

        console.log("Language successfully changed to:", newLang);
      });
    });

    $("#language-select-mobile").change(function () {
      var newLang = $(this).val();
      i18next.changeLanguage(newLang, function (err, t) {
        if (err) console.error("Language change error:", err);

        // Update all content
        updateContent();

        // Update select value
        $("#language-select-mobile").val(newLang);

        // If using selectpicker, refresh it
        if (typeof $.fn.selectpicker !== "undefined") {
          $("#language-select-mobile").selectpicker("val", newLang);
          $("#language-select-mobile").selectpicker("refresh");
        }

        console.log("Language successfully changed to:", newLang);
      });
    });
  });
})(jQuery);
