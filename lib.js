
const contact_me = document.querySelector(".contact_me");
const contact_info = document.querySelector(".contact_info");
const close_contact = document.querySelector(".close_contact"); 
const contact_info_profile = document.querySelector(".contact_info_profile");
        
        // Ensure the elements exist before accessing them
         // Skip iteration if any element is missing
close_contact.addEventListener("click", function(){
      contact_info.style.display = "none";
})       
        // Toggle visibility based on the current state of the dots
contact_me.addEventListener("click", function(){
    if (contact_info.style.display === "none"){
            contact_info.style.display = "inline";                   
    }else{
            contact_info.style.display = "none";
    }

    if (contact_info_profile.style.display === "none"){
            contact_info_profile.style.display = "inline";                   
    }else{
            contact_info_profile.style.display = "none";
    }
    })

// contact me info
//testing