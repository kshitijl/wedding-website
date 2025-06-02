document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidePanel = document.getElementById('side-panel');
  const sidePanelNav = document.getElementById('side-panel-nav');
  const closeBtn = sidePanel.querySelector('.close-btn');
  // const mainContent = document.querySelector('body > *:not(script):not(.hamburger-menu):not(.side-panel)'); // Approximate main content

  console.log('Script loaded.');
  console.log('Hamburger Menu Element:', hamburgerMenu);
  console.log('Side Panel Element:', sidePanel);

  if (!hamburgerMenu || !sidePanel || !closeBtn || !sidePanelNav) {
    console.error('One or more essential elements not found. Hamburger:', hamburgerMenu, 'SidePanel:', sidePanel, 'CloseBtn:', closeBtn, 'Nav:', sidePanelNav);
    return; // Stop script execution if elements are missing
  }

  // Function to toggle the side panel
  function togglePanel() {
    console.log('togglePanel called');
    const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    console.log('Is currently expanded:', isExpanded);
    hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    sidePanel.setAttribute('aria-hidden', isExpanded);
    if (!isExpanded) {
      sidePanel.classList.add('open');
      hamburgerMenu.classList.add('hamburger-hidden'); // Hide hamburger
      console.log('Side panel .open class ADDED, hamburger-hidden ADDED');
      // Optional: Trap focus or add overlay
    } else {
      sidePanel.classList.remove('open');
      hamburgerMenu.classList.remove('hamburger-hidden'); // Show hamburger
      console.log('Side panel .open class REMOVED, hamburger-hidden REMOVED');
    }
    console.log('Side panel classList after toggle:', sidePanel.classList);
    console.log('Hamburger menu classList after toggle:', hamburgerMenu.classList);
  }

  // Populate side panel with H2 links
  const headings = document.querySelectorAll('h2');
  console.log('Found H2 headings:', headings.length);
  headings.forEach((heading, index) => {
    // Ensure heading has an ID, or create one
    if (!heading.id) {
      heading.id = `h2-section-${index}`;
    }
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent || `Section ${index + 1}`; // Fallback text
    if(!heading.textContent) console.warn(`H2 heading at index ${index} has no text content. ID: ${heading.id}`);

    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      console.log('Link clicked:', heading.id);
      const targetElement = document.getElementById(heading.id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      togglePanel(); // Close panel after clicking a link
    });
    sidePanelNav.appendChild(link);
  });

  hamburgerMenu.addEventListener('click', togglePanel);
  closeBtn.addEventListener('click', togglePanel);

  // Optional: Close panel if clicking outside of it
  document.addEventListener('click', (event) => {
    if (sidePanel.classList.contains('open') && !sidePanel.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      console.log('Clicked outside, closing panel.');
      togglePanel();
    }
  });

  // Optional: Close panel on 'Escape' key press
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape' && sidePanel.classList.contains('open')) {
      console.log('Escape key pressed, closing panel.');
      togglePanel();
    }
  });
}); 