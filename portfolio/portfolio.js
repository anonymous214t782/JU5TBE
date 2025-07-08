

 //Auto-rotating slideshow
  let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

 let slides1 = document.querySelectorAll('.slide1');
    let currentSlide1 = 0;
    
    function nextSlide1() {
      slides1[currentSlide1].classList.remove('active1');
      currentSlide1 = (currentSlide1 + 1) % slides1.length;
      slides1[currentSlide1].classList.add('active1');
    }
    
    setInterval(nextSlide1, 5000); 
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

const home = document.querySelector(".home_container")
const project = document.querySelector(".projects_container")
const projectUl = document.querySelector(".my_projects")
const contactMe = document.querySelector(".contact_info_container")
const contactUl = document.querySelector(".my_contact_info")
const techstack = document.querySelector(".techstack_container")
const techstackUl = document.querySelector(".my_techstack")
const backhome = document.querySelectorAll('.backhome')

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

if (backhome && backhome.length > 0) {
  backhome.forEach(function(element) {
    element.addEventListener("click", function() {
      home.style.display = "inline";
      if (project) project.style.display = "none";
      if (techstack) techstack.style.display = "none";
      if (contactMe) contactMe.style.display = "none";
    });
  });
}





    
