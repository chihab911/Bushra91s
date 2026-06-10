// بدء المفاجأة
const startBtn = document.getElementById("start-btn");
const introOverlay = document.getElementById("intro-overlay");
const mainContent = document.getElementById("main-content");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        introOverlay.style.opacity = "0";

        setTimeout(() => {
            introOverlay.style.display = "none";
            mainContent.classList.remove("fade-in-hidden");
            mainContent.classList.add("fade-in");
        }, 1000);
    });
}

// إطفاء الشموع
function blowCandle(candle) {
    const flame = candle.querySelector(".flame");

    if (flame) {
        flame.style.opacity = "0";
        flame.style.transform = "scale(0)";
    }
}

// فتح الهدية
function openGift() {
    const gift = document.getElementById("giftBox");

    if (gift) {
        gift.classList.add("opened");

        setTimeout(() => {
            alert("🎉 Happy Birthday Bushra ❤️");
        }, 600);
    }
}

// فتح الرسالة
function openEnvelope() {
    const envelope = document.getElementById("envelope");

    if (envelope) {
        envelope.classList.toggle("open");
    }
}

// زر العودة للأعلى
const backBtn = document.getElementById("backToTop");

if (backBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backBtn.style.display = "block";
        } else {
            backBtn.style.display = "none";
        }
    });

    backBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
