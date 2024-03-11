
const contact = [
    {
        icon: "./assets/twitter.png",
        link: "https://twitter.com/taruuu_bhandari"
    },
    {
        icon: "./assets/instagram.png",
        link: "https://www.instagram.com/tar._.u/"
    },
    {
        icon: "./assets/anilist.svg",
        link: "https://anilist.co/user/iamtaruuuu/mangalist"
    },
    {
        icon: "./assets/github-logo.png",
        link: "https://github.com/tarun-bhandari"
    },
    {
        icon: "./assets/mail.png",
        link: "mailto:iamtarunbhandari07@gmail.com"
    }
]


const menu = document.querySelector(".menu-toggle");
const rNav = document.querySelector(".right-nav");
menu.addEventListener('click', ()=>{
    rNav.classList.toggle("show")
    menu.innerHTML = "&#10005;"
});


let hobby = [
    "read Manga",
    "watch Anime",
    "watch moon shine in the sky"
]

function displayHobbies(){
    let span = document.getElementById("hobby");
    let index = 0;
    span.innerHTML = hobby[index]
    setInterval(()=> {
        setTimeout(() => {
            span.style.opacity = 0;
            index = (index + 1) % hobby.length;
            span.innerHTML = hobby[index];
            span.style.opacity = 1;
        }, 2000); // every 2 second timeout
    }, 3000) //after 3 second interval
}

window.onload = displayHobbies


function displayContact(){
    let box = document.getElementById("contact-box");
    
    contact.forEach(item => {
        let a = document.createElement("a");
        a.href = item.link;
        let img = document.createElement("img");
        img.src = item.icon;

        a.appendChild(img)
        box.appendChild(a)
    })
}

displayContact();


