const toggleBtn = document.getElementById('theme-toggle');

// Restore saved theme (if any)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️ Theme';
}

// Callback executed when the "click" event fires
function switchTheme() {
  const isDark = document.body.classList.toggle('dark'); // DOM mutation
  toggleBtn.textContent = isDark ? '☀️ Theme' : '🌙 Theme';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

toggleBtn.addEventListener('click', switchTheme);
