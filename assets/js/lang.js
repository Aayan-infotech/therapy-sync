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
                "Psychology and counseling include specialized areas forensic",
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
                "Psychology and counseling include specialized areas forensic",
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
