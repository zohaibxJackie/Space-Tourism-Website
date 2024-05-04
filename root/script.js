document.addEventListener('DOMContentLoaded', function () {
  const primaryNav = document.querySelector('.primary-nav');
  const navBtn = document.querySelector('.nav-btn');

  const activePage = window.location.pathname;

  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(navLink => {
    const hrefValue = navLink.getAttribute('href');

    // Check if the activePage contains the hrefValue or vice versa
    if (activePage.includes(hrefValue) || hrefValue.includes(activePage)) {
      const parentLi = navLink.parentElement; // Get the parent <li> element
      if (parentLi) {
        // The old technique i used has a problem, on hover on the li, the white border is applied but it also applies the hover. which kind of look weird.
        // parentLi.classList.add('underline-indicators');
        parentLi.style.borderBottom = '2px solid white';
      }
    }
  });

  navBtn.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', 'true');
      navBtn.setAttribute('aria-expanded', 'true');
    } else {
      primaryNav.setAttribute('data-visible', 'false');
      navBtn.setAttribute('aria-expanded', 'false');
    }
  })

  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  var dot01 = document.querySelector('.dot-01')
  var dot02 = document.querySelector('.dot-02')
  var dot03 = document.querySelector('.dot-03')
  var dot04 = document.querySelector('.dot-04')

  var rank = document.querySelector('.change-content-01')
  var names = document.querySelector('.change-content-02')
  var description = document.querySelector('.change-content-03')
  var image = document.querySelector('.change-content-04')


  function changeContent1() {
    rank.innerHTML = 'Commander';
    names.innerHTML = 'Douglas Hurley';
    description.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    image.setAttribute('src', './assets/crew/image-douglas-hurley.png')
    if (window.screen.width > 768) {
      image.style.width = '21em';
    }
    dot01.style.opacity = '1'
    dot02.style.opacity = '0.5'
    dot03.style.opacity = '0.5'
    dot04.style.opacity = '0.5'
  }


  function changeContent2() {
    rank.innerHTML = 'Flight Engineer';
    names.innerHTML = 'Anousheh Ansari';
    description.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    image.setAttribute('src', './assets/crew/image-anousheh-ansari.png')
    if (window.screen.width > 768) {
      image.style.width = '25em'
    }
    dot01.style.opacity = '0.5'
    dot02.style.opacity = '1'
    dot03.style.opacity = '0.5'
    dot04.style.opacity = '0.5'
  }

  function changeContent3() {
    rank.innerHTML = 'Pilot';
    names.innerHTML = 'Victor Glover';
    description.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    image.setAttribute('src', './assets/crew/image-victor-glover.png')
    if (window.screen.width > 768) {
      image.style.width = '25em'
    }
    dot01.style.opacity = '0.5'
    dot02.style.opacity = '0.5'
    dot03.style.opacity = '1'
    dot04.style.opacity = '0.5'
  }

  function changeContent4() {
    rank.innerHTML = 'Mission Specialist';
    names.innerHTML = 'Mark Shuttleworth';
    description.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    image.setAttribute('src', './assets/crew/image-mark-shuttleworth.png')
    if (window.screen.width > 768) {
      image.style.width = '20em'
    }
    dot01.style.opacity = '0.5'
    dot02.style.opacity = '0.5'
    dot03.style.opacity = '0.5'
    dot04.style.opacity = '1'
  }

  dot01.addEventListener('click', () => {
    changeContent1();
  })

  dot02.addEventListener('click', () => {
    changeContent2();
  })

  dot03.addEventListener('click', () => {
    changeContent3();
  })

  dot04.addEventListener('click', () => {
    changeContent4();
  })
});


const btn1 = document.querySelector('.des-btn-1');
const btn2 = document.querySelector('.des-btn-2');
const btn3 = document.querySelector('.des-btn-3');
const btn4 = document.querySelector('.des-btn-4');

const des_p = document.querySelector('.des-planet');
const des_d = document.querySelector('.des-description');
const des_dis = document.querySelector('.des-distance');
const des_t = document.querySelector('.des-time');
const des_img = document.querySelector('.des-hero-img');

function addClass(currentElement) {
  btn1.classList.remove('underline-indicator');
  btn2.classList.remove('underline-indicator');
  btn3.classList.remove('underline-indicator');
  btn4.classList.remove('underline-indicator');

  currentElement.classList.add('underline-indicator');
}

btn1.addEventListener('click', function () {
  des_p.innerHTML = 'MOON';
  des_d.innerHTML = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
  des_dis.innerHTML = '384,400 km';
  des_t.innerHTML = '3 DAYS';
  des_img.setAttribute('src', './assets/destination/image-moon.png');
})

btn2.addEventListener('click', function () {
  des_p.innerHTML = 'MARS';
  des_d.innerHTML = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
  des_dis.innerHTML = '255 MIL. KM';
  des_t.innerHTML = '9 months';
  des_img.setAttribute('src', './assets/destination/image-mars.png');
})

btn3.addEventListener('click', function () {
  des_p.innerHTML = 'EUROPA';
  des_d.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  des_dis.innerHTML = '628 MIL. KM';
  des_t.innerHTML = '3 YEARS';
  des_img.setAttribute('src', './assets/destination/image-europa.png');

})

btn4.addEventListener('click', function () {
  des_p.innerHTML = 'TITAN';
  des_d.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  des_dis.innerHTML = '1.6 MIL. KM';
  des_t.innerHTML = '7 YEARS';
  des_img.setAttribute('src', './assets/destination/image-titan.png');
})