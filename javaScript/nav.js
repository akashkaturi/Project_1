const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
        //burger animation
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // k = index / 9 + 1;
                link.style.animation = `navLinkFade 1s ease forwards ${index/9}s`;
                // console.log(index / 7);
                // console.log(`this is ${index} value`);
            }
        });
    });
};
navSlide();
