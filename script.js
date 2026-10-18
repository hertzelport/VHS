function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}


function setTheme(theme) {
  localStorage.setItem('vhs-theme', theme);
  

  if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
  } else {
      document.documentElement.setAttribute('data-theme', theme);
  }

  document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.theme === theme) {
          btn.classList.add('active');
      }
  });
}


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('vhs-theme') || 'dark';
    setTheme(savedTheme);
});
