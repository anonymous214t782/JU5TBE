

const home = document.querySelector(".home_container")
const project = document.querySelector(".projects_container")
const projectUl = document.querySelector(".my_projects")
const contactMe = document.querySelector(".contact_info_container")
const contactUl = document.querySelector(".my_contact_info")
const techstack = document.querySelector(".techstack_container")
const techstackUl = document.querySelector(".my_techstack")
const backhome = document.querySelector(".backhome")
const backhome1 = document.querySelector(".backhome1")

projectUl.addEventListener("click", function(){
  if (project.style.display === "none"){
            project.style.display = "inline";
            home.style.display = "none";                   
    }else{
       project.style.display = "inline";
            home.style.display = "none";  
    }
})

contactUl.addEventListener("click", function(){
  if (contactMe.style.display === "none"){
            contactMe.style.display = "inline";
            home.style.display = "none";
    }else{
             contactMe.style.display = "inline";
            home.style.display = "none";

    }
})

techstackUl.addEventListener("click", function(){
  if (techstack.style.display === "none"){
          techstack.style.display = "inline";
          home.style.display = "none";
    }else{
           techstack.style.display = "inline";
          home.style.display = "none";
    }
})

backhome.addEventListener("click", function(){
  if (home.style.display === "none"){
    home.style.display = "inline";
    project.style.display = "none";
    techstack.style.display = "none";
    contactMe.style.display = "none";   
  }
})


backhome1.addEventListener("click", function(){
  if (home.style.display === "none"){
    home.style.display = "inline";
    project.style.display = "none";
    techstack.style.display = "none";
    contactMe.style.display = "none !important";   
  }   
})


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
const menu = document.querySelector(".menu_icon")

menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
})


const close = document.querySelector(".close-icon")
close.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar")
  sideBar.classList.add("close-sidebar")
})
