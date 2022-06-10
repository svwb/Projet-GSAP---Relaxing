const tl = gsap.timeline();

tl.from('.letter',{
    duration:1,
    opacity:0,
    stagger:0.25,
    color: '#fff'
});

tl.to('.letter',{
    duration:0.5,
    y:'20%',
    opacity:0,
    stagger: {
        each:0.15,
        from:'end'}
});

tl.to('.material-icons',{
    opacity:1
})

tl.to('.material-icons',{
    // repeat:-1,
    // y:5,
    // ease:"bounce",
    // delay:.5
    duration:.6,
    y:5,
    ease:"circ.in",
    repeat:-1,
    yoyo:true
})
