// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Track page view - making sure GA has loaded
    if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('open') && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.remove('open');
        }
    });
    
    // Tab navigation for services section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabBtns.length && tabPanes.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons and panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding tab pane
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
                
                // Track tab click in Google Analytics
                if (typeof gtag === 'function') {
                    gtag('event', 'tab_click', {
                        'event_category': 'Services',
                        'event_label': tabId
                    });
                }
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header a, #mobile-menu a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process anchor links
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (mobileMenu && mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                    }
                    
                    // Calculate position accounting for fixed header
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    updateActiveNavLink(href);
                    
                    // Track navigation click in Google Analytics
                    if (typeof gtag === 'function') {
                        gtag('event', 'navigation_click', {
                            'event_category': 'Navigation',
                            'event_label': targetId
                        });
                    }
                }
            }
        });
    });
    
    // HubSpot form is handled automatically by the HubSpot embed script
    // No need for manual form handling
    
    // Update active nav link based on scroll position
    function updateActiveNavOnScroll() {
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Get all sections that have an ID
        const sections = document.querySelectorAll('section[id]');
        
        // Find the section that's currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100; // Some buffer
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                updateActiveNavLink('#' + section.id);
            }
        });
    }
    
    // Helper function to update active navigation link
    function updateActiveNavLink(href) {
        // Remove active class from all nav links
        const allNavLinks = document.querySelectorAll('#desktop-nav a, #mobile-menu a');
        allNavLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to links matching the current href
        const activeLinks = document.querySelectorAll(`#desktop-nav a[href="${href}"], #mobile-menu a[href="${href}"]`);
        activeLinks.forEach(link => link.classList.add('active'));
    }
    
    // Add scroll event listener to update active nav link
    window.addEventListener('scroll', updateActiveNavOnScroll);
    
    // Initial update of active nav link
    updateActiveNavOnScroll();
});

// Add Azure Storage deployment instructions
// For real deployment, you would:
// 1. Create an Azure Storage account
// 2. Create a static website enabled container
// 3. Upload these files (HTML, CSS, JS) to the container
// 4. Configure custom domain and HTTPS if needed

/*
  Azure Storage Deployment Steps:
  
  1. Create an Azure Storage account:
     - Go to https://portal.azure.com
     - Create a new Storage account
     - Enable "Static website" feature
  
  2. Configure static website:
     - In the Storage account, go to "Static website"
     - Set index document to "index.html"
     - Set error document to "index.html"
  
  3. Upload website files:
     - Use Azure Storage Explorer or Azure CLI to upload all files
     - Example Azure CLI command:
       az storage blob upload-batch --account-name <your-account> --auth-mode login --source ./ --destination '$web'
  
  4. Access your website:
     - The website URL will be provided in the Static website settings
     - Format: https://<your-account>.z<region-code>.web.core.windows.net
  
  5. Optional - Configure custom domain and CDN:
     - Create an Azure CDN profile and endpoint pointing to your storage
     - Add custom domain to the CDN endpoint
     - Enable HTTPS with CDN-managed certificate
*/
