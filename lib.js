// contact me info
        const contact_me = document.getElementById("contact_me");
        const contact_info = document.getElementById("contact_info");
        
        
        // Ensure the elements exist before accessing them
         // Skip iteration if any element is missing
        
        // Toggle visibility based on the current state of the dots
contact_me.addEventListener("click", function(){
    if (contact_info.style.display === "none"){
            contact_info.style.display = "inline";                   
    }else{
            contact_info.style.display = "none";
    }
    })

// contact me info


//testing
