javascript
/* =====================================================
   JK HYDRAULIC & ENGINEERING
   PREMIUM WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){
            loader.classList.add("hide");
        }

    }, 900);

});



/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {

    if(cursor){
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }

    if(cursorRing){
        cursorRing.style.left = `${e.clientX}px`;
        cursorRing.style.top = `${e.clientY}px`;
    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("open");

    });

}


document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

    });

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a[href^='#']");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");

        }

    });

});



/* =====================================================
   HERO 3D MOUSE MOVEMENT
===================================================== */

const machineScene = document.getElementById("machineScene");

if(machineScene){

    const hero = document.querySelector(".hero");

    hero.addEventListener("mousemove", (e) => {

        const rect = hero.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 45;
        const rotateX = (centerY - y) / 45;

        machineScene.style.transform =
            `translate(-50%,-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    hero.addEventListener("mouseleave", () => {

        machineScene.style.transform =
            "translate(-50%,-50%) rotateX(0deg) rotateY(0deg)";

    });

}



/* =====================================================
   COUNTERS
===================================================== */

const counters = document.querySelectorAll("[data-count]");
let countersStarted = false;


function startCounters(){

    if(countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.count);

        let current = 0;

        const duration = 1600;
        const increment = target / (duration / 16);


        const update = () => {

            current += increment;

            if(current < target){

                counter.textContent = Math.floor(current);

                requestAnimationFrame(update);

            }else{

                counter.textContent = target;

            }

        };

        update();

    });

}


const statsSection = document.querySelector(".stats");

if(statsSection){

    const observer = new IntersectionObserver(
        entries => {

            if(entries[0].isIntersecting){

                startCounters();

            }

        },
        {threshold:.3}
    );

    observer.observe(statsSection);

}



/* =====================================================
   PRESSURE GAUGE
===================================================== */

const pressureSection = document.querySelector(".pressure-section");
const pressureValue = document.getElementById("pressureValue");
const gaugeCircle = document.querySelector(".gauge-circle");

let pressureStarted = false;


function animatePressure(){

    if(pressureStarted) return;

    pressureStarted = true;

    let value = 0;
    const target = 315;

    const interval = setInterval(() => {

        value += 5;

        if(value >= target){

            value = target;
            clearInterval(interval);

        }

        pressureValue.textContent = value;

        const degrees = (value / 350) * 360;

        gaugeCircle.style.background =
            `conic-gradient(
                var(--orange) 0deg,
                var(--orange) ${degrees}deg,
                #182633 ${degrees}deg
            )`;

    }, 25);

}


if(pressureSection){

    const observer = new IntersectionObserver(
        entries => {

            if(entries[0].isIntersecting){

                animatePressure();

            }

        },
        {threshold:.4}
    );

    observer.observe(pressureSection);

}



/* =====================================================
   PRODUCT CARD TILT
===================================================== */

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 8;
        const rotateX = ((y / rect.height) - .5) * -8;

        card.style.transform =
            `translateY(-8px) perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".product-card, .service-item, .industry-card, .stat, .contact-line"
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold:.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   QUOTE FORM
===================================================== */

const quoteForm = document.getElementById("quoteForm");
const toast = document.getElementById("toast");


if(quoteForm){

    quoteForm.addEventListener("submit", e => {

        e.preventDefault();

        toast.classList.add("show");

        quoteForm.reset();

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

    });

}



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});



/* =====================================================
   HEADER BACKGROUND ON SCROLL
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background = "rgba(3,8,14,.88)";

    }else{

        header.style.background = "rgba(3,8,14,.58)";

    }

});



/* =====================================================
   DYNAMIC YEAR
===================================================== */

const yearText = document.querySelector(".footer-bottom span");

if(yearText){

    yearText.innerHTML =
        yearText.innerHTML.replace(
            "2026",
            new Date().getFullYear()
        );

}