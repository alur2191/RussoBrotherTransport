
const jumboTl = gsap.timeline();

jumboTl.from(".navbar", { duration: 0.8, opacity: 0, ease: "power1.out" },"+=0.5")
    .from(".nav-link-left", { duration: 0.7, opacity: 0, stagger: -0.25, x: 20, ease: "power1.out" })
    .from(".nav-link-right", { duration: 0.7, opacity: 0, stagger: 0.25, x: -20, ease: "power1.out" },"-=1.25")
    .from("#rate-form", { duration: 0.8, opacity: 0, ease: "power1.out" }, '-=1');



// Solutions

const solutionsTl = gsap.timeline();
solutionsTl.from(".solutions", { duration: 0.7, opacity: 0, ease: "power1.out" })
    .from(".card-custom", { duration: 0.7, opacity: 0, stagger: 0.25, y: -20, ease: "power1.out" }, '-=0.7');

const solutionsCtrl = new ScrollMagic.Controller();
const solutionsScene = new ScrollMagic.Scene({
    triggerElement: "#solutions"
})
    .setTween(solutionsTl)
    .addTo(solutionsCtrl)


// Industries

const industriesTl = gsap.timeline();

let itm = document.querySelectorAll('#industry-items li')

industriesTl.from(".industries-content-div", { duration: 0.7, opacity: 0, ease: "power1.out" })
    .from("#industry-img", { duration: 0.7, opacity: 0, ease: "power1.out" },'-=0.5')
    .from(itm, { duration: 0.7, opacity: 0, stagger: 0.15, y: -20, ease: "power1.out" }, '-=0.7');


const industriesCtrl = new ScrollMagic.Controller();
const industriesScene = new ScrollMagic.Scene({
    triggerElement: "#industries"
})
    .setTween(industriesTl)
    .addTo(industriesCtrl)

// About

const aboutTl = gsap.timeline();

aboutTl.from("#about-img", { duration: 0.7, opacity: 0, y:-10, ease: "power1.out" })
    .from("#about-text", { duration: 0.7, opacity: 0, y:-10, ease: "power1.out" }, '-=0.7');

const aboutCtrl = new ScrollMagic.Controller();
const aboutScene = new ScrollMagic.Scene({
    triggerElement: "#about"
})
    .setTween(aboutTl)
    .addTo(aboutCtrl)

// Career

const careerTl = gsap.timeline();

careerTl.from(".hire-left", { duration: 0.7, opacity: 0, y:-10, ease: "power1.out" })
    .from(".hire-driver", { duration: 0.7, opacity: 0, y:-10, ease: "power1.out" }, '-=0.3')
    .from(".hire-office", { duration: 0.7, opacity: 0, y:-10, ease: "power1.out" })
    .from(".content-office", { duration: 0.7, opacity: 0, y:-10, ease: "power1.out" }, '-=0.3');

const careerCtrl = new ScrollMagic.Controller();
const careerScene = new ScrollMagic.Scene({
    triggerElement: "#career"
})
    .setTween(careerTl)
    .addTo(careerCtrl)




// Contacts

const contactsTl = gsap.timeline();

contactsTl.from("#contacts", { duration: 0.7, opacity: 0, ease: "power1.out" });

const contactsCtrl = new ScrollMagic.Controller();
const contactsScene = new ScrollMagic.Scene({
    triggerElement: "#contacts"
})
    .setTween(contactsTl)
    .addTo(contactsCtrl)
