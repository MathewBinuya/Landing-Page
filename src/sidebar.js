function ShowSideBar() {
  const showSideBar = document.querySelector('.mobile-nav');
  showSideBar.style.display = 'block';
}

function HideSideBar() {
  const showSideBar = document.querySelector('.mobile-nav');
  showSideBar.style.display = 'none';
}


const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) { 
    mobileNav.style.display = 'none';
  }

  if (window.innerWidth > 1024) {
    mobileNav.style.display = 'none';
  }

});
