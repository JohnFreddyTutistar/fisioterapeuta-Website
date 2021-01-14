window.addEventListener('load', function(){
    new Glider(document.querySelector('.services-cont'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    });
});