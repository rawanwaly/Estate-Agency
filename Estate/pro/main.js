let galleryTabs = document.querySelectorAll(".gallery-tabs .tab"),
    galleryBoxes = document.querySelectorAll(".gallery-boxes .box");
galleryTabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        let target = tab.dataset.target;
        document.querySelector(".gallery-tabs .tab.active").classList.remove("active");
        tab.classList.add("active")
        
        galleryBoxes.forEach(box => {
            if (box.classList.contains(target)) {
                box.classList.add("active")
            
            }
            else
            {
                box.classList.remove('active')
            }
        });
        
        
    })
})