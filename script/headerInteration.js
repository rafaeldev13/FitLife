const menuButton = document.getElementsByClassName("menu")[0];
const aside = document.getElementsByTagName("aside")[0];
const backGround = document.getElementsByClassName("background")[0]


let showMenu = false;

menuButton.addEventListener("click", () => {
    handleChange()
})

backGround.addEventListener("click", () => {
    handleChange()
})

aside.addEventListener("click", () => {
    handleChange()
})

function handleChange(){

    if(showMenu){
        aside.style.translate = '-280px'
        backGround.style.display= 'none'
        aside.style.transition = "0.5s"
        showMenu = false;
    } else{
        aside.style.translate = '0px'
        backGround.style.display = 'flex'
        aside.style.transition = "0.5s"
        showMenu = true
    }
}