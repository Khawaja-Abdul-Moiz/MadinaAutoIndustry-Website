const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

if (sidebar) {
    const sidebarBrand = document.createElement('a');
    sidebarBrand.className = 'sidebar-brand';
    sidebarBrand.href = 'index.html';
    sidebarBrand.setAttribute('aria-label', 'Madina Auto Industries home');
    sidebarBrand.innerHTML = '<img src="madina-logo.png" alt="Madina Auto Industries">';
    sidebar.prepend(sidebarBrand);
}

sidebarToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.classList.remove('active');
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Debounce resize to prevent flickering
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth <= 465 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }, 100);
});
