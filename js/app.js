$(function(){
    console.log(123);
    $('#js-show-btn').on('click', function(){
        $('#js-target-element').fadeIn(500);
    });
    $('#js-hide-btn').on('click', function(){
        $('#js-target-element').fadeOut(500);
    });

});
