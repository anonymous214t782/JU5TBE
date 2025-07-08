
//sidebar elementss
const sideBar = document.querySelector(".open_menu")
const menu = document.querySelector(".topic_button")

menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
})


const close = document.querySelector(".close-icon")
close.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar")
  sideBar.classList.add("close-sidebar")
})

const sideBar1 = document.querySelector(".open_menu1")
const menu1 = document.querySelector(".theme_btn")

menu1.addEventListener("click", function(){
  sideBar1.classList.remove("close-sidebar1")
  sideBar1.classList.add("open-sidebar1")
})


const close1 = document.querySelector(".close-icon1")
close1.addEventListener("click", function(){
  sideBar1.classList.remove("open-sidebar1")
  sideBar1.classList.add("close-sidebar1")
})

//searchbar animation
const searchbar = document.querySelector(".searchbar")
const searchicon = document.querySelector(".searchicon")

searchbar.addEventListener("click", function(){
    searchicon.style.display = "none";
})
