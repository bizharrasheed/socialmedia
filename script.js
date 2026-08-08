// لیستا تەمام یا وەلاتان
const countries = [
    { code: "964", name: "عێراق", flag: "🇮🇶" }, { code: "1", name: "ئەمریکا / کەنەدا", flag: "🇺🇸" },
    { code: "44", name: "بەریتانیا", flag: "🇬🇧" }, { code: "90", name: "تورکیا", flag: "🇹🇷" },
    { code: "98", name: "ئێران", flag: "🇮🇷" }, { code: "963", name: "سوریا", flag: "🇸🇾" },
    { code: "966", name: "سعودیە", flag: "🇸🇦" }, { code: "971", name: "ئیمارات", flag: "🇦🇪" },
    { code: "49", name: "ئەڵمانیا", flag: "🇩🇪" }, { code: "33", name: "فەڕەنسا", flag: "🇫🇷" },
    { code: "46", name: "سوید", flag: "🇸🇪" }, { code: "31", name: "هۆڵەندا", flag: "🇳🇱" },
    { code: "7", name: "ڕووسیا", flag: "🇷🇺" }, { code: "20", name: "میسر", flag: "🇪🇬" },
    { code: "962", name: "ئوردن", flag: "🇯🇴" }, { code: "965", name: "کوەیت", flag: "🇰🇼" },
    { code: "968", name: "عومان", flag: "🇴🇲" }, { code: "974", name: "قەتەر", flag: "🇶🇦" },
    { code: "973", name: "بەحرەین", flag: "🇧🇭" }, { code: "961", name: "لوبنان", flag: "🇱🇧" },
    { code: "970", name: "فەلەستین", flag: "🇵🇸" }, { code: "212", name: "مەغریب", flag: "🇲🇦" },
    { code: "213", name: "جەزائیر", flag: "🇩🇿" }, { code: "216", name: "تونس", flag: "🇹🇳" },
    { code: "218", name: "لیبیا", flag: "🇱🇾" }, { code: "249", name: "سۆدان", flag: "🇸🇩" },
    { code: "252", name: "سۆماڵ", flag: "🇸🇴" }, { code: "93", name: "ئەفغانستان", flag: "🇦🇫" },
    { code: "355", name: "ئەلبانیا", flag: "🇦🇱" }, { code: "54", name: "ئەرجەنتین", flag: "🇦🇷" },
    { code: "61", name: "ئوسترالیا", flag: "🇦🇺" }, { code: "43", name: "نەمسا", flag: "🇦🇹" },
    { code: "880", name: "بەنگلادیش", flag: "🇧🇩" }, { code: "32", name: "بەلجیکا", flag: "🇧🇪" },
    { code: "55", name: "بەڕازیل", flag: "🇧🇷" }, { code: "359", name: "بولگاریا", flag: "🇧🇬" },
    { code: "86", name: "چین", flag: "🇨🇳" }, { code: "57", name: "کۆڵۆمبیا", flag: "🇨🇴" },
    { code: "385", name: "کرواتیا", flag: "🇭🇷" }, { code: "357", name: "قوبرس", flag: "🇨🇾" },
    { code: "420", name: "چیك", flag: "🇨🇿" }, { code: "45", name: "دانیمارک", flag: "🇩🇰" },
    { code: "358", name: "فینلاند", flag: "🇫🇮" }, { code: "30", name: "یۆنان", flag: "🇬🇷" },
    { code: "36", name: "هەنگاریا", flag: "🇭🇺" }, { code: "91", name: "هندستان", flag: "🇮🇳" },
    { code: "62", name: "ئەندەنوسیا", flag: "🇮🇩" }, { code: "353", name: "ئێرلەندا", flag: "🇮🇪" },
    { code: "39", name: "ئیتالیا", flag: "🇮🇹" }, { code: "81", name: "ژاپۆن", flag: "🇯🇵" },
    { code: "82", name: "کۆریای باشوور", flag: "🇰🇷" }, { code: "60", name: "مالیزیا", flag: "🇲🇾" },
    { code: "52", name: "مەکسیک", flag: "🇲🇽" }, { code: "64", name: "نیوزلەندا", flag: "🇳🇿" },
    { code: "47", name: "نەرویج", flag: "🇳🇴" }, { code: "92", name: "پاکستان", flag: "🇵🇰" },
    { code: "63", name: "فلیپین", flag: "🇵🇭" }, { code: "48", name: "پۆڵەندا", flag: "🇵🇱" },
    { code: "351", name: "پورتوگال", flag: "🇵🇹" }, { code: "40", name: "ڕۆمانیا", flag: "🇷🇴" },
    { code: "27", name: "ئەفریقای باشوور", flag: "🇿🇦" }, { code: "34", name: "ئیسپانیا", flag: "🇪🇸" },
    { code: "41", name: "سویسرا", flag: "🇨🇭" }, { code: "66", name: "تایلەند", flag: "🇹🇭" },
    { code: "380", name: "ئۆکرانیا", flag: "🇺🇦" }, { code: "58", name: "ڤەنزوێلا", flag: "🇻🇪" },
    { code: "84", name: "ڤێتنام", flag: "🇻🇳" }, { code: "263", name: "زیمبابۆی", flag: "🇿🇼" },
    { code: "unknown", name: "وەلاتەکێ دی...", flag: "🌍" }
];

const platformsData = {
    whatsapp: { id: "whatsapp", name: "واتسئاپ", desc: "ژمارێ بنڤیسە بێی سەیڤکرن، ڕاستەوخۆ دێ چات ڤەبیت.", btnText: "ڤەکرنا چاتێ واتسئاپی", type: "phone", baseUrl: "https://api.whatsapp.com/send/?phone=", colors: { main: "#25D366", dark: "#128C7E", light: "rgba(37, 211, 102, 0.15)", shadow: "rgba(37, 211, 102, 0.4)" }, svg: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>' },
    viber: { id: "viber", name: "ڤایبەر", desc: "ژمارێ بنڤیسە بۆ زێدەکرنا ڕاستەوخۆ ل سەر ڤایبەری.", btnText: "ڤەکرنا چاتێ ڤایبەری", type: "phone", baseUrl: "viber://add?number=", colors: { main: "#7360f2", dark: "#5c4cd9", light: "rgba(115, 96, 242, 0.15)", shadow: "rgba(115, 96, 242, 0.4)" }, svg: '<path d="M21.5 15.2c-.9-1.2-2.4-1.5-3.4-.4l-1.5 1.1c-1.5-1.2-4.1-3.7-5.1-5.1l1.1-1.5c1.1-1 .9-2.5-.4-3.4C10.8 4.6 9.6 3.5 8.3 2.5c-1.2-1-2.6-.7-3.4.4l-1.7 2C2.1 6 1.7 7.7 2 9.4c1 4.8 4.2 9.8 8.5 12.5 2.2 1.3 4.7 1.9 7.1 1.4 1.6-.3 3-1.3 3.9-2.6l2-1.7c1-1.1 1.2-2.6 0-3.8-1-1.3-2.1-2.5-2.2-2.5z"/>' },
    tiktok: { id: "tiktok", name: "تیکتۆک", desc: "یوزەرنەیمی بنڤیسە بێی هێمایا @.", btnText: "ڤەکرنا تیکتوکی", type: "text", baseUrl: "https://www.tiktok.com/@", colors: { main: "#000000", dark: "#25F4EE", light: "rgba(0, 0, 0, 0.1)", shadow: "rgba(0, 0, 0, 0.4)" }, svg: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.06c0 1.25-.26 2.52-.86 3.61-.95 1.75-2.65 3.03-4.63 3.42-1.99.39-4.1-.06-5.74-1.21-1.64-1.15-2.73-2.91-3.08-4.87-.36-1.95.03-4.04 1.15-5.69 1.11-1.65 2.85-2.74 4.81-3.13 1.95-.39 4.02.06 5.64 1.23.01-1.44.02-2.88.01-4.32-.97-.58-2.11-.9-3.25-.97-1.15-.06-2.31.1-3.37.52-1.07.41-2.02 1.09-2.72 1.97-.7.88-1.16 1.94-1.34 3.05-.18 1.11.01 2.27.49 3.29.49 1.01 1.23 1.86 2.14 2.45.92.59 2.03.9 3.14.97 1.11.06 2.25-.09 3.28-.51z"/>' },
    telegram: { id: "telegram", name: "تێلگرام", desc: "یوزەرنەیمی بنڤیسە بۆ پەیوەندیێ.", btnText: "ڤەکرنا تێلگرامی", type: "text", baseUrl: "https://t.me/", colors: { main: "#0088cc", dark: "#006699", light: "rgba(0, 136, 204, 0.15)", shadow: "rgba(0, 136, 204, 0.4)" }, svg: '<path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 7.85l-1.95 9.17c-.15.65-.54.82-1.09.51l-3-2.21-1.45 1.4c-.16.16-.3.3-.61.3l.21-3.08 5.6-5.06c.25-.22-.05-.34-.38-.11l-6.93 4.36-2.98-.93c-.65-.2-.66-.65.14-.96l11.64-4.49c.54-.2 1.01.12.8.1z"/>' },
    facebook: { id: "facebook", name: "فەیسبووک", desc: "یوزەرنەیم یان ئایدیێ پرۆفایلی بنڤیسە.", btnText: "ڤەکرنا فەیسبوکی", type: "text", baseUrl: "https://www.facebook.com/", colors: { main: "#1877F2", dark: "#105cb8", light: "rgba(24, 119, 242, 0.15)", shadow: "rgba(24, 119, 242, 0.4)" }, svg: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>' },
    snapchat: { id: "snapchat", name: "سناپچات", desc: "یوزەرنەیمی بنڤیسە بۆ زێدەکرنا کەسی.", btnText: "ڤەکرنا سناپ چاتی", type: "text", baseUrl: "https://www.snapchat.com/add/", colors: { main: "#FFFC00", dark: "#d4d100", light: "rgba(255, 252, 0, 0.2)", shadow: "rgba(212, 209, 0, 0.4)" }, svg: '<path d="M11.96 1.01c2.14 0 4.14.88 5.48 2.22 1.12 1.12 1.72 2.66 1.75 4.3.02 1.2-.21 2.45-.73 3.52-.16.32-.34.62-.57.88-.1.11-.19.16-.14.3.06.19.46.3.73.38 1.08.31 2.2.66 2.8 1.48.33.45.47 1.07.25 1.63-.22.56-.73.96-1.28 1.17-.61.23-1.33.34-1.92.57-.15.06-.21.13-.19.3.02.16.2.3.36.43 1.24 1.02 2.5 1.99 3.86 2.81.42.26.47.6.28.98-.17.34-.55.51-.96.53-1.29.08-2.61-.13-3.87-.45-1.15-.29-2.26-.74-3.35-1.13-.56-.2-1.07-.37-1.46-.37-.41 0-.91.17-1.46.37-1.1.39-2.2.84-3.35 1.13-1.26.32-2.58.53-3.87.45-.41-.02-.79-.19-.96-.53-.19-.38-.14-.72.28-.98 1.36-.82 2.62-1.79 3.86-2.81.16-.13.34-.27.36-.43.02-.17-.04-.24-.19-.3-.59-.23-1.31-.34-1.92-.57-.55-.21-1.06-.61-1.28-1.17-.22-.56-.08-1.18.25-1.63.6-.82 1.72-1.17 2.8-1.48.27-.08.67-.19.73-.38.05-.14-.04-.19-.14-.3-.23-.26-.41-.56-.57-.88-.52-1.07-.75-2.32-.73-3.52.03-1.64.63-3.18 1.75-4.3C7.82 1.89 9.82 1.01 11.96 1.01z"/>' },
    instagram: { id: "instagram", name: "ئینستگرام", desc: "یوزەرنەیمی بنڤیسە بۆ ڤەکرنا پرۆفایلێ ئینستگرامی.", btnText: "ڤەکرنا ئێنستگرامی", type: "text", baseUrl: "https://www.instagram.com/", colors: { main: "#E1306C", dark: "#F56040", light: "rgba(225, 48, 108, 0.15)", shadow: "rgba(225, 48, 108, 0.4)" }, svg: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>' },
    twitter: { id: "twitter", name: "X (تویتەر)", desc: "یوزەرنەیمی بنڤیسە بۆ ڤەکرنا پرۆفایلی ل سەر X.", btnText: "ڤەکرنا تورا X (تویتەر)", type: "text", baseUrl: "https://twitter.com/", colors: { main: "#1DA1F2", dark: "#0c85d0", light: "rgba(29, 161, 242, 0.15)", shadow: "rgba(29, 161, 242, 0.4)" }, svg: '<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>' },
    email: { id: "email", name: "ئیمێل", desc: "ناونیشانێ ئیمێلی بنڤیسە بۆ ناردنا نامەیەکێ.", btnText: "ڤەکرنا ئێمێلی", type: "email", baseUrl: "mailto:", colors: { main: "#EA4335", dark: "#c5221f", light: "rgba(234, 67, 53, 0.15)", shadow: "rgba(234, 67, 53, 0.4)" }, svg: '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>' }
};

let activePlatform = 'whatsapp';

const platformSelector = document.getElementById("platformSelector");
const mainLogoCircle = document.getElementById("mainLogoCircle");
const logoGlow = document.getElementById("logoGlow");
const mainIconContainer = document.getElementById("mainIconContainer");
const mainTitle = document.getElementById("mainTitle");
const mainDesc = document.getElementById("mainDesc");
const btnText = document.getElementById("btnText");
const btnIconWrapper = document.getElementById("btnIconWrapper");
const themeColorMeta = document.getElementById("themeColorMeta");
const plusSign = document.getElementById("plusSign");

const phoneInputSection = document.getElementById("phoneInputSection");
const textInputSection = document.getElementById("textInputSection");
const countrySelect = document.getElementById("countrySelect");
const countryCodeInput = document.getElementById("countryCodeInput");
const phoneInput = document.getElementById("phoneInput");
const textInput = document.getElementById("textInput");
const phoneGroup = document.getElementById("phoneGroup");
const textGroup = document.getElementById("textGroup");
const submitBtn = document.getElementById("submitBtn");
const toast = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");

function vibrate(ms) { if (navigator.vibrate) navigator.vibrate(ms); }

let toastTimer;
function showToast(msg) {
    toastMessage.innerText = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.classList.remove("show"); }, 3000);
}

function setupPlatforms() {
    Object.values(platformsData).forEach(plat => {
        let btn = document.createElement("button");
        btn.className = "platform-btn";
        if (plat.id === activePlatform) btn.classList.add("active");
        btn.innerHTML = `<svg viewBox="0 0 24 24">${plat.svg}</svg>`;
        btn.onclick = () => { vibrate(30); switchPlatform(plat.id, btn); };
        platformSelector.appendChild(btn);
    });
}

function switchPlatform(platId, btnElement) {
    if(activePlatform === platId) return; 
    activePlatform = platId;
    const plat = platformsData[platId];

    document.documentElement.style.setProperty('--theme-main', plat.colors.main);
    document.documentElement.style.setProperty('--theme-dark', plat.colors.dark);
    document.documentElement.style.setProperty('--theme-light', plat.colors.light);
    document.documentElement.style.setProperty('--theme-shadow', plat.colors.shadow);
    document.documentElement.style.setProperty('--text-on-theme', platId === 'snapchat' ? '#000000' : '#ffffff');
    themeColorMeta.setAttribute("content", plat.colors.main);
    plusSign.style.color = plat.colors.main;

    document.querySelectorAll(".platform-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");

    mainLogoCircle.classList.remove("flip-3d");
    void mainLogoCircle.offsetWidth; 
    mainLogoCircle.classList.add("flip-3d");

    setTimeout(() => {
        mainIconContainer.innerHTML = `<svg viewBox="0 0 24 24">${plat.svg}</svg>`;
        mainTitle.innerText = plat.name;
        mainDesc.innerText = plat.desc;
        btnText.innerText = plat.btnText;
        
        btnIconWrapper.innerHTML = `<svg viewBox="0 0 24 24" id="btnIcon"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;
    }, 200);

    if (plat.type === "phone") {
        phoneInputSection.style.display = "block"; textInputSection.style.display = "none"; phoneInput.focus();
    } else {
        phoneInputSection.style.display = "none"; textInputSection.style.display = "block"; textInput.focus();
    }
}

function spawnRain() {
    const container = document.getElementById("rainContainer");
    if (!container) return;
    const plat = platformsData[activePlatform];
    const icon = document.createElement("div");
    icon.className = "rain-icon";
    icon.innerHTML = `<svg viewBox="0 0 24 24">${plat.svg}</svg>`;
    const size = Math.random() * 25 + 15; const left = Math.random() * 95; 
    const duration = Math.random() * 4 + 4; const delay = Math.random() * 2;
    if (size < 22) icon.style.filter = "blur(2px)";
    icon.style.width = `${size}px`; icon.style.height = `${size}px`; icon.style.left = `${left}%`;
    icon.style.animationDuration = `${duration}s`; icon.style.animationDelay = `${delay}s`;
    container.appendChild(icon);
    setTimeout(() => icon.remove(), (duration + delay) * 1000);
}
setInterval(spawnRain, 400); 

function spawnBubbles() {
    const container = document.getElementById("bubblesContainer");
    if (!container) return;
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    let size = Math.random() * 8 + 4;
    bubble.style.width = `${size}px`; bubble.style.height = `${size}px`;
    bubble.style.setProperty('--dx', `${(Math.random() - 0.5) * 60}px`);
    bubble.style.animationDuration = `${1 + Math.random() * 0.8}s`;
    container.appendChild(bubble);
    setTimeout(() => bubble.remove(), 1800);
}
setInterval(spawnBubbles, 250); 

function populateCountries() {
    countrySelect.innerHTML = ""; 
    countries.forEach(country => {
        let option = document.createElement("option");
        option.value = country.code;
        option.text = `\u200F${country.name} (\u202A+${country.code}\u202C) ${country.flag}`;
        countrySelect.appendChild(option);
    });
    countrySelect.value = "964";
    countryCodeInput.value = "964";
}

countrySelect.addEventListener("change", function() {
    if (this.value !== "unknown") countryCodeInput.value = this.value;
    else { countryCodeInput.value = ""; countryCodeInput.focus(); }
});

countryCodeInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    let found = false;
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].code === this.value) { countrySelect.value = this.value; found = true; break; }
    }
    if (!found && this.value !== "") countrySelect.value = "unknown";
});

phoneInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    phoneGroup.classList.remove("error");
});
textInput.addEventListener("input", () => textGroup.classList.remove("error"));

function executeAction() {
    vibrate(30);
    const plat = platformsData[activePlatform];
    let finalUrl = "";
    
    if (plat.type === "phone") {
        let code = countryCodeInput.value.trim();
        let number = phoneInput.value.trim();
        if (code === "" || number.length < 5) {
            vibrate([50, 50, 50]); 
            showToast("هیڤییە ژمارەیەکا دروست بنڤیسە!");
            phoneGroup.classList.remove("error"); void phoneGroup.offsetWidth; phoneGroup.classList.add("error"); phoneInput.focus();
            return;
        }
        finalUrl = plat.baseUrl + code + number;
    } else {
        let textVal = textInput.value.trim();
        if (textVal.startsWith("@")) textVal = textVal.substring(1);
        if (textVal === "") {
            vibrate([50, 50, 50]); 
            showToast("هیڤییە پێزانینان بنڤیسە!");
            textGroup.classList.remove("error"); void textGroup.offsetWidth; textGroup.classList.add("error"); textInput.focus();
            return;
        }
        finalUrl = plat.baseUrl + textVal;
    }

    const originalText = btnText.innerText;
    btnText.innerText = "پرۆسێسکرن...";
    btnIconWrapper.innerHTML = `<svg class="spinner" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="31.4 31.4" stroke-linecap="round"></circle></svg>`;
    
    setTimeout(() => {
        window.open(finalUrl, '_blank', 'noopener,noreferrer');
        btnText.innerText = originalText;
        btnIconWrapper.innerHTML = `<svg viewBox="0 0 24 24" id="btnIcon"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;
    }, 600); 
}

submitBtn.addEventListener("click", executeAction);
phoneInput.addEventListener("keypress", e => { if (e.key === "Enter") executeAction(); });
textInput.addEventListener("keypress", e => { if (e.key === "Enter") executeAction(); });

window.onload = () => {
    setupPlatforms();
    populateCountries();
    mainIconContainer.innerHTML = `<svg viewBox="0 0 24 24">${platformsData['whatsapp'].svg}</svg>`;
};
