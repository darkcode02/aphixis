document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
    function setTheme(theme) {
      document.body.classList.toggle('dark-theme', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  
    // Inicializar tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      themeToggle.checked = savedTheme === 'dark';
    } else if (prefersDarkScheme.matches) {
      setTheme('dark');
      themeToggle.checked = true;
    }
  
    themeToggle.addEventListener('change', () => {
      setTheme(themeToggle.checked ? 'dark' : 'light');
    });
  });