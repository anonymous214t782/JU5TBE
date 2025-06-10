 //Auto-rotating slideshow
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    
//sidebar elementss
const sideBar = document.querySelector(".open_menu")
const menu = document.querySelector(".menu-icon")

menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
})


const close = document.querySelector(".close-icon")
close.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar")
  sideBar.classList.add("close-sidebar")
})


const project = document.querySelector(".project_container")
const projectUl = document.querySelector(".my_projects")
const contactMe = document.querySelector(".contact_info_page")
const contactUl = document.querySelector(".my_contact_info")
const teschstack = document.querySelector(".techstack")
const techstackUl = document.querySelector(".my_techstack")


projectUl.addEventListener("click", function(){
  if (project.style.display === "none !important"){
            project.style.display = "inline !important";                   
    }else{
            project.style.display = "none !important";
    }
})

contactUl.addEventListener("click", function(){
  if (contactMe.style.display === "none !important"){
            contactMe.style.display = "inline !important";                   
    }else{
            contactMe.style.display = "none !important";
    }
})

techstackUl.addEventListener("click", function(){
  if (teschstack.style.display === "none !important"){
          techstack.style.display = "inline !important";                   
    }else{
          techstack.style.display = "none !important";
    }
})


