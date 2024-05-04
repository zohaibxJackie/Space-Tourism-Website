var techbtn01 = document.querySelector('.section-01 .techbtn1');
var techbtn02 = document.querySelector('.section-01 .techbtn2');
var techbtn03 = document.querySelector('.section-01 .techbtn3');
var clickedButton;
var vehiclename1 = document.querySelector('.vehiclename');
var vehicledetail1 = document.querySelector('.vehicledetail');
var capsuleimg1 = document.querySelector('.section-03');

function techContantChange1(button) {
    vehiclename1.innerHTML = 'Launch vehicle';
    vehicledetail1.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    capsuleimg1.style.background = "url('./assets/technology/image-launch-vehicle-portrait.jpg')";
    capsuleimg1.style.backgroundPosition = 'center';
    capsuleimg1.style.backgroundRepeat = 'no-repeat';
    capsuleimg1.style.backgroundSize = 'cover';

    techbtn01.classList.remove('white-bg');
    techbtn02.classList.remove('white-bg');
    techbtn03.classList.remove('white-bg');

    button.classList.add('white-bg');
    clickedButton = button;
}

function techContantChange2(button) {
    vehiclename1.innerHTML = 'Spaceport';
    vehicledetail1.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    capsuleimg1.style.background = "url('./assets/technology/image-spaceport-portrait.jpg')";
    capsuleimg1.style.backgroundPosition = 'center';
    capsuleimg1.style.backgroundRepeat = 'no-repeat';
    capsuleimg1.style.backgroundSize = 'cover';

    techbtn01.classList.remove('white-bg');
    techbtn02.classList.remove('white-bg');
    techbtn03.classList.remove('white-bg');

    button.classList.add('white-bg');
    clickedButton = button;
}

function techContantChange3(button) {
    vehiclename1.innerHTML = 'Space capsule';
    vehicledetail1.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    capsuleimg1.style.background = "url('./assets/technology/image-space-capsule-portrait.jpg')";
    capsuleimg1.style.backgroundPosition = 'center';
    capsuleimg1.style.backgroundRepeat = 'no-repeat';
    capsuleimg1.style.backgroundSize = 'cover';

    techbtn01.classList.remove('white-bg');
    techbtn02.classList.remove('white-bg');
    techbtn03.classList.remove('white-bg');

    button.classList.add('white-bg');
    clickedButton = button;
}

techbtn01.addEventListener('click', () => {
    techContantChange1(techbtn01);
})

techbtn02.addEventListener('click', () => {
    techContantChange2(techbtn02);
})

techbtn03.addEventListener('click', () => {
    techContantChange3(techbtn03);
})
