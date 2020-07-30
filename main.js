const path = {
    curviness: 1.85,
    autoRotate: true,
    values: [
        {x: 150, y: -30},
        {x: 300, y: 30},
        {x: 500, y: -30},
        {x: 750, y: 40},
        {x: 650, y: -40},
        {x: 675, y: 50},
        {x: innerWidth, y: 250}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.whale', 1, {
        bezier: path,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000, 
    triggerHook: 0
})
    .setTween(tween)
    .setPin('.animation')
    .addTo(controller);
