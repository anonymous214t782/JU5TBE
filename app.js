

 function moreText${i}() {
for (let i = 0; i <= 300; i++){
   
    let dots${i} = document.getElementById("dots${i}");
    let moreText${i} = document.getElementById("more${i}");
    let btnText${i} = document.getElementById("btn${i}");

  if (dots${i}.style.display === "none") {
    dots${i}.style.display = "inline";
    btnText${i}.innerHTML = "Read more";
    moreText${i}.style.display = "none";
  } else {
    dots${i}.style.display = "none";
    btnText${i}.innerHTML = "Read less";
    moreText${i}.style.display = "inline";
     moreText${i}.style.marginBottom = "250px";
  }
}
 }

//sidebar elementss
const sideBar = document.querySelector(".sidebar")
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
