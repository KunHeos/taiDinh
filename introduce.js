//menu nav
const dropbtn = document.querySelector('.menu-product')
const dropbtnMenu = document.querySelector('.dropdown')

dropbtn.onclick = function  ()  {
    dropbtnMenu.classList.toggle('open')
}

//menu repon
const menurepon = document.querySelector("#menu-repon")
const menucontent = document.querySelector(".menu")

menurepon.onclick = function  ()  {
    menucontent.classList.toggle('open')
}