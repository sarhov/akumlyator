$(document).ready(function() {
    console.log('I\'m ready!')

    jQuery(function() {
        jQuery('#camera_wrap').camera({
            fx: 'stampede',
            navigation: false,
            playPause: false,
            thumbnails: false,
            barPosition: 'top',
            loader: false,
            time: 3000,
            transPeriod: 800,
            alignment: 'center',
            autoAdvance: true,
            mobileAutoAdvance: true,
            barDirection: 'leftToRight',
            barPosition: 'bottom',
            easing: 'easeInOutExpo',
            fx: 'simpleFade',
            height: '42.57%',
            minHeight: '90px',
            hover: true,
            pagination: true,
            loaderColor: '#1f1f1f',
            loaderBgColor: 'transparent',
            loaderOpacity: 1,
            loaderPadding: 0,
            loaderStroke: 3
        });
    });
    $('.js-openSubMenu').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
        $(this).next('ul').slideToggle(400);
        $(this).parent('li').toggleClass('is-active');
    });
});