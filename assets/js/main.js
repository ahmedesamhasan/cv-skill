const navbarCollapse = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const collapseInstance = window.bootstrap.Collapse.getInstance(navbarCollapse);

    if (collapseInstance) {
      collapseInstance.hide();
    }
  });
});

const sections = document.querySelectorAll('main section[id]');

function setActiveLink() {
  const scrollPosition = window.scrollY + 140;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (!currentLink) {
      return;
    }

    const isActive = scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
    currentLink.classList.toggle('active', isActive);
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
