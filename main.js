let items = document.querySelectorAll('.carousel-item');
let array = []; //carouse items ga mos array yaratildi
for (let i = 0; i < items.length; i++) {
    array.push(i);
}
//init carousel
function carousel_init(array) {
    items[array[array.length - 1]].classList.add("opacity"); //glitch effektni yo'qotadi
    items[array[0]].classList.add("opacity");

    let middle = array[Math.round(array.length / 2) - 1]
    items[middle].style.left = `50%`//index: 3
    let value = 13;
    for (let i = Math.round(array.length / 2) - 2; i >= 0; i--) {//indexes: 0, 1, 2
        items[array[i]].style.left = `${value}%`
        value -= 37;
    }
    value = 87;
    for (let i = Math.round(array.length / 2); i < items.length; i++) { //indexes : 4, 5, 6
        items[array[i]].style.left = `${value}%`
        value += 37;
    }
}
// event listener of carousel next/prev buttons
document.querySelectorAll('.carousel-items-arrow').forEach((btn) => {
    btn.addEventListener("click", (e) => {

        document.querySelector('.carousel-item.active').classList.remove("active");
        document.querySelectorAll('.carousel-item.opacity').forEach((item) => {
            item.classList.remove("opacity");
        })

        if (e.target.classList.contains("arrow-prev")) { //prev bosilsa:
            items[array[Math.round(array.length / 2) - 2]].classList.add("active");
            array.unshift(array.pop())
            carousel_init(array)
        } else if (e.target.classList.contains("arrow-next")) { //next bosilsa:
            items[array[Math.round(array.length / 2)]].classList.add("active");
            array.push(array.shift())
            carousel_init(array)
        }
    });
});

// teachers controls
document.querySelectorAll('.teachers-control').forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let active = document.querySelector('.teacher-item.active');
        let all = document.querySelectorAll('.teacher-item');
        active.classList.remove("active");

        if (e.target.classList.contains("arrow-prev")) { //prev bosilsa:
            if (active.previousElementSibling) {
                active.previousElementSibling.classList.add("active")
            } else {
                all[all.length - 1].classList.add("active")
            }
        } else if (e.target.classList.contains("arrow-next")) { //next bosilsa:
            if (active.nextElementSibling) {
                active.nextElementSibling.classList.add("active")
            } else {
                all[0].classList.add("active")
            }
        }
    });
})

// scroolling
let last_scroll = 0;
document.addEventListener("scroll", (e) => {
    if (window.scrollY > last_scroll + 20) {
        document.querySelector('.navbar').style.top = "-100px";

    } else if (window.scrollY < last_scroll - 20) {
        document.querySelector('.navbar').style.top = "0px";
    }
    last_scroll = window.scrollY;
});

// results slider
document.querySelectorAll('.results-wrapper a').forEach((item, index) => {
    item.style.left = `${index * 260}px`;
});

// LANGUAGE
let lang = "en";
let en = {
    nav: [
        "HOME", "OUR COURSES", "OUR TEACHERS", "EXPLORE US", "OUR STUDENTS", "OUR RESULTS", "OUR LOCATION"
    ],
    contact: "Contact",
    hero_title: "Learn english.<br>Achieve your dreams!",
    hero_description: "Explore your hidden potential in an exclusive environment and have fun!",
    explore_btn: "Explore now !",

}
let uz = {
    nav: [
        "Bosh sahifa", "Kurslarimiz", "Ustozlarimiz", "Biz haqimizda", "Talabalarimiz", "Natijalarimiz", "Manzilimiz"
    ],
    contact: "Aloqa",
    hero_title: "Ingliz tilini o'rganing.<br>Orzularingizga yeting!",
    hero_description: "Yashirin qobiliyatingizni eksklyuziv muhitda kashf eting va zavqlaning!",
    explore_btn: "Hozir kashf eting!",

}
function set_lang(lang) {
    switch (lang) {
        case "uz": {
            languify(uz)
            break;
        }
        case "en": {
            languify(en)
            break;
        }
        case "ru": {
            languify(ru)
        }
    }
    function languify(lan) {
        // nav
        document.querySelectorAll('.navbar-nav li a').forEach((nav, index) => {
            nav.textContent = `${lan.nav[index]}`
        });
        document.querySelector('#current_lang').textContent = lang;
        document.querySelector('.contact-btn').textContent = lan.contact;
        // hero
        document.querySelector('.hero-title').innerHTML = lan.hero_title;
        document.querySelector('.hero-description').textContent = lan.hero_description;

    }
}
window.addEventListener("DOMContentLoaded", () => {
    carousel_init(array);

});