const translations = {
    en: {
        title: "My Portfolio",
        languageButton: "العربية",
        welcome: "Welcome to my portfolio",
        description:
            "I am a cybersecurity enthusiast interested in technology and security.",
        aboutTitle: "About Me",
        aboutText:
            "I enjoy learning cybersecurity, networking, and web technologies.",
        skillsTitle: "My Skills",
        skill1: "Cybersecurity",
        skill2: "Networking",
        skill3: "Web Development",
        footerText: "Thank you for visiting my portfolio."
    },

    ar: {
        title: "ملفي الشخصي",
        languageButton: "English",
        welcome: "مرحباً بكم في ملفي الشخصي",
        description:
            "أنا مهتمة بالأمن السيبراني والتكنولوجيا وأمن المعلومات.",
        aboutTitle: "نبذة عني",
        aboutText:
            "أستمتع بتعلم الأمن السيبراني والشبكات وتقنيات تطوير الويب.",
        skillsTitle: "مهاراتي",
        skill1: "الأمن السيبراني",
        skill2: "الشبكات",
        skill3: "تطوير الويب",
        footerText: "شكراً لزيارتكم ملفي الشخصي."
    }
};

let currentLanguage = "en";

const languageButton = document.getElementById("languageButton");

function changeLanguage() {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    document.documentElement.lang = currentLanguage;

    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    document.getElementById("title").textContent =
        translations[currentLanguage].title;

    document.getElementById("languageButton").textContent =
        translations[currentLanguage].languageButton;

    document.getElementById("welcome").textContent =
        translations[currentLanguage].welcome;

    document.getElementById("description").textContent =
        translations[currentLanguage].description;

    document.getElementById("aboutTitle").textContent =
        translations[currentLanguage].aboutTitle;

    document.getElementById("aboutText").textContent =
        translations[currentLanguage].aboutText;

    document.getElementById("skillsTitle").textContent =
        translations[currentLanguage].skillsTitle;

    document.getElementById("skill1").textContent =
        translations[currentLanguage].skill1;

    document.getElementById("skill2").textContent =
        translations[currentLanguage].skill2;

    document.getElementById("skill3").textContent =
        translations[currentLanguage].skill3;

    document.getElementById("footerText").textContent =
        translations[currentLanguage].footerText;
}

languageButton.addEventListener("click", changeLanguage);
