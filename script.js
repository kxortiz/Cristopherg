/* ===================================== */
/* HERO CINEMÁTICO */
/* ===================================== */

const slides = [

{
    title:"Ruta de los Volcanes",

    description:
    "Crónicas de expediciones por tierras andinas del Ecuador.",

    image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Cotopaxi_volcano_%2850989028441%29.jpg"
},

{
    title:"Mares del Pacífico",

    description:
    "Bitácoras de navegación por la costa ecuatoriana.",

    image:
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Playa_de_los_Frailes_-_Ecuador.jpg"
},

{
    title:"Corazón de la Amazonía",

    description:
    "Relatos perdidos en la selva más biodiversa del planeta.",

    image:
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Yasuni_National_Park_Ecuador_2.jpg"
},

{
    title:"Las Islas Encantadas",

    description:
    "Un viaje hacia el archipiélago que cambió la ciencia.",

    image:
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Galapagos_turtle.jpg"
}

];

let current = 0;

const hero = document.querySelector(".hero");

const title = document.getElementById("slide-title");

const desc = document.getElementById("slide-description");

/* CAMBIAR HERO */

function updateHero(){

    const slide = slides[current];

    hero.style.backgroundImage =
    `url('${slide.image}')`;

    title.textContent = slide.title;

    desc.textContent = slide.description;
}

/* AUTO SLIDER */

setInterval(() => {

    current++;

    if(current >= slides.length){

        current = 0;
    }

    updateHero();

}, 5000);

updateHero();

/* ===================================== */
/* SPA */
/* ===================================== */

function showPage(id){

    const pages =
    document.querySelectorAll(".page-view");

    pages.forEach(page => {

        page.classList.remove("active-view");
    });

    document
    .getElementById(id)
    .classList.add("active-view");

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });
}