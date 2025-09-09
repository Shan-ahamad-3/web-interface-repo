window.addEventListener('DOMContentLoaded', (event) => {

    const navbar = document.getElementById('header');

    // Function to handle the sticky navigation
    const handleScroll = () => {
        // If the user has scrolled further than the top of the page (0)
        if (window.scrollY > 0) {
            // Add the 'sticky' class
            navbar.classList.add('sticky');
        } else {
            // Remove the 'sticky' class
            navbar.classList.remove('sticky');
        }
    };

    // Listen for the scroll event on the window
    window.addEventListener('scroll', handleScroll);
    console.log("hlo");

});