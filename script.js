
function marqueAnimation() {
    // Keep track of scroll direction
    let scrollDirection = 0;

    // Add infinite scrolling to the marque
    gsap.set(".marque", { xPercent: (index) => index * 100 });

    // Scrolling animations
    const forwardAnimation = gsap.to(".marque", {
        xPercent: "+=100", // Move right by 100% of each marque
        duration: 5,
        ease: "none",
        repeat: -1,
        modifiers: {
            xPercent: gsap.utils.wrap(-100, 0), // Infinite looping
        },
        
    });

    const backwardAnimation = gsap.to(".marque", {
        xPercent: "-=100", // Move right by 100% of each marque
        duration: 5,
        ease: "none",
        repeat: -1,
        modifiers: {
            xPercent: gsap.utils.wrap(-100, 0), // Infinite looping
        },
        paused: true,
        
    });

    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0 && scrollDirection !== 1) {
            // Scrolling down
            backwardAnimation.play();
            forwardAnimation.pause();
            scrollDirection = 1;

            // Rotate arrows
            gsap.to(".marque img", {
                rotate: 180,
                duration: 0.5,
                ease: "power1.out",
            });
        } else if (dets.deltaY < 0 && scrollDirection !== -1) {
            // Scrolling up
            forwardAnimation.play();
            backwardAnimation.pause();
            scrollDirection = -1;

            // Reset arrow rotation
            gsap.to(".marque img", {
                rotate: 0,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    });
}

marqueAnimation();
