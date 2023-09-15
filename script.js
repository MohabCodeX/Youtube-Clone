document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.querySelector('body');
    const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');
  
    darkModeButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      darkModeStylesheet.toggleAttribute('disabled');
    });
  });
  