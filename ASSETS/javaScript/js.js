
let i = document.getElementById("blackBtn")
let link = document.querySelectorAll("link");
let img_Black = document.getElementById("b_image")
function darklinkmode(){
    if(i.classList.contains("fa-moon") && img_Black.src.match("./ASSETS/photo/pngegg.png")){
        
        img_Black.src = "./ASSETS/photo/hero_image.png"
        i.classList.replace("fa-moon","fa-sun")
        
        link[1].href = "./ASSETS/css/white mode.css"

    }else {
        img_Black.src = "./ASSETS/photo/pngegg.png"
        link[1].href = "./ASSETS/css/main.css"
        i.classList.replace("fa-sun","fa-moon")
    }
}
i.addEventListener("click", darklinkmode)
