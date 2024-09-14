var splide = new Splide('.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination: false, 
    autoplay: true, 
    interval: 3000,
    pauseOnHover: true,
    gap: '20px',
} );

splide.mount();