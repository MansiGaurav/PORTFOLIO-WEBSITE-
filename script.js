let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetTop;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links. classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']'). classList.add('active');
      });
    };
  });  
  /*===========Sticky navbar=====*/

  let header = document.querySelector(header);
  header.classList.toggle('sticky', window.scrollY > 100);
};
