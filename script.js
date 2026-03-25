let darkMode = window.localStorage.getItem("darkMode");
const themeSwitsh = document.getElementById("theme-switsh");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".header nav");
const jobTitle = document.querySelector(".mainSection h1 span");
let toTopBtn = document.querySelector(".toTopBtn");


const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "active");
}
const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
}
if (darkMode === "active") enableDarkMode();
themeSwitsh.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".header nav a").forEach(e => {
    e.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
})
window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight) {
        toTopBtn.classList.add("active");
    }
    else {
        toTopBtn.classList.remove("active");
    }
})
toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
})
const jobTitleLoad = () => {
    setTimeout(() => {
        jobTitle.textContent = "SEO specialist"
    }, 0);
    setTimeout(() => {
        jobTitle.textContent = "Content strategist"
    }, 5000);
    setTimeout(() => {
        jobTitle.textContent = "Analytics enthusiast"
    }, 10000);
}
jobTitleLoad();
setInterval(jobTitleLoad, 15000);














const slider = document.querySelector(".projectsSection main .sliderWrapper .slider");
const nextBtn = document.querySelector(".projectsSection main nav .nav.next");
const prevBtn = document.querySelector(".projectsSection main nav .nav.prev");


let index = 0;
let cardsPerView = getCardsPerView();
let totalCards = slider.children.length;

function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}
function updateSlider(animate = true) {
    console.log(index);
    slider.style.transition = animate ? "transform 0.4s ease" : "none";
    slider.style.transform = `translateX(calc((calc((-100% - (30px))) / ${cardsPerView}) * ${index}))`;
}


nextBtn.addEventListener("click", () => {
    index++;
    if (index === totalCards - cardsPerView + 1) index = 0;
    else if (index === -1) index = totalCards - cardsPerView;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index === totalCards - cardsPerView + 1) index = 0;
    else if (index === -1) index = totalCards - cardsPerView;
    updateSlider();
});

window.addEventListener("resize", () => {
    updateSlider(false);
});

updateSlider(false);