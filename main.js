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
    congrats: "Congratulations!",
    message_text: ["Your application was accepted!", "Your IELTS score is 7.5", "You passed job interview!"],
    course_sub: "Choice of",
    course_title: "Courses",
    course_text: "We do our best to make every course special for you !",
    teacher_position: ["CEO, teacher", "Teacher"],
    teacher_title: "Our experienced teachers",
    teacher_quote: ["Over time, small daily improvements can lead to amazing results. Investing in yourself is the best investment you can make. It not only improves your life, but also the lives of those around you.", "We are all teachers, or should be. Anyone who relays experience to another person is a teacher. Not to transmit your experience is to betray it."],
    students_title: "Our outstanding students",
    subcribe_title: "Subscribe To Our Telegram channel",
    subcribe_text: "Prepare yourself and take action today!",
    subscribe_btn: "OK, lets's go!",
    results_title: "Our amazing results",
    contact_title: "Our office location",
    landmark: "Landmark:",
    landmark_text: 'Yangiyer city, "Qalqon" sports club',
    contact: "Contact",
}
let uz = {
    nav: [
        "Bosh sahifa", "Kurslarimiz", "Ustozlarimiz", "Biz haqimizda", "Talabalarimiz", "Natijalarimiz", "Manzilimiz"
    ],
    contact: "Aloqa",
    hero_title: "Ingliz tilini o'rganing.<br>Orzularingizga yeting!",
    hero_description: "Yashirin qobiliyatingizni eksklyuziv muhitda kashf eting va zavqlaning!",
    explore_btn: "Hozir kashf eting!",
    congrats: "Tabriklaymiz!",
    message_text: ["Sizning arizangiz qabul qilindi.", "Sizning IELTS ballingiz 7,5", "Siz ish suhbatidan o'tdingiz!"],
    course_sub: "Ko'p tanlovli",
    course_title: "Kurslar",
    course_text: "Biz har bir kursni siz uchun maxsus qilish uchun qo'limizdan kelganini qilamiz!",
    teacher_title: "Tajribali o'qituvchilarimiz",
    teacher_position: ["Bosh direktor, o'qituvchi", "O'qituvchi"],
    teacher_quote: ["Vaqt o'tishi bilan kunlik kichik yaxshilanishlar ajoyib natijalarga olib keladi. O'zingizga sarmoya kiritish - bu siz amalga oshiradigan eng yaxshi sarmoyadir. Bu nafaqat sizning hayotingizni yaxshilaydi, balki atrofdagilarning hayotini yaxshilaydi.", "Biz hammamiz o'qituvchimiz yoki bo'lishimiz kerak. Tajribani boshqa odamga o'tkazgan har bir kishi o'qituvchidir. Tajribangizni uzatmaslik - unga xiyonat qilishdir."],
    students_title: "Bizning ajoyib talabalarimiz",
    subcribe_title: "Telegram kanalimizga obuna bo'ling",
    subcribe_text: "O'zingizni tayyorlang va bugunoq harakat qiling!",
    subscribe_btn: "OK, qani ketdik!",
    results_title: "Bizning ajoyib natijalarimiz",
    contact_title: "Bizning ofis joylashuvi",
    landmark: "Mo'ljal:",
    landmark_text: 'Yangiyer shahri, “Qalqon” sport klubi',
    contact: "Murojaat uchun",
}
let ru = {
    nav: [
        "ДОМАШНЯЯ СТРАНИЦА", "НАШИ КУРСЫ", "НАШИ УЧИТЕЛЯ", "О НАС", "НАШИ СТУДЕНТЫ", "НАШИ РЕЗУЛЬТАТЫ", "НАШЕ МЕСТОПОЛОЖЕНИЕ"
    ],
    contact: "Контакт",
    hero_title: "Учите английский.<br>Достигните своей мечты!",
    hero_description: "Раскройте свой скрытый потенциал и получайте удовольствие!",
    explore_btn: "Исследуйте сейчас!",
    congrats: "Поздравляем!",
    message_text: ["Ваша заявка принята!", "Ваш балл IELTS 7,5", "Вы прошли собеседование!"],
    course_sub: "Выбор",
    course_title: "курсов",
    course_text: "Мы делаем все возможное, чтобы каждый курс был особенным для вас!",
    teacher_position: ["Генеральный директор, учитель", "Учитель"],
    teacher_title: "Наши опытные преподаватели",
    teacher_quote: ["Со временем небольшие ежедневные улучшения могут привести к потрясающим результатам. Инвестиции в себя — лучшая инвестиция, которую вы можете сделать. Она улучшает не только вашу жизнь, но и жизнь окружающих вас людей", "Мы все учителя, или должны быть. Любой, кто передает опыт другому человеку, является учителем. Не передавать свой опыт — значит предать его."],
    students_title: "Наши лучшие студенты",
    subcribe_title: "Подписывайтесь на наш Telegram-канал",
    subcribe_text: "Подготовьтесь и действуйте уже сегодня!",
    subscribe_btn: "Хорошо пойдем!",
    results_title: "Наши потрясающие результаты",
    contact_title: "Расположение нашего офиса",
    landmark: "Ориентир:",
    landmark_text: 'г. Янгиер, спортивный клуб "Калкон"',
    contact: "Контакт",

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
        document.querySelectorAll('.more-btn').forEach((btn) => {
            btn.textContent = lan.explore_btn;
        });
        document.querySelector('.message-title').textContent = lan.congrats;
        words = lan.message_text;
        // courses
        document.querySelector('.course-subtitle').textContent = lan.course_sub;
        document.querySelector('.course-title').textContent = lan.course_title;
        document.querySelector('.course-text').textContent = lan.course_text;
        // teachers
        document.querySelector('#teachers .heading').textContent = lan.teacher_title;
        document.querySelectorAll('.position').forEach((quote, index) => {
            quote.textContent = lan.teacher_position[index]
        });
        document.querySelectorAll('.teacher-quote').forEach((quote, index) => {
            quote.textContent = lan.teacher_quote[index]
        });
        // students
        document.querySelector('#students .heading').textContent = lan.students_title;
        // subscribe
        document.querySelector('#subscribe .heading').textContent = lan.subcribe_title;
        document.querySelector('#subscribe p').textContent = lan.subcribe_text;
        document.querySelector('#subs-btn').textContent = lan.subscribe_btn;
        // results
        document.querySelector('#results .heading').textContent = lan.results_title;
        // contact
        document.querySelector('#contact .heading').textContent = lan.contact_title;
        document.querySelector('.landmark').textContent = lan.landmark;
        document.querySelector('.landmark-text').textContent = lan.landmark_text;
        document.querySelector('.contact').textContent = lan.contact;
    }
}
let words = en.message_text;
function typewriter() {
    let target = document.querySelector('#message_text');
    target.textContent = "";
    let i = 0;
    let word_index = 0;
    let speed = 100;
    add(0)
    function add(w) {
        if (i < words[w].length) {
            target.textContent += words[w].charAt(i);
            i++;
            setTimeout(() => add(word_index), speed);
        } else {
            remove()
        }
    }
    function remove() {
        if (i > 0) {
            target.textContent = target.textContent.slice(0, -1);
            i--;
            setTimeout(remove, speed);
        } else {
            word_index++;
            if (word_index >= words.length) {
                word_index = 0
            }
            add(word_index)
        }
    }
}



window.addEventListener("DOMContentLoaded", () => {
    carousel_init(array);
    typewriter()
});