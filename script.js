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

    // Helper: get the correct "natural" display value for an element
    function getNaturalDisplay(el) {
        // Temporarily remove inline display style and read computed value
        el.style.display = '';
        const computed = window.getComputedStyle(el).display;
        return computed;
    }

    // Toggle section content visibility
    const sectionHeaders = document.querySelectorAll('section h2');

    for (const header of sectionHeaders) {
        // Add a visual indicator that the section is collapsible
        const indicator = document.createElement('span');
        indicator.className = 'collapse-indicator';
        indicator.textContent = '▾';
        header.appendChild(indicator);

        header.addEventListener("click", function() {
            const section = header.parentElement;
            const isCollapsed = header.classList.contains('collapsed');

            // Select all direct content inside the section (excluding the h2 itself)
            const content = section.querySelectorAll(
                ':scope > *:not(h2), ' +           // direct children that aren't h2
                ':scope > .project-grid > *, ' +   // cards inside project grids
                ':scope > .skills-grid > *'         // skill groups inside skills grid
            );

            if (isCollapsed) {
                // Restore — remove inline display so CSS takes over naturally
                content.forEach(el => {
                    el.style.display = '';
                });
                header.classList.remove('collapsed');
                indicator.textContent = '▾';
            } else {
                // Collapse — hide everything except h2
                content.forEach(el => {
                    el.style.display = 'none';
                });
                header.classList.add('collapsed');
                indicator.textContent = '▸';
            }
        });
    }
});