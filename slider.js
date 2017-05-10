var sliderWidth = $('#slider').width();
var slidesCount = $('.slide').length;
var currentSlide = 1;


$('#slideContainer').css('width', (slidesCount * 100) + '%');
$('.slide').css('width', sliderWidth);



function goToSlide(n) {
    $('#slideContainer').animate({
        left: -(n-1) * sliderWidth
    }, 400, function() {
        currentSlide = n;
        sliderMoving = false;
    });
}

var bullets = '';
for( var i = 1; i <= slidesCount; i++){
  bullets += '<div></div>';
  $('.bullets').append('<div></div>');
}
$('.bullets div').on('click', function(){
  goToSlide($(this).index()+1);
})

$('.nav').on('click', function() {
    if ( $(this).hasClass('nav-left') ) {
        if ( currentSlide == 1 ) {
            return;
        }
        goToSlide(currentSlide - 1);
    }
    else {
        if ( currentSlide >= slidesCount ) {
            return;
        }
        goToSlide(currentSlide + 1);
    }
    });


