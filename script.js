document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    }
    
    // Toggle section content visibility
    const sectionHeaders = document.querySelectorAll('section h2');
    
    for (const header of sectionHeaders) {
        header.addEventListener("click", function() {
            const section = header.parentElement;
            const content = section.querySelectorAll('h3, p, ul');
            
            for (const element of content) {
                if (element.style.display === "none") {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            }
        });
    }
});
