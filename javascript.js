const port = 3000; // or whatever port you're using
const host = '0.0.0.0'; // Listen on all interfaces

app.listen(port, host, () => {
  console.log(`Server running at http://<span class="math-inline">\{host\}\:</span>{port}/`);
});

 // 1. Select the necessary elements
    const bar = document.querySelector('.bars-icon');       // The hamburger icon
    const nav = document.getElementById('navbar-links');    // The mobile navigation menu
    const close = document.getElementById('close-menu');    // The close (X) icon inside the menu
    const body = document.body;                             // The body element to control scrolling

    // 2. Event Listener for opening the navigation menu
    if (bar) { // Ensure the bar icon exists before adding listener
        bar.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent this click from immediately propagating to the document listener
            nav.classList.add('active'); // Add the 'active' class to slide in the menu
            body.classList.add('no-scroll'); // Add 'no-scroll' to body to prevent background scrolling
        });
    }

    // 3. Event Listener for closing the navigation menu (from inside the menu)
    if (close) { // Ensure the close icon exists before adding listener
        close.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent this click from immediately propagating to the document listener
            nav.classList.remove('active'); // Remove the 'active' class to slide out the menu
            body.classList.remove('no-scroll'); // Remove 'no-scroll' from body to enable background scrolling
        });
    }

    // 4. NEW: Event Listener for closing the navigation menu when clicking outside
    document.addEventListener('click', (event) => {
        // Check if the nav menu is active (open)
        if (nav.classList.contains('active')) {
            // Check if the click target is NOT the navigation menu itself,
            // and NOT a child of the navigation menu,
            // and NOT the bar icon (to avoid closing it immediately after opening).
            if (!nav.contains(event.target) && event.target !== bar) {
                nav.classList.remove('active'); // Close the menu
                body.classList.remove('no-scroll'); // Re-enable scrolling
            }
        }
    });

    // Optional: Close menu when a navigation link is clicked (good for single-page apps or smooth UX)
    // Uncomment this section if you want the menu to close automatically after a link is clicked.
    // const navLinks = nav.querySelectorAll('a');
    // navLinks.forEach(link => {
    //     if (link.id !== 'close-menu') { // Exclude the close menu button itself
    //         link.addEventListener('click', (event) => {
    //             // event.stopPropagation(); // Optional: prevent from propagating to document if you don't want it to close immediately
    //             nav.classList.remove('active'); // Close the menu
    //             body.classList.remove('no-scroll'); // Re-enable scrolling
    //         });
    //     }
    // });