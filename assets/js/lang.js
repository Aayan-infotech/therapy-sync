(function ($) {
  "use strict";

  if ($(".lang-switcher").length) {
    $(".lang-switcher").on("click", function () {
      $(this).toggleClass("lang-switcher--active");
    });
  }

  $(document).ready(function () {
    i18next.use(i18nextBrowserLanguageDetector).init(
      {
        lng: "en", // Default to German
        fallbackLng: "en",
        resources: {
          de: {
            translation: {
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
              "about.tagline": "ÜBER UNSER UNTERNEHMEN",
              "about.title": "Psychologie erforscht die menschliche Psyche",
              "about.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services für Ihr Unternehmen. Professionelle Beratung für individuelle Bedürfnisse.",
              "about.image2_alt": "Unsere Methoden",
              "about.bullet1":
                "Vielfältige Ansätze in der therapeutischen Arbeit für optimale Ergebnisse.",
              "about.bullet2":
                "Individuelle Therapiepläne für jede Lebenssituation und Herausforderung.",
              "about.highlight":
                "Der richtige Therapeut hilft Ihnen, Fähigkeiten zur Bewältigung Ihrer Situation zu entwickeln.",
              "about.cta": "Mehr erfahren",
              "about.shape_alt": "Dekorative Grafik",

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
              "services.academic.title": "Pädagogische Psychologie",
              "services.academic.description":
                "Förderung von Lernprozessen und Unterstützung bei akademischen Herausforderungen",
              "services.academic.image_alt":
                "Illustration pädagogische Therapie",

              // Specialized Areas
              "services.specialized.title": "Spezialgebiete",
              "services.specialized.description":
                "Individuelle Therapieansätze für spezifische Lebenssituationen und Herausforderungen",
              "services.specialized.image_alt": "Illustration Spezialtherapie",

              // Achievements Section - German
              "achievements.tagline": "UNSERE ERFOLGE",
              "achievements.title":
                "When you live and work across borders, your challenges don’t wait…”",
              "achievements.shape_alt": "Therapie Sync dekorative Form",
              "achievements.card_shape": "Therapie Sync Karten-Dekoration",

              // Achievement Cards
              "achievements.projects": "Erfolgreiche Projekte",
              "achievements.customers": "Zufriedene Kunden",
              "achievements.consultants": "Berater Planung",
              "achievements.awards": "Gewonnene Auszeichnungen",

              // Why Choose Us Section - German
              "why_choose.tagline": "WARUM EXPAT THERAPY WÄHLEN",
              "why_choose.title":
                "Wir bieten entscheidende psychologische Förderung",
              "why_choose.shape_alt": "Therapie Sync dekorative Form",
              "why_choose.description":
                "Maßgeschneiderte Geschäftslösungen, Management und Support-Services. Professionelle Agenturleistungen mit modernen Ansätzen für Ihre Bedürfnisse.",
              "why_choose.list_image_alt":
                "Therapie Sync Vorteile Illustration",

              // Bullet Points
              "why_choose.bullet1": "Dating & Beziehungsberatung",
              "why_choose.bullet2":
                "Professionelle Lösungen für moderne Herausforderungen",
              "why_choose.bullet3": "Menschliches Verhalten und Lebenshilfe",

              // Cognitive Psychology
              "why_choose.cognitive.title": "Kognitive Psychologie",
              "why_choose.cognitive.description":
                "Unterstützung bei der Bewältigung von Herausforderungen und Verbesserung der Lebensqualität",

              // Relationships
              "why_choose.relationships.title": "Partnerschaft & Beziehungen",
              "why_choose.relationships.description":
                "Beratung für gesunde Beziehungen und zwischenmenschliche Verbindungen",

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

              // Placeholders
              "contact.name_placeholder": "Ihr Name *",
              "contact.email_placeholder": "Ihre E-Mail *",
              "contact.phone_placeholder": "Ihre Telefonnummer",

              // Program Options
              "contact.program_default": "Programm auswählen",
              "contact.program1": "Einzeltherapie",
              "contact.program2": "Gruppenberatung",

              // Button
              "contact.submit_button": "ANFRAGE SENDEN",

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
                  phone: "+11234 751 328",
                  email: "therapie@therapysync.de",
                  address: "8/05 Mozilla Golden",
                },
                copyright:
                  "Copyright Therapie Sync <span class='dynamic-year'></span>, Alle Rechte vorbehalten",
                shape2_alt: "Therapie Sync dekorative Form",
              },
              mobile: {
                logo_alt: "Therapie Sync",
                contact: {
                  email: "therapie@therapysync.de",
                  phone: "666 888 0000",
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
                  email: "therapie@therapysync.de",
                  phone: "099 695 695 35",
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
              "about.tagline": "OUR ABOUT COMPANY",
              "about.title":
                " Psychology Seeks To Explore The About Workings of Human",
              "about.description":
                " Business tailored design, management & support services Business business agency elit, sed do eiusmod tempor  majority have in some we form, by injected humour solution.",
              "about.image2_alt": "Expact Theraphy",
              "about.bullet1":
                " There are many variations of passages of this business magical therapy.",
              "about.bullet2":
                "There are many variations of passages of this business magical therapy.",
              "about.highlight":
                "The right therapist can help you develop the skills to manage your solution this is mental health to find them.",
              "about.cta": "About More",
              "about.shape_alt": "Dekorative Grafik",

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

              // Academic Psychology
              "services.academic.title": "Academic Psychology",
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
              "why_choose.title":
                "We Providing Psychology Crucial Choose of Promoting",
              "why_choose.shape_alt": "Therapy Sync decorative shape",
              "why_choose.description":
                "Business tailored design, management & support services, Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",
              "why_choose.list_image_alt": "Therapy Sync benefits illustration",

              // Bullet Points
              "why_choose.bullet1": "Dating & Relationship of Psychologist",
              "why_choose.bullet2":
                "Professional Solutions for Modern Challenges",
              "why_choose.bullet3": "Human Behavior and Helping Lives",

              // Cognitive Psychology
              "why_choose.cognitive.title": "Cognitive Psychology",
              "why_choose.cognitive.description":
                "Supporting individuals in overcoming challenges and improving their quality of life",

              // Relationships
              "why_choose.relationships.title": "Dating & Relationships",
              "why_choose.relationships.description":
                "Guidance for building healthy relationships and personal connections",

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

              "contact.tagline": "CONTACT US",
              "contact.title":
                "Contact Us Immediately For <br>Professional Support",
              "contact.shape_alt": "Therapy Sync decorative shape",
              "contact.description":
                "Get in touch with our professional team for personalized support and solutions tailored to your needs.",

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
                  phone: "+11234 751 328",
                  email: "therapy@therapysync.com",
                  address: "8/05 Mozilla Golden",
                },
                copyright:
                  "Copyright Therapy Sync <span class='dynamic-year'></span>, All Right Reserved",
                shape2_alt: "Therapy Sync decorative shape",
              },
              mobile: {
                logo_alt: "Therapy Sync",
                contact: {
                  email: "therapy@therapysync.com",
                  phone: "666 888 0000",
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
                  email: "therapy@therapysync.com",
                  phone: "099 695 695 35",
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
      }
    );

    $("#language-select").change(function () {
      i18next.changeLanguage($(this).val(), function (err, t) {
        $("body").localize();
      });
    });
  });
})(jQuery);
