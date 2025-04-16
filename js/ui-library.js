document.getElementById('mobileToggle').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('active');
});


const filterButtons = document.querySelectorAll('.filter-button');
const contentSections = document.querySelectorAll('.content-section');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update active content section
      const targetId = button.getAttribute('data-target');
      contentSections.forEach(section => {
          section.classList.remove('active');
          if (section.id === targetId) {
              section.classList.add('active');
          }
      });
  });
});


function toggleMode() {
  const body = document.body;
  const modeText = document.getElementById('modeText');
  const modeIcon = document.getElementById('modeIcon');
  
  // Toggle dark mode class
  body.classList.toggle('dark-mode');
  
  // Update button text and icon based on current mode
  if (body.classList.contains('dark-mode')) {
      modeText.textContent = 'Light Mode';
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun');
  } else {
      modeText.textContent = 'Dark Mode';
      modeIcon.classList.remove('fa-sun');
      modeIcon.classList.add('fa-moon');
  }
}
