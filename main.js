
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


