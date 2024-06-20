let toggler = document.querySelector(".tog")
let links = document.querySelector(".links")
let exit = document.querySelector(".x")
toggler.addEventListener("click" , function () {
    links.classList.add ("down")
})
exit.addEventListener("click" , function () {
    links.classList.remove ("down")
})